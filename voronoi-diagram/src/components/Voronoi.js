import React from "react";
import { Box, Typography } from "@mui/material";
import { CanvasSpace, Pt, Group, Line, Util } from "pts";
import { QuickStartCanvas } from "react-pts-canvas";

export default function Voronoi() {
  let pts = new Group();

  return (
    <Box sx={{ height: "100%" }}>
      <QuickStartCanvas
        style={{ height: "100%" }}
        onStart={(space) => {
          pts = [new Pt(100, 100)];
        }}
        onAnimate={(space, form, time) => {
          form.fill("#fff").points(pts, 5, "circle");
        }}
      />
    </Box>
  );
}
