import React from "react";
import {
  Typography,
  Paper,
  Stack,
  styled,
  List,
  ListItem,
  Grid,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const Service = ({
  head1,
  HeadImg,
  head2,
  para1,
  para2,
  Img,
  head3,
  points,
}) => {
  const CustomTypography = styled(Typography)(({ theme }) => ({
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1rem",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
    },
  }));

  return (
    <>
      <Paper
        sx={{
          position: "relative",
          backgroundImage: `url(${HeadImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          minHeight: "300px",
          textAlign: "center",
          padding: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ zIndex: 1, fontWeight: 600 }}>
          {head1}
        </Typography>
      </Paper>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 4,
          px: 2,
          display: { xs: "flex" },
        }}
      >
        <Typography
          sx={{
            zIndex: 1,
            fontSize: {
              xs: "1.5rem",
              sm: "1.75rem",
              md: "2rem",
              lg: "2.5rem",
            },
            fontWeight: 400,
            color: "orange",
          }}
        >
          {head2}
        </Typography>
        <CustomTypography>{para1}</CustomTypography>
        <CustomTypography>{para2}</CustomTypography>
        <Grid container spacing={4} sx={{ marginY: 4 }}>
          <Grid item xs={12} md={6} sx={{ justifyContent: "center" }}>
            <img src={Img} alt="Service" style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                textAlign: "start",
                zIndex: 1,
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.1rem",
                  lg: "1.2rem",
                },
                fontWeight: 400,
                color: "orange",
              }}
            >
              {head3}
            </Typography>

            <List
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.1rem",
                  lg: "1.2rem",
                },
                textAlign: "start",
                lineHeight: "1.25",
                color: "#515151",
                // margin: "1.5rem",
              }}
            >
              {points.map((point, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "inline-flex",
                    alignItems: "flex-start",
                    marginRight: 1,
                  }}
                >
                  <span style={{ marginRight: "0.3em", fontSize:"1.5rem"}}>&#x2022;</span>
                  {point}
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Service;
