import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '../components/common/ContactForm';
import './Contact.css';

const Contact = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || '+1234567890';
  const email = import.meta.env.VITE_EMAIL || 'info@awizohub.com';
  const googleMapsUrl = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || '';

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      content: phoneNumber,
      link: `tel:${phoneNumber}`
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: email,
      link: `mailto:${email}`
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: 'India',
      link: null
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM',
      link: null
    }
  ];

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We'd love to hear from you. Get in touch with our team today!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">
                  <info.icon />
                </div>
                <h4>{info.title}</h4>
                {info.link ? (
                  <a href={info.link} className="contact-info-link">
                    {info.content}
                  </a>
                ) : (
                  <p>{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            <div className="contact-form-container">
              <ContactForm formTitle="Send Us a Message" />
            </div>
            <div className="contact-map-container">
              <div className="map-wrapper">
                {googleMapsUrl ? (
                  <iframe
                    src={googleMapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Awizo Hub Location"
                  ></iframe>
                ) : (
                  <div className="map-placeholder">
                    <FaMapMarkerAlt />
                    <p>Map will be displayed here</p>
                    <small>Add your Google Maps embed URL to .env file</small>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
