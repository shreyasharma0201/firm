import React from "react";
import Service from "../Service";
import HeadImg from "../../assets/serv10.jpg";
import Img from "../../assets/img8.jpg";

const MA = () => {
  const head1 = "Merger & Amalgamation";

  const head2 = "Merger and Amalgamation (M&A)";

  const para1 =
    "Mergers and Amalgamation (M&A) is the area of corporate finances, management and strategy dealing with purchasing and/or joining hands with other companies. Merger involves a process of combining two companies into one to become a new business, usually with a new name. On the other hand, in an Amalgamation, one business acquires another generally small sized company which may be absorbed into the parent organization or run as a subsidiary. Mergers and Amalgamation are complex processes, time-critical and required highly specialized professional to execute the task. It requires skilled and expert professionals who understand the goals and challenges and bring best advice and solution to the table.";

  const para2 =
    "Out M&A team comprise of experienced Company Secretary, Chartered Accountant and Lawyers having robust knowledge and a decade practice in the field of M&A. We are engaged in providing consulting and advice services to the corporates on compliance of applicable laws, risk involved, taxation, foreign exchange laws and the related issues. Keeping in mind the requirement of the clients, the team gives detailed and extensive advice in the best possible way so that they can achieve the strategic objectives through mergers and amalgamation (M&A), divestitures and joint ventures. The expert team advises on all dimensions of M&A such as drafting, conducting due diligence, re-structuring, pricing and negotiation, determining the right valuation, minimise the financial risk associated with the deal, bring deeper analysis and faster insights to enable better decision-making etc.";

  const head3 = "Our corporate restructuring services include:";

  const points = [
    "Corporate Restructuring Advisory & Strategy formulation",
    "De-Merger",
    "Managing the entire Merger and Acquisition process",
    "Minimise the financial risk associated with the deal",
    "Conduct Due Diligence including commercial, operational, financial, tax, and regulatory",
    "Drafting, Vetting and Negotiation of Transaction Documents",
    "Satisfaction of Conditions Precedent",
    "Business Reorganization",
    "Determine the right valuation",
    "Providing necessary guidance in the best possible manner",
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

export default MA;
