import React, { useEffect } from 'react'
import PalDex from '../PalDex'
import { Outlet, redirect,useNavigate } from 'react-router-dom'


export default function Layout() {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate("/paldex")
    },[])
  return (
    <>
    <div className='h-16 w-screen bg-black flex items-center text-white text-2xl  p-2 gap-4 font-mono'>
        <div className=''>
            <img className='h-16' src="https://www.kinetichosting.net/palworld-logo.png" alt="" />
        </div>
        <div className='border-solid border-l-2 border-white pl-4'>
            PalDex
        </div>
        <div className='border-solid border-l-2 border-white pl-4'> 
            PalBreeder
        </div> 
    </div>
   <div>
    <div className=''>
        <Outlet/>
    </div>
   </div>
    
    </>
  )
}
