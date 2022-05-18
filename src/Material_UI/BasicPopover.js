import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Emoji from '../Emoji'
import { EmojiEmotionsOutlined } from '@mui/icons-material';
export default function BasicPopover() {
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
    <div style={{borderRadius:"50%" ,margin:"0px",height:"25px", padding:"0px", display:"flex",alignItems:"center"}}>     
      <EmojiEmotionsOutlined aria-describedby={id} variant="contained" onClick={handleClick} style={{borderRadius:"50%" ,margin:"0px",height:"100%",width:"100%", padding:"0px", display:"flex",alignItems:"center"}}/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
     
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
      >
        <Typography sx={{ p: 0 }}><Emoji/></Typography>
      </Popover>
    </div>
  );
}
