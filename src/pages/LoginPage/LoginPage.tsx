import React, {FC, useEffect, useState} from 'react';
import {Box, Button, Stack, TextField} from '@mui/material';
import {useTranslation} from "react-i18next";
import useLogin from "./hooks/useLogin.ts";
import {useNavigate} from "react-router";

const LoginPage: FC = () => {
  const { login, isLoading, isLoggedIn, error } = useLogin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const {t} = useTranslation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', {
        replace: true
      });
    }
  }, [isLoggedIn, navigate]);


  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLogin = async () => {
    await login(username, password);
  };

  return (
        <Box className={'w-screen h-screen flex items-center justify-center'}>
          <Stack spacing={2} className={'w-full max-w-sm'}>
            <h1>{t("loginPage")}</h1>
            <TextField
                label={t('username')}
                variant={'outlined'}
                value={username}
                onChange={onUsernameChange}
                disabled={isLoading}
            />
            <TextField
                label={t('password')}
                variant={'outlined'}
                value={password}
                onChange={onPasswordChange}
                type={'password'}
                disabled={isLoading}
            />
            <Button onClick={onLogin}
                    disabled={isLoading}
            >
              {t('login')}
            </Button>
            {error && <p>{error}</p>}
          </Stack>
        </Box>
  );
};

export default LoginPage;
