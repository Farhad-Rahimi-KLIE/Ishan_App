import React, { useState, useEffect } from "react"
import "./style.css"
import { useParams } from "react-router-dom"
import Footer from '../footer/Footer'
import axios from 'axios'
// import moduleName from '../../../../BackEnd/uploads/'
const SinglePage = () => {
  const [single, setSingle] = useState([])
  const params = useParams()
useEffect(()=>{
  const singledata = ()=>{
      axios.get(`http://localhost:3000/singledata/${params.id}`,
      {
          headers: {
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
      }).then(result => setSingle(result.data.getsingl)).catch(err => console.log(err))
  }
  singledata()
},[])

  return (
    <>
        <>
          <section className='singlePage'>
            <div className='singleHeading'>
              {/* <h1>Hello World</h1> */}
              <h1>{single.title} </h1> <span> | {single.time} | </span> <span> HD </span>
            </div>
            <div className='container'>
              {/* <h1>Hello World</h1> */}
              <video src={`http://localhost:3000/${single.video}`} controls></video>
            </div>
          </section>
        </>
      <Footer/>
    </>
  )
}

export default SinglePage
