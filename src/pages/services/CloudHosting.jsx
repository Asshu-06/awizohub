import { FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import './ServiceDetail.css';

const CloudHosting = () => {
  const features = [
    'Scalable Cloud Solutions',
    '99.9% Uptime Guarantee',
    'Automated Backups',
    'Security & Monitoring',
    'Load Balancing',
    'CDN Integration',
    'Database Management',
    '24/7 Technical Support'
  ];

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>Cloud Hosting & Infrastructure</h1>
            <p>Scalable cloud solutions for your business needs</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Reliable Cloud Infrastructure</h2>
              <p>
                Deploy and manage your applications with our secure, scalable cloud hosting solutions. 
                We provide enterprise-grade infrastructure with the flexibility to grow with your business.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="service-image">
                <video autoPlay loop muted playsInline>
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section features-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-cta-section">
        <div className="container">
          <div className="service-cta-grid">
            <div className="service-cta-content">
              <h2>Ready to Move to the Cloud?</h2>
              <p>Let's discuss your hosting needs and find the perfect solution.</p>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Get Started" 
                defaultService="Cloud Hosting & Infrastructure"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudHosting;
