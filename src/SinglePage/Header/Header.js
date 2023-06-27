import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import LeftMenu from '../LeftMenu/LeftMenu';
function appBarLabel() {
  return (
   <LeftMenu></LeftMenu>
  );
}
function Header() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel('')}
        </AppBar>
    </Stack>
  );
}
export default Header;