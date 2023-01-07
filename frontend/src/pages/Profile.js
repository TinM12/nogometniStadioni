import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Avatar, Paper, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    const getUserInfo = async() => {
      try {
        const token = await getAccessTokenSilently();
        const response = await axios.get('http://localhost:8080/profile', {
          headers: {
            authorization: `Bearer ${token}`
          }
        });
        setUserInfo(response.data);
      } catch(err) {
        console.log(err.message);
      }
    }

    getUserInfo();
  }, [getAccessTokenSilently]);

  if(!isAuthenticated) return <Navigate to={'/'} />;
  return (
    isAuthenticated && (
      <main className='stadiumBackground'>
        <Header/>
        <br />
        <Stack alignItems='center' justifyContent='center' height='86.5vh'>
          <Paper sx={{ padding: '2rem'}}>
            <Stack direction='column' alignItems='center' justifyContent='center' spacing='1rem'>
              <Avatar
                alt='userImage'
                sx={{ color: 'white', width: '96px', height: '96px' }}
                src={userInfo.picture}
                >
              </Avatar>
              <Typography variant='h5'>Nickname: {userInfo.nickname}</Typography>
              <Typography variant='h5'>Email: {userInfo.email}</Typography>
            </Stack>          
          </Paper>
        </Stack>
      </main>
    )
  );
};

export default Profile;