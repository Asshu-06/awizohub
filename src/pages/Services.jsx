import { Link } from 'react-router-dom';
import { FaBullhorn, FaBriefcase, FaGraduationCap, FaLaptop, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: FaBullhorn,
      title: 'Digital Marketing Services',
      description: 'Elevate your brand with data-driven digital marketing strategies that deliver measurable results.',
      features: [
        'Meta Ads (Facebook & Instagram)',
        'Google Ads & PPC Campaigns',
        'Social Media Marketing',
        'Lead Generation & Conversion',
        'Social Media Management',
        'Creative Design & Posters'
      ],
      link: '/services/digital-marketing',
      color: '#FF6B35'
    },
    {
      icon: FaBriefcase,
      title: 'IT Placement Assistance',
      description: 'Get expert guidance and support to land your dream IT job with confidence.',
      features: [
        'IT Job Placement Support',
        'Professional Resume Building',
        'Career Counseling & Planning',
        'Interview Preparation & Coaching',
        'Industry Insights & Networking',
        'Job Market Analysis'
      ],
      link: '/services/it-placement',
      color: '#0066CC'
    },
    {
      icon: FaGraduationCap,
      title: 'Abroad Education Guidance',
      description: 'Turn your study abroad dreams into reality with comprehensive education counseling.',
      features: [
        'University Selection & Shortlisting',
        'Course Guidance & Planning',
        'Application Process Support',
        'Visa Guidance & Documentation',
        'Scholarship Assistance',
        'Pre-Departure Briefing'
      ],
      link: '/services/abroad-education',
      color: '#00B4D8'
    },
    {
      icon: FaLaptop,
      title: 'Online Education Assistance',
      description: 'Access quality online education programs with expert guidance and support.',
      features: [
        'Online Degree Programs',
        'University & Course Selection',
        'Admission Process Support',
        'Program Enrollment Assistance',
        'Learning Resource Guidance',
        'Academic Progress Tracking'
      ],
      link: '/services/online-education',
      color: '#28A745'
    }
  ];

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive Solutions Tailored to Your Success
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="services-grid-detailed">
            {services.map((service, index) => (
              <div key={index} className="service-card-detailed">
                <div className="service-card-header" style={{ backgroundColor: `${service.color}15` }}>
                  <div className="service-icon-large" style={{ color: service.color }}>
                    <service.icon />
                  </div>
                  <h2>{service.title}</h2>
                </div>
                <div className="service-card-body">
                  <p className="service-description-detailed">{service.description}</p>
                  <h4>Key Features:</h4>
                  <ul className="service-features-detailed">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Link to={service.link} className="btn btn-primary">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Not Sure Which Service You Need?</h2>
            <p>
              Get in touch with our team for a free consultation and let us help you find the perfect solution
            </p>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
