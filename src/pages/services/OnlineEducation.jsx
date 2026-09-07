import { FaLaptop, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import typingVideo from '../../assets/videos/goodtyping.mp4';
import './ServiceDetail.css';

const OnlineEducation = () => {
  const services = [
    {
      id: 'online-degrees',
      title: 'Online Degree Program Selection',
      description: 'Expert guidance on choosing accredited online degree programs from reputable universities that align with your career goals and schedule.'
    },
    {
      id: 'course-selection',
      title: 'Course Selection & Planning',
      description: 'Personalized course recommendations based on your interests, industry trends, and career advancement opportunities in the digital age.'
    },
    {
      id: 'admission-support',
      title: 'Admission Support & Application',
      description: 'Complete assistance with online program admissions including application preparation, document submission, and deadline management.'
    },
    {
      id: 'learning-resources',
      title: 'Learning Resources & Tools',
      description: 'Access to curated learning resources, online tools, study materials, and platforms to enhance your online learning experience.'
    },
    {
      id: 'program-comparison',
      title: 'Program Comparison & Analysis',
      description: 'Detailed comparison of online programs considering factors like cost, duration, curriculum, accreditation, and career outcomes.'
    },
    {
      id: 'enrollment-guidance',
      title: 'Enrollment Guidance & Support',
      description: 'Step-by-step enrollment assistance including registration, payment options, financial aid applications, and course scheduling.'
    },
    {
      id: 'technical-setup',
      title: 'Technical Setup & Orientation',
      description: 'Help with technical requirements, platform navigation, software installation, and orientation to ensure smooth online learning.'
    },
    {
      id: 'academic-planning',
      title: 'Academic Planning & Success',
      description: 'Ongoing academic support including time management strategies, study planning, and guidance to ensure successful program completion.'
    }
  ];

  const benefits = [
    'Flexible Learning Options',
    'Accredited Program Selection',
    'Admission Process Support',
    'Cost-Effective Education',
    'Career-Aligned Courses',
    'Technical Assistance',
    'Study Schedule Planning',
    'Ongoing Academic Support'
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
            <h1>Online Education Assistance</h1>
            <p>
              Navigate the world of online learning with comprehensive support for course selection, 
              admissions, and success in your digital education journey.
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
              Complete support for your online education journey from program selection to graduation
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
              <h2>Ready to Start Your Online Learning Journey?</h2>
              <p>
                Let's discuss the best online education programs for your career goals and learning style. 
                Fill out the form and our education advisors will get back to you within 24 hours.
              </p>
              <ul className="cta-points">
                <li><FaCheckCircle /> Free online education consultation</li>
                <li><FaCheckCircle /> Program comparison & recommendations</li>
                <li><FaCheckCircle /> Admission process guidance</li>
              </ul>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Request a Consultation" 
                defaultService="Online Education Assistance"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineEducation;
