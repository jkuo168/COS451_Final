import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" sx={{ color: "text.primary", mb: 15 }}>
          Voronoi Diagrams
        </Typography>
        <Button variant="contained" sx={{ mr: 50 }} href="/tutorial">
          Tutorial
        </Button>
        <Button variant="contained" href="/demo">
          Demo
        </Button>
      </Box>
    </Box>
  );
}
