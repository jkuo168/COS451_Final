import React from "react";
import { Box, Toolbar } from "@mui/material";
import MenuBar from "../components/MenuBar";
import Voronoi from "../components/Voronoi";
import GUI from "../components/GUI";

export default function DemoPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={{ position: "absolute" }}>
          <Toolbar />
          <GUI />
        </Box>
        <Box>
          <MenuBar type="tutorial" />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Voronoi />
        </Box>
      </Box>
    </Box>
  );
}
