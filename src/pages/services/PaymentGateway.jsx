import { FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import './ServiceDetail.css';

const PaymentGateway = () => {
  const features = [
    'Secure Payment Processing',
    'Multiple Payment Methods',
    'Stripe Integration',
    'PayPal Integration',
    'Subscription Management',
    'Fraud Protection',
    'PCI Compliance',
    'Transaction Monitoring'
  ];

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>Payment Gateway Integration</h1>
            <p>Secure and seamless payment solutions for your business</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Secure Payment Processing</h2>
              <p>
                Integrate reliable payment gateways into your website or application. 
                We ensure secure transactions and a smooth checkout experience for your customers.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="service-image">
                <video autoPlay loop muted playsInline>
                  <source src="/career.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section features-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-cta-section">
        <div className="container">
          <div className="service-cta-grid">
            <div className="service-cta-content">
              <h2>Ready to Accept Payments?</h2>
              <p>Let's integrate a secure payment solution for your business.</p>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Get Started" 
                defaultService="Payment Gateway Integration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentGateway;
