import React from "react";


function Information() {
 const handleClick = () => {
     <Link to='/Register Now'>Registration Form Page</Link>
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
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

        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Join developers, designers, and entrepreneurs for a day of innovation
          and networking.
        </p>
        <button onClick={handleClick}>Register</button>

      </div>
    </div>
  );
}

export default Information;