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
import heroImage from '../assets/hero.png';
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
                  src={heroImage} 
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
      <section id="services" className="section service-topics-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions tailored to your success
            </p>
          </div>

          <div className="topics-grid">
            <div id="web-design-development" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/videoed.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Web Design & Development</h3>
              <p>Custom websites with modern design and optimized performance</p>
              <Link to="/#web-design-development" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="seo-performance-marketing" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/google.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>SEO & Performance Marketing</h3>
              <p>Improve organic search rankings and drive quality traffic</p>
              <Link to="/#seo-performance-marketing" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="cloud-hosting-infrastructure" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Cloud Hosting & Infrastructure</h3>
              <p>Scalable cloud solutions for your business needs</p>
              <Link to="/#cloud-hosting-infrastructure" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="crm-automation" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/resume.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>CRM & Automation</h3>
              <p>Streamline your business processes with smart automation</p>
              <Link to="/#crm-automation" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="digital-strategy-growth" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/career.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Digital Strategy & Growth</h3>
              <p>Strategic planning for sustainable business growth</p>
              <Link to="/#digital-strategy-growth" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="ai-lead-generation" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/social.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>AI Lead Generation</h3>
              <p>Leverage AI to generate and qualify high-quality leads</p>
              <Link to="/#ai-lead-generation" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="video-editing-production" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/Videoediting.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Video Editing & Production</h3>
              <p>Professional video content for social media and marketing</p>
              <Link to="/#video-editing-production" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="payment-gateway-integration" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/online.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Payment Gateway Integration</h3>
              <p>Secure payment processing for your online business</p>
              <Link to="/#payment-gateway-integration" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="online-education" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/online.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Online Education</h3>
              <p>Access quality online education programs with expert guidance</p>
              <Link to="/services/online-education" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="study-abroad" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/abroad education.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Study Abroad</h3>
              <p>Turn your study abroad dreams into reality with expert counseling</p>
              <Link to="/services/abroad-education" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="it-placement-assistance" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/job.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>IT Placement Assistance</h3>
              <p>Launch your IT career with comprehensive placement support</p>
              <Link to="/services/it-placement" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section id="digital-marketing" className="section service-topics-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>Digital Marketing</h2>
            <p className="section-subtitle">
              Data-driven digital marketing strategies that deliver measurable results
            </p>
          </div>

          <div className="topics-grid">
            <div id="social-media-marketing" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/social.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Social Media Marketing</h3>
              <p>Build and engage your audience across all social platforms</p>
              <Link to="/digital-marketing/social-media" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="meta-facebook-ads" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/social.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Meta & Facebook Ads</h3>
              <p>Reach your target audience with precision-targeted ad campaigns</p>
              <Link to="/digital-marketing/meta-ads" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="email-marketing" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/resume.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Email Marketing</h3>
              <p>Build customer relationships with targeted email campaigns</p>
              <Link to="/digital-marketing/email" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="video-marketing" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Video Marketing</h3>
              <p>Engage audiences with compelling video content strategies</p>
              <Link to="/digital-marketing/video" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="local-seo" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/google.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Local SEO</h3>
              <p>Dominate local search results and attract nearby customers</p>
              <Link to="/digital-marketing/local-seo" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="google-ads-management" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/google.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Google Ads Management</h3>
              <p>Drive targeted traffic with expertly managed Google Ads campaigns</p>
              <Link to="/digital-marketing/google-ads" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="content-marketing" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/videoed.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Content Marketing</h3>
              <p>Create valuable content that attracts and converts customers</p>
              <Link to="/digital-marketing/content" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="whatsapp-marketing" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/social.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>WhatsApp Marketing</h3>
              <p>Connect with customers through personalized WhatsApp campaigns</p>
              <Link to="/digital-marketing/whatsapp" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="influencer-marketing" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/career.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>Influencer Marketing</h3>
              <p>Amplify your brand message with relevant influencers</p>
              <Link to="/digital-marketing/influencer" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div id="e-commerce-marketing" className="topic-card">
              <div className="topic-video">
                <video autoPlay loop muted playsInline>
                  <source src="/online.mp4" type="video/mp4" />
                </video>
              </div>
              <h3>E-Commerce Marketing</h3>
              <p>Drive sales with comprehensive e-commerce marketing strategies</p>
              <Link to="/digital-marketing/ecommerce" className="topic-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
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
