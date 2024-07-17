import React from 'react';
import "./pagesLayout.css";
import "./Home.css"

const Home = () => {
  const data = require("../../../public/variable_assets/Home.json");
  return (
    <section id="home">
      <h1 id="title">Home</h1>
      <div className="home-div">
        
        <div className="text">
          <p>Hii, I am {data.Name}</p>
          <p>Welcome to the home page.</p>
        </div>

        <div className="profile-picture">
          <img id="profile-picture" src="/variable_assets/profile-picture.jpg" alter="Profile Picture"/> 
        </div>

      </div>
      
    </section>
  );
};

export default Home;