import { FaBriefcase, FaUsers, FaRocket, FaHeart } from 'react-icons/fa';
import ContactForm from '../components/common/ContactForm';
import './Careers.css';

const Careers = () => {
  const openPositions = [
    { title: 'Digital Marketing Specialist', department: 'Marketing', location: 'Remote', type: 'Full-time' },
    { title: 'IT Recruiter', department: 'HR', location: 'Hybrid', type: 'Full-time' },
    { title: 'Education Counselor', department: 'Consulting', location: 'On-site', type: 'Full-time' },
    { title: 'Content Writer', department: 'Marketing', location: 'Remote', type: 'Part-time' },
    { title: 'Business Development Executive', department: 'Sales', location: 'On-site', type: 'Full-time' }
  ];

  const benefits = [
    { icon: FaBriefcase, title: 'Career Growth', description: 'Continuous learning and advancement opportunities' },
    { icon: FaUsers, title: 'Great Team', description: 'Work with talented and supportive colleagues' },
    { icon: FaRocket, title: 'Innovation', description: 'Be part of cutting-edge projects and initiatives' },
    { icon: FaHeart, title: 'Work-Life Balance', description: 'Flexible working hours and remote options' }
  ];

  return (
    <div className="careers-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Join Our Team</h1>
          <p className="page-subtitle">Build Your Career with Awizo Hub</p>
        </div>
      </section>

      <section className="section careers-intro">
        <div className="container text-center">
          <h2>Why Work With Us?</h2>
          <p className="section-subtitle">
            At Awizo Hub, we believe our people are our greatest asset. Join a dynamic team that values 
            innovation, collaboration, and professional growth.
          </p>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <benefit.icon className="benefit-icon-large" />
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section open-positions-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>Current Openings</h2>
            <p className="section-subtitle">Explore opportunities to join our growing team</p>
          </div>
          <div className="positions-list">
            {openPositions.map((position, index) => (
              <div key={index} className="position-card">
                <div className="position-info">
                  <h3>{position.title}</h3>
                  <div className="position-meta">
                    <span className="meta-item">{position.department}</span>
                    <span className="meta-divider">•</span>
                    <span className="meta-item">{position.location}</span>
                    <span className="meta-divider">•</span>
                    <span className="meta-item">{position.type}</span>
                  </div>
                </div>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section careers-form-section">
        <div className="container">
          <div className="careers-form-container">
            <h2 className="text-center">Can't Find the Right Position?</h2>
            <p className="text-center section-subtitle">
              Send us your resume and we'll keep you in mind for future opportunities
            </p>
            <div className="form-wrapper">
              <ContactForm formTitle="Submit Your Application" defaultService="General Inquiry" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
