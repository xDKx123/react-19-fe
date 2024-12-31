import React, { FC, useState } from 'react';
import { Box, TextField } from '@mui/material';

const LoginPage: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Box>
      <Box className={'flex flex-row'}>
        <Box className={'content'}>
          <h1>Login Page</h1>
          <TextField
            label={'Username'}
            variant={'outlined'}
            value={username}
            onChange={onUsernameChange}
          />
          <TextField
            label={'Password'}
            variant={'outlined'}
            value={password}
            onChange={onPasswordChange}
            type={'password'}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
