import React from "react";

const SpinLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
    </div>
  );
};

export default SpinLoading;
