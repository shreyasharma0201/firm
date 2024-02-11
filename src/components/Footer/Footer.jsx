import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    <>
      {/* <Contact></Contact> */}
      <BoxRow
        component="footer"
        sx={{
          py: 4,
          px: 2,
        }}
      >
        <StackColumn>
          <FooterTitle text={"address"} />
          <FooterLink
            text={
              "Plot No. 55, Ground Floor, Flora Enclave Gangapuram, Behind Shivalik Hospital, Ghaziabad 201013, Uttar Pradesh, India"
            }
          />
          <FooterLink text={"+91 9911124032"} />
          <FooterLink text={"+91 8178615430"} />
          <FooterLink text={"cssachin.kumar@gmail.com"} />
          <FooterLink text={"cssachin.kumar@yahoo.com"} />
        </StackColumn>

        <StackColumn>
          <FooterTitle text={"Our Services"} />
          <FooterLink
            text={"Corporate Legal"}
            link={"/about/secretarial-corporate-legal-compliances"}
          />
          <FooterLink
            text={"IPR Laws"}
            link={"/about/intellectual-property-rights"}
          />
          <FooterLink
            text={"International Advisory (IA)"}
            link={"/about/international-advisory/"}
          />
          <FooterLink text={"and many more"} link={"/about"}/>
        </StackColumn>
        <StackColumn>
          <FooterTitle text={"Our Company"} />
          <FooterLink text={"Explore"} link={"/"}/>
          <FooterLink text={"Get in touch"} link={"/contact"}/>
          <FooterLink text={"Team"} link={"/team"}/>
        </StackColumn>

        <StackColumn>
          <FooterTitle text={"Sachin K & Associates"} />
          {/* <Stack
            direction="row"
            width="70px"
            maxWidth="100%"
            justifyContent="space-between"
          >
            <Link
              href="#"
              variant="body2"
              sx={{
                color: "#414141",
                "&:hover": {
                  color: "#1c2859",
                },
              }}
            >
              <InstagramIcon />
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{
                color: "#414141",
                "&:hover": {
                  color: "#1c2859",
                },
              }}
            >
              <FacebookIcon />
            </Link>
          </Stack> */}
          <Typography variant="caption" component="p">
            &copy; 2024 Sachin K & Associates Inc.
          </Typography>
        </StackColumn>
      </BoxRow>
    </>
  );
}

export default Footer