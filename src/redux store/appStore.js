import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import LiveChatSlice from "./LiveChatSlice";
const appStore = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        LiveChat: LiveChatSlice
    }
});

export default appStore;