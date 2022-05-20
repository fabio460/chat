import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditOutlined from '@mui/icons-material/EditOutlined';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import NotificationsNoneOutlined from '@mui/icons-material/NotificationsNoneOutlined';
import AutoAwesomeMosaicOutlined from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';

export default function SimpleBottomNavigation({direcao}) {
  const [value, setValue] = React.useState(0);
  const h = useHistory()
  return (
    <Box sx={{ width: 500,display:"flex",direction:"unset",margin:"auto" }}>
      
      <BottomNavigation
        sx={{flexDirection:direcao,flexWrap:"wrap"}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction label="" icon={<EditOutlined />} onClick={()=>{h.push('/create')}} />
        <BottomNavigationAction label="" icon={<ChatBubbleOutline />} onClick={()=>h.push('/')} />
        <BottomNavigationAction label="" icon={<PeopleAltOutlined />} onClick={()=>h.push('/frends')}/>
        <BottomNavigationAction label="" icon={<NotificationsNoneOutlined />} onClick={()=>h.push('/notifications')} />
        <BottomNavigationAction label="" icon={<AutoAwesomeMosaicOutlined />}  onClick={()=>h.push('/support')} />
        <BottomNavigationAction label="" icon={<SettingsOutlined />} onClick={()=>h.push('/setting')}/>
      </BottomNavigation>
    </Box>
  );
}
