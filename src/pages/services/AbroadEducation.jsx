import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import abroadEducationVideo from '../../assets/videos/AbroadEducation.mp4';
import './ServiceDetail.css';

const AbroadEducation = () => {
  const services = [
    {
      id: 'university-selection',
      title: 'University Selection & Research',
      description: 'Expert guidance on selecting the right universities and programs based on your academic profile, career goals, and budget considerations.',
      video: abroadEducationVideo
    },
    {
      id: 'application-support',
      title: 'Application Support & Documentation',
      description: 'Complete assistance with application forms, document preparation, and submission to ensure error-free applications to your dream universities.',
      video: abroadEducationVideo
    },
    {
      id: 'visa-guidance',
      title: 'Visa Guidance & Processing',
      description: 'Step-by-step visa application support including document checklist, interview preparation, and follow-up until visa approval.',
      video: abroadEducationVideo
    },
    {
      id: 'course-planning',
      title: 'Course Planning & Selection',
      description: 'Personalized course recommendations aligned with your interests, career aspirations, and market demand in your target country.',
      video: abroadEducationVideo
    },
    {
      id: 'sop-lor',
      title: 'SOP & LOR Assistance',
      description: 'Professional help crafting compelling Statement of Purpose and securing strong Letters of Recommendation that stand out to admissions committees.',
      video: abroadEducationVideo
    },
    {
      id: 'scholarships',
      title: 'Scholarship Guidance & Financial Aid',
      description: 'Identify scholarship opportunities, prepare applications, and maximize your chances of receiving financial aid for your studies abroad.',
      video: abroadEducationVideo
    },
    {
      id: 'pre-departure',
      title: 'Pre-Departure Briefing & Orientation',
      description: 'Comprehensive pre-departure sessions covering travel, accommodation, cultural adaptation, and essential tips for international students.',
      video: abroadEducationVideo
    },
    {
      id: 'post-arrival',
      title: 'Post-Arrival Support & Assistance',
      description: 'Ongoing support after you reach your destination including local orientation, bank account setup, and settling-in guidance.',
      video: abroadEducationVideo
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
                
                {/* Video Section */}
                {service.video && (
                  <div className="service-video-container">
                    <video 
                      className="service-video" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src={service.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                
                <div className="service-inquiry-form">
                  <h5>Interested in {service.title}?</h5>
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const name = formData.get('name');
                      const phone = formData.get('phone');
                      const email = formData.get('email');
                      const message = formData.get('message');
                      
                      const whatsappMessage = `*New Inquiry - ${service.title}*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Message:* ${message}`;
                      window.open(`https://wa.me/917845787567?text=${whatsappMessage}`, '_blank');
                    }}
                  >
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="tel" name="phone" placeholder="Phone Number" required />
                    <input type="email" name="email" placeholder="Email Address" required />
                    <textarea name="message" placeholder="Tell us about your requirements" rows="3"></textarea>
                    <button type="submit" className="btn btn-primary">Send to WhatsApp</button>
                  </form>
                </div>
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
