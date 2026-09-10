import { FaCheckCircle } from 'react-icons/fa';
import '../../pages/services/ServiceDetail.css';

const ServiceFeaturesSection = ({ features, video, subtitle }) => {
  return (
    <section className="section features-section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>What We Offer</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        <div className="features-offer-layout">
          {video && (
            <div className="features-offer-video">
              <video autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          )}

          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeaturesSection;
