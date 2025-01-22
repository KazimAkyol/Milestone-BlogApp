import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import RegisterForm from "../components/auth/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";

const Register = () => {
  const { register } = useAuthCalls();

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Kullanici adi 5 karakterden az olamaz")
      .max(50, "Kullanici adi 50 karakterden fazla olamaz")
      .required("UserName is required"),
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("FirstName is required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("LastName is required"),
    email: Yup.string()
      .email("Email adresinde @ isareti olmalidir")
      .required("Email is required"),
    image: Yup.string().required("Image is required"),
    bio: Yup.string().required("Bio is required"),
    password: Yup.string()
      .min(8, "Password 8 karakterden fazla olmalidir")
      .matches(/[a-z]/, "Password kucuk harf icermelidir")
      .matches(/[A-Z]/, "Password büyük harf icermelidir")
      .matches(/\d+/, "Password sayisal karakter icermelidir")
      .matches(/[@$?!%&*]+/, "Özel karakter içermelidir(@$?!%&*)")
      .required("Password is required"),
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>
          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              image: "",
              bio: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          />

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
