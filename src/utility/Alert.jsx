/* Alert.jsx */
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Alert = ({ alert, message, handleClose }) => {
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert, handleClose]);

  if (!alert) return null;

  const isError = message.type === "error";

  return (
    <div className="fixed top-24 right-6 left-6 md:left-auto md:w-[400px] z-[100] animate-in fade-in slide-in-from-right-8 duration-300">
      <div className={`glass-card p-4 flex items-center gap-4 border-l-4 ${isError ? "border-red-500" : "border-accent shadow-accent/20"}`}>
        <div className={isError ? "text-red-500" : "text-accent"}>
          {isError ? <FaExclamationCircle size={20} /> : <FaCheckCircle size={20} />}
        </div>
        <div className="flex-1">
          <p className="text-white font-medium text-sm leading-tight">
            {isError ? "Error" : "Success"}
          </p>
          <p className="text-gray-400 text-xs mt-1">
            {message.message}
          </p>
        </div>
        <button 
          onClick={handleClose}
          className="p-1 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
        >
          <IoMdClose size={18} />
        </button>
      </div>
    </div>
  );
};

export default Alert;
