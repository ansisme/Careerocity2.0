import { Typography } from "@material-tailwind/react";
import React from "react";
import Footer from "../Footer/Footer";
function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 para">
      <Typography className="text-white text-6xl font-semibold whitespace-nowrap">
        About us
      </Typography>
      <p className="text-lg leading-7 mb-4 mt-20 text-white para">
        Our project aims to build a Central Repository which will act as a Resource Bank for students to help them find the correct resources in the field of their skill interest.
        The project is specifically designed to foster students who are in their pre-final or final years of college and allows them to select resources based on their acquired skill sets. This way, the students can make informed decisions and take steps towards their career aspirations.
      </p>
      <p className="text-lg leading-7 mb-4 text-white para">
       
      </p>
      {/* <Footer className="mt-10" /> */}
    </div>
  );
}

export default AboutUs;
