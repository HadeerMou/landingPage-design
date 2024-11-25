import { Component } from "react";
import contact from "./contact";
import about from "./about";
import gallery from "./gallery";
import Home from "./Home";
import sections from "./sections";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="footerlink">
          <li className="li">
            <a href={contact}>Contact</a>
          </li>
          <li className="li">
            <a href={about}>About</a>
          </li>
          <li className="li">
            <a href={gallery}>Gallery</a>
          </li>
          <li className="li">
            <ul className="lali">
              <li className="ll">Instagram</li>
              <li className="ll">
                <a href={sections}>Sections</a>
              </li>
              <li className="ll">Facebook</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
