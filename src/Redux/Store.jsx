import { configureStore } from "@reduxjs/toolkit";
import StateSlice from "./features/State"

const store = configureStore({
    reducer :{
        state : StateSlice
    }
})

export default store