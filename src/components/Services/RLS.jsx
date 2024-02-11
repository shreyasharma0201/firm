import React from "react";
import Service from "../Service";
import HeadImg from "../../assets/img9.jpg";
import Img from "../../assets/serv8.jpg";


const RLS = () => {
  const head1 = "Registration & Licensing";
  
  const head2 = "Registration & Licensing Services";
  
  const para1 = "Nowadays starting a business in India is highly effective and efficient as all the processes/registrations are done through online platform. India has made a significant progress over the years, making it much easier for businesses to get started. While starting a business a person needs various registration and license for smooth functioning of the organisation and to comply with various applicable laws and regulations. The process of getting a License or Registration differs from industry to industry depending upon the specific state laws after considering variety of factors and criteria such as the number of workers, type of business, geographical jurisdiction of the organisation etc."

  const para2 = "Our team has in depth knowledge and experience in obtaining various license & registrations. We have developed the expertise & resources to cater complete range of professional services in the field of registration and licensing."
  
  const head3 = "Our range of licensing & registration services includes:";

  const points = [
    "Food Safety and Standards Authority (FSSAI) Licensing and Registration",
    "MSME (Micro, Small and Medium Enterprises) Registration",
    "Registration under Shop and Establishment Act",
    "Provident Fund (PF) and Employee State Insurance (ESI) Registration",
    "National Pension Scheme (NPS) Registration",
    "Trust and Society Registration",
    "Registration u/s 12AA and 12AB of Income Act, 1961",
    "DOT (Department of Telecommunications) Registration",
    "Registration Foreigner Regional Registration Ofﬁces (FRRO)",
    "Registration with Foreign Investment Promotion Board (FIPB)",
    "Software Technology Parks of India (STPI)",
    "Special Economic Zone (SEZ)",
    "Import-Export Code (IEC)",
    "Pollution Consent and Drug License",
    "ISO (International Organization for Standardization) Certification",
    "PSARA (Private Security Agencies (Regulation) Act) License"
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

export default RLS;
