import React, { useState, useRef } from 'react';
import {
  Button,
  Grid,
  Stack,
  TextField,
  Card,
  CardContent,
  Typography,
  styled
} from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';
import emailjs from "@emailjs/browser";

import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const Details = () => {

  const serviceId = "service_79nwtah";
  const templateId = "template_o8ypzf9";
  const publicKey = "hjiBqI691MMCGe88h";
  
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );
      console.log(result.text);
      alert('Form submitted successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.log(error.text);
      alert('Form submission failed. Please try again.');
    }
  }

  const CustomTypography = styled(Typography)(({ theme }) => ({
    textAlign: "start",
    color: "#515151",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1rem",
      // fontWeight: 400,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
      // fontWeight: 450,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
      // fontWeight: 500,
    },
  }));
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Title text={"Get In Touch"} textAlign={"center"} />
      <Paragraph
        text={
          "Sachin K & Associates is a premier full service advisory ﬁrm. Our motto is provide customized and efficient services to our clients using best industry practices. We are headquartered at Ghaziabad, Uttar Pradesh and serving our clients on PAN India basis. We are team of experienced professionals who add value to their business."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Card variant="outlined">
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "space-between",
                }}
              >
                <LocalPhoneRoundedIcon
                  sx={{ color: "orange", fontSize: 30, marginRight: "8px" }}
                />
                <CustomTypography>
                  +91-9911124032; +91-8178615430
                </CustomTypography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <EmailRoundedIcon
                  sx={{ color: "orange", fontSize: 30, marginRight: "8px" }}
                />
                <CustomTypography>
                  cssachin.kumar@gmail.com; cssachin.kumar@yahoo.com
                </CustomTypography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <HomeRoundedIcon
                  sx={{ color: "orange", fontSize: 30, marginRight: "8px" }}
                />
                <CustomTypography>
                  Plot No. 55, Ground Floor, Flora Enclave Gangapuram, Behind
                  Shivalik Hospital, Ghaziabad 201013, Uttar Pradesh, India
                </CustomTypography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <form
            ref={form}
            component="form"
            validate="true"
            onSubmit={handleSubmit}
            sx={{
              // mt: 1,
              // py: 1,
              "& .MuiTextField-root": {
                marginBottom: "16px",
              },
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              value={phone}
              label="Phone Number"
              type="tel"
              id="phone"
              autoComplete="tel"
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              value={message}
              autoComplete="message"
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button
              variant="contained"
              fullWidth
              type="submit"
              size="large"
              sx={{
                fontSize: "0.9rem",
                textTransform: "capitalize",
                borderRadius: 0,
                backgroundColor: "#14192d",
                "&:hover": {
                  backgroundColor: "orange",
                },
              }}
            >
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Details;


