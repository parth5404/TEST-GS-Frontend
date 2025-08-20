import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/core/Dashboard/Sidebar'

const DashBoard = () => {



  return (
    <div className='flex relative min-h-[calc(100vh-3.5rem)] bg-black text-white' >
      <Sidebar />
      <div className='h-[calc(100vh-3.5rem)] flex-1 overflow-auto bg-black' >
        <div className='mx-auto w-11/12 max-w-[1000px] py-10' >
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default DashBoard
