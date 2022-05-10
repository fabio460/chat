import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');
  const h = useHistory()
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      
      value={alignment}
      exclusive
      onChange={handleChange}
      orientation="vertical"
      sx={{border: " ", background: ""}}
    >
      <ToggleButton 
          onClick={()=>{h.push('/create')}}
          sx={{border: "1px solid white ", width: "50px", margin: "30px 10px"}}
          value="web">
          <EditOutlinedIcon/>
      </ToggleButton>
      <ToggleButton 
          onClick={()=>h.push('/')}
          sx={{border: "1px solid white ", width: "50px", margin: "30px 10px"}}
          value="android">
            
      <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutlineIcon />
              </Badge>
            </IconButton>
      </ToggleButton>
      <ToggleButton 
          sx={{border: "1px solid white ", width: "50px", margin: "30px 10px"}}
          value="ios">
          <PeopleAltOutlinedIcon
          onClick={()=>h.push('/frends')}
      />
      </ToggleButton>
      <ToggleButton 
         sx={{border: "1px solid white ",width: "50px", margin: "30px 10px"}}
         value="web2"
         onClick={()=>h.push('/notifications')}
      >
        <NotificationsNoneOutlinedIcon/>
      </ToggleButton>
      <ToggleButton 
          sx={{border: "1px solid white ",width: "50px", margin: "30px 10px"}}
          value="android2"
          onClick={()=>h.push('/support')}
      >
        <AutoAwesomeMosaicOutlinedIcon/>
      </ToggleButton>
      <ToggleButton
          sx={{border: "1px solid white ", width: "50px", margin: "30px 10px"}}
          value="ios2"
          onClick={()=>h.push('/setting')}
      >
        <SettingsOutlinedIcon/>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
