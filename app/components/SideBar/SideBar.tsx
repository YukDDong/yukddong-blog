"use client";

import { List, ListItemButton, Paper } from "@mui/material";
import { tags } from "../../data/tags";

const SideBar = () => {
  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        position: "relative",
        paddingTop: "25px",
      }}
    >
      <Paper
        sx={{
          width: "auto",
          height: "auto",
        }}
      >
        <List>
          {tags.map((v) => (
            <ListItemButton>#{v}</ListItemButton>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default SideBar;
