import React from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import careerGrowth from '../../assets/images/careerGrowth.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom';

function Form() {
  return (
<>
<div>
<Typography
        color="gray"
        variant="h2"
        className=" mt-10 font-bold text-center font-poppins text-white"
      >
        Start your Career Journey with us!
</Typography>


<Typography
        color="gray"
        variant="h3"
        className=" mt-20 font-normal text-center font-poppins text-white"
      >
        Answer a few questions to get started !
</Typography>
</div>
<div className="flex justify-center items-center h-screen">
  <div className="bg-contain bg-center h-full w-screen mt-0 xl:w-full xl:h-1/2 "
    style={{
      backgroundImage: `url(${careerGrowth})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  >
    
  </div>
</div>

    
<div >
    <Card color="transparent" shadow={false}>
      <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/3 mx-auto">
      
        <div className="mb-10 flex flex-col ">
      <Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
       Rate yourself in Logical Quotient Rating (1-10)
      </Typography>
      
          <Input
            size="xl"
            type="text"
            required
            className="font-poppins text-white mb-5"
          />


      <Typography
        color="gray"
        className="mt-1 font-semibold text-xl font-poppins text-white"
      >
        Rate yourself in Coding Skills  (1-10)
      </Typography>

          <Input
            size="xl"
            required
            className="font-poppins text-white mb-5"
          />

          
      <Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
        Rate yourself in Public Speaking (1-10)
      </Typography>
          <Input
            type="password"
            size="xl"
            
            required
            className="font-poppins text-white mb-5"
          />


<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
      Which career path are you interested in?
      </Typography>
          <Input
            type="password"
            size="xl"
            required
            className="font-poppins text-white mb-5"
          />

<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
        Your interested subject?
      </Typography>
          <Input
            type="password"
            size="xl"
            
            required
            className="font-poppins text-white mb-5"
          />

<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
        Are you currently looking for Internships/Jobs?
      </Typography>
          <Input
            type="password"
            size="xl"
            
            required
            className="font-poppins text-white mb-5"
          />


        </div>
        <Button className="mt-6 font-poppins text-xl text-white font-poppins font-bold py-3 px-0 border-0 rounded-md bg-blue-600  font-poppins  cursor-pointer hover:bg-transparent hover:text-blue-600" fullWidth>
          
          
          <Link to="/" className="text-white">RESULTS</Link>

        </Button>
        
      </form>
    </Card>
    </div>
    </>
  );
}

export default Form;
