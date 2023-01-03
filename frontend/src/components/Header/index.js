import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Button, Stack, Toolbar } from '@mui/material';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton'
import axios from 'axios';

const Header = () => {

    const { isAuthenticated, getAccessTokenSilently } = useAuth0(); 

    // const navigateTo = useNavigate();

    const handleProfileClick = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get('http://localhost:8080/profile', {
              headers: {
                authorization: `Bearer ${token}`
              }
            });
            console.log(response.data);  
          } catch(err) {
            console.log(err.message);
          }
        // navigateTo('/profile');
    };

    return(
        <AppBar position='static'>
            <Toolbar>
                <Stack direction='row' spacing ='1rem' alignItems={'center'}>
                    <LoginButton />
                    <LogoutButton />
                    {isAuthenticated ? 
                        <Button variant='contained' onClick={handleProfileClick}>
                            Korisnički profil
                        </Button>
                        : undefined
                    }
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;