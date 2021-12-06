import React from "react";
import { Box } from "@mui/material";
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
      <Box>
        <MenuBar type="tutorial" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
        }}
      >
        <Box sx={{ height: "100%", width: "80%" }}>
          <Voronoi />
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "20%",
          }}
        >
          <GUI />
        </Box>
      </Box>
    </Box>
  );
}
