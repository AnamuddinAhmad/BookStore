import React from "react";
import Login from "./app/Auth/Login";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-4 py-4">
      <div className="text-3xl p-4 font-bold underline w-full  bg-[#CDF3E2] rounded-md  shadow-emerald-700 shadow-md  border-2 border-emerald-500 flex justify-between items-center">
        <h1 className="text-emerald-700">Book Store!</h1>
       
      <Login />
      </div>
    </div>
  );
};

export default App;
