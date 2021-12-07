import React, { useState } from "react";
import {
  Box,
  Collapse,
  Checkbox,
  Divider,
  List,
  ListItemText,
  ListItemButton,
  Radio,
  TextField,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ColorPicker, createColor } from "material-ui-color";

export default function GUI() {
  const [open, setOpen] = useState(true);
  const [num, setNum] = useState(10);
  const [animate, setAnimate] = useState(false);
  const [shade, setShade] = useState(createColor("#1976d2"));
  const [gradient, setGradient] = useState(createColor("#42a5f5"));
  const [color, setColor] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <List
        component="nav"
        dense={true}
        sx={{
          width: "100%",
          minWidth: 200,
          maxWidth: 200,
          bgcolor: "background.paper",
        }}
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="GUI" sx={{ color: "white" }} />
          {open ? (
            <ExpandLess sx={{ color: "white" }} />
          ) : (
            <ExpandMore sx={{ color: "white" }} />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding dense={true}>
            <Divider sx={{ mb: 1 }} />
            <Box sx={{ ml: 2, mr: 2, mb: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  pb: 1,
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                <ListItemText primary="N" sx={{ color: "white" }} />
                <TextField
                  size="small"
                  type="number"
                  value={num}
                  onChange={(e) => {
                    if (e.target.value >= 0) {
                      setNum(e.target.value);
                    } else {
                      setNum(0);
                    }
                  }}
                  sx={{ width: "50%", align: "right" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                <ListItemText primary="Animate" sx={{ color: "white" }} />
                <Checkbox
                  sx={{ align: "right" }}
                  onChange={() => {
                    setAnimate(!animate);
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                <ListItemText primary="Color" sx={{ color: "white" }} />
              </Box>
              <Box sx={{ pl: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  <ListItemText primary="Random" sx={{ color: "white" }} />
                  <Radio
                    value="a"
                    name="radio-buttons"
                    checked={color === "random"}
                    onClick={() => {
                      setColor("random");
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  <ListItemText
                    primary="Shade"
                    sx={{ color: "white", mr: 7 }}
                  />
                  <ColorPicker
                    hideTextfield
                    onChange={(color) => {
                      setShade(color);
                    }}
                    value={shade}
                  />
                  <Radio
                    value="a"
                    name="radio-buttons"
                    checked={color === "shade"}
                    onClick={() => {
                      setColor("shade");
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  <ListItemText
                    primary="Gradient"
                    sx={{ color: "white", mr: 7 }}
                  />
                  <ColorPicker
                    hideTextfield
                    onChange={(color) => {
                      setGradient(color);
                    }}
                    value={gradient}
                  />
                  <Radio
                    value="a"
                    name="radio-buttons"
                    checked={color === "gradient"}
                    onClick={() => {
                      setColor("gradient");
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
