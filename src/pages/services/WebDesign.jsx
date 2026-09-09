import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/common/ContactForm';
import './ServiceDetail.css';

const WebDesign = () => {
  const features = [
    'Responsive Web Design',
    'Modern UI/UX Design',
    'Performance Optimization',
    'SEO-Friendly Architecture',
    'Cross-Browser Compatibility',
    'Mobile-First Approach',
    'Custom Web Applications',
    'E-Commerce Solutions'
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>Web Design & Development</h1>
            <p>
              Custom websites with modern design and optimized performance to grow your business online
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Build Your Digital Presence</h2>
              <p>
                We create stunning, responsive websites that not only look great but perform exceptionally. 
                Our web design and development services combine creativity with technical expertise to 
                deliver websites that drive results.
              </p>
              <p>
                From simple landing pages to complex web applications, we handle everything from 
                design to deployment, ensuring your website reflects your brand and achieves your 
                business goals.
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

      {/* Features Section */}
      <section className="section features-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
            <p className="section-subtitle">
              Comprehensive web development services tailored to your needs
            </p>
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

      {/* CTA + Form */}
      <section className="section service-cta-section">
        <div className="container">
          <div className="service-cta-grid">
            <div className="service-cta-content">
              <h2>Ready to Build Your Website?</h2>
              <p>
                Let's discuss your project and create a website that perfectly represents your brand 
                and drives business growth.
              </p>
              <ul className="cta-points">
                <li><FaCheckCircle /> Free consultation & quote</li>
                <li><FaCheckCircle /> Custom design mockups</li>
                <li><FaCheckCircle /> Responsive & mobile-friendly</li>
              </ul>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Request a Quote" 
                defaultService="Web Design & Development"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
