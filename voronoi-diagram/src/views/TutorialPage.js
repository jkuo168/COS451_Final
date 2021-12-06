import React from "react";
import { Box } from "@mui/material";
import MenuBar from "../components/MenuBar";

export default function TutorialPage() {
  return (
    <Box sx={{ backgroundColor: "background.default", height: "100vh" }}>
      <MenuBar type="demo" />
    </Box>
  );
}
