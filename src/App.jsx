import { useState } from 'react'

import { Routes,Route } from 'react-router'
import './index.css'
import Signup from './component/Signup'
import './App.css'
import Login from './component/Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/register' element={<Signup/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>

    </Routes>
   
        
   
    </>
  )
}

export default App
