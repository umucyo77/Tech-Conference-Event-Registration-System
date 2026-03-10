import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EventInformation />}>Event Information Page</Route>
          <Route path='/Register Now' element={<RegistrationForm />}>Registration Form Page</Route>
          <Route path='/Register' element={<RegistrationReview />}>REgistration Review Page</Route>
          <Route path='/confirm your registration' element={<Confirmation />}>Registration Confirmation Page</Route>
          <Route path='/Go back and edit your information' element={<RegistrationForm />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
