import { FaBullhorn, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import videoEditingBg from '../../assets/videos/video editing.mp4';
import videoEditing2 from '../../assets/videos/videoediting2.mp4';
import digitalMarketingVideo from '../../assets/videos/DigitalMarketing.mp4';
import typingMaleVideo from '../../assets/videos/typingmale.mp4';
import typingFemaleVideo from '../../assets/videos/typingfemale.mp4';
import goodTypingVideo from '../../assets/videos/goodtyping.mp4';
import boyTypingVideo from '../../assets/videos/boytyping.mp4';
import './ServiceDetail.css';

const DigitalMarketing = () => {
  const services = [
    {
      id: 'video-editing',
      title: 'Video Editing & Content Creation',
      description: 'Professional video editing, motion graphics, and engaging video content for social media, YouTube, and advertising campaigns.',
      video: videoEditing2
    },
    {
      id: 'branding',
      title: 'Branding & Brand Identity',
      description: 'Complete brand identity design including logo design, brand guidelines, color schemes, and visual identity systems.',
      video: digitalMarketingVideo
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads (Facebook & Instagram)',
      description: 'Reach your target audience with precision-targeted ad campaigns on Facebook and Instagram with proven ROI.',
      video: digitalMarketingVideo
    },
    {
      id: 'google-ads',
      title: 'Google Ads & PPC',
      description: 'Drive qualified traffic to your website with optimized Google Ads, search ads, display ads, and pay-per-click campaigns.',
      video: '/google.mp4'
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing & Management',
      description: 'Build brand awareness and engage your audience across all major social media platforms with consistent content strategy.',
      video: digitalMarketingVideo
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom website development with modern technologies, responsive design, and optimized performance for your business needs.',
      video: typingMaleVideo
    },
    {
      id: 'app-development',
      title: 'App Development',
      description: 'Native and cross-platform mobile app development for iOS and Android with intuitive user experiences.',
      video: typingFemaleVideo
    },
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business processes, from enterprise applications to automation tools.',
      video: boyTypingVideo
    },
    {
      id: 'pos-systems',
      title: 'POS Systems',
      description: 'Point of Sale systems for retail and restaurants with inventory management, billing, and analytics capabilities.',
      video: goodTypingVideo
    },
    {
      id: 'cms-solutions',
      title: 'CMS Solutions',
      description: 'Content Management Systems for easy website updates, e-commerce platforms, and digital content management.',
      video: goodTypingVideo
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      description: 'Improve your organic search rankings and visibility with on-page, off-page, and technical SEO strategies.',
      video: digitalMarketingVideo
    },
    {
      id: 'google-mapping',
      title: 'Google Mapping & Local SEO',
      description: 'Get your business on Google Maps, optimize local search presence, and manage Google My Business listings.',
      video: digitalMarketingVideo
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing & Copywriting',
      description: 'Compelling content creation including blog posts, articles, website copy, and marketing materials that convert.',
      video: digitalMarketingVideo
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing Campaigns',
      description: 'Build and nurture customer relationships with targeted email campaigns, newsletters, and automated sequences.',
      video: digitalMarketingVideo
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation & Conversion Optimization',
      description: 'Convert prospects into customers with strategic lead generation campaigns and landing page optimization.',
      video: digitalMarketingVideo
    },
    {
      id: 'creative-design',
      title: 'Creative Design & Graphics',
      description: 'Eye-catching visual content, social media graphics, posters, banners, and designs that resonate with your audience.',
      video: videoEditing2
    },
    {
      id: 'influencer-marketing',
      title: 'Influencer Marketing',
      description: 'Connect with relevant influencers to amplify your brand message and reach new audiences authentically.',
      video: digitalMarketingVideo
    },
    {
      id: 'analytics',
      title: 'Analytics & Performance Tracking',
      description: 'Data-driven insights with comprehensive analytics, performance reports, and actionable recommendations for growth.',
      video: digitalMarketingVideo
    }
  ];

  const benefits = [
    'Increase Brand Visibility & Awareness',
    'Generate High-Quality Leads',
    'Improve ROI on Ad Spend',
    'Build Strong Customer Engagement',
    'Data-Driven Marketing Strategies',
    'Transparent Reporting & Analytics',
    'Professional Creative Content',
    'Expert Team with Proven Results'
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>Digital Marketing Services</h1>
            <p>
              Transform your online presence with comprehensive digital marketing solutions 
              that drive results and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Grow Your Business Online</h2>
              <p>
                In today's digital world, having a strong online presence is crucial for business success. 
                Our digital marketing services are designed to help you reach your target audience, generate 
                quality leads, and increase conversions.
              </p>
              <p>
                We combine data-driven strategies with creative excellence to deliver campaigns that not only 
                look great but also perform exceptionally. From social media management to paid advertising, 
                we handle all aspects of your digital marketing needs.
              </p>
              <h3 className="mt-4">Why Choose Our Digital Marketing Services?</h3>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <FaCheckCircle className="benefit-icon" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <div className="service-image">
                <img 
                  src="/images/digital-marketing.jpg" 
                  alt="Digital Marketing Services" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
            <p className="section-subtitle">
              Comprehensive digital marketing solutions tailored to your business goals
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
              <h2>Ready to Boost Your Online Presence?</h2>
              <p>
                Let's discuss how our digital marketing services can help you achieve your business goals. 
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <ul className="cta-points">
                <li><FaCheckCircle /> Free consultation & strategy session</li>
                <li><FaCheckCircle /> Custom proposal tailored to your needs</li>
                <li><FaCheckCircle /> No long-term contracts required</li>
              </ul>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Request a Quote" 
                defaultService="Digital Marketing Services"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
