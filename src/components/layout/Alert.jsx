import React, { useState } from "react";
import { AlertCircle, XCircle } from "lucide-react";

const initialAlerts = [
  { id: 1, message: "🚗 Stock Alert: Limited cars available, book now!", type: "warning" },
  { id: 2, message: "🎉 Offer: ₹10,000 discount on Hyundai Creta!", type: "success" },
  { id: 3, message: "⏳ Test Drive Alert: Book before the weekend rush!", type: "info" },
  { id: 4, message: "🔥 Special Edition: Kia Seltos variant now available!", type: "primary" },
  { id: 5, message: "📅 Service Reminder: Your car's free service is due next month!", type: "reminder" },
];

const Alert = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  const handleClose = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10 px-6">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        <AlertCircle className="w-7 h-7 text-red-400" /> Alerts
      </h2>

      <div className="w-full max-w-2xl space-y-4">
        {alerts.map(alert => (
          <div
            key={alert.id}
            className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-md border border-cyan-500/30 flex justify-between items-center transition hover:shadow-cyan-500/50"
          >
            {/* Alert Message */}
            <p className="text-gray-300">{alert.message}</p>

            {/* Close Button */}
            <button onClick={() => handleClose(alert.id)} className="text-red-400 hover:text-red-500 transition">
              <XCircle className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alert;
