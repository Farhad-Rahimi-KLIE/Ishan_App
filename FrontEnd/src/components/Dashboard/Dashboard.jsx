import React,{useEffect} from 'react'
import './Dashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import { GetAllDisorder, deletePosts} from '../../Redux/Slices/PostmenuSlice'
// import moduleName from '../../../../BackEnd/uploads'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  const dispatch = useDispatch()
  const postall = useSelector((state) => state.post.AllDisorder)

console.log(postall)
useEffect(() => {
  dispatch(GetAllDisorder())
}, [])

const deleteJan = (index)=>{
  dispatch(deletePosts(index))
  dispatch(GetAllDisorder())
}

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="nav">
            <div className="user">
              <a href="post" className="btn">Add New</a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="cards">
          </div>
          <div className="content-2">
            <div className="recent-payments">
              <div className="title">
                <h2 className='font-bold'>Post News</h2>
              </div>
              <table>
                <thead>
                <tr>
                  <th>Title</th>
                  <th>Time</th>
                  <th>CreateAt</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
                </thead>
              <tbody>
                  {postall && postall.map((item) => {
                    return (
                      <>
                      <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>{item.time}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.rating}</td>
                        <td><button onClick={()=> deleteJan(item._id)}>🗑</button></td>
                        </tr>
                      </>
                    )
                  })}
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard