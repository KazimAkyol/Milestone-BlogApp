import React from "react";
import { Button, TextField } from "@mui/material";

const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="username"
        value={values.username}
        onChange={handleChange}
        label="UserName"
        onBlur={handleBlur}
        error={touched.username && errors.username}
        helperText={touched.username && errors.username}
        variant="outlined"
        fullWidth
        type="text"
        margin="normal"
        autoFocus
      />

      <TextField
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        label="FirstName"
        onBlur={handleBlur}
        error={touched.firstName && errors.firstName}
        helperText={touched.firstName && errors.firstName}
        variant="outlined"
        fullWidth
        type="text"
        margin="normal"
      />

      <TextField
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        label="LastName"
        onBlur={handleBlur}
        error={touched.lastName && errors.lastName}
        helperText={touched.lastName && errors.lastName}
        variant="outlined"
        fullWidth
        type="text"
        margin="normal"
      />

      <TextField
        name="email"
        value={values.email}
        onChange={handleChange}
        label="Email Address"
        onBlur={handleBlur}
        error={touched.email && errors.email}
        helperText={touched.email && errors.email}
        variant="outlined"
        fullWidth
        type="email"
        margin="normal"
      />

      <TextField
        name="img"
        value={""}
        onChange={handleChange}
        label="Image"
        onBlur={handleBlur}
        error={touched.img && errors.img}
        helperText={touched.img && errors.img}
        variant="outlined"
        fullWidth
        type="image"
        margin="normal"
      />

      <TextField
        name="bio"
        value={values.bio}
        onChange={handleChange}
        label="Bio"
        onBlur={handleBlur}
        error={touched.bio && errors.bio}
        helperText={touched.bio && errors.bio}
        variant="outlined"
        fullWidth
        type="text"
        margin="normal"
      />

      <TextField
        name="password"
        value={values.password}
        onChange={handleChange}
        label="Password"
        onBlur={handleBlur}
        error={touched.password && errors.password}
        helperText={touched.password && errors.password}
        variant="outlined"
        fullWidth
        type="password"
        margin="normal"
      />

      <Button type="submit" variant="contained" fullWidth margin="normal">
        SUBMIT
      </Button>
    </form>
  );
};

export default RegisterForm;
