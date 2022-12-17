import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { response } from 'express'
import authService from '../../Services/authService'
const initialState={
    user:null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''
}

export const register=createAsyncThunk('/register',async(user,thunkAPI)=>{
    try {
        return await authService.registerService(user)

        
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.toString() || error.message
        return thunkAPI.rejectWithValue(message)
        
    }
})



export const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.user=null
            state.isError=false
            state.isLoading=false
            state.isSuccess=false
            state.message=''

        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(register.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })

    }

    
})

export default authSlice.reducer
export const {reset}=authSlice.actions