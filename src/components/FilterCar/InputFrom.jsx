import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';


function InputAdornmentsStart() {
  return (
       <TextField 
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{width: '224px',padding:'14px 18px' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">To</InputAdornment>,
          }}
        />
        )}


 function InputAdornmentsEnd() {
  return (
          <TextField         
          id="outlined-start-adornment"
          sx={{ m: 1, width: '160px', padding: "14px 24px"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">From</InputAdornment>,
          }}
        />)
         }

export {InputAdornmentsStart, InputAdornmentsEnd} 