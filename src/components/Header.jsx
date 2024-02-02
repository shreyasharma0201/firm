import { React, useState, useEffect } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import { Link } from "react-router-dom";
//img
import headerImg1 from "../assets/img3.jpg";
import headerImg2 from "../assets/img1.jpg";
import headerImg3 from "../assets/img9.jpg";
import headerImg4 from "../assets/img7.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Header = () => {
  const images = [headerImg1, headerImg2, headerImg3, headerImg4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2),
    paddingTop: theme.spacing(4),
    background:
      "linear-gradient(180deg, rgba(37,150,190,1) 0%, rgba(118,218,239,1) 100%)",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  const CustomTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: "#fff",

    [theme.breakpoints.up("xs")]: {
      fontSize: "2.3rem", // Adjust the font size for small screens and above
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem", // Adjust the font size for medium screens and above
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem", // Adjust the font size for large screens and above
    },
  }));

  const AnimatedImage = styled("img")(({ theme }) => ({
    width: "100%",
    marginBottom: -4.1,
    backgroundColor: "transparent",
    animation: `${fadeIn} 2s ease-in-out`,
    transition: "opacity 1s ease-in-out",
    opacity: currentImageIndex === images.indexOf(images[currentImageIndex]) ? 1 : 0,
    zIndex: currentImageIndex,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <CustomBox component="header">
      {/*  Box text  */}
      <BoxText component="section">
        <CustomTypography>
          Empowering Your Financial Future, One Strategic Move at a Time
        </CustomTypography>

        <Typography
          variant="p"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "#fff",
          }}
        >
          We have more than 100+ satisfied clients.
        </Typography>

        <Box>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              borderColor: "#14192d",
              color: "#fff",
              backgroundColor: "#14192d",
              "&&:hover": {
                backgroundColor: "orange",
              },
              "&&:focus": {
                backgroundColor: "#343a55",
              },
            }}
          >
            know more
          </Button>
          <Button
            component={Link}
            to={"/about"}
            variant="outlined"
            sx={{
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              color: "#fff",
              backgroundColor: "transparent",
              borderColor: "#fff",
              "&&:hover": {
                color: "#343a55",
                borderColor: "#343a55",
              },
              "&&:focus": {
                color: "#343a55",
                borderColor: "#343a55",
              },
            }}
          >
            explore
          </Button>
        </Box>
      </BoxText>

      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flex: "1",
            paddingTop: "30px",
            alignSelf: "center",
          },
          [theme.breakpoints.up("md")]: {
            flex: "2",
            alignSelf: "flex-end",
          },
        })}
      >
        <AnimatedImage
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </Box>
    </CustomBox>
  );
};

export default Header;
