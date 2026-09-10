import ContactForm from '../../components/common/ContactForm';
import ServiceFeaturesSection from '../../components/common/ServiceFeaturesSection';
import { serviceVideos } from '../../data/serviceVideos';
import './ServiceDetail.css';

const CRMAutomation = () => {
  const features = [
    'Custom CRM Solutions',
    'Marketing Automation',
    'Sales Pipeline Management',
    'Customer Data Management',
    'Workflow Automation',
    'Integration with Existing Tools',
    'Analytics & Reporting',
    'Mobile CRM Access'
  ];

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>CRM & Automation</h1>
            <p>Streamline your business operations with smart automation</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Automate & Scale Your Business</h2>
              <p>
                Transform your customer relationships and automate repetitive tasks with our CRM and 
                automation solutions. Increase productivity and improve customer satisfaction.
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

      <ServiceFeaturesSection
        features={features}
        video={serviceVideos['/services/crm-automation']}
      />

      <section className="section service-cta-section">
        <div className="container">
          <div className="service-cta-grid">
            <div className="service-cta-content">
              <h2>Ready to Automate?</h2>
              <p>Let's discuss how CRM and automation can transform your business.</p>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Get Started" 
                defaultService="CRM & Automation"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMAutomation;
