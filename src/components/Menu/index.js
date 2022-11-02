import { Link } from 'react-router-dom';
import "./Menu.css"

function Menu() {
  return (
    <div className="Menu">
        <nav>
          <ul >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Gallery</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Menu;
