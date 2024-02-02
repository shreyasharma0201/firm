// TeamPage.js
import React from "react";
import { Box, Stack, Grid } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import TeamMember from "./TeamMember";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";

const TeamPage = () => {
  const teamMembers = [
    {
      image: team1,
      alt: "image1",
      text: "Sachin Kumar",
      component: " Founder & Managing Partner ",
      description:
        "Sachin Kumar is the Founder and Managing Partner of the ﬁrm with an experience of over 12 years in the ﬁeld of Corporate Laws. He is recognized for his innovative thinking and professional approach. His practice encompasses Corporate Consultancy and Legal advisory. He has rich experience and expert knowledge in Corporate Laws, India Entry Strategies, setting up Foreign Entities in India in the form of subsidiary, joint venture, Branch office, Liaison office and Project office, Legal Due Diligence and Corporate Governance. His practice areas include Corporate Transactional services, Cross-border Investments Strategies, Joint Ventures, Mergers & Acquisition (M&A), Business Restructuring, Legal Due Diligence, Compliance Management, Special Economic Zones (SEZs), Commercial and Industrial Real Estate, Company Law, LLPs, Foreign Exchange Management Act (FEMA), Labor and Employment Laws, Industrial Laws and Corporate Secretarial services. He has vast experience for representations and appearance before the Income Tax and National Company Law Tribunal, GST/VAT, Registrar of Company, Ministry of corporate Affairs other statutory authorities. He was associated with various reputed law ﬁrms and worked as group company secretary for well-known corporate group in Noida before starting the ﬁrm.",
    },
    {
      image: team2,
      alt: "image2",
      text: "Sanjay Srivastava ",
      component: "Associate Partner (FEMA & Corporate Law)",
      description:
        "Mr. Sanjay Srivastava is a Fellow Member of Institute of Company Secretaries of India (ICSI) and a law graduate. Sanjay is also the sole proprietor of Kumar Sanjay & Co, a practicing company secretaries firm based in Delhi- NCR. Sanjay has vast experience (more than 12 years) and specialization in the field of corporate laws, secretarial compliances, FEMA compliances, business restructuring, restaurants and bar set up, lease and license registration etc. Sanjay has appeared before quasi-judicial authorities in the matter of compounding, revival of companies etc and has also appeared before Regional Directors (RDs) and Registrar of Companies (ROCs) and ministries for various corporate law matters. Sanjay possesses profound skills along with in- depth corporate legal expertise to facilitate complex business transactions. Over the course of his working with various authorities, Sanjay has built a positive reputation amongst the Regulatory Authorities, Ministries etc.",
    },
    {
      image: team3,
      alt: "image3",
      text: "Rajeev Nayak",
      component: "Associate Partner (Valuation)",
      description:
        "Rajeev is a qualified Registered Valuer (S&FA), duly registered with Insolvency and Bankruptcy Board of India (“IBBI”). Rajeev has vast experience has experience  of more than 12 years in the field of valuations, corporate planning & restructuring, transaction advisory and compliances under SEBI laws. He has worked for ~ 10 years with SEBI registered category I Merchant Bankers where he had headed he valuation desk. Besides this, he has also worked on other merchant banking assignment like IPO, Takeover, Delisting, Corporate Restructuring etc. Rajeev is a qualified member of Institute of Company Secretaries of India (ICSI) and a law graduate. Rajeev is also a qualified Registered Valuer (S&FA), duly registered with Insolvency and Bankruptcy Board of India (“IBBI”)",
    },
  ];

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 8,
        px: 1,
        display: { xs: "flex" },
      }}
    >
      <Box
        component="section"
        sx={{
          paddingBottom: 3,
        }}
      >
        <Title text={"Meet our Team"} textAlign={"center"} />
        <Paragraph
          text={
            "Meet the dedicated minds behind Sachin K & Associates, the forefront of excellence in financial services. Our team brings together a dynamic blend of expertise, innovation, and a relentless commitment to delivering unparalleled solutions."
          }
          maxWidth={"sm"}
          mx={"auto"}
          textAlign={"center"}
        />
      </Box>

      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="stretch"

      >
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <TeamMember {...member} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default TeamPage;
