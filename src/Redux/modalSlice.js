import {createSlice} from "@reduxjs/toolkit"
const initialState={
    show:false
}
const modalSliceA=createSlice({
    name:"modalSlice",
    initialState:initialState,
    reducers:{
        updateModal(state,action){
         state.show=!state.show
             
        }
    }
})
export const ModalAction= modalSliceA.actions;
 export const modalReducer=modalSliceA.reducer