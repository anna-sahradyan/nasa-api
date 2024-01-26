import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchAsyncAllImages} from '../store/galaxySlice';
import {Button, Paper, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';



const Search = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState('2023-07-08');
    const [endDate, setEndDate] = useState('2023-07-10');
    useEffect(() => {
        dispatch(fetchAsyncAllImages({startDate, endDate}));
    }, []);

    const handleSearch = () => {
        if (startDate && endDate) {
            dispatch(fetchAsyncAllImages({startDate, endDate}));
        } else {
            console.error('Please enter both start and end dates.');
        }
    };

    return (
        <>

                <Paper
                    component="form"
                    sx={{
                        p: "2px 2px",
                        display: 'flex',
                        alignItems: 'center',
                        width: 300,
                    }}
                >
                    <TextField
                        id="due-date"
                        label="Due Start Date"
                        type="date"
                        sx={{margin: 1, width: "95%"}}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Paper>

            <Button variant="contained" endIcon={<SendIcon/>} onClick={handleSearch}>
                Send
            </Button>

                <Paper  sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 300,
                }}>
                    <TextField
                        id="due-date"
                        label="Due End Date"
                        type="date"
                        sx={{margin: 1 , width: "95%",}}
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </Paper>

        </>
    );
};

export default Search;
