import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword, signIn, signInWithGoogle } from "../helpers/firebase";

const styles = {
  paperContainer: {
    backgroundImage: `url("https://picsum.photos/1600/900")`,
    // border: "2px solid red",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  return (
    <Container component="main" maxWidth="xs" style={styles.paperContainer}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "300",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ fontFamily: "Girassol" }}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="warning"
            sx={{ mb: 2 }}
            onClick={() => signInWithGoogle(navigate)}
          >
            With Google Account
          </Button>

          <Typography 
          sx={{
            cursor:"pointer"
          }}
           onClick={() => forgotPassword(email)}>
            Forgot password?
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
