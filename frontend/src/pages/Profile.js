import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const getUserInfo = async() => {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get('http://localhost:8080/profile', {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      console.log("Response " + response.data)  
    } catch(err) {
      console.log(err.message);
    }
  }

  getUserInfo();

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;