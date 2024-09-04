import React, { useState } from 'react'
import './search.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import {useDispatch, useSelector} from 'react-redux'
// import {GetAllDisorder} from '../../Redux/Slices/PostmenuSlice'
const Search = () => {
  // const dispatch = useDispatch()
const [info, setInfo] = useState([])
//   useEffect(()=>{
//     dispatch(GetAllDisorder())
//   },[])
console.log(info)
  const HandleSearch = (e)=>{
    let key = e.target.value;
    axios.get(`http://localhost:3000/search/${key}`).then(result =>{
      if (result) {
        setInfo(result.data.Searchit)
      }
    }).catch(err => console.log(err))
  }

  return (
    <>
      <div>
        <input type="text" placeholder='Search...' onChange={HandleSearch} className='w-[12rem] h-[2rem] ml-[10rem] text-slate-950 font-bold'/>
        <div className='bg-black w-[100%] h-[30rem] flex -mt-[5rem]'>
          {
            info && info.map((item)=>{
              return(
                <>
                <div className="w-[10rem] mt-8" key={item._id}>
                                <Link to={`singlepage/${item._id}`}>
                                <img src={`http://localhost:3000/${item.coverImage}`} className='-mt-8 ml-4'/>
                                    <h3 className='ml-[4rem] font-bold text-2xl'>{item.title}</h3>
                                </Link>
                            </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Search
