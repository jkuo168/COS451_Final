import React, { useState } from "react";
import {
  Box,
  Collapse,
  List,
  ListSubheader,
  ListItemText,
  ListItemButton,
} from "@mui/material";

export default function GUI() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.default" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ bgcolor: "background.default" }}
          >
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemText primary="Sent mail" sx={{ color: "white" }} />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Drafts" sx={{ color: "white" }} />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Inbox" sx={{ color: "white" }} />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Starred" sx={{ color: "white" }} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
