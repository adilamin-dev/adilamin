import { NavLink } from "react-router-dom";

const NaveMenu = () => {
    return (
        <div>
            <nav className="nav">
            <ul>
              <li><NavLink href="/public/CV_of_Adil_Amin-(Front-End_Web-Developer).pdf" target="_blank"><strong>My Resume</strong></NavLink></li>
              <li><NavLink to="/">About Me</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
    );
};

export default NaveMenu;