
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './components.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo" style={{ marginBottom: '1rem' }}>
            <img src="/TRINETRA METALS AND RECYCLING.png" alt="Trinetra Metals Logo" style={{ height: '50px', width: 'auto' }} />
            <span className="logo-text">TRINETRA <span className="text-accent-gradient">METALS</span> AND RECYCLING</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
            <FaTwitter style={{ cursor: 'pointer' }} />
            <FaLinkedin style={{ cursor: 'pointer' }} />
            <FaFacebook style={{ cursor: 'pointer' }} />
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} TRINETRA METALS AND RECYCLING. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
