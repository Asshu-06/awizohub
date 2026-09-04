import { FaBullhorn, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import './ServiceDetail.css';

const DigitalMarketing = () => {
  const services = [
    {
      title: 'Meta Ads (Facebook & Instagram)',
      description: 'Reach your target audience with precision-targeted ad campaigns on Facebook and Instagram.'
    },
    {
      title: 'Google Ads & PPC',
      description: 'Drive qualified traffic to your website with optimized Google Ads and pay-per-click campaigns.'
    },
    {
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across all major social media platforms.'
    },
    {
      title: 'Lead Generation',
      description: 'Convert prospects into customers with strategic lead generation campaigns.'
    },
    {
      title: 'Social Media Management',
      description: 'Professional management of your social media accounts with consistent, engaging content.'
    },
    {
      title: 'Creative Design & Posters',
      description: 'Eye-catching visual content and designs that resonate with your target audience.'
    }
  ];

  const benefits = [
    'Increase Brand Visibility',
    'Generate Quality Leads',
    'Improve ROI on Ad Spend',
    'Build Customer Engagement',
    'Data-Driven Strategies',
    'Transparent Reporting'
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <FaBullhorn className="service-hero-icon" />
            <h1>Digital Marketing Services</h1>
            <p>
              Transform your online presence with comprehensive digital marketing solutions 
              that drive results and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Grow Your Business Online</h2>
              <p>
                In today's digital world, having a strong online presence is crucial for business success. 
                Our digital marketing services are designed to help you reach your target audience, generate 
                quality leads, and increase conversions.
              </p>
              <p>
                We combine data-driven strategies with creative excellence to deliver campaigns that not only 
                look great but also perform exceptionally. From social media management to paid advertising, 
                we handle all aspects of your digital marketing needs.
              </p>
              <h3 className="mt-4">Why Choose Our Digital Marketing Services?</h3>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <FaCheckCircle className="benefit-icon" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <div className="service-image">
                <img 
                  src="/images/digital-marketing.jpg" 
                  alt="Digital Marketing Services" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
            <p className="section-subtitle">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
          </div>
          <div className="services-list-grid">
            {services.map((service, index) => (
              <div key={index} className="service-list-item">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
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
              <h2>Ready to Boost Your Online Presence?</h2>
              <p>
                Let's discuss how our digital marketing services can help you achieve your business goals. 
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <ul className="cta-points">
                <li><FaCheckCircle /> Free consultation & strategy session</li>
                <li><FaCheckCircle /> Custom proposal tailored to your needs</li>
                <li><FaCheckCircle /> No long-term contracts required</li>
              </ul>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Request a Quote" 
                defaultService="Digital Marketing Services"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
