import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import './ServiceDetail.css';

const AbroadEducation = () => {
  const services = [
    { title: 'University Selection', description: 'Find the perfect university that matches your academic goals and budget.' },
    { title: 'Course Guidance', description: 'Choose the right course and specialization for your career aspirations.' },
    { title: 'Application Support', description: 'Complete application assistance including SOP, LOR, and document preparation.' },
    { title: 'Visa Guidance', description: 'Expert guidance on visa application process and interview preparation.' },
    { title: 'Scholarship Assistance', description: 'Identify and apply for scholarships to fund your education abroad.' },
    { title: 'Pre-Departure Briefing', description: 'Prepare for your journey with comprehensive pre-departure orientation.' }
  ];

  const benefits = ['Expert Counselors', 'University Partnerships', 'High Success Rate', 'Visa Support', 'Scholarship Guidance', 'Post-Arrival Support'];

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <FaGraduationCap className="service-hero-icon" />
            <h1>Abroad Education Guidance</h1>
            <p>Turn your study abroad dreams into reality with expert counseling and comprehensive support.</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Study at World-Class Universities</h2>
              <p>
                Pursuing higher education abroad opens doors to world-class institutions, diverse cultures, 
                and global career opportunities. Our abroad education guidance helps you navigate the complex 
                application process with confidence.
              </p>
              <p>
                From university selection to visa processing, we provide end-to-end support to ensure your 
                study abroad journey is smooth and successful.
              </p>
              <h3 className="mt-4">Why Choose Our Services?</h3>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}><FaCheckCircle className="benefit-icon" /> {benefit}</li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <div className="service-image">
                <img src="/images/abroad-education.jpg" alt="Abroad Education" onError={(e) => e.target.style.display = 'none'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-list-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
            <p className="section-subtitle">Complete guidance for your study abroad journey</p>
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
              <h2>Ready to Study Abroad?</h2>
              <p>Start your journey today with expert guidance from our experienced counselors.</p>
              <ul className="cta-points">
                <li><FaCheckCircle /> Free counseling session</li>
                <li><FaCheckCircle /> University & course recommendations</li>
                <li><FaCheckCircle /> Application strategy planning</li>
              </ul>
            </div>
            <div className="service-form">
              <ContactForm formTitle="Start Your Application" defaultService="Abroad Education Guidance" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbroadEducation;
