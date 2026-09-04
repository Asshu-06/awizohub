import { Link } from 'react-router-dom';
import { 
  FaBullhorn, 
  FaBriefcase, 
  FaGraduationCap, 
  FaLaptop,
  FaCheckCircle,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';
import ContactForm from '../components/common/ContactForm';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: FaBullhorn,
      title: 'Digital Marketing Services',
      description: 'Boost your online presence with expert Meta Ads, Google Ads, social media marketing, and creative design solutions.',
      features: ['Meta & Google Ads', 'Social Media Management', 'Lead Generation', 'Creative Design'],
      link: '/services/digital-marketing',
      color: '#FF6B35'
    },
    {
      icon: FaBriefcase,
      title: 'IT Placement Assistance',
      description: 'Land your dream IT job with personalized placement support, resume building, and interview preparation.',
      features: ['Job Placement', 'Resume Building', 'Interview Prep', 'Career Guidance'],
      link: '/services/it-placement',
      color: '#0066CC'
    },
    {
      icon: FaGraduationCap,
      title: 'Abroad Education Guidance',
      description: 'Achieve your study abroad dreams with expert guidance on universities, courses, and application processes.',
      features: ['University Selection', 'Application Support', 'Visa Guidance', 'Course Planning'],
      link: '/services/abroad-education',
      color: '#00B4D8'
    },
    {
      icon: FaLaptop,
      title: 'Online Education Assistance',
      description: 'Enroll in top online degree programs with comprehensive support for course selection and admissions.',
      features: ['Online Degrees', 'Course Selection', 'Admission Support', 'Learning Resources'],
      link: '/services/online-education',
      color: '#28A745'
    }
  ];

  const trustBadges = [
    { icon: FaCheckCircle, text: '500+ Happy Clients' },
    { icon: FaStar, text: '4.9/5 Average Rating' },
    { icon: FaCheckCircle, text: '98% Success Rate' },
    { icon: FaStar, text: 'Trusted by Leading Brands' }
  ];

  const benefits = [
    'Expert Team with Industry Experience',
    'Personalized Solutions for Your Goals',
    '24/7 Customer Support',
    'Proven Track Record of Success',
    'Transparent Pricing & Process',
    'End-to-End Service Delivery'
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/* Left Side - Text Content */}
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Future with <span className="hero-highlight">Awizo Hub</span>
            </h1>
            <p className="hero-subtitle">
              Your One-Stop Solution for Digital Marketing, IT Careers, Education Abroad, and Online Learning
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Started Today <FaArrowRight />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Explore Services
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="trust-badges">
              {trustBadges.map((badge, index) => (
                <div key={index} className="trust-badge">
                  <badge.icon className="trust-icon" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Composition */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              {/* Background Decorative Shapes */}
              <div className="hero-shape shape-1"></div>
              <div className="hero-shape shape-2"></div>
              
              {/* Main Image */}
              <div className="hero-image-container">
                <img 
                  src="/src/assets/hero.png" 
                  alt="Awizo Hub - Digital Marketing & Education Services" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop';
                  }}
                />
              </div>

              {/* Floating Metric Cards */}
              <div className="floating-card card-1">
                <FaStar className="floating-card-icon" />
                <div className="floating-card-content">
                  <h4>500+</h4>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="floating-card card-2">
                <FaCheckCircle className="floating-card-icon" />
                <div className="floating-card-content">
                  <h4>98%</h4>
                  <p>Success Rate</p>
                </div>
              </div>

              <div className="floating-card card-3">
                <FaBullhorn className="floating-card-icon" />
                <div className="floating-card-content">
                  <h4>4.9/5</h4>
                  <p>Average Rating</p>
                </div>
              </div>

              {/* Decorative Lines */}
              <div className="hero-decorative-line line-1"></div>
              <div className="hero-decorative-line line-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Comprehensive Services</h2>
            <p className="section-subtitle">
              Empowering Your Success with Expert Solutions Across Multiple Domains
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper" style={{ backgroundColor: `${service.color}15` }}>
                  <service.icon className="service-icon" style={{ color: service.color }} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="feature-icon" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="service-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="section-header">
                <h2>
                  Empowering Careers. <span className="highlight">Building Futures.</span>
                </h2>
                <p className="section-subtitle">
                  We're committed to delivering exceptional results and helping you achieve your goals with confidence.
                </p>
              </div>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <FaCheckCircle className="benefit-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <div className="why-choose-image">
                <img 
                  src="/images/why-choose-us.jpg" 
                  alt="Why Choose Awizo Hub" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Get Started?</h2>
            <p>
              Join hundreds of satisfied clients who have transformed their businesses and careers with Awizo Hub
            </p>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="form-container">
            <ContactForm formTitle="Get Your Free Consultation" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
