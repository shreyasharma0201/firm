import React from "react";
import Service from "../Service";
import HeadImg from "../../assets/serv14.jpg";
import Img from "../../assets/serv13.jpg";

const CFO = () => {
  const head1 = "Virtual CFO";

  const head2 =
    "Vitual CFO Services";

  const para1 =
    "Virtual CFO services are provided to the businesses who have not appointed an inhouse CFO (Chief Financial Officer). It offers a quick solution to the problems of business entities at the initial stage of business towards financial planning, setting up of accounts/finance department and Management Information System (MIS).";

  const para2 =
    "We offer virtual CFO services to help start-ups, small and medium enterprises to manage their finances in the best possible way. These services can help the owners with financial reporting, planning, forecasting, budgeting, implementation of suitable financial systems and many more. Our motive is to accelerate growth so that founders and owners can take their business to the next level. We’ll help in managing the cash flows, create strong efficiencies in the businessoperations and also be responsible for managing activities like financial reporting& bookkeeping, record keeping, financial strategy, accounting automation, payroll, and managing financial risks of the company.We offer the servicesat very affordable costswhich is a primary requirement of small business so that they can easily get access to our experienced financial professionals";

  const head3 = "Our Virtual CFO Services includes the following:";

  const points = [
    "Choosing the correct accounting tools based on the requirement",
    "Monitoring and controlling Cash Flows",
    "Keeps an eye on the financial health of the business",
    "Give companies back-office functions which include managing account ledgers",
    "Financial Reporting and Projections",
    "Resolution of any legal, commercial, accounting and tax matters",
    "Financial Reporting and Projections",
    "Implement Best practices for creating long term value for the Organisation",
    "Preparing MIS (Management Information System) reports.",
    "Future growth plan",
    "Audit Support",
    "Offer Financial guidance"
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

export default CFO;
