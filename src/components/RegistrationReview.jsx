import React from "react";
import { Link } from "react-router-dom";

function RegistrationReview() {

  const data = JSON.parse(localStorage.getItem("registrationData"));

  if (!data) {
    return <p>No registration found</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-800">
          Review Your Registration
        </h2>

        <div className="space-y-3 mb-6 text-gray-700">
          <p><strong>Name:</strong> {data.fullName}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phoneNumber}</p>
          <p><strong>Organization:</strong> {data.organization}</p>
          <p><strong>Ticket:</strong> {data.ticket}</p>
          <p><strong>Dietary:</strong> {data.dietary}</p>
          <p><strong>Notes:</strong> {data.comments}</p>
        </div>

        <div className="flex justify-between">
          <Link to="/register">
            <button className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition">
              Edit
            </button>
          </Link>

          <Link to="/confirmation">
            <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Confirm
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationReview;