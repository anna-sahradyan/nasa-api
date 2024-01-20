import {configureStore} from "@reduxjs/toolkit";
import galaxy from "./galaxySlice";

const store = configureStore({
    reducer: {
        galaxy,
        devTools: true
    }
})
export default store;