import React from "react";
import {Divider, Paper, TextField} from "@mui/material";




const SearchStartData = () => {


    const handleInputChange = () => {

    }
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
                    // value={task.dueDate}
                    onChange={handleInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
            </Paper>
        </>
    );
};

export default SearchStartData;

