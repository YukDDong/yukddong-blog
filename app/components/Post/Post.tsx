import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import { exPost } from "../PostList/PostList";

interface PostProps {
  exPost: exPost;
}

const Post = ({ exPost }: PostProps) => {
  return (
    <Card
      sx={{
        minWidth: 240,
        border: 1,
        borderColor: "primary.main",
        bgcolor: "#252525",
      }}
      variant="outlined"
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {exPost.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {exPost.sub}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              #{exPost.tags[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {exPost.date}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;
