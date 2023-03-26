import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const March21 = () => {
  const navItems = [
    {pagename:' Home page ',onClick:()=>{navigate('home')}},
    {pagename:' About page ',onClick:()=>{navigate('about')}},
    {pagename:' Contact page ',onClick:()=>{navigate('contact')}},
    {pagename:' Details page ',onClick:()=>{navigate('details')}}

  ]
  const navigate = useNavigate()
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar component="nav" sx={{top:40}}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={()=>{}}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          Hi
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          MUI
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }} onClick={item.onClick}>
              {item.pagename}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
    <Outlet />
    </Box>
  )
}

export default March21