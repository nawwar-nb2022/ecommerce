import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    cart : localStorage.cart ? JSON.parse(localStorage.cart) : "",
    category : "All",
    buyInfo : ""
}
const StateSlice = createSlice({
    name: "State" ,
    initialState,
    reducers : {
        CardNotification : (state , action)=>{
            state.cart = action.payload
        },
        categoryShow : (state , action)=>{
            state.category = action.payload
        },
        setBuy : (state , action) =>{
            state.buyInfo = action.payload
        }

    }
})

export default StateSlice.reducer;

export const {CardNotification , categoryShow ,setBuy} = StateSlice.actions;