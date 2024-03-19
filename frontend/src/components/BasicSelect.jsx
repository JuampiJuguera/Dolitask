import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({title}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box className='mt-6 ml-4' sx={{ minWidth: 120 }}>
      <FormControl className='border-2 border-primary w-40' sx={{ border: 'solid 2px #343846', borderRadius: '8px'}}>
        <InputLabel className='text-primaryText text-sm m-[0.1rem]' id="demo-simple-select-label">{title}</InputLabel>
        <Select
          className='text-primaryText'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={title}
          onChange={handleChange}
        >
          <MenuItem value={10}>Fecha</MenuItem>
          <MenuItem value={20}>Prioridad</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
