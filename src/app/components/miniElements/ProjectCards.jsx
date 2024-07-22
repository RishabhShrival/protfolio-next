'use client';
import React, { useEffect, useState } from 'react';
import './ProjectCards.css';
import '../../globals.css';

const ProjectCard = ({ data }) => {
  const [cardList, setList] = useState([]);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleClick = () => {
    if (transitioning) return; // Prevent multiple clicks during animation

    setTransitioning(true);

    // Run the state update after 0.5 seconds
    setTimeout(() => {
      // Reset the transitioning state after animation completes
      
      setTransitioning(false);
       // Duration of the animation
      const [first, ...rest] = cardList;
      setList([...rest, first]);
    }, 600); // Delay before handling the click
    
  };

  const getCardStyle = (index) => ({
    width: '80%',
    height: '80%',
    position: 'absolute',
    margin: '10px',
    background: `radial-gradient(rgb(150,150,${140+100*(cardList.length - index) / cardList.length}),rgb(70,70,${90+100*(cardList.length - index) / cardList.length}))`,
    zIndex: cardList.length - index,
    transform: `translateY(${index/cardList.length * 10}px) rotate(${index/cardList.length * 4}deg)`,
    borderRadius: '10px',
    border: '2px solid black',
    transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55), background-color 0.6s ease-in-out',
    willChange: 'transform, background-color',
  });

  return (
    <div className="frame">
      {cardList.map((projectName, index) => (
        
            <div
            key={index}
            style={getCardStyle(index)}
            onClick={handleClick}
            className={`Projectcard ${index === 0 && transitioning ? 'transitioning' : ''}`}
            >
            <h1 className="heading1">{projectName.Name}</h1>
            <p className="heading3">{projectName.Description}</p>
            {
            (projectName.link!=null) ? (<a href={projectName.link} target='_blank'>Link</a>) :
            null}
            
            </div>
      ))}
    </div>
  );
};

export default ProjectCard;
