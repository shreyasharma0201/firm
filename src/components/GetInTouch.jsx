import React from 'react'
import {
  Button,
  Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'



const GetInTouch = () => {

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: (theme) => theme.spacing(6),
        mx: (theme) => theme.spacing(2),
      }}
    >
      <Title text={"Our Vision"} textAlign={"center"} />
      <Paragraph
        text={
          "Our vision is to become the trusted partner for businesses seeking financial success. \
                We strive to provide customized financial solutions that promote growth and stability \
                for our clients. We aim to continuously improve, using our expertise to adapt to the dynamic \
                financial environment. Our goal is to be known for our integrity, reliability, and excellence \
                in corporate finance advisory services."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
      <Button
        component={Link}
        to={"/contact"}
        variant="contained"
        type="submit"
        size="medium"
        sx={{
          fontSize: "1rem",
          textTransform: "capitalize",
          py: 2,
          px: 4,
          mt: 3,
          mb: 2,
          borderRadius: 0,
          backgroundColor: "#14192d",
          "&:hover": {
            backgroundColor: "orange",
          },
        }}
      >
        get in touch
      </Button>
    </Stack>
  );
}

export default GetInTouch;