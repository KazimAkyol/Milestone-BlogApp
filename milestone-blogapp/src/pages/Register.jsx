import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import useAuthCalls from "../hooks/useAuthCalls";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { login } = useAuthCalls();

  const handleRegister = () => {
    // Fake validation
    if (userName && firstName && lastName && email && password) {
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
        label="UserName"
        type="text"
        variant="outlined"
        sx={{ mb: 2, width: "300px" }}
        fullWidth
        value={email}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="FirstName"
        type="text"
        variant="outlined"
        sx={{ mb: 2, width: "300px" }}
        fullWidth
        value={email}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="LastName"
        type="text"
        variant="outlined"
        sx={{ mb: 2, width: "300px" }}
        fullWidth
        value={email}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email Address"
        type="email"
        variant="outlined"
        sx={{ mb: 2, width: "300px" }}
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Image"
        type=""
        variant="outlined"
        sx={{ mb: 3, width: "300px" }}
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Bio"
        type="text"
        variant="outlined"
        sx={{ mb: 3, width: "300px" }}
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Image"
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
        onClick={handleRegister}
      >
        Login
      </Button>
    </Box>
  );
};

export default Register;
