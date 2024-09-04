import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {toast} from "react-hot-toast"

const initialState = {
    AllDisorder : []
}

export const addpost = createAsyncThunk("IshanApp/addpost", async (payload)=>{
    try {
        const result = await axios.post("http://localhost:3000/create",payload,
        {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        }
        );
        toast.success(result.data.message)
        return result.data.addpost;
    } catch (error) {
        if (result.error) {
            toast.error(error.result.data.message)
        }
    }
})

export const deletePosts = createAsyncThunk("IshanApp/deletePosts", async (payload)=>{
    try {
        const result = await axios.delete(`http://localhost:3000/deleteuser/${payload}`,
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

export const GetAllDisorder = createAsyncThunk("IshanApp/AllDisorder", async ()=>{
    try {
        const result = await axios.get("http://localhost:3000/alldisorder",
        {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        }
        );
        toast.success(result.data.message)
        return result.data.get;
    } catch (error) {
        console.log(error)
    }

})

// export const SearchData = createAsyncThunk("IshanApp/Search", async (payload)=>{
//     try {
//         const result = await axios.get(`http://localhost:3000/search/${payload}`,
//         {
//             headers : {
//                 "Authorization" : `Bearer ${localStorage.getItem("token")}`
//             }
//         }
//         );
//         console.log(result)
//         toast.success(result.data.message)
//         return result.data.Searchit;
//     } catch (error) {
//         console.log(error)
//     }

// })

export const PostmenuSlice = createSlice({
    name : "post",
    initialState,
    extraReducers : (builder)=> {
        builder.addCase(GetAllDisorder.fulfilled, (state, action)=>{
            state.AllDisorder = action.payload
        })
    }
})

export default PostmenuSlice.reducer;