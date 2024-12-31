import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const NotFound404: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant={'h1'} sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant={'h5'} sx={{ marginBottom: 2 }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant={'contained'}
        color={'primary'}
        onClick={() => navigate('/')}
        sx={{ marginTop: 2, padding: '10px 20px' }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound404;
