import { FaEye, FaBullseye, FaHeart, FaUsers, FaTrophy, FaHandshake } from 'react-icons/fa';
import Counter from '../components/common/Counter';
import './About.css';

const About = () => {
  const values = [
    {
      icon: FaTrophy,
      title: 'Excellence',
      description: 'We strive for excellence in every service we deliver, ensuring the highest quality outcomes for our clients.'
    },
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'Transparency and honesty are at the core of our business relationships with clients and partners.'
    },
    {
      icon: FaHeart,
      title: 'Client-Centric',
      description: 'Your success is our success. We prioritize your needs and work tirelessly to exceed your expectations.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to achieve remarkable results together.'
    }
  ];

  const stats = [
    { number: '20+', label: 'Years of Experience' },
    { number: '100+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Retention' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About Awizo Hub</h1>
          <p className="page-subtitle">
            Empowering Businesses and Individuals to Achieve Their Full Potential
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section about-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Who We Are</h2>
              <p>
                Founded and led by <strong>Priya, CEO of Awizo Hub</strong>, we are a premier 
                service provider with <strong>over 20 years of experience</strong> in digital marketing, 
                IT placement, education guidance, and online learning solutions. Our journey has been 
                marked by excellence, innovation, and an unwavering commitment to client success.
              </p>
              <p>
                With <strong>100+ satisfied clients</strong> across various industries, Awizo Hub 
                has established itself as a trusted partner for businesses seeking digital transformation 
                and individuals pursuing career advancement. Our team of seasoned professionals brings 
                together decades of expertise to offer comprehensive, tailored solutions that deliver 
                measurable results.
              </p>
              <p>
                Under Priya's leadership, we've consistently pushed boundaries, embraced cutting-edge 
                technologies, and maintained the highest standards of service delivery. Every project 
                we undertake reflects our dedication to excellence and our passion for empowering our 
                clients to achieve their full potential.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="about-image">
                <img 
                  src="/images/about-team.jpg" 
                  alt="Awizo Hub Team" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision-section bg-light">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <div className="mv-icon-wrapper">
                <FaBullseye className="mv-icon" />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses and individuals by providing innovative, result-driven 
                solutions in digital marketing, career development, and education. We are 
                committed to delivering excellence and fostering long-term success for all 
                our clients.
              </p>
            </div>
            <div className="mission-vision-card">
              <div className="mv-icon-wrapper">
                <FaEye className="mv-icon" />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and preferred partner for businesses seeking digital 
                growth and individuals pursuing career advancement and educational excellence. 
                We envision a future where our services create lasting impact and open doors 
                to unlimited opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon-wrapper">
                  <value.icon className="value-icon" />
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-number">
                  <Counter end={stat.number} suffix={stat.number.includes('+') ? '+' : stat.number.includes('%') ? '%' : stat.number.includes('/') ? '/7' : ''} />
                </h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Work With Us?</h2>
            <p>
              Join our growing community of successful clients and let us help you achieve your goals
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
