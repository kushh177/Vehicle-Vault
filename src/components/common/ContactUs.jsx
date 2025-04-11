import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    // Store message in localStorage
    const storedMessages = JSON.parse(localStorage.getItem("adminMessages")) || [];
    localStorage.setItem("adminMessages", JSON.stringify([...storedMessages, newMessage]));

    // Send automatic reply to the user's email
    sendAutoReply(newMessage.email, newMessage.name);

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  const sendAutoReply = (userEmail, userName) => {
    const templateParams = {
      to_email: userEmail,
      to_name: userName,
      from_name: "Auto Vault",
      reply_to: userEmail,
      message: `Hi ${userName},\n\nThank you for reaching out to us! We have received your message and will get back to you shortly.\n\nBest regards,\nAuto Vault`,
    };

    emailjs
      .send("service_womuzot", "template_nm834ib", templateParams, "bf_ahlzCZ4oo3HlxE")
      .then((response) => {
        console.log("Auto-reply sent successfully to:", userEmail, response);
      })
      .catch((error) => {
        console.error("Failed to send auto-reply to:", userEmail, error);
      });
  };

  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex flex-col justify-center items-center px-4">
      <div className="container mx-auto">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-cyan-500/30 max-w-xl mx-auto transform transition duration-300 hover:shadow-cyan-500/50">
          <h2 className="text-3xl font-bold text-white mb-4 text-center animate-pulse">Contact Us</h2>
          <p className="text-gray-400 text-center mb-6">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cyan-400">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="mt-1 block w-full p-3 bg-gray-800 text-white rounded-lg border border-cyan-500/50 focus:ring-2 focus:ring-cyan-400 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cyan-400">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="mt-1 block w-full p-3 bg-gray-800 text-white rounded-lg border border-cyan-500/50 focus:ring-2 focus:ring-cyan-400 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cyan-400">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Enter your message"
                className="mt-1 block w-full p-3 bg-gray-800 text-white rounded-lg border border-cyan-500/50 focus:ring-2 focus:ring-cyan-400 outline-none"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 text-lg font-bold text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;