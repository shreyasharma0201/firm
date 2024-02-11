import React from 'react'
import {  
    Grid, 
    Typography,
    Card,
    CardContent,
} from "@mui/material";
// icons
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
// components
import Title from './Title'
import Paragraph from './Paragraph'
import ServiceCard from './ServiceCard';

const Content = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        px: 2,
      }}
    >
      <Grid item xs={12} sm={12} md={5} component="section">
        <Title text={"Bussiness Services"} textAlign={"start"} />

        <Typography
          variant="h6"
          component="h4"
          sx={{
            fontWeight: "400",
            paddingTop: 1,
          }}
        >
          Premium Services
        </Typography>

        <Paragraph
          text={
            " We create a culture that inspires us to work smart, together to Connect businesses, ideas, and people for greater impact."
          }
          maxWidth={"75%"}
          mx={0}
          textAlign={"start"}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          text="Registration of NGOs"
          link="/about/registration-ngos"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          text="Foreign Direct Investment"
          link="/about/foreign-direct-investment"
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={2}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Card
          square={true}
          sx={{
            boxShadow: "none",
            minHeight: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardContent>
            <ArrowCircleRightRoundedIcon
              sx={{ color: "orange" }}
              fontSize="large"
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          text="Corporate Legal compliances"
          link="/about/secretarial-corporate-legal-compliances"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          text="India Entry Services"
          link="/about/india-entry-services"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          text="Direct & Indirect Taxation Services"
          link="/about/direct-indirect-taxation"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={2}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Card
          square={true}
          sx={{
            boxShadow: "none",
            minHeight: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardContent>
            <ArrowCircleRightRoundedIcon
              sx={{ color: "orange" }}
              fontSize="large"
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          text="IPR Laws"
          link="/about/intellectual-property-rights"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard text="Registration & Licensing Services" link="/about/licensing-and-registration" />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          text="Audits Services"
          link="/about/audits"
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={2}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Card
          square={true}
          sx={{
            boxShadow: "none",
            minHeight: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardContent>
            <ArrowCircleRightRoundedIcon
              sx={{ color: "orange" }}
              fontSize="large"
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          text="Merger and Amalgamation (M&A)"
          link="/about/merger-and-amalgamation/"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          text="International Advisory (IA)"
          link="/about/international-advisory/"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          text="Virtual CFO Services"
          link="/about/virtual-cfo-services/"
        />
      </Grid>
    </Grid>
  );
}

export default Content