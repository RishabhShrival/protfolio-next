import NavBar from '../components/navBar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/projects';
import Contact from '../components/contacts';
import "./index.css"

export default function HomePage() {
    
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}


