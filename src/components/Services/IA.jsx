import React from "react";
import Service from "../Service";
import HeadImg from "../../assets/serv11.jpg";
import Img from "../../assets/serv12.jpg";

const IA = () => {
  const head1 = "International Advisory";

  const head2 = "International Advisory (IA)";
  const para1 =
    "Under International Advisory (IA), we provide consulting and advisory services to international organizations who wish to expand their base in India. We offer a wide range of customized technical & financial assistance to meet our clients' evolving needs and to fulfill the objectives of each assignment. We facilitate the corporates and individuals with their entry, recruitment, setting up offices, accounting, business reorganization, expansion etc. in India.";

  const para2 =
    "We have dynamic and highly motivated advisory team consists of knowledgeable members, senior policy advisors with policy expertise and well-regarded technical and legal experts committed to improving and increasing access to financial services in India. We work and provide our guidance to foreign clients to enable them to do business and to achieve their objectives of bilateral trade as well as presence in India. We believe in building long term trust based relationships that benefit our clients, partners, and other stakeholders. Our expert team work closely with the clients to understand their needs and develop a programme unique to their organisation and requirements.";

    const head3 = "We carry out a range of activities including:"
  const points = [
    "India Entry Advisory Services",
    "Legal as well as Technical assistance in all areas of banking, finance, strategy advice, policy making and Business and Management consulting",
    "Advisory on International Transaction",
    "Setting up Business and managing its Operations",
    "Guidance on Foreign Exchange Laws",
    "Implementation of innovative financial mechanisms",
    "Due diligence",
    "Policy advisory",
    "Business Reorganization",
    "Mergers, Acquisitions, and due diligence",
    "Transaction advisory",
  ];

  return (
    <>
      <Service
        head1={head1}
        HeadImg={HeadImg}
        head2={head2}
        head3={head3}
        para2={para2}
        para1={para1}
        points={points}
        Img={Img}
      />
    </>
  );
};

export default IA;
