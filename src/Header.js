import { Component } from "react";
import contact from "./contact";
import about from "./about";
import gallery from "./gallery";
import Home from "./Home";
import sections from "./sections";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="links">
          <ul className="link">
            <li className="li">
              <a href={contact}>Contact</a>
            </li>
            <li className="li">
              <a href={about}>About</a>
            </li>
            <li className="name">InspoFA</li>
            <li className="li">
              <a href={gallery}>Gallery</a>
            </li>
            <li className="li">
              <a href={sections}>Sections</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
