import React from "react";

const TestDrive = () => {
    return (
        <div 
            className="min-h-screen flex items-center justify-center overflow-hidden relative bg-cover bg-center"
            style={{
                backgroundImage: "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWl6bjJmanhreHM2ejEyejdqd2hhOTd4czE0b2Z5MDFxMHg0ejF5byZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/sS8SDFO4r9qWDL6BM1/giphy.gif')",
            }}
        >
            {/* Heading */}
            <div className="absolute top-12 text-center">
                <h1 className="text-4xl font-bold text-white bg-black/50 px-6 py-3 rounded-lg shadow-lg">
                    Test Drive Booked At Your Location 🚗✅
                </h1>
            </div>

            {/* Tailwind CSS Animations */}
            <style>
                {`
                    /* Car Movement */
                    @keyframes carMove {
                        0% { transform: translateX(-100px); }
                        100% { transform: translateX(100vw); }
                    }
                    .animate-car {
                        animation: carMove 4s linear infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default TestDrive;
