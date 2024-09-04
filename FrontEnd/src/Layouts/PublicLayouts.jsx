import React,{useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
const PublicLayouts = () => {

  const navigate = useNavigate()
  let user = JSON.parse(localStorage.getItem('users'));

  useEffect(()=>{
      if (user) {
        if (user.Role === "admin") {
          navigate("/admin")
        }else{
          navigate("/")
        }
      }
  },[user, navigate])

  return (
    <>
      <Outlet/>
    </>
  )
}

export default PublicLayouts
