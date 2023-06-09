import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    cart : {},
    category : "All",
    buyInfo :"" ,
    id : []
}
const StateSlice = createSlice({
    name: "State" ,
    initialState,
    reducers : {
        CardNotification : (state , action)=>{
            state.cart = {...state.cart , [action.payload.id] : action.payload.count}
            
        },
        categoryShow : (state , action)=>{
            state.category = action.payload
        },
        setBuy : (state , action) =>{
            // state.buyInfo = action.payload
            console.log(action.payload)
        }

    }
})

export default StateSlice.reducer;

export const {CardNotification , categoryShow ,setBuy} = StateSlice.actions;