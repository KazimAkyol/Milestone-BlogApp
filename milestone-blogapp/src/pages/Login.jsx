import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import useAuthCalls from "../hooks/useAuthCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { login } = useAuthCalls();

  const handleLogin = () => {
    // Fake validation
    if (email && password) {
      dispatch(login());
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        SIGN IN
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        sx={{ mb: 2, width: "300px" }}
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        sx={{ mb: 3, width: "300px" }}
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "300px" }}
        fullWidth
        onClick={handleLogin}
      >
        Login
      </Button>
      <Box
        sx={{
          textAlign: "center",
          mt: 2,
          color: "secondary.main",
          cursor: "pointer",
        }}
      >
        <Link to="/register">
          Don't have an account? <span>Sign Up</span>
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
