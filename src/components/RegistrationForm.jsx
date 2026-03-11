import React from "react";
import { useState } from "react";
const RegistrationForm =()=>{

    const[fullName,setFullName]=useState("")
    const[email,setEmail]=useState("")
    const[phoneNumber,setPhoneNumber]=useState("")
    const [organization,setOrganization]=useState("")
    const[ticket,setticket]=useState("")
    const [dietary,setDietary]=useState("")
    const[comments,setComments]=useState("")
   

    
    const submitForm=((e)=>{
       
        
    });

    return(
        <div >
            <form onSubmit={submitForm}>
               
                 <input 
                 type="text" 
                 placeholder="Enter your Name"
                 value={fullName}
                 onChange={(e)=>setFullName(e.target.value)}

                  />
                   <input 
                type="email"
                placeholder="Enter your Email"
                value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 />
                  <input 
                  type="tel" 
                  placeholder="Enter your Phone number"
                  value={phoneNumber}
                 onChange={(e)=>setPhoneNumber(e.target.value)}
                   />
                    <input 
                type="text"
                placeholder="Enter your Institution Name"
                value={organization}
                 onChange={(e)=>setOrganization(e.target.value)}
                 />

                    <input 
                type="text"
                placeholder="Enter your ticket"
                value={ticket}
                 onChange={(e)=>setticket(e.target.value)}
                 />

                    <input 
                type="text"
                placeholder="Enter your Dietary"
                value={dietary}
                 onChange={(e)=>setDietary(e.target.value)}
                 />

                    <input 
                type="text"
                placeholder="Enter your Notes"
                value={comments}
                 onChange={(e)=>setComments(e.target.value)}
                 />
                  <input className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-sky-900"
                   type="submit" 
                   value="Register"

                   />
            </form>
        </div>
    )

}
export default RegistrationForm;