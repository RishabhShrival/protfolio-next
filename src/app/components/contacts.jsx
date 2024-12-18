import "./pagesLayout.css";
import "../globals.css";
import "./contacts.css";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contacts = () => {
  return (
    <section id="contact"> 
      <h1 id="title">Contact</h1>
      <div className="contactBlock md:flex-row md:mx-40">
        <a href="https://github.com/RishabhShrival" target="_blank">
          <GitHubIcon className="icons"/>
          <h1 className="heading1" >RishabhShrival</h1>
        </a>

        <a href="https://www.instagram.com/rishabhshrival?igsh=anNzb2pua3p3ZnMx" target="_blank">
          <EmailIcon className="icons"/>
          <h1 className="heading1">rishabhshrival746@gmail.com</h1>
        </a>

        <a href="https://www.linkedin.com/in/rishabh-shrival-412490225/" target="_blank">
          <LinkedInIcon className="icons"/>
          <h1 className="heading1">Rishabh Shrival</h1>
        </a>

      </div>
    </section>
  );
};

export default Contacts;
