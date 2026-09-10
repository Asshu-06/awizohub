import ContactForm from '../../components/common/ContactForm';
import ServiceFeaturesSection from '../../components/common/ServiceFeaturesSection';
import { serviceVideos } from '../../data/serviceVideos';
import './ServiceDetail.css';

const VideoEditing = () => {
  const features = [
    'Professional Video Editing',
    'Motion Graphics',
    'Color Grading',
    'Sound Design & Mixing',
    'Social Media Videos',
    'YouTube Content',
    'Promotional Videos',
    'Corporate Videos'
  ];

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>Video Editing & Production</h1>
            <p>Create engaging video content that captures attention</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Professional Video Production</h2>
              <p>
                From concept to final cut, we create high-quality videos that tell your story 
                and engage your audience across all platforms.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="service-image">
                <video autoPlay loop muted playsInline>
                  <source src="/videoed.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeaturesSection
        features={features}
        video={serviceVideos['/services/video-editing']}
      />

      <section className="section service-cta-section">
        <div className="container">
          <div className="service-cta-grid">
            <div className="service-cta-content">
              <h2>Ready to Create Amazing Videos?</h2>
              <p>Let's bring your vision to life with professional video production.</p>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Get Started" 
                defaultService="Video Editing & Production"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditing;
