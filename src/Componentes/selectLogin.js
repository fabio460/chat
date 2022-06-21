import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function SelectLogin({setSala}) {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
    setSala(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
     
      <FormControl sx={{ m: 1, width: '45ch' }}>
        <InputLabel id="demo-controlled-open-select-label">Sala</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Nenhuma</em>
          </MenuItem>
          <MenuItem value={'A'}>Sala A</MenuItem>
          <MenuItem value={'B'}>Sala B</MenuItem>
          <MenuItem value={'C'}>Sala C</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
