import { FaLaptop, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import './ServiceDetail.css';

const OnlineEducation = () => {
  const services = [
    { title: 'Online Degree Programs', description: 'Access accredited online degree programs from top universities worldwide.' },
    { title: 'Course Selection Guidance', description: 'Choose the right online program that fits your career goals and schedule.' },
    { title: 'Admission Support', description: 'Complete assistance with online university admissions and enrollment process.' },
    { title: 'Program Enrollment', description: 'Seamless enrollment in your chosen online education program.' },
    { title: 'Learning Resources', description: 'Access to study materials, resources, and learning support throughout your program.' },
    { title: 'Academic Progress Tracking', description: 'Monitor your academic progress and get support when needed.' }
  ];

  const benefits = ['Flexible Learning', 'Accredited Programs', 'Expert Guidance', 'Affordable Options', 'Career Support', '24/7 Access'];

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <FaLaptop className="service-hero-icon" />
            <h1>Online Education Assistance</h1>
            <p>Advance your career with flexible online education programs from accredited universities.</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Learn Anytime, Anywhere</h2>
              <p>
                Online education offers the flexibility to pursue higher education while managing your work 
                and personal commitments. Our online education assistance helps you find and enroll in accredited 
                programs that fit your goals.
              </p>
              <p>
                We partner with leading online universities to bring you quality education that's accessible, 
                affordable, and recognized by employers worldwide.
              </p>
              <h3 className="mt-4">Why Choose Online Education?</h3>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}><FaCheckCircle className="benefit-icon" /> {benefit}</li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <div className="service-image">
                <img src="/images/online-education.jpg" alt="Online Education" onError={(e) => e.target.style.display = 'none'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-list-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
            <p className="section-subtitle">Complete support for your online learning journey</p>
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
              <h2>Ready to Start Learning Online?</h2>
              <p>Explore our online education programs and take the first step towards your degree.</p>
              <ul className="cta-points">
                <li><FaCheckCircle /> Free program consultation</li>
                <li><FaCheckCircle /> University & course recommendations</li>
                <li><FaCheckCircle /> Enrollment assistance</li>
              </ul>
            </div>
            <div className="service-form">
              <ContactForm formTitle="Explore Programs" defaultService="Online Education Assistance" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineEducation;
