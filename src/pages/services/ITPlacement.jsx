import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import './ServiceDetail.css';

const ITPlacement = () => {
  const services = [
    {
      title: 'IT Job Placement Support',
      description: 'Connect with top IT companies and get placed in roles that match your skills and aspirations.'
    },
    {
      title: 'Professional Resume Building',
      description: 'Create an ATS-friendly resume that highlights your strengths and gets noticed by recruiters.'
    },
    {
      title: 'Career Counseling',
      description: 'Get expert guidance on career paths, skill development, and growth opportunities in IT.'
    },
    {
      title: 'Interview Preparation',
      description: 'Master technical and HR interviews with personalized coaching and mock interview sessions.'
    },
    {
      title: 'Skill Assessment',
      description: 'Identify your strengths and areas for improvement with comprehensive skill assessments.'
    },
    {
      title: 'Industry Networking',
      description: 'Connect with industry professionals and expand your network for better opportunities.'
    }
  ];

  const benefits = [
    '100% Placement Support',
    'Industry Expert Mentors',
    'Mock Interviews & Feedback',
    'Resume Review by Recruiters',
    'Access to Job Portal',
    'Post-Placement Support'
  ];

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <FaBriefcase className="service-hero-icon" />
            <h1>IT Placement Assistance</h1>
            <p>
              Launch your IT career with confidence. Get expert support, personalized guidance, 
              and access to top opportunities in the tech industry.
            </p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Your Path to IT Success</h2>
              <p>
                Breaking into the IT industry or advancing your career requires more than just technical skills. 
                Our comprehensive IT placement assistance program provides everything you need to succeed – from 
                resume building and interview preparation to connecting with top employers.
              </p>
              <p>
                We work closely with leading IT companies and have a proven track record of helping candidates 
                land their dream jobs. Our personalized approach ensures you're fully prepared to showcase your 
                skills and make a lasting impression.
              </p>
              <h3 className="mt-4">Why Choose Our IT Placement Services?</h3>
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
                  src="/images/it-placement.jpg" 
                  alt="IT Placement Services" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-list-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
            <p className="section-subtitle">
              Complete support to help you land your ideal IT role
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

      <section className="section service-cta-section">
        <div className="container">
          <div className="service-cta-grid">
            <div className="service-cta-content">
              <h2>Ready to Kickstart Your IT Career?</h2>
              <p>
                Register today and get personalized assistance to land your dream IT job. 
                Our team will work with you every step of the way.
              </p>
              <ul className="cta-points">
                <li><FaCheckCircle /> Free career counseling session</li>
                <li><FaCheckCircle /> Resume review and optimization</li>
                <li><FaCheckCircle /> Access to exclusive job openings</li>
              </ul>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Register for Placement" 
                defaultService="IT Placement Assistance"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITPlacement;
