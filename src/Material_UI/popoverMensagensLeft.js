import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import ListDividers from './ListDividersMensagens.js'
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function PopoverMensagensLeft({idDaMensagem}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div aria-describedby={id} variant="contained" onClick={handleClick} style={{cursor:"pointer"}}>
        <MoreVertIcon/>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}><ListDividers id={idDaMensagem}/></Typography>
      </Popover>
    </div>
  );
}
