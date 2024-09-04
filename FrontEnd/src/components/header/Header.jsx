import React, { useState } from "react"
import "./header.css"
import logo from '../../assets/images/logo.png'
import Search from '../header/Search'
import axios from 'axios'
const Header = () => {
  const [Mobile, setMobile] = useState(false)
  const [search, setSearch] = useState(false)

  const Logout = async () => {
    const result = await axios.post("http://localhost:3000/loggout", { withCredentials: true });
    localStorage.removeItem('token')
    localStorage.removeItem('users')
    if (result.status == 200) {
      navigate("/signin")
      toast.success(result.data.message)
    }
  }

  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src={logo} alt='' />
            </div>
            {/*<ul className='flexSB'>*/}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                {/* <button  onClick={()=>setSearch(!search)}>Searh</button> */}
                <span className="ml-9 cursor-pointer" onClick={()=>setSearch(!search)}>Search</span>
            {/* <i className='fa fa-search' onClick={()=>setSearch(!search)}></i> */}
              </li>
              <li>
                <a href='/' onClick={Logout}>Log out</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          {/* <div className='account flexSB'>
            <i className='fa fa-search' onClick={()=>setSearch(!search)}></i>
          </div> */}
        </div>
      { search &&  <Search/> }
      </header>
    </>
  )
}

export default Header
