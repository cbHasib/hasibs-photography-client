import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="h-full w-full flex justify-center items-center text-4xl font-medium text-red-700">
      <h2>{error}</h2>
    </div>
  );
};

export default ErrorMessage;
