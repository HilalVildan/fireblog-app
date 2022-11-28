import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BlogForm from "../components/BlogForm";

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

const NewBlog = () => {
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
          <NewspaperIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ fontFamily: "Girassol" }}>
          New Blog
        </Typography>
        <BlogForm />
      </Box>
    </Container>
  );
};

export default NewBlog;
