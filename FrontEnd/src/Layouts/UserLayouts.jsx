import React,{useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

const UserLayouts = () => {
  const navigate = useNavigate()
  let user = JSON.parse(localStorage.getItem('users'));

  useEffect(()=>{
    if (!user) {
        navigate("/signup")
    }
},[])

  return (
    <>
      <Outlet/>
    </>
  )
}

export default UserLayouts
