import React from "react";
import Service from "../Service";
import HeadImg from "../../assets/img1.jpg";
import Img from "../../assets/img4.jpg";

const SCL = () => {
  const head1 = "Secretarial & Corporate Legal Compliances";

  const head2 = "Secretarial & Corporate Legal Compliances";

  const para1 =
    "A Company registered in India is governed by the Companies Act, 2013 and it has to comply with various provisions of the Companies Act, 2013 applicable to that company. Our qualified secretarial team assists companies and their directors, shareholders and managers with all aspects of Company Law administration and compliances. The team consists of highly qualified practicing Company Secretaries and company secretarial assistants, having extensive in-depth knowledge of relevant laws, rules and the statutory compliances applicable to a company. We are engaged in advising corporates on regulatory compliance and the interpretation of corporate laws, foreign exchange laws and taxation and to guide about legal and procedural aspects of corporate affairs.";

  const para2 =
    "We work in coordination with clients to provide them integrated business solutions keeping in view the applicable Indian legal environment. We aim to provide data-driven insights, give an authoritative guidance on corporate law matters, and also provide tailored support to improve individual, functional and corporate performance. Our solutions are cost-effective, peer-informed and immediately actionable. We have the desired competence and expertise to provide legal assistance and advice in different perspectives and jurisdictions. We have already provided our services to a number of clients across the sphere in setting up their business in India in a variety of fields along with their post-compliances. We ensure that your business is compliant with the applicable laws of the land.";

  const head3 =
    "Our team has proficiency in providing the following end-to-end secretarial services under the Corporate Legal Practice:";

  const points = [
    "Company and Limited Liability Partnership (LLP) Incorporation",
    "Branch registration",
    "Statutory Compliance such as conducting various board meetings, shareholder meetings, maintenance of various books and records etc",
    "Preparing documentation, resolutions which are necessary to convene, hold the board meeting and annual general meeting",
    "Maintaining the company’s minute books",
    "Voluntary strike-off and obtaining Dormant status",
    "Change of Name or Change of registered office",
    "Changes in share capital which includes increases in authorised share capital, further issue, transfers and allotments of shares etc.",
    "Protection of stakeholders’ interest",
    "Statutory approvals from Ministry of Corporate Affairs (MCA), Registrar of Companies (RoC), RD and NCLT",
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

export default SCL;
