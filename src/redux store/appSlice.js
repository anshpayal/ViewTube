import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "toggle",
    initialState: {
        isMenuOpen: true,
    },
    reducers:{
        hideMenu: (state,actions)=>{
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
})

export const {hideMenu} = appSlice.actions
export default appSlice.reducer;