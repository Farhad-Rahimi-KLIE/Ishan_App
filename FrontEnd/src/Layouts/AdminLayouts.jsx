import React, { useEffect } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
const AdminLayouts = () => {
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('users'));

    useEffect(()=>{
        if (!user || user.Role !== "admin") {
            navigate("/")
        }
    },[])

  return (
    <>
      <Outlet/>
    </>
  )
}

export default AdminLayouts
