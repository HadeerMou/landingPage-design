import { Component } from "react";
import FAimg from "./assets/fashion.png";
import diamond from "./assets/Sparkling Diamond.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <h1 className="head">Fashion</h1>
          <img className="img" alt="fashion" src={FAimg} />
        </div>
        <div className="words">
          <ul className="words">
            <li className="li">Inspiration</li>
            <li className="li">
              <img className="dia" src={diamond} />
            </li>
            <li className="name">Style</li>
            <li className="li">
              <img className="dia" src={diamond} />
            </li>
            <li className="li">Elegance</li>
            <li className="li">
              <img className="dia" src={diamond} />
            </li>
            <li className="name">Glowing</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
