import "./About.css";
import "../globals.css"
import Card from "./miniElements/AboutCard";

const About = () => {
  const data=require('../../../public/variable_assets/About.json')
  return (
    <section id="about">
      <h1 className="px-10" id="title">About</h1>
      <div className="mainframe lg:flex-col">
        <div className="row lg:flex-row">
            <Card data={data.School_12th}/>
            <Card data={data.College}/>
            <Card data={data.Exchange}/>
        </div>
        <div className="row lg:flex-row">
            <Card data={data.iHub}/>
            <Card data={data.BrainWave}/>
            <Card data={data.Research_Intern}/>
        </div>
      </div>
    </section>
  );
};

export default About;
