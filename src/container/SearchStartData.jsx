import React, {useEffect, useState} from "react";
import {Divider, IconButton, Paper, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useDispatch} from "react-redux";
import {fetchAsyncAllImages} from "../store/galaxySlice";


const SearchStartData = () => {
    const [startDate, setStartDate] = useState("2015-02-08");
    const dispatch = useDispatch();
    useEffect(() => {
        // Fetch images by default when the component mounts
        dispatch(fetchAsyncAllImages({ startDate, endDate: "2015-07-08" }));
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncAllImages({startDate, endDate: "2015-07-08"}));
    };

    return (
        <>
            <Paper
                component="form"
                sx={{
                    p: "2px 4px", display: "flex", alignItems: "center", width: 300,
                }}
            >

                <TextField
                    id="due-date"
                    label="Due Start Date"
                    type="datetime-local"
                    sx={{margin: 1}}
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <IconButton type="button" sx={{p: '10px'}} aria-label="search" onClick={handleSearch}>
                    <SearchIcon/>
                </IconButton>
                <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
            </Paper>
        </>
    );
};

export default SearchStartData;

