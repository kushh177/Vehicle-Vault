import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Clock, Reply, Home, Trash2 } from "lucide-react";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("adminMessages")) || [];
    setMessages(storedMessages);
  }, []);

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem("adminMessages", JSON.stringify(updatedMessages));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      {/* Home Button */}
      <Link 
        to="/admin" 
        className="flex items-center gap-2 bg-black bg-opacity-40 backdrop-blur-md px-4 py-3 rounded-xl border border-cyan-500 border-opacity-30 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 w-max"
      >
        <Home className="w-5 h-5" /> Home
      </Link>

      {/* Messages Section */}
      <h2 className="text-4xl font-bold text-center mb-8 mt-6 flex items-center justify-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        <MessageCircle className="w-7 h-7 text-cyan-400" /> Messages
      </h2>

      <div className="w-full max-w-3xl mx-auto space-y-4">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-black bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500 border-opacity-30 shadow-lg hover:border-opacity-60 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{msg.name}</h3>
                  <p className="text-cyan-200 text-sm">{msg.email}</p>
                  <p className="text-gray-300 mt-2">{msg.message}</p>
                  <div className="flex items-center gap-2 text-cyan-200 text-sm mt-3">
                    <Clock className="w-4 h-4" />
                    {msg.time}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 hover:shadow-cyan-500/30 transition-all duration-300"
                    onClick={() => window.location.href = `mailto:${msg.email}?subject=Reply to your message&body=Hi ${msg.name},`}
                  >
                    <Reply className="w-5 h-5" /> Reply
                  </button>

                  <button
                    onClick={() => deleteMessage(msg.id)}
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 hover:shadow-red-500/30 transition-all duration-300"
                  >
                    <Trash2 className="w-5 h-5" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-cyan-200 text-center bg-black bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500 border-opacity-30">
            No messages yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Messages;