import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {Navigate} from 'react-router-dom'
import {toast} from "react-hot-toast"

export const Register = createAsyncThunk("IshanApp/Signup", async (payload)=>{
    const result = await axios.post("http://localhost:3000/signup", payload);
    if (result.status == 200) {
        toast.success(result.data.message)
    }
    toast.success(result.data.message)
    return result.data.register;
})

// const navigate = useNavigate()
// export const Login = createAsyncThunk("IshanApp/Signin", async (payload)=>{
//     const result = await axios.post("http://localhost:3000/signin", payload,{withCredentials : true});
//     localStorage.setItem('token', result.data.token)
//     localStorage.setItem('users', JSON.stringify(result.data.user))
//     if (result.status == 200) {
//         // if (result.data.user.Role == "admin") {
//         //     Navigate("/admin")
//         // }else if(result.data.user.Role == "user"){
//         //     Navigate("/")
//         // }
//         toast.success(result.data.message)
//     }
//     console.log(result)
//     return result.data.user;
// })

export const AuthentecationSlice = createSlice({
    name : "authentecation",
    initialState : 0,
})

export default AuthentecationSlice.reducer;