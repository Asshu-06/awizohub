import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaPhone } from 'react-icons/fa';
import './ThankYou.css';

const ThankYou = () => {
  const location = useLocation();
  const { formType, service } = location.state || {};

  return (
    <div className="thankyou-page">
      <div className="container">
        <div className="thankyou-content">
          <div className="success-icon">
            <FaCheckCircle />
          </div>
          <h1>Thank You!</h1>
          <p className="thankyou-message">
            Your enquiry has been successfully submitted. Our team will review your information 
            and get back to you within 24 hours.
          </p>
          
          {service && (
            <div className="enquiry-details">
              <p><strong>Service:</strong> {service}</p>
            </div>
          )}

          <div className="thankyou-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <FaHome /> Back to Home
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              <FaPhone /> Contact Us
            </Link>
          </div>

          <div className="next-steps">
            <h3>What Happens Next?</h3>
            <ul>
              <li>Our team will review your enquiry</li>
              <li>You'll receive a confirmation email shortly</li>
              <li>We'll contact you within 24 hours to discuss your requirements</li>
              <li>Get a personalized proposal tailored to your needs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
