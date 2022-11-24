import {
  Avatar,
  Box,
  
  Container,
  CssBaseline,
 
  Button,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createUser, signInWithGoogle } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

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

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const handleSubmit = (e) => {
      e.preventDefault();
      createUser(email, password, navigate)
      console.log(email, password);

  }



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
          Register
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
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
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

          <Link href="/login" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
