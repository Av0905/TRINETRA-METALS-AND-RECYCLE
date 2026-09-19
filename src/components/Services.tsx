
import { FaMagnet, FaShieldAlt, FaLayerGroup, FaBolt, FaCogs, FaHammer, FaRecycle } from 'react-icons/fa';
import './components.css';

const services = [
  {
    icon: <FaMagnet />,
    title: 'IRON & MS SCRAP',
    description: 'Buying and processing ferrous metal scrap from industrial, commercial, and construction sources.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'STAINLESS STEEL',
    description: 'Collection, sorting, and recycling of stainless-steel scrap from various sources.'
  },
  {
    icon: <FaLayerGroup />,
    title: 'ALUMINIUM',
    description: 'Aluminium sheets, profiles, utensils, components, and other recyclable aluminium scrap.'
  },
  {
    icon: <FaBolt />,
    title: 'COPPER',
    description: 'Copper wires, cables, pipes, sheets, and industrial copper scrap.'
  },
  {
    icon: <FaCogs />,
    title: 'BRASS',
    description: 'Brass fittings, valves, taps, components, and other brass scrap.'
  },
  {
    icon: <FaHammer />,
    title: 'CAST IRON',
    description: 'Cast-iron machinery parts, components, pipes, and other ferrous castings.'
  },
  {
    icon: <FaRecycle />,
    title: 'OTHER METAL SCRAP',
    description: 'Have a different type of metal? Send us a photo or material details for identification and quotation.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="text-accent-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>
          What We Recycle
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          We process a wide variety of scrap materials using industry-leading practices to ensure maximum recovery and minimal environmental impact.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-panel">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
