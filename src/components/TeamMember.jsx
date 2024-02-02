// TeamMember.js
import React from "react";
import { Typography, Paper } from "@mui/material";

const TeamMember = ({ image, alt, text, component, description }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px",
    }}
  >
    <img
      src={image}
      alt={alt}
      style={{
        height: "50%",
        width: "50%",
        objectFit: "cover",
        marginBottom: "10px",
      }}
    />
    <Typography variant="h5" sx={{ color: "orange", fontWeight:"500", textAlign: "center" }}>
      {text}
    </Typography>
    <Typography sx={{ fontSize: "1rem", fontWeight:"400", color: "grey" }}>
      {component}
    </Typography>
    <Paper
      sx={{
        color: "black",
        padding: "10px",
        textAlign: "center",
        maxWidth: "600px",
        width: "100%",
      }}
    >
      <Typography sx={{ fontSize: "0.9rem", color: "#515151" }}>
        {description}
      </Typography>
    </Paper>
  </div>
);

export default TeamMember;
