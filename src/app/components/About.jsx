import "./About.css";
import "../globals.css"
import Card from "./miniElements/AboutCard";

const About = () => {
  const data=require('../../../public/variable_assets/About.json')
  return (
    <section id="about">
      <div className="mainframe">
        <div className="row">
            <Card data={data.School_12th}/>
            <Card data={data.College}/>
            <Card data={data.Exchange}/>
        </div>
        <div className="row">
            <Card data={data.iHub}/>
            <Card data={data.BrainWave}/>
            <Card data={data.Research_Intern}/>
        </div>
      </div>
    </section>
  );
};

export default About;
