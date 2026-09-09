import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { trackButtonClick } from '../../utils/analytics';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const phoneNumber = '+917845787567';
  const whatsappNumber = '917845787567'; // with country code for WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your services`;

  const handleWhatsAppClick = () => {
    trackButtonClick('whatsapp_floating', 'floating_buttons');
  };

  const handleCallClick = () => {
    trackButtonClick('call_floating', 'floating_buttons');
  };

  return (
    <div className="floating-buttons">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        onClick={handleWhatsAppClick}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="floating-icon" />
        <span className="floating-text">WhatsApp</span>
      </a>
      
      <a
        href={`tel:${phoneNumber}`}
        className="floating-btn call-btn"
        onClick={handleCallClick}
        aria-label="Call us"
      >
        <FaPhone className="floating-icon" />
        <span className="floating-text">Call Now</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
