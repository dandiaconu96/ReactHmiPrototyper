import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home,
  FlightTakeoff,
  People,
  Umbrella,
  Flag,
  Settings,
} from "@mui/icons-material";

const items = [
  { icon: <Home />, label: "Home" },
  { icon: <FlightTakeoff />, label: "Airplane" },
  { icon: <People />, label: "People" },
  { icon: <Umbrella />, label: "Umbrella" },
  { icon: <Flag />, label: "Flag" },
  { icon: <Settings />, label: "Settings" },
];

const ProgramList: React.FC = () => {
  return (
    <Box
      sx={{
        height: "150px",
        overflowY: "auto",
        marginTop: "8px",
        border: "1px solid",
        borderRadius: "4px",
      }}
    >
      <List>
        {items.map((item, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProgramList;
