import React from "react";
import Service from "../Service";
import HeadImg from "../../assets/serv2.jpg";
import Img from "../../assets/serv1.jpg";

const CSF = () => {
  const head1 = "Corporate Secretarial Services";

  const head2 =
    "Foreign Direct Investment (FDI) in India, its Process and FEMA Laws";

  const para1 =
    "Foreign Direct Investment (FDI) is an investment made by an entity or individual resident of one country into the business activity of a foreign country. FDI is considered a cross-border investment and a major source of non-debt financial resources for the economic development of a country. Foreign Investment in India is governed by the FDI policy announced by the Government of India and the provisions of the Foreign Exchange Management Act, (FEMA) 1999. India is the fastest-growing economies which made it one of the most popular destinations in the world for FDI. The growing economy, infrastructure, manpower, incentives to foreign investors, growing demand, business opportunities, government policies are some of the reasons foreign nationals are attracted to and investing in India. As per the data released by the Department for Promotion of Industry and Internal Trade (DPIIT), the total FDI inflows in India in F.Y. 2022-23 (from April – September) is 26,210 US$ million.";

  const para2 =
    "Our team of experts are engaged in offering guidance, advisory and consultancy services with respect to laws and regulations of FEMA, RBI (Reserve Bank of India) and FDI policy to individuals and corporates including foreign clients. We offer FEMA consultancy that encompasses the entire gamut of foreign exchange law. These services are immensely appreciated in the market due to their timely completion and cost-effectiveness. The offered services are rendered in varied forms and terms that meet the client’s demand. We hereby ensure that your business is in compliance with relevant laws applicable to foreign investments.";

  const head3 =
    "The following FEMA & RBI related services are rendered by our experienced professionals:";

  const points = [
    "Registration with RBI (Reserve Bank of India) on Firms portal.",
    "Inward remittances to India under FEMA (Foreign Exchange Management Act)",
    "Advisory services on FEMA, 1999 and RBI Act, 1934",
    "Compliances related to allotment or transfer of securities and related RBI reporting",
    "Obtaining necessary approvals under FEMA from RBI and Foreign Investment Promotion Board (FIPB)",
    "Compounding & Representation before RBI",
    "Export and import of Goods and Services",
    "Compliance of applicable FEMA and RBI provisions",
    "Issuing statutory certificates under FEMA & RBI regulations",
    "Preparing and filing FC-GPR (Foreign Currency Gross Provisional Return), FC-TRS (Foreign Currency Transfer of Share), FLA (Foreign Liabilities and Assets) Returns etc.",
  ];

  return (
    <>
      <Service
        head1={head1}
        HeadImg={HeadImg}
        head2={head2}
        para1={para1}
        para2={para2}
        Img={Img}
        head3={head3}
        points={points}
      />
    </>
  );
};

export default CSF;
