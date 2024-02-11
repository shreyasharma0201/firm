import React from "react";
import Img from "../../assets/serv18.jpg";
import HeadImg from "../../assets/serv17.jpg";
import Service from "../Service";

const NGO = () => {
  const head1 = "Registration of NGOs";

  const head2 = "Registration of NGOs (Non-Government Organisation)";

  const para1 = (
  <>
    <p>
      NGO stands for Non-Governmental Organization. It is an
      institution/organisation with a social mission and non-profit /
      charitable motive in the field of commerce, art, science, sports,
      education, research, social welfare, protection of environment,
      hospitals etc. An NGO may be registered under any of the following acts
      to carry out its social objectives:
    </p>
    <ul>
      <li>As a Society under the Societies Registration Act, 1860</li>
      <li>As a Charitable Trust under the Indian Trusts Act, 1882</li>
      <li>As a Section 8 Company under the Companies Act, 2013</li>
    </ul>
    <p>
      An NGO registered as a Trust or Society is governed by the registrar of
      the concerned state under the State Government whereas an NGO
      established as Section 8 Company under the Companies Act, 2013 is
      governed by the Ministry of Corporate Affairs (MCA).
    </p>
  </>
  );

  const para2 = (
    <>
    
      <p>
        <strong> Society under the Societies Registration Act, 1860 –  </strong>{" "}
        A Society denotes group of several individuals who come together for
        carrying out any literary, scientific or charitable activities. The
        activities of such Societies are regulated by the Societies Registration
        Act, 1860. The Societies are generally managed by a governing council or
        a managing committee.
      </p>
      <p>
        <strong> Charitable Trust under the Indian Trusts Act, 1882 – </strong>A
        charitable trust is established to carry out social, religious, and
        charitable objects and offers financial and other advantages to needy
        and low income societies. A trust may be created by any person including
        individual, company, HUF (Hindu Undivided Family) etc. who is competent
        to contracts. A Trust is needed to have a trust deed which is an
        essential and important evidence of the existence of a Trust.
      </p>
      <p>
        <strong> Section 8 Company under the Companies Act, 2013–  </strong> A
        Section 8 Company registered under the Companies Act, 2013, is a legal
        form of “Non-Profit Organizations (NPOs) or Non-Governmental
        organizations (NGOs)” engaged in promoting art, science, social welfare,
        religious, charity, sports, education, research, protection of the
        environment and other related activities. A Section 8 Company can be
        registered as a private limited or public limited company. In India, it
        is the most popular form of NPO because of its systematic constitutional
        framework which is easy to register, run or manage as compared to a
        Trust and a Society.
      </p>
    </>
  );

  const head3 =
    "Our experienced team provide cost effective, affordable and time bound services for registering the NGO in India which comprises of the following:";

  const points = [
    "Assistance is choosing the suitable method of registering the NGOs(Non-Governmental organizations)",
    "Obtaining registration with the relevant authorities",
    "Preparing necessary Documents such as Memorandum and Article of Association (MOA & AOA)",
    "Guidance in obtaining Foreign and Domestic Donations/Grants",
    "Obtaining exemption certificate u/s 12AA and 80G of Income Act, 1961",
    "Liaising with the relevant authorities and ensure speedy registration process",
    "Periodic and Annual compliances",
    "Accounting, book keeping and preparation of financial statements",
    "Payroll",
    "Solutions regarding Taxation, Statutory compliances and Audit",
    "Advisory& Consulting in carrying out its social objective",
    "Representation before various quasi-judicial bodies and regulators",
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

export default NGO;
