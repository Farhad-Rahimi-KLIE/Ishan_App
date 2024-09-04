import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {toast} from "react-hot-toast"

const initialState = {
    users : [],
}

export const GetAllUsers = createAsyncThunk("IshanApp/getallusers", async ()=>{
    try {
        const result = await axios.get("http://localhost:3000/getallusers",
        {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        }
        );
        toast.success(result.data.message)
        return result.data.user;
    } catch (error) {
        if (result.error) {
            toast.error(error.result.data.message)
        }
    }
})

export const DeleteUser = createAsyncThunk("IshanApp/deleteuser", async (payload)=>{
    try {
        const result = await axios.delete(`http://localhost:3000/delete/${payload}`,
        {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        }
        );
        toast.success(result.data.message)
        return result.data.user;
    } catch (error) {
        console.log(error)
    }

})

export const AdminSlice = createSlice({
    name : "admin",
    initialState,
    extraReducers : (builder)=> {
        builder.addCase(GetAllUsers.fulfilled, (state, action)=>{
            state.users = action.payload
        })
    }
})

export default AdminSlice.reducer;