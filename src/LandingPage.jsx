import React from "react";
import FAimg from "./assets/fashion.png";
import diamond from "./assets/Sparkling Diamond.png";
import featureImg from "./assets/guide.jpg";

function LandingPage() {
  return (
    <div className="landing-container">
      <div>
        <div className="link">
          <p className="name">InspoFA</p>
        </div>
      </div>
      <div className="content">
        <h1 className="head">Fashion</h1>
        <img className="img" alt="fashion" src={FAimg} />
      </div>
      <div className="scroll-wrapper">
        <ul className="words">
          <li className="li">Inspiration</li>
          <li className="li">
            <img className="dia" src={diamond} alt="diamond" />
          </li>
          <li className="name">Style</li>
          <li className="li">
            <img className="dia" src={diamond} alt="diamond" />
          </li>
          <li className="li">Elegance</li>
          <li className="li">
            <img className="dia" src={diamond} alt="diamond" />
          </li>
          <li className="name">Confidence</li>
          <li className="li">
            <img className="dia" src={diamond} alt="diamond" />
          </li>
          <li className="li">Inspiration</li>
          <li className="li">
            <img className="dia" src={diamond} alt="diamond" />
          </li>
          <li className="name">Style</li>
          <li className="li">
            <img className="dia" src={diamond} alt="diamond" />
          </li>
          <li className="li">Elegance</li>
          <li className="li">
            <img className="dia" src={diamond} alt="diamond" />
          </li>
          <li className="name">Confidence</li>
          <li className="li">
            <img className="dia" src={diamond} alt="diamond" />
          </li>
        </ul>
      </div>

      <h3 className="quote">
        “Elevate Your Style. Curated Fashion Advice for the Modern Muse.”
      </h3>

      <section className="about">
        <h2>About InspoFA</h2>
        <p>
          At InspoFA, fashion becomes a language. We offer timeless inspiration,
          capsule wardrobe guides, and psychological insights into personal
          style.
        </p>
        <blockquote>“Style is memory in motion.”</blockquote>
      </section>

      <section className="content-preview">
        <h2>What You'll Find</h2>
        <div className="cards">
          <div className="card">
            <h3>Timeless Wardrobe</h3>
            <p>Build a wardrobe that goes beyond trends and seasons.</p>
          </div>
          <div className="card">
            <h3>Style Moodboards</h3>
            <p>Refined visual storytelling for the woman of taste.</p>
          </div>
          <div className="card">
            <h3>Identity & Style</h3>
            <p>Fashion as an expression of self-awareness and elegance.</p>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="feature-text">
          <h2>Featured Guide</h2>
          <p>Quiet Luxury Capsule Wardrobe – Where Elegance Meets Simplicity</p>
          <button>Read the Guide</button>
        </div>
        <div
          className="feature-img"
          style={{ backgroundImage: `url(${featureImg})` }}
        ></div>
      </section>

      <section className="signup">
        <h2>Join the Inner Circle</h2>
        <p>Seasonal edits, style essays, and fashion cues delivered to you.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">Contact</a>
        </div>
        <p>© 2025 Neferonne. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
