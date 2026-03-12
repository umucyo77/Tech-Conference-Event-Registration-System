import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Information from './components/Information.jsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm.jsx'
import RegistrationReview from './components/RegistrationReview.jsx'
import Confirmation from './components/Confirmation.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Information />}> </Route>
          <Route path='/register' element={<RegistrationForm />}>Registration FOrm</Route>
          <Route path='/review' element={<RegistrationReview />}></Route>
           <Route path='/confirmation' element={<Confirmation />}></Route>
          {/*<Route path="/my-registration" element={<MyRegistration />} ></Route> */}
        </Routes>
      </BrowserRouter>   

    </>
  )
}

export default App
