import React from 'react';
import { Download, Padding } from '@mui/icons-material';
import "./pagesLayout.css";
import "../globals.css";
import "./Home.css"

const Home = () => {
  const data = require("../../../public/variable_assets/Home.json");
  return (
    <section id="home">
      <h1 id="title">Home</h1>
      <div className="home-div">
        
        <div className="text">
          <p className='heading1'>Hii, I am {data.Name}</p>
          <p className='heading2'>{data.Content}</p>
          <h1 className='heading2'>Languages</h1>
          <div className='panal'>
            {Object.entries(data.Languages).map(([language, description]) => (
                <div key={language} className="language-block" alt={description}>
                    <h3>{language}</h3>
                    <div className='popup'>
                      <p>{description}</p>
                    </div>
                </div>
            ))}
         </div>

         <h1 className='heading2'>Skills</h1>
          <div className='panal'>
            {Object.entries(data.Skills).map(([skill, description]) => (
                <div key={skill} className="language-block" alt={description}>
                    <a href={description} target='_blank'>{skill}</a>
                </div>
            ))}
         </div>
        </div> 

        <div className="profile-picture">
          <img id="profile-picture" src="/variable_assets/profile-picture.jpg" alter="Profile Picture" /> 
        </div>

      </div>
      
      <a href={data.resume} target='_blank' className='heading1' style={{margin:'20px'}}><Download/>Resume</a>
      
    </section>
  );
};

export default Home;