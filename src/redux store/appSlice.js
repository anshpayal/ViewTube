import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "toggle",
    initialState: {
        isMenuOpen: true,
    },
    reducers:{
        hideMenu: (state,actions)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=0;
        }
    }
})

export const {hideMenu, closeMenu} = appSlice.actions
export default appSlice.reducer;