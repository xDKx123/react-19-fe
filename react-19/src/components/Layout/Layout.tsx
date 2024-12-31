import { FC } from 'react';
import Header from '../Header/Header.tsx';
import Menu from '../Menu/Menu.lazy.tsx';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';

const Layout: FC = () => {
  return (
    <Box>
      <Header />
      <Box className={'flex flex-row'}>
        <Menu />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
