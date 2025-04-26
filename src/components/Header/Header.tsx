import { FC } from 'react';
import { Box } from '@mui/material';
import UserHeader from './components/UserHeader/UserHeader.tsx';

const Header: FC = () => {
  return (
    <Box className={'flex justify-between\t'}>
      <Box />
      <div id={'logo'}>Logo...</div>
      <UserHeader />
    </Box>
  );
};

export default Header;
