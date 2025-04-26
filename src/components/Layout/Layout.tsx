import { FC } from 'react';
import Header from '../Header/Header.tsx';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import Menu from "../Menu/Menu.tsx";

const Layout: FC = () => {
  return (
    <Box className={"flex flex-col h-screen"}>
      <Header />
      <Box className={"flex-1"}>
          <Box className={'flex flex-1 flex-row h-full'}>
              <Menu />
              <Outlet />
          </Box>
      </Box>
    </Box>
  );
};

export default Layout;
