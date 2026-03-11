import React from "react";
import { Link } from "react-router-dom";

function Information() {
  return (
    <div className="max-w-4xl mx-auto text-center bg-white rounded-lg shadow-lg p-6 md:p-12">

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
        Tech Innovation Conference
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mb-2">
        Date: July 25, 2026
      </p>

      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Location: Kigali Convention Centre
      </p>

      <p className="text-base md:text-lg text-gray-700 mb-4">
        A technology organization is hosting an annual Tech Innovation Conference
        that brings together developers, designers, entrepreneurs, and technology enthusiasts.
      </p>

      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Join developers, designers, and entrepreneurs for a day of innovation
        and networking.
      </p>

      <Link to="/register">
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-sky-900">
          Register Now
        </button>
      </Link>

    </div>
  );
}

export default Information;