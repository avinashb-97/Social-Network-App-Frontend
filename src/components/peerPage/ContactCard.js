import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import './peerPageStyle.css'
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function ContactCard({user}) {

  return (
    <Card sx={{ height: '120px', display: 'flex', margin: '15px', width: '360px' }}>
      <CardMedia
        component="img"
        image="https://source.unsplash.com/collection/happy-people"
        alt="Live from space album cover"
        className='image-adjust'
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <h5>{user.name}</h5>
          <p>{user.email}</p>
        </CardContent>
      </Box>
    </Card>
  );
}
