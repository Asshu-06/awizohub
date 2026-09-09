import { FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import './ServiceDetail.css';

const AILeadGeneration = () => {
  const features = [
    'AI-Powered Lead Scoring',
    'Automated Lead Nurturing',
    'Predictive Analytics',
    'Intelligent Chatbots',
    'Lead Qualification',
    'Multi-Channel Campaigns',
    'Personalization at Scale',
    'Real-Time Insights'
  ];

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>AI Lead Generation</h1>
            <p>Generate quality leads with artificial intelligence</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Smart Lead Generation</h2>
              <p>
                Leverage the power of AI to identify, qualify, and convert high-quality leads. 
                Our AI-driven solutions help you focus on prospects that matter most.
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
              <h2>Ready for AI-Powered Leads?</h2>
              <p>Let's implement AI solutions to supercharge your lead generation.</p>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Get Started" 
                defaultService="AI Lead Generation"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AILeadGeneration;
