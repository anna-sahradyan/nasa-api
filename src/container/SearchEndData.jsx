import React, {useEffect, useState} from "react";
import {Divider, IconButton, Paper, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useDispatch} from "react-redux";
import {fetchAsyncAllImages} from "../store/galaxySlice";


const SearchEndData = () => {
    const [endDate, setEndDate] = useState("2015-07-08");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncAllImages({ startDate: "2015-02-08", endDate }));
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncAllImages({ startDate: "2015-02-08", endDate }));
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
                    label="Due End Date"
                    type="datetime-local"
                    sx={{margin: 1}}
                     value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
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

export default SearchEndData;

