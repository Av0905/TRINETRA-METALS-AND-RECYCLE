import React, { useState, useRef } from 'react';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './components.css';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      phone: formData.get('user_phone'),
      message: formData.get('message'),
      _subject: "New Website Inquiry - Trinetra Metals"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/aryanvaghela2002@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        formRef.current.reset();
      } else {
        throw new Error("Failed to send");
      }
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        
        <div className="contact-info">
          <h2 className="text-accent-gradient">Get in Touch</h2>
          <p>
            Have scrap metal to sell or recycle? Contact us today for the best market rates. We offer industrial pickups and drop-off services.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="service-icon-wrapper" style={{ width: '40px', height: '40px', marginBottom: 0 }}>
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <strong>Phone</strong>
                <div style={{ color: 'var(--text-secondary)' }}>+91 72039 28999</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="service-icon-wrapper" style={{ width: '40px', height: '40px', marginBottom: 0 }}>
                <FaEnvelope size={18} />
              </div>
              <div>
                <strong>Email</strong>
                <div style={{ color: 'var(--text-secondary)' }}>aryanvaghela2002@gmail.com</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="service-icon-wrapper" style={{ width: '40px', height: '40px', marginBottom: 0 }}>
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <strong>Location</strong>
                <div style={{ color: 'var(--text-secondary)' }}>Rajkot</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form glass-panel">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="user_name">Full Name</label>
              <input type="text" name="user_name" id="user_name" required placeholder="John Doe" />
            </div>
            
            <div className="form-group">
              <label htmlFor="user_email">Email Address</label>
              <input type="email" name="user_email" id="user_email" required placeholder="john@example.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="user_phone">Phone Number</label>
              <input type="tel" name="user_phone" id="user_phone" required placeholder="72039 28999" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message / Scrap Details</label>
              <textarea name="message" id="message" rows={4} required placeholder="Describe the materials and estimated weight..."></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Request'}
            </button>
            
            {status === 'success' && (
              <div className="form-message success">Thank you! We've received your request and will contact you shortly.</div>
            )}
            {status === 'error' && (
              <div className="form-message error">There was an error sending your request. Please try again or call us.</div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
