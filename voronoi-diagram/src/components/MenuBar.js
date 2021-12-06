import React from "react";
import { Box, AppBar, Toolbar, Button } from "@mui/material";

export default function MenuBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            variant="string"
            disableRipple={true}
            disableFocusRipple={true}
            disableElevation={true}
            sx={{
              "&:hover": { backgroundColor: "transparent" },
              textTransform: "none",
              typography: "h6",
            }}
            href="/"
          >
            Voronoi Diagrams
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            href={`/${props.type}`}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
              },
            }}
          >
            {props.type}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
