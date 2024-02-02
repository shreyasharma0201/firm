import React from "react";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const ServiceCard = ({ text, link }) => {
  return (
    <Card
      square={true}
      sx={{
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid #ccc",
      }}
    >
      <CardContent>
        <IconButton component={Link} to={link}>
          <ArrowForwardIosRoundedIcon
            sx={{ color: "orange" }}
            fontSize="large"
          />
        </IconButton>
        <Typography
          variant="h5"
          component="p"
          sx={{
            fontWeight: 700,
            textTransform: "capitalize",
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
