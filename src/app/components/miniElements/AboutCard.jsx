import React from 'react';
import '../About.css';
import '../../globals.css';

const Card = ({data}) => {
  return (
    <div className="card">
      <img className="cardLogo" src={data.logo}></img>
      <div className="cardContent">
        <h1 className="heading1">{data.School}</h1>
        <h2 className="heading2">{data.location}</h2>
        <h3 className="heading3">{data.board}</h3>
        {(data.percentage!=null) ? 
        <h3 className="appearing-text">Score : {data.percentage}</h3> :
        <h3 className="appearing-text">Stipend : {data.salary}</h3>
      }
      <h3 className="appearing-text">Duration : {data.duration}</h3>
      </div>
    </div>
  );
};

export default Card;