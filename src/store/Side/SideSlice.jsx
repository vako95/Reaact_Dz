import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isCollapsed:false
}

 const SideSlice = createSlice({
    name:"side",
    initialState,
    reducers:{
        OPEN_BAR(state){
             state.isCollapsed = !state.isCollapsed
        }
    }
})


export const {OPEN_BAR} = SideSlice.actions;
export default SideSlice.reducer;