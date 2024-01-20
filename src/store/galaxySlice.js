import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {API_KEY} from "../api/index";


export const fetchAsyncAllImages = createAsyncThunk(
    'allBooks/fetchAsyncAllImage',
    async function (inputValue, {rejectWithValue}) {
        try {
            const response = await axios.get(
                `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`
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
        oneImg: {},
        status: null,
        error: null,
    },
    reducers: {
        removeList: (state) => {
            state.oneImg = [];
        }
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
        builder.addCase(fetchAsyncAllImageId.pending, (state) => {
            state.status = "loading";
        })
        builder.addCase(fetchAsyncAllImageId.fulfilled, (state, action) => {
            state.status = "resolved";
            state.oneImg = action.payload;
        })


        builder.addCase(fetchAsyncAllImageId.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        });

    },
});

export const {removeList} = galaxySlice.actions;
export const selectAllGalaxyImg= (state) => state.galaxy.galaxy;
export const selectOneImg = (state) => state.galaxy.oneImg;
export const selectStatus = (state) => state.galaxy.status;
export default galaxySlice.reducer;
