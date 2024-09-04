import React,{useState} from 'react'
import  './signup.css'
import {useSelector, useDispatch} from 'react-redux'
import {Register} from '../../Redux/Slices/Authencation.Slice.js'
const Signup = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState({
        username : "",
        email : "",
        password : ""
      })

      const HandleSubmit = (e)=>{
        e.preventDefault();
        dispatch(Register(input))
      }

  return (
    <>
      <div className="bg-black before:animate-pulse before:bg-gradient-to-b before:from-gray-900 overflow-hidden before:via-[#00FF00] before:to-gray-900 before:absolute">
                <div id="myDIV">
                    <div className="w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute">
                        <div className="w-full sm:w-1/2 lg:2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4 rounded-lg">
                            <div className="w-full flex justify-center text-[#00FF00] text-xl mb:2 md:mb-5">
                                Sign up
                            </div>
                            <div className="mb-6">
                                <label htmlFor="username" className="block mb-2 text-xs font-medium text-white">Your Username</label>
                                <input
                                    tyHpe="text"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@alchems.net"
                                    required=""
                                    name='username'
                                    value={input.username}
                                    onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
                                />
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
                                    <a href="/signin" className="custom-link">Signin</a>
                                </div>
                            </div>
                            <button className="mt-4 md:mt-10 w-full flex justify-center text-sm md:text-xl bg-[#00FF00] py-2 rounded-md" onClick={HandleSubmit}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Signup
