import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import typingVideo from '../../assets/videos/typingmale.mp4';
import './ServiceDetail.css';

const ITPlacement = () => {
  const services = [
    {
      id: 'job-placement',
      title: 'Job Placement Support',
      description: 'Connect with top IT companies and receive personalized job matching services tailored to your skills, experience, and career goals.'
    },
    {
      id: 'resume-building',
      title: 'Resume Building & Optimization',
      description: 'Professional resume writing and optimization to highlight your technical skills, projects, and achievements that recruiters are looking for.'
    },
    {
      id: 'interview-prep',
      title: 'Interview Preparation & Coaching',
      description: 'Comprehensive interview coaching covering technical, behavioral, and HR rounds with real-world scenarios and expert feedback.'
    },
    {
      id: 'skills-assessment',
      title: 'Skills Assessment & Gap Analysis',
      description: 'Identify your strengths and areas for improvement with detailed skills assessment and personalized learning roadmap.'
    },
    {
      id: 'career-counseling',
      title: 'Career Counseling & Planning',
      description: 'One-on-one career guidance to help you choose the right career path, technologies, and growth opportunities in IT industry.'
    },
    {
      id: 'linkedin-optimization',
      title: 'LinkedIn Profile Enhancement',
      description: 'Optimize your LinkedIn profile to attract recruiters with strategic keyword placement, compelling summary, and professional branding.'
    },
    {
      id: 'mock-interviews',
      title: 'Mock Interviews & Practice Sessions',
      description: 'Realistic mock interviews with industry professionals to build confidence and improve your performance in actual interviews.'
    },
    {
      id: 'placement-followup',
      title: 'Placement Follow-up & Support',
      description: 'Continuous support even after placement including onboarding guidance, salary negotiation tips, and career growth advice.'
    }
  ];

  const benefits = [
    'Personalized Career Guidance',
    'Industry-Specific Job Matching',
    'Professional Resume Templates',
    'Expert Interview Coaching',
    'Networking Opportunities',
    'Post-Placement Support',
    'LinkedIn Profile Enhancement',
    'Continuous Career Development'
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <video 
          className="service-hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={typingVideo} type="video/mp4" />
        </video>
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>IT Placement Assistance</h1>
            <p>
              Launch your IT career with comprehensive placement support, from resume building 
              to interview success and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
            <p className="section-subtitle">
              Comprehensive IT placement services designed to help you land your dream job
            </p>
          </div>
          <div className="services-list-grid">
            {services.map((service, index) => (
              <div key={index} id={service.id} className="service-list-item">
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
              <h2>Ready to Launch Your IT Career?</h2>
              <p>
                Let's discuss how our IT placement services can help you achieve your career goals. 
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <ul className="cta-points">
                <li><FaCheckCircle /> Free career assessment session</li>
                <li><FaCheckCircle /> Personalized job matching service</li>
                <li><FaCheckCircle /> Expert resume review included</li>
              </ul>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Request a Consultation" 
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
