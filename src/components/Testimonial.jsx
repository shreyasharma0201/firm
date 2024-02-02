import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Stack
} from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";


const Testimonials = () => {
  // Placeholder data for testimonials
  const testimonials = [
    {
      id: 1,
      content:
        "Sachin K & Associates has been instrumental in enhancing our wealth management strategies. Their financial consultants have a keen understanding of market dynamics, enabling us to make informed investment decisions. We appreciate the personalized approach and professionalism displayed by the entire Sachin K & Associates team.",
      author: "Ayush Pandey",
      position: "MD, SST India",
    },
    {
      id: 2,
      content:
        "Sachin K & Associates has been an invaluable partner in navigating the complex landscape of financial regulations and compliance. Their expert team provided us with strategic advice that significantly enhanced our financial decision-making processes. We highly recommend Sachin K & Associates for their professionalism, industry knowledge, and commitment to excellence.",
      author: "Shreyansh",
      position: "Director, Suprema Biometrics India",
    },
    {
      id: 3,
      content:
        "In the legal sector, precision and expertise are paramount, and Sachin K & Associates has consistently delivered exceptional services. Their legal team's deep understanding of regulatory frameworks and their ability to anticipate industry changes have made them an indispensable ally for our firm. ",
      author: "Ms. Chandani",
      position: "Director, MMA Healthcare",
    },
  ];

  return (
    <Stack
      component="section"
      direction="column"
      // justifyContent= 'center'
      // alignItems='center'
      sx={{
        py: (theme) => theme.spacing(6), 
        mx: (theme) => theme.spacing(2),
      }}
    >
      <Title text={"Testimonials"} textAlign={"center"} />
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {testimonials.map((testimonial) => (
            <Grid item key={testimonial.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 0,
                  maxWidth: 400,
                  margin: "0 auto",
                  backgroundColor: "#f2f2f2",
                }}
              >
                <CardContent>
                  <Typography variant="body1" paragraph>
                    {testimonial.content}
                  </Typography>
                  {/* <Avatar
                    src={`https://i.pravatar.cc/150?u=${testimonial.id}`}
                    alt={testimonial.author}
                    sx={{
                      width: 64,
                      height: 64,
                      marginBottom: 2,
                    }}
                  /> */}
                  <Typography variant="h6" color="#2596be">
                    {testimonial.author}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {testimonial.position}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}

export default Testimonials;
