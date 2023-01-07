import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { loginWithPopup, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button variant='contained' onClick={loginWithPopup}>Prijava</Button>      
    )
  ); 
};

export default LoginButton;