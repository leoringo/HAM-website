import { useState } from 'react'
import TableProduct from '../components/TableProduct'
import './App.css'
import Navbar from '../components/Navbar'
import TesForm from '../components/TesForm'
import AddForm from '../components/AddForm'
import { Outlet } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />

      {/* <TableProduct />
      <AddForm /> */}
      {/* <TesForm /> */}
    </>
  )
}

export default App
