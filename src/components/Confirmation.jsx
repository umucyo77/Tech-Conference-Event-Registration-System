import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {

  const data = JSON.parse(localStorage.getItem("registrationData"));

  localStorage.setItem("savedRegistration", JSON.stringify(data));

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="max-w-md w-full text-center bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Registration Successful!
        </h1>

        <p className="mb-6 text-gray-700">Your seat has been reserved.</p>

        <Link to="/my-registration">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow">
            View My Registration
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;