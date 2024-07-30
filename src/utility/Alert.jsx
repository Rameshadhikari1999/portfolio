import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const Alert = ({ alert, message, handleClose }) => {

    useEffect(() => {
      setTimeout(() => {
        handleClose();
      }, 10000);
    }, [alert]);
  return (
    <>
      {alert && (
        <div className={`fixed top-12 md:top-24 right-0 w-full md:w-1/2 bg-primary p-3 rounded capitalize z-50 overflow-x-hidden flex items-center justify-between ${message.type === "error" ? "text-red-400" : "text-green-500"}`}>
          <p className="">{message.message}</p>
          <IoMdClose className="cursor-pointer text-red-400" onClick={handleClose}/>
        </div>
      )}
    </>
  );
};

export default Alert;
