import React from 'react'
import { deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';

export const Login = () => {
  const purple = deepPurple[300];
  return (
    <section className='bg-dark'>
      <div className='h-screen flex items-center justify-center text-primaryText'>
        <div className='w-2/6 h-2/5 bg-primary2 drop-shadow-md rounded-md'>
          <div>
            <h2 className='bg-primary h-12 rounded-t-md text-center pt-[0.8rem] font-bold'>MEMBER LOGIN</h2>
          </div>
          <div className='flex flex-col h-4/5 justify-center items-center'>
            <TextField className='mb-12 bg-dark rounded-t-md w-4/5' id="filled-basic" label="Email" variant="filled" />
            <TextField className='w-4/5 bg-dark rounded-t-md' type="password" id="filled-basic" label="Password" variant="filled" />
          </div>
        </div>
      </div>
    </section>
  )
}



