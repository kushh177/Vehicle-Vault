import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

export const Razorpay = ({ amount, onPaymentSuccess }) => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePaymentSuccess = async (response) => {

    const paymentData = {
      name: "Yash", // You should replace this with dynamic data from form/context
      email: "patelkush2023@gmail.com",
      phone: "6358111222",
      amount: amount,
      paymentId: response.razorpay_payment_id,
    };
  
    try {
      // Save to local storage
      localStorage.setItem("paymentInfo", JSON.stringify(paymentData));
  
      // Send to backend
      await axios.post("http://localhost:3000/api/payment", paymentData);
  
      toast.success("Payment recorded and saved locally!");
    } catch (error) {
      console.error("Error saving payment:", error);
      toast.error("Failed to record payment.");
    }
  };  
  
  const handleCreateOrder = async () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount first");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/payment/create_order",
        {
          amount: amount,
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
        }
      );

      // Add validation for response data
      if (!response.data || !response.data.id) {
        throw new Error("Invalid order data received from server");
      }
      
      displayRazorpay(response.data);
    } catch (error) {
      console.error("Order creation failed:", error);
      alert(`Failed to create payment order: ${error.message}`);
    }
  };

  const displayRazorpay = async (orderData) => {
    try {
      // Validate orderData structure
      if (!orderData || !orderData.id || !orderData.amount || !orderData.currency) {
        throw new Error("Invalid order data structure");
      }

      const isScriptLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      
      if (!isScriptLoaded) {
        throw new Error("Razorpay SDK failed to load");
      }

      const options = {
        key: "rzp_test_26QypB3rHZrlZL", // Use your test key
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Auto Vault",
        description: "Payment for Deposit",
        order_id: orderData.id,
        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              "http://localhost:3000/payment/verify_order",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }
            );
        
            if (verifyRes.data.status === "success") {
              alert("Payment successful!");
        
              // ✅ Call your custom function to save locally & post to backend
              await handlePaymentSuccess(response);
        
              // ✅ Also trigger parent success handler
              onPaymentSuccess(amount);
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.error("Verification error:", error);
            alert("Payment verification error. Check console for details.");
          }
        },        
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
        notes: {
          internal_reference: "deposit_payment"
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        alert(`Payment failed: ${response.error.description}`);
      });
      paymentObject.open();
    } catch (error) {
      console.error("Payment initialization error:", error);
      alert(`Payment initialization failed: ${error.message}`);
    }
  };

  return (
    <button 
      onClick={handleCreateOrder} 
    >
      Pay ₹{amount} with Razorpay
    </button>
  );
};