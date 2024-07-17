import "./pagesLayout.css";
import "./About.css";

const About = () => {

  return (
    <section id="about">
      <h1 id="title">About</h1>
      <div className="horizontal-scroll-container">
      <div className="horizontal-scroll-content">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 6</div>
        <div className="item">Item 7</div>
        <div className="item">Item 8</div>
      </div>
    </div>
    </section>
  );
};

export default About;
