import React from 'react';
import { Download, Padding } from '@mui/icons-material';
import "./pagesLayout.css";
import "../globals.css";
import "./Home.css"

const Home = () => {
  const data = require("../../../public/variable_assets/Home.json");
  return (
    <section id="home">
      <h1 className="px-10" id="title">Home</h1>
      <div className="flex flex-col-reverse justify-center items-center p-2 m-2 md:flex-row">
        <div className="text md:w-2/3 md:p-10">
          <p className='heading1'>Hii, I am {data.Name}</p>
          <p className='heading2 md:text-base'>{data.Content}</p>
          
          <h1 className='heading2 md:text-base'>Languages</h1>
          <div className='panal '>
            {Object.entries(data.Languages).map(([language, description]) => (
                <div key={language} className="language-block md:m-2 md:px-10" alt={description}>
                    <h3 className="text-xs md:text-base">{language}</h3>
                    <div className='popup'>
                      <p>{description}</p>
                    </div>
                </div>
            ))}
         </div>

         <h1 className='heading2 md:text-base'>Skills</h1>
          <div className='panal'>
            {Object.entries(data.Skills).map(([skill, description]) => (
                <div key={skill} className="language-block md:m-1 md:px-10" alt={description}>
                    <a className="text-xs" href={description} target='_blank'>{skill}</a>
                </div>
            ))}
         </div>
        </div> 

        <div className="flex w-2/3 justify-center md:w-1/2">
          <img className="md:w-2/3"id="profile-picture"  src="/variable_assets/profile-picture.jpg" alter="Profile Picture" /> 
        </div>

      </div>
      
      <a></a>
      <a href={data.resume} target='_blank' className='heading1' style={{margin:'20px'}}><Download/>Resume</a>
      
    </section>
  );
};

export default Home;