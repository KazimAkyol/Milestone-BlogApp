import React, { useState } from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ToggleEyeIcon = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <IconButton
      onClick={toggleVisibility}
      color="primary"
      aria-label="toggle visibility"
    >
      {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </IconButton>
  );
};

export default ToggleEyeIcon;


import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      label="Password"
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility} edge="end">
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
