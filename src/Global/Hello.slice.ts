import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./Store"

export type SingleUserDataType = {
    id: number,
    name: string,
    username: string,
    email: string
}

interface Istate {
    message: string;
    users: SingleUserDataType[]
}

const initialState:Istate = {
    message: '',
    users: []
}

export const getUserData = createAsyncThunk("hello/getUserData", async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    return await res.json()
})

const helloSlice = createSlice({
    name:'hello',
    initialState: initialState,
    reducers: {
        getMessage: (state:Istate,action:PayloadAction<string>) => {
            state.message = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getUserData.fulfilled, (state, action:PayloadAction<SingleUserDataType[]>) => {
            return {
                ...state,
                users : action.payload
            }
        })
    }
})

export const {getMessage} = helloSlice.actions

export const getUserSelector = (state:RootState) => state.hello.users

export default helloSlice.reducer
