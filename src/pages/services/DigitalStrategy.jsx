import { FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import './ServiceDetail.css';

const DigitalStrategy = () => {
  const features = [
    'Digital Transformation Strategy',
    'Market Research & Analysis',
    'Competitor Analysis',
    'Growth Marketing Plans',
    'Customer Journey Mapping',
    'Channel Strategy',
    'KPI Setting & Tracking',
    'ROI Optimization'
  ];

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>Digital Strategy & Growth</h1>
            <p>Strategic planning for sustainable digital growth</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Plan Your Digital Success</h2>
              <p>
                We develop comprehensive digital strategies that align with your business goals 
                and drive measurable growth across all digital channels.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="service-image">
                <video autoPlay loop muted playsInline>
                  <source src="/google.mp4" type="video/mp4" />
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
              <h2>Ready to Grow?</h2>
              <p>Let's create a winning digital strategy for your business.</p>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Get Started" 
                defaultService="Digital Strategy & Growth"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalStrategy;
