import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import { Form, Link } from "react-router-dom";
import { Formik } from "formik";
import useAuthCalls from "../hooks/useAuthCalls";
import { Button, Grid2, TextField } from "@mui/material";
import { object, string } from "yup";

const Login = () => {
  const { login } = useAuthCalls();

  const loginScheme = object({
    email: string()
      .email("Lutfen valid bir email giriniz")
      .required("Email zorunludur"),
    password: string().required("password zorunludur"),
  });

  return (
    <Container maxWidth="lg">
      <Grid2
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid2 item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="secondary.main">
            SIGN IN
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginScheme}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          >
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                />
                <TextField
                  label="password"
                  name="password"
                  id="password"
                  type="password"
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.password && errors.password}
                  error={touched.password && Boolean(errors.password)}
                />
                {!loading ? (
                  <Button variant="contained" type="submit">
                    Sign In
                  </Button>
                ) : (
                  <Button variant="contained" disabled={loading}>
                    <CircularProgress />
                  </Button>
                )}
              </Box>
            </Form>
          </Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Box>
        </Grid2>

        <AuthImage image={image} />
      </Grid2>
    </Container>
  );
};

export default Login;
