import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addpost} from '../../Redux/Slices/PostmenuSlice'
const PostMenu = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        title : "",
        rating : "",
        time : "",
        starring : "",
        genres : ""
      })

    const [coverImage, setCoverImage] = useState();
    const [video, setVideo] = useState();


    const HandleCahnge = ()=>{
      const data = new FormData()
      data.append("title", input.title)
      data.append("rating", input.rating)
      data.append("time", input.time)
      data.append("starring", input.starring)
      data.append("genres", input.genres)
      data.append("coverImage", coverImage)
      data.append("video", video)
      dispatch(addpost(data))
    }

  return (
    <>
    <div className="user">
              <a href="/admin" className="btn">Go Dashboard</a>
            </div>
    <div className='product'>
            <h1>Add POst</h1>
            <input type="text" placeholder='Enter Title' className='inputBox'
            name='title'
            value={input.title}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />

            <input type="text" placeholder='Enter Rating' className='inputBox'
            name='rating'
            value={input.rating}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />

            <input type="text" placeholder='Enter Time' className='inputBox'
            name='time'
            value={input.time}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />
            <input type="text" placeholder='Enter Starring' className='inputBox'
            name='starring'
            value={input.starring}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />
            <input type="text" placeholder='Enter Genres' className='inputBox'
            name='genres'
            value={input.genres}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />

            <input type="file" placeholder='Enter product company' className='inputBox'
             name='coverImage'
             onChange={(e)=> setCoverImage(e.target.files[0])}
            />
            <input type="file" placeholder='Enter product company' className='inputBox'
             name='video'
             onChange={(e)=> setVideo(e.target.files[0])}
            />


        </div>
            <button className='text-slate-100 mt-[4rem]' onClick={HandleCahnge}>Add Post</button>
    </>
  )
}

export default PostMenu
