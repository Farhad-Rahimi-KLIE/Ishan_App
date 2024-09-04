import React,{useEffect, useState} from 'react'
import './signin.css'
import axios from 'axios'
import {toast} from "react-hot-toast"
import {useNavigate} from 'react-router-dom'
const Signin = () => {

    const navigate = useNavigate()
    const [input, setInput] = useState({
        email : "",
        password : ""
      })

      const HandleSbmit = async (e)=>{
        e.preventDefault();
        const result = await axios.post("http://localhost:3000/signin", input,{withCredentials : true});
        localStorage.setItem('token', result.data.token)
        localStorage.setItem('users', JSON.stringify(result.data.user))
        if (result.status == 200) {
            if (result.data.user.Role == "admin") {
                navigate("/admin")
            }else if(result.data.user.Role == "user"){
                navigate("/")
            }
            toast.success(result.data.message)
        }
      }

      useEffect(()=>{
        HandleSbmit()
      },[])

    return (
        <>
            <div className="bg-black before:animate-pulse before:bg-gradient-to-b before:from-gray-900 overflow-hidden before:via-[#00FF00] before:to-gray-900 before:absolute">
                <div id="myDIV">
                    <div className="w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute">
                        <div className="w-full sm:w-1/2 lg:2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4 rounded-lg">
                            <div className="w-full flex justify-center text-[#00FF00] text-xl mb:2 md:mb-5">
                                Sign In
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-xs font-medium text-white">Your email</label>
                                <input
                                    tyHpe="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@alchems.net"
                                    required=""
                                    name='email'
                                    value={input.email}
                                    onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-xs font-medium text-white">Your password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    placeholder="**********"
                                    name='password'
                                    value={input.password}
                                    onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="text-white text-sm md:text-md">
                                    <a href="/signup" className="custom-link">Signup</a>
                                </div>
                            </div>
                            <button className="mt-4 md:mt-10 w-full flex justify-center text-sm md:text-xl bg-[#00FF00] py-2 rounded-md" onClick={HandleSbmit}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Signin
