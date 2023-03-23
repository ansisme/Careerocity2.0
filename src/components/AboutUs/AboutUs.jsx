import { Typography } from "@material-tailwind/react";
import React from "react";
import Footer from "../Footer/Footer";
function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 para">
      <Typography className="self-center  text-white text-6xl font-semibold whitespace-nowrap">
      About us
      </Typography>
      <p className="text-lg leading-7 mb-4 mt-20 text-white para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
      </p>
      <p className="text-lg leading-7 mb-4 text-white para">
        Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.
      </p>
      <Footer className="mt-10"/>
    </div>
  );
}

export default AboutUs;
