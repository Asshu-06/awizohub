import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import typingVideo from '../../assets/videos/typingfemale.mp4';
import './ServiceDetail.css';

const AbroadEducation = () => {
  const services = [
    {
      id: 'university-selection',
      title: 'University Selection & Research',
      description: 'Expert guidance on selecting the right universities and programs based on your academic profile, career goals, and budget considerations.'
    },
    {
      id: 'application-support',
      title: 'Application Support & Documentation',
      description: 'Complete assistance with application forms, document preparation, and submission to ensure error-free applications to your dream universities.'
    },
    {
      id: 'visa-guidance',
      title: 'Visa Guidance & Processing',
      description: 'Step-by-step visa application support including document checklist, interview preparation, and follow-up until visa approval.'
    },
    {
      id: 'course-planning',
      title: 'Course Planning & Selection',
      description: 'Personalized course recommendations aligned with your interests, career aspirations, and market demand in your target country.'
    },
    {
      id: 'sop-lor',
      title: 'SOP & LOR Assistance',
      description: 'Professional help crafting compelling Statement of Purpose and securing strong Letters of Recommendation that stand out to admissions committees.'
    },
    {
      id: 'scholarships',
      title: 'Scholarship Guidance & Financial Aid',
      description: 'Identify scholarship opportunities, prepare applications, and maximize your chances of receiving financial aid for your studies abroad.'
    },
    {
      id: 'pre-departure',
      title: 'Pre-Departure Briefing & Orientation',
      description: 'Comprehensive pre-departure sessions covering travel, accommodation, cultural adaptation, and essential tips for international students.'
    },
    {
      id: 'post-arrival',
      title: 'Post-Arrival Support & Assistance',
      description: 'Ongoing support after you reach your destination including local orientation, bank account setup, and settling-in guidance.'
    }
  ];

  const benefits = [
    'Expert University Counseling',
    'Application Strategy Planning',
    'Visa Application Assistance',
    'Scholarship Discovery Support',
    'Document Preparation Help',
    'Pre-Departure Orientation',
    'Accommodation Guidance',
    'Cultural Adaptation Support'
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
            <h1>Abroad Education Guidance</h1>
            <p>
              Achieve your study abroad dreams with expert guidance on university selection, 
              applications, visas, and every step of your journey.
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
              End-to-end support for your study abroad journey from application to arrival
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
              <h2>Ready to Study Abroad?</h2>
              <p>
                Let's discuss your study abroad plans and how we can help you get into your dream university. 
                Fill out the form and our education consultants will get back to you within 24 hours.
              </p>
              <ul className="cta-points">
                <li><FaCheckCircle /> Free study abroad consultation</li>
                <li><FaCheckCircle /> University shortlisting assistance</li>
                <li><FaCheckCircle /> Scholarship opportunity discovery</li>
              </ul>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Request a Consultation" 
                defaultService="Abroad Education Guidance"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbroadEducation;
