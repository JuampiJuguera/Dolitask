import React from 'react'
import { deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import Button from '@mui/material/Button';

export const Login = () => {
  const purple = deepPurple[300];
  return (
    <section className='bg-dark'>
      <div className='h-screen flex items-center justify-center text-primaryText'>
        <div className='w-2/6 h-2/5 bg-primary2 drop-shadow-md rounded-md'>
          <div className='flex flex-col items-center bg-primary h-12 rounded-t-md'>
            <div className="bg-primary w-20 h-20 flex justify-center items-center rounded-full p-3">
              <LockPersonIcon className="text-white w-12 h-16" />
            </div>
            <h2 className='text-center pt-[0.8rem] font-bold'>MEMBER LOGIN</h2>
          </div>
          <div className='flex flex-col h-4/5 justify-center items-center'>
          <TextField
          id="outlined-required"
          label="Email"/>
          <TextField
          id="outlined-required"
          type='password'
          label="Password"/>
          <Button variant="contained" size="medium" >LOGIN</Button>
          <a href='https://intranet.artfos.com.ar/' Target="_blank" className='text-dark'>Dolibarr</a>
          </div>
        </div>
      </div>
    </section>
  )
}



