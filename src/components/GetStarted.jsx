import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/img5.jpg';
import imgDetail2 from '../assets/img6.jpg';

const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography)(({ theme }) => ({
      textAlign: "start",
      lineHeight: "1.5",
      color: "#515151",
      marginTop: "1rem",
      // padding: theme.spacing(2),
      [theme.breakpoints.up("xs")]: {
        fontSize: "1rem", // Adjust the font size for small screens and above
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.1rem", // Adjust the font size for medium screens and above
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.2rem", // Adjust the font size for large screens and above
      },
    }));

    return (
      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 0 }}
        sx={{
          py: 5,
        }}
      >
        <CustomGridItem item xs={12} sm={8} md={6} component="section">
          <Box
            component="article"
            sx={{
              px: 2,
            }}
          >
            <Title
              text={"Welcome to Sachin K & Associates"}
              textAlign={"start"}
            />
            <CustomTypography>
              The Firm has access to network of high quality experienced
              lawyers/Professional in all major commercial cities of India. As
              such, the Firm is well placed to service the requirements of its
              clients across India in all ﬁelds of law as well as adequately
              equipped to handle cross-border transactions. The lawyers and
              other professionals of the firm collectively present signiﬁcant
              and diverse professional experiences in the legal ﬁelds. The Firm
              focuses on providing high quality, business oriented, innovative
              and cost-effective legal , compliance and business solutions to
              clients.
            </CustomTypography>
          </Box>
        </CustomGridItem>

        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            mx: { xs: 2, sm: 0 },
          }}
        >
          <img
            src={imgDetail}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            order: { xs: 4, sm: 4, md: 3 },
            mx: { xs: 2, sm: 0 },
          }}
        >
          <img
            src={imgDetail2}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>

        <CustomGridItem
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            order: { xs: 3, sm: 3, md: 4 },
          }}
        >
          <Box
            component="article"
            sx={{
              px: 2,
            }}
          >
            <Title text={"About Us"} textAlign={"start"} />
            <CustomTypography>
              The Firm offers a wide range of expert legal services in the areas
              of corporate and commercial laws and specializes in representing
              major foreign and domestic corporations with diverse business
              interests in India.
            </CustomTypography>
            <CustomTypography>
              The Firm also offers proven capabilities in litigation and dispute
              resolution practice areas, especially in handling international
              and domestic arbitrations as well as litigation in the various
              High Courts of India and various judicial and quasi-judicial
              tribunals/forums including at National Company Law Tribunal,
              Appellate Tribunals, Tax Tribunals, Competition Commission,
              Designated Authorities and other adjudicatory bodies. We offer
              strategic advice to corporate debtors, creditors and other
              stakeholders during the insolvency proceedings and provide
              professional services required during the process and represent
              them in court/tribunal proceedings.
            </CustomTypography>
          </Box>
        </CustomGridItem>
      </Grid>
    );
}

export default GetStarted;