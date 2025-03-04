import { useState } from 'react'
import Home from './pages/Home.jsx'
import { Routes,Route } from 'react-router'



function App() {
  

  return (
    <>
    <div className='mx-4 sm:mx-[10%] '>

     <Routes>
        <Route path='/' element={<Home />} />
     </Routes>
    </div>
     
    </>
  )
}

export default App
