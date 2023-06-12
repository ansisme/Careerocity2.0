import React,{useState} from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import careerGrowth from '../../assets/images/careerGrowth.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Predict from '../Predict/Predict';
import axios from 'axios';
function Form() {
const [formData, setFormData] = useState({
    databaseKnowledge: '',
    computerArchitecture: '',
    cyberSecurity: '',
    softwareDevelopment: '',
    programmingSkills: '',
    projectManagementSkills: '',
    technicalCommunicationExperience: '',
    interestsInAiOrMl: '',
    businessAnalysisSkills: '',
    communicationSkills: '',
    interestInDataVisualizationOrAnalysis: '',
    experience: '',
  });

   const [jobs, setJobs] = useState([]);
   const [loading, setLoading] = useState(false);
   
   const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
  
    const payload = {
      skill_1: formData.databaseKnowledge,
      skill_2: formData.computerArchitecture,
      skill_3: formData.cyberSecurity,
      skill_4: formData.softwareDevelopment,
      skill_5: formData.programmingSkills,
      skill_6: formData.projectManagementSkills,
      skill_7: formData.technicalCommunicationExperience,
      skill_8: formData.interestsInAiOrMl,
      skill_9: formData.businessAnalysisSkills,
      skill_10: formData.communicationSkills,
      skill_11: formData.interestInDataVisualizationOrAnalysis,
      skill_12: formData.experience,
    };
  
    axios.post('https://api3-282y.onrender.com/predict', payload)
      .then((response) => {
        setJobs(response.data['Your Recommended Job']);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert('An error occurred while fetching the job predictions. Please try again later.');
      });
  };
  

  const isFormValid = () => {
    const values = Object.values(formData);
    return values.every((value) => value.trim() !== '');
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
//new

//   try {
//     const response = await fetch('http://localhost:3001/predict', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ prompt })
//     });

//     const result = await response.json();
//     console.log(result);
//     // Do something with the result, such as displaying it on the webpage
//   } catch (error) {
//     console.error(error);
//   }
// });


// const handleSubmit = async (e) => {
//     e.preventDefault();
//     // setLoading(true);
//     try {
//     const response = await fetch('http://localhost:5675/predict', {
//           headers: {
// 'Content-Type': 'application/json'
//           }}
//     )
//       const result = await response.json();
//     console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
// }


const handleResultsClick = () => {
  handleSubmit({ preventDefault: () => {} });
};

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
<div>
    <span className='text-gradient flex-1 font-poppins font-bold text-[70px] text-white ss:text-[72px] ss:leadimg-[100px] leading-[75px]'>Rate yourself from 1- 10<br className='sm:block hidden'/>{"  "}</
      span> {" "}
</div>
    <Card color="transparent" shadow={false}>
      <form onSubmit = {handleSubmit} className="mt-8 mb-2 w-full max-w-screen-lg sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/3 mx-auto">
      
        <div className="mb-10 flex flex-col ">
      <Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
       Database knowledge
      </Typography>
      
          <Input
            size="xl"
            type='number'
            required
            name='databaseKnowledge'
            className="font-poppins text-white mb-5"
            value={formData.databaseKnowledge}
            onChange={handleChange}
          />


      <Typography
        color="gray"
        className="mt-1 font-semibold text-xl font-poppins text-white"
      >
       Computer Architecture
      </Typography>

          <Input
            size="xl"
            required
            type='number'
            name='computerArchitecture'
            className="font-poppins text-white mb-5"
            value={formData.computerArchitecture}
            onChange={handleChange}
          />

          
      <Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
        Cyber Security
      </Typography>
          <Input
            type="number"
            size="xl"
            name='cyberSecurity'
            required
            className="font-poppins text-white mb-5"
            value={formData.cyberSecurity}
            onChange={handleChange}
          />


<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
      Software Development
      </Typography>
          <Input
            type="number"
            size="xl"
            name='softwareDevelopment'
            required
            className="font-poppins text-white mb-5"
            value={formData.softwareDevelopment}
            onChange={handleChange}
          />

<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
      Programming Skills
      </Typography>
          <Input
            type="number"
            size="xl"
            name='programmingSkills'
            required
            className="font-poppins text-white mb-5"
            value={formData.programmingSkills}
            onChange={handleChange}
          />

<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
        Project Management Skills
      </Typography>
          <Input
            type="number"
            size="xl"
            name='projectManagementSkills'
            required
            className="font-poppins text-white mb-5"
            value={formData.projectManagementSkills}
            onChange={handleChange}
          />


<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
        Technical Communication experience
      </Typography>
          <Input
            type="number"
            size="xl"
           name='technicalCommunicationExperience'
            required
            className="font-poppins text-white mb-5"
            value={formData.technicalCommunicationExperience}
            onChange={handleChange}
          />

<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
        Interests in AI or ML
      </Typography>
          <Input
            type="number"
            size="xl"
           name='interestsInAiOrMl'
            required
            className="font-poppins text-white mb-5"
            value={formData.interestsInAiOrMl}
            onChange={handleChange}
          />


<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
      Business analysis skills
      </Typography>
          <Input
            type="number"
            size="xl"
            name='businessAnalysisSkills'
            required
            className="font-poppins text-white mb-5"
            value={formData.businessAnalysisSkills}
            onChange={handleChange}
          />

<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
     Communication Skills
      </Typography>
          <Input
            type="number"
            size="xl"
           name='communicationSkills'
            required
            className="font-poppins text-white mb-5"
            value={formData.commSkills}
            onChange={handleChange}
          />

<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
     Interest in visualization or analysis of data 
      </Typography>
          <Input
            type="number"
            size="xl"
           name='interestInDataVisualizationOrAnalysis'
            required
            className="font-poppins text-white "
            value={formData.interestInDataVisualizationOrAnalysis}
            onChange={handleChange}
          />

<Typography
        color="gray"
        className="mt-1 font-semibold text-xl  font-poppins text-white"
      >
    Experience in graphic designing
      </Typography>
          <Input
            type="number"
            size="xl"
            name='experience'
            required
            className="font-poppins text-white mb-5"
            value={formData.experience}
            onChange={handleChange}
          />


        </div>
        {/* <Button  disabled={!isFormValid() || loading} type="submit" className="mt-6 font-poppins text-xl text-white font-poppins font-bold py-3 px-0 border-0 rounded-md bg-blue-600  font-poppins  cursor-pointer hover:bg-transparent hover:text-blue-600" fullWidth>
            RESULTS
        </Button> */}
        <Button
  color="blueGray"
  disabled={!isFormValid() || loading}
  className="mt-5 mb-5 w-full"
  onClick={handleResultsClick}
>
  {loading ? 'Loading...' : 'Results'}
</Button>

        {/* {jobs.length > 0 && (
  <div className="mt-10">
    <Typography
      color="gray"
      variant="h3"
      className="mb-5 font-normal text-center font-poppins text-white"
    >
      Recommended Jobs
    </Typography>
    <ul>
      {jobs.map((job) => (
        <li key={job}>{job}</li>
      ))}
    </ul>
  </div>
)} */}
<div>

  <Predict
    // Link to = "/result" 
   jobs={jobs}/>
</div>

      </form>
    </Card>
    </div>
    </>
  );
}

export default Form;
