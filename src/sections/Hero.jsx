import buildingImage from "../assets/images/building.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-meta">
          <div className="hero-meta-number">
            <span>01</span>
            <div className="hero-meta-line"></div>
          </div>

          <p className="hero-category">
            CIVIL ENGINEERING
            <br />
            PORTFOLIO / 2026
          </p>
        </div>

        <h1>
          CEZANNE
          <br />
          KHAN
        </h1>

        <p className="hero-description">
          B.TECH CIVIL ENGINEERING
          <br />
          NITK SURATHKAL
        </p>

        <a href="#work" className="hero-button">
          <span>VIEW SELECTED WORK</span>
          <span className="hero-arrow">↓</span>
        </a>
      </div>

      <div className="hero-image">
        <img src={buildingImage} alt="Concrete architectural building" />
      </div>
    </section>
  );
}

export default Hero;