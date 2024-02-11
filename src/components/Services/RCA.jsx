import React from "react";
import Service from "../Service";
import HeadImg from "../../assets/img4.jpg";
import Img from "../../assets/img2.jpg";

const RCA = () => {
  const head1 = "Audit Services";

  const head2 =
    "Audit Services";

  const para1 = (
    <>
    <p>
    Audit is a detailed, independent and unbiased examination and evaluation of financial accounts with an objective to provide an opinion, whether an organization’s financial statements represent a true & fair view or not.
    </p>
    <p>
    Our Audit team is comprised of highly experienced subject matter experts including qualified Chartered Accountants and Company Secretaries with legal and technical knowledge of various laws such as Companies Act, 2013, Income Tax Act, 1961, Goods and Service Tax Act, 2017 etc. We conduct various Audits, independent review of deals, documents, transactions that can prove its reliability, accountability, correctness, and validity.Our team prepares an extensive audit plan and strictly adheres to it during the audit to identify the key observations and risk involved. We understand the client need and provide them guidance and advice accordingly to enhance productivity and achieve results at the same time.
    </p>
  
  </>
  )
  

  const para2 =
    "Our audit and assurance team provides quality audit, independent qualified opinion and conclusion and related financial services that can help organizations to achieve their desired goals. Our audit processes gives a clear picture of the company’s finances, helps management, investors and stakeholders to take the necessary steps required to improve the company’s growth potential. We offer affordable and cost-effective audit services to both corporates and individuals that are tailored to suit the requirement of specific organization.";

  const head3 = "Our Audit services include the following:";

  const points = [
    "Accounting and Tax Advisory",
    "Internal and Statutory Audit",
    "Stock and Bank Audit",
    "Secretarial Audit, Management Audit and Forensic Audit",
    "Information Technology Assessment / IT Audit",
    "Risk assessment and Risk Managements Advisory",
    "Operations and Efficiency Audit",
    "Due Diligence Review and Certification work",
    "Income Tax Audit u/s 44AB of Income Act, 1961",
    "Transfer Pricing Audit u/s 92E of Income Act, 1961",
    "Audit of Form 15CA and 15CB of Income Tax Act, 1961",
    "GST (Goods and Service Tax) Audit",
    "Audit of Form 10B in case of NGOs (Non-governmental organization)",
    "Limited Review of Financial Statements for valuations, reporting etc.",
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
        points={points} // Pass the 'points' array as a prop
      />
    </>
  );
};

export default RCA;
