import React from "react";
import Service from "../Service";

import HeadImg from "../../assets/serv8.jpg";
import Img from "../../assets/serv4.jpg";

const IPR = () => {
  const head1 = "Intellectual Property Rights";

  const head2 = "Intellectual Property Rights (IPRs)";

  const para1 =
    "Intellectual property is the product of the human intellect including creativity concepts, inventions, industrial models, trademarks, etc. Intellectual Property allows their owner to avail the benefit from their products which was initially an idea that was developed and crystallized. Intellectual property also entitles the owner to prevent others from using, dealing or tampering with the product without prior permission. The owner can, in fact, legally sue them and force them to stop and compensate for any damages. The services which are covered under IPR are Trademark, Copyright, Patent, Designs, and Geographical Indication.";

  const para2 =
    "Our team comprises of experienced attorneys having expertise and possess technical and legal qualification in the field of Copyright, Patent, and Trademark. As a growing team of IPR specialists, the team is engaged in providing guidance, advice and assistance to IPR owners, both domestic and international, on how to legally protect their intellectual creations and to prevent the third parties from enjoying their creativity. The firm has expertise in providing cost-effective, convenient and easy solutions regarding issues involving client IPR products with due diligence and examination.";

  const head3 =
    "We provide the following services for Trade Mark under Trade Marks Act, 1999:";

  const points = [
    "Trademark Search in IP (Intellectual Property) Database",
    "Advisory & Assistance in TM (Trademark) classification",
    "Drafting of User Affidavit & Application",
    "Filing of the Trademark Application",
    "Appearing before Trade Mark Registry at the time of hearing",
    "Renewals & Restoration of TM",
    "Revocations/Cancellations of TM",
    "Transfer/Assignment of TM",
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

export default IPR;
