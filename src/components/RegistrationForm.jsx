import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
 const[fullName,setFullName]=useState("")
    const[email,setEmail]=useState("")
    const[phoneNumber,setPhoneNumber]=useState("")
    const[organization,setOrganization]=useState("")
    const[ticket,setticket]=useState("")
    const[dietary,setDietary]=useState("")
    const[comments,setComments]=useState("")

const formData={fullName, email, phoneNumber, organization, ticket,dietary, comments}
  const handleChange = (e) => {
    
      FormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
  }
  const saveData = () => {
    
    localStorage.setItem("registrationData", JSON.stringify(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white to-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8">
        <form action="" onSubmit={handleChange}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-800">
          Event Registration
        </h2>

        {/* first row grid for name/email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              name="fullName"
              placeholder="John Doe"
             value={fullName}
                 onChange={(e)=>setFullName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              name="email"
              placeholder="you@example.com"
             value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* second row grid for phone/organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              name="phoneNumber"
              placeholder="(+250) 78x-xxx-xxx"
             value={phoneNumber}
             onChange={(e)=>setPhoneNumber(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
              Organization
            </label>
            <input
              id="organization"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              name="organization"
              placeholder="Your company or school"
             value={organization}
             onChange={(e)=>setOrganization(e.target.value)}
            
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="ticket" className="block text-sm font-medium text-gray-700 mb-1">
            Ticket Type
          </label>
          <select
            id="ticket"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
            name="ticket"
            value={ticket}
            onChange={(e)=>setticket(e.target.value)}
          >
            <option value="">Select a ticket</option>
            <option>Standard</option>
            <option>VIP</option>
            <option>Student</option>
          </select>
        </div>

        <div className="mt-4">
          <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-1">
            Dietary Requirements
          </label>
          <input
            id="dietary"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
            name="dietary"
            placeholder="e.g. vegetarian, gluten-free"
           value={dietary}
           onChange={(e)=>setDietary(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            id="comments"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-6"
            name="comments"
            placeholder="Anything else we should know"
           value={comments}
           onChange={(e)=>setComments(e.target.value)}
          />
        </div>

        <div className="text-right">
          <Link to="/review">
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={saveData}
            >
              Register
            </button>
          </Link>
          
        </div>
        </form>
      </div>
    </div>
  );
}

export default Register;