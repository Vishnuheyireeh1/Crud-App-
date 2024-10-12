import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Create from './Create';
import Read from './Read';
import Update from './Update';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/create' element={<Create/>}></Route>
       <Route path='/read/:id' element={<Read/>}></Route>
       <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
    </>
  )
}

export default App
