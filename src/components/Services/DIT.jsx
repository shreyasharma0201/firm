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
import HeadImg from "../../assets/serv7.jpg";

const DIT = () => {
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
  const head1 = "Direct & Indirect Taxation Services";

  const head2 = "Direct & Indirect Taxation Services";

  const para1 =
    "Our Direct & Indirect Tax teams comprise of experienced chartered accountants, attorneys who have multiple qualifications and experience of more than 10 years in the legal aspects of direct taxation that cater to the requirements of various Corporates as well as Individuals. We here also understand and deals with the complex and specific issues involved in all matters related to direct taxes at both domestic as well as international level. Our services cover all aspects of income tax laws such tax consultancy, tax compliances, international taxation, assessment proceedings etc.";

  const para2 =
    "Our tax team is competent enough to assist with necessary advice & guidance on better compliance with the taxation provisions. The opinions and advice provided are thoroughly researched and dual verified by professionals on the subject matter. Our services are highly cost effective and efficient, focusing on the specific needs of clients so as to provide maximum value and save their time & money.";

  const head3 = "Direct Taxation:";

  const points1 = [
    "Entry strategy with respect to Tax and Regulatory provisions",
    "Advisory on prevailing corporate tax incentives in the proposed business activities",
    "Tax-planning strategies for profit and dividend repatriation",
    "Advisory and assistance on resolving tax matters",
    "Advisory on Withholding Tax / Tax Deducted at Source (TDS)",
    "Computation of Monthly Tax Deducted at Source (TDS)",
    "Preparation and Filing of quarterly e-TDS Returns",
  ];

  const head4 = "Indirect Taxation:";

  const points2 = [
    "Goods & Service Tax / Value-Added Tax (GST/VAT)",
    "Advisory with regard to tax applicability, procedural and statutory compliances such as registration, assessments, tax deposit, statutory returns",
    "Review of agreements to help mitigate the overall incidence of Goods and service",
    "Conduct Goods and Service tax health checks to determine the Goods and service tax implications on client operations, gauge compliance with legal provisions and also suggest tax planning opportunities to clients in order to minimize the tax liability.",
    "Legal opinions related to Goods and Service Tax issues",
  ];

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
              {points1.map((point, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginRight: 1,
                  }}
                >
                  <span style={{ marginRight: "0.3em", fontSize:"1.5rem"}}>&#x2022;</span>
                  {point}
                </ListItem>
              ))}
            </List>
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
              {head4}
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
              {points2.map((point, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
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

export default DIT;
