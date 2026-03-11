import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Information from './components/Information.jsx'
import RegistrationForm from './components/RegistrationForm.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Information />
    <RegistrationForm />
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Information />}> </Route>
          <Route path='/Register Now' element={<RegistrationForm />}>Registration Form Page</Route>
          {/* <Route path='/Register ok' element={<RegistrationReview />}>REgistration Review Page</Route>
          <Route path='/confirm your registration' element={<Confirmation />}>Registration Confirmation Page</Route>
          <Route path='/Go back and edit your information' element={<RegistrationForm />}></Route> */}
        </Routes>
      </BrowserRouter>   

    </>
  )
}

export default App
