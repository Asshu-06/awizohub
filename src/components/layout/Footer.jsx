import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaYoutube, 
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '7845787567';
  const whatsappNumber = '917845787567';
  const email = import.meta.env.VITE_EMAIL || 'info@awizohub.com';

  const services = [
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'IT Placement', path: '/services/it-placement' },
    { name: 'Abroad Education', path: '/services/abroad-education' },
    { name: 'Online Education', path: '/services/online-education' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/awizohub?igsi=ZXQ3bHlnaTB2azQ=' },
    { name: 'Facebook', icon: FaFacebookF, url: 'https://facebook.com/share/17zPiCXEoz' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@awizohubconsultancy' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: `https://wa.me/${whatsappNumber}` },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-col">
              <h3 className="footer-title">Awizo Hub</h3>
              <p className="footer-description">
                Your trusted partner for digital marketing, IT placement, education guidance, 
                and online learning solutions. We help you achieve your goals with expert 
                support and personalized services.
              </p>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4 className="footer-heading">Our Services</h4>
              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link to={service.path} className="footer-link">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-contact">
                <li className="contact-item">
                  <FaWhatsapp className="contact-icon" />
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                    +91 {phoneNumber}
                  </a>
                </li>
                <li className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href={`mailto:${email}`} className="contact-link">
                    {email}
                  </a>
                </li>
                <li className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span className="contact-text">
                    India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Awizo Hub. All rights reserved.
            </p>
            <ul className="footer-legal">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="legal-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
