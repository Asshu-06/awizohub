import { FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import './ServiceDetail.css';

const SEOMarketing = () => {
  const features = [
    'Keyword Research & Strategy',
    'On-Page SEO Optimization',
    'Technical SEO Audits',
    'Link Building Campaigns',
    'Local SEO Services',
    'Content Optimization',
    'Performance Marketing',
    'Analytics & Reporting'
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>SEO & Performance Marketing</h1>
            <p>
              Improve organic search rankings and drive quality traffic with data-driven SEO strategies
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Grow Your Online Visibility</h2>
              <p>
                Our SEO and performance marketing services help your business rank higher in search 
                results, attract more qualified traffic, and convert visitors into customers.
              </p>
              <p>
                We use proven strategies and the latest tools to optimize your website for search 
                engines while delivering measurable results that impact your bottom line.
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

      {/* Features Section */}
      <section className="section features-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
            <p className="section-subtitle">
              Complete SEO solutions to boost your search rankings
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
              <h2>Ready to Boost Your Rankings?</h2>
              <p>
                Let's create an SEO strategy that drives organic traffic and grows your business.
              </p>
              <ul className="cta-points">
                <li><FaCheckCircle /> Free SEO audit</li>
                <li><FaCheckCircle /> Custom strategy plan</li>
                <li><FaCheckCircle /> Transparent reporting</li>
              </ul>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Request SEO Audit" 
                defaultService="SEO & Performance Marketing"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOMarketing;
