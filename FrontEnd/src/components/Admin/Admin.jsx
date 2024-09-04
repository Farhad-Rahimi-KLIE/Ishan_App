import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetAllUsers, DeleteUser } from '../../Redux/Slices/AdminSlice'
// import  './admin.css'
const Admin = () => {
  const dispach = useDispatch()
  const get = useSelector((state) => state.admin.users)
  useEffect(() => {
    dispach(GetAllUsers())
  }, [])

  const HandleDelete = (index)=>{
    dispach(DeleteUser(index))
  }

  return (
    <div>
      <div className="user">
              <a href="admin/dash" className="btn bg-slate-100">Go Dashboard</a>
            </div>
      <center>
        <div className="table bg- text-slate-50">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Grades</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="tableBody">
              {
                get && get.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{index +1}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td><button className="btn btn-success" onClick={()=> HandleDelete(item._id)}>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </center>
    </div>
  )
}

export default Admin
