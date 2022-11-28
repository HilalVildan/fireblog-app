import { Box, TextField, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContextProvider";
import { AddCard } from "../helpers/firebase";

const BlogForm = () => {
  const { cards, setCards } = useContext(BlogContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const navigate =useNavigate()



  const handleSubmit = (e) => {
     let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    const newCard = {
      title: title,
      image: image,
      content: content,
      author: localStorage.getItem("currentUser"),
      date: today
    };
    AddCard(newCard, cards);
 
    setTitle("");
    setImage("");
    setContent("");
   
    setCards([...cards, newCard]);
 navigate("/");
     
    
  };

  useEffect(() => {
    console.log(cards, "handleChange");
  }, [cards]);
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        onSubmit={() => handleSubmit()}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="outlined-disabled"
          label="Title"
          name="title"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="normal"
          id="outlined-disabled"
          fullWidth
          required
          name="image"
          label="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />
        <TextField
          margin="normal"
          id="outlined-multiline-static"
          name="content"
          label="Content"
          fullWidth
          multiline
          required
          rows={5}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="warning"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default BlogForm;
