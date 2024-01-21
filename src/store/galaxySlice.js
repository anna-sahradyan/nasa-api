import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {API_KEY} from "../api/index";


export const fetchAsyncAllImages = createAsyncThunk(
    'galaxy/fetchAsyncAllImage',
    async function ({startDate, endDate}, {rejectWithValue}) {
        try {
            const response = await axios.get(
                `https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);




const galaxySlice = createSlice({
    name: "galaxy",
    initialState: {
        galaxy: [],
        status: null,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncAllImages.pending, (state) => {
            state.status = "loading";
        })
        builder.addCase(fetchAsyncAllImages.fulfilled, (state, action) => {
            state.status = "resolved";
            state.galaxy = action.payload;
        })
        builder.addCase(fetchAsyncAllImages.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        });

    },
});


export const selectStatus = (state) => state.galaxy.status;
export default galaxySlice.reducer;
