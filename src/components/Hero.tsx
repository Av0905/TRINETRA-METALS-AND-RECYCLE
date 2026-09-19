
import './components.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <h1 className="hero-title animate-fade-in">
          Transform Your Scrap Into <br/>
          <span className="text-accent-gradient">Maximum Value</span>
        </h1>
        <p className="hero-subtitle animate-fade-in delay-100">
          We offer the best market rates for ferrous and non-ferrous metals. Fast, reliable, and eco-friendly scrap metal recycling services for businesses and individuals.
        </p>
        <div className="hero-actions animate-fade-in delay-200">
          <a href="#contact" className="btn btn-primary hero-btn">Request a Pickup</a>
          <a href="#services" className="btn btn-outline hero-btn">Explore Services</a>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;
