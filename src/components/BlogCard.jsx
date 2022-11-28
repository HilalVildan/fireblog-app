import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContextProvider";
import { Grid } from "@mui/material";

const BlogCard = () => {
  const { cards } = useContext(BlogContext);


  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cards?.map(( item) => (
          <Grid item xs={2} sm={4} md={4} key={item?.id}>
            
<Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image={item.image}
              alt="#"
            />
<CardHeader
              title={item?.title}
              subheader={item?.date}
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.content}
              </Typography>
            </CardContent>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title={item?.author}
             
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>


          </Grid>
        ))}
      </Grid>

      
    </>
  );
};

export default BlogCard;
