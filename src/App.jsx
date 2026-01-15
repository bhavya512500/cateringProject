import React from 'react'
import NavBar from './Nav/NavBar'
import { Outlet } from 'react-router-dom'
import Subscribe from './Components/subscribe/Subscribe'
import ModalForRegisteration from './Components/registeredDetails/ModalForRegisteration'
import SignUpModal from './Components/signUp/SignUpModal'

const App = () => {
  return (
    <div className='container-fluid '>
      {/* <ModalForRegisteration/> */}
      <SignUpModal/>
      <NavBar/>
      <Outlet/>
      <Subscribe/>
    </div>
  )
}

export default App
