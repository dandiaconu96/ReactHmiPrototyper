import React from "react";
import { Box, Typography } from "@mui/material";

interface HeaderProps {
  leftLabel?: string;
  middleLabel?: string;
  rightLabel?: string;
}

const Header: React.FC<HeaderProps> = ({
  leftLabel = "Dummy 1 Second Line",
  middleLabel = "Dummy 2 Second Line",
  rightLabel = "20:45",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid",
        padding: "8px",
      }}
    >
      <Typography variant="body1">{leftLabel}</Typography>
      <Typography variant="body1">{middleLabel}</Typography>
      <Typography variant="body1">{rightLabel}</Typography>
    </Box>
  );
};

export default Header;
