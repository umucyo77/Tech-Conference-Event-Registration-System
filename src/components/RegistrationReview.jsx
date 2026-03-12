import React from "react";
import { Link } from "react-router-dom";

function RegistrationReview() {

  const data = JSON.parse(localStorage.getItem("registrationData"));

  // Check if data exists
 
    <div>
      <h2>Review Your Registration</h2>

      <p>Name: {data.fullName}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phoneNumber}</p>
      <p>Organization: {data.organization}</p>
      <p>Ticket: {data.ticket}</p>
      <p>Dietary: {data.dietary}</p>
      <p>Notes: {data.comments}</p>

      <Link to="/register">
        <button>Edit</button>
      </Link>

      <Link to="/confirmation">
        <button>Confirm</button>
      </Link>
    </div>
 
}

export default RegistrationReview;