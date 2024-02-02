import React from "react";
import Service from "../Service";

import HeadImg from "../../assets/serv3.jpg";
import Img from "../../assets/serv2.jpg";
const IES = () => {

  const head1 = "India Entry Services";

  const head2 = "India Entry Services";

  const para1 =
    "India is one of the fastest growing markets in the world. The growth in the number of organizations arriving in India has surged over the past 7 years. The Global market has a policy mandate which includes India as a story for fuelling the desired growth. With India becoming the desired destination for investments, for entrepreneurs, business conglomerates and individuals likewise, it is imperative that the Indian Legal policies and systems for investing, entering and setting up the business are well understood. When starting a business, one must decide what form of business entity to establish. Various factors are to be considered before starting a business. Our firm specialization includes providing India Entry Services in the following forms: • Private Limited Company • Branch Office (BO) • Liaison Office (LO) • Project Office (PO) • Limited Liability Partnership";

  const para2 =
    "Our team of experts are engaged in offering guidance, advisory and consultancy services with respect to laws and regulations of FEMA, RBI (Reserve Bank of India) and FDI policy to individuals and corporates including foreign clients. We offer FEMA consultancy that encompasses the entire gamut of foreign exchange law. These services are immensely appreciated in the market due to their timely completion and cost-effectiveness. The offered services are rendered in varied forms and terms that meet the client’s demand. We hereby ensure that your business is in compliance with relevant laws applicable to foreign investments.";

  const head3 =
    "Procedure/Requirement to setup Private Limited Company by Indian Nationals in India:";

  const points = [
    "The very first step in the incorporation of a company is the name reservation. A company is identified through the name with which it is registered. It is very important to have a proper name which should also reflect the activities to be carried out by the company. So for name reservation, a maximum of two (2) names in order of preference should be given. Once the name is approved by the Registrar of Companies (RoC), it will be Valid for twenty (20) days from the date of approval. The main object to be carried out by the proposed company should be given.",
    "DSC is the digital equivalent (i.e. electronic format) of physical or paper certificates. It can be presented electronically to prove one’s identity or to sign certain documents digitally. The DSC of the proposed director is mandatory because the incorporation forms are signed with DSC Act.",
    "A minimum of two (2) members are required to setup a private limited company in India. They may either be individual or body corporate. The details of the subscribers are required to be given.",
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

export default IES;
