import React from "react";

function MyRegistration(){

    const data = JSON.parse(localStorage.getItem("savedRegistration"));

    if(!data){
        return <p>No registration found.</p>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-800">
          You Have Already Registered
        </h2>

        <div className="space-y-3 text-gray-700">
          <p><strong>Name:</strong> {data.fullName}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Ticket:</strong> {data.ticket}</p>
          <p><strong>Notes:</strong> {data.comments}</p>
        </div>
      </div>
    </div>
    );
}

export default MyRegistration;