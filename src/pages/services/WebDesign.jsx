import { FaCheckCircle, FaLaptopCode, FaShoppingCart, FaMobileAlt, FaCogs, FaSearch, FaHeadset } from 'react-icons/fa';
import ContactForm from '../../components/common/ContactForm';
import ServiceFeaturesSection from '../../components/common/ServiceFeaturesSection';
import { serviceVideos } from '../../data/serviceVideos';
import './ServiceDetail.css';

const WebDesign = () => {
  const features = [
    'Responsive Web Design',
    'Modern UI/UX Design',
    'Performance Optimization',
    'SEO-Friendly Architecture',
    'Cross-Browser Compatibility',
    'Mobile-First Approach',
    'Custom Web Applications',
    'E-Commerce Solutions'
  ];

  const solutions = [
    {
      icon: FaLaptopCode,
      title: 'Business Websites',
      description: 'Professional company websites with clear messaging, service pages, and lead capture built to represent your brand online.'
    },
    {
      icon: FaShoppingCart,
      title: 'E-Commerce Stores',
      description: 'Online stores with product catalogs, secure checkout, payment gateway integration, and easy order management.'
    },
    {
      icon: FaMobileAlt,
      title: 'Landing Pages',
      description: 'High-converting campaign pages designed for ads, product launches, and lead generation with fast load times.'
    },
    {
      icon: FaCogs,
      title: 'Custom Web Applications',
      description: 'Dashboards, booking systems, client portals, and internal tools tailored to how your business actually works.'
    },
    {
      icon: FaSearch,
      title: 'SEO-Ready Development',
      description: 'Clean code, fast performance, structured pages, and technical SEO so your site is ready to rank from day one.'
    },
    {
      icon: FaHeadset,
      title: 'Support & Maintenance',
      description: 'Ongoing updates, security patches, backups, and content changes so your website stays reliable after launch.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your goals, audience, competitors, and required features before any design or coding begins.'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'You get a clear visual direction with layouts, branding, and user flow so the site feels intuitive and on-brand.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build a responsive, secure, and fast website using modern technologies with clean, maintainable code.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Every page is tested across devices and browsers, then we deploy, connect domains, and go live with confidence.'
    }
  ];

  const extras = [
    'Domain & hosting setup guidance',
    'Contact forms and WhatsApp integration',
    'Google Analytics & Search Console setup',
    'Speed optimization and Core Web Vitals',
    'Admin panel for easy content updates',
    'SSL, security, and backup configuration'
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>Web Design & Development</h1>
            <p>
              Custom websites with modern design and optimized performance to grow your business online
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Build Your Digital Presence</h2>
              <p>
                We create stunning, responsive websites that not only look great but perform exceptionally. 
                Our web design and development services combine creativity with technical expertise to 
                deliver websites that drive results.
              </p>
              <p>
                From simple landing pages to complex web applications, we handle everything from 
                design to deployment, ensuring your website reflects your brand and achieves your 
                business goals.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="service-image">
                <video autoPlay loop muted playsInline>
                  <source src="/websitedev.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeaturesSection
        features={features}
        video={serviceVideos['/services/web-design']}
        subtitle="Comprehensive web development services tailored to your needs"
      />

      <section className="section service-extra-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Build</h2>
            <p className="section-subtitle">
              End-to-end website development for startups, growing brands, and established businesses
            </p>
          </div>
          <div className="service-extra-grid">
            {solutions.map((item) => (
              <div key={item.title} className="service-extra-card">
                <div className="service-extra-icon">
                  <item.icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-process-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>How We Work</h2>
            <p className="section-subtitle">
              A simple, transparent process from idea to a live website
            </p>
          </div>
          <div className="service-process-grid">
            {processSteps.map((item) => (
              <div key={item.step} className="service-process-card">
                <span className="service-process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-extra-section">
        <div className="container">
          <div className="row service-included-row">
            <div className="col-12 col-md-6">
              <h2>Everything Included</h2>
              <p>
                Beyond design and coding, we handle the details that make a website ready for real business use.
                Your site will be mobile-friendly, easy to manage, and built to convert visitors into enquiries.
              </p>
              <p>
                Whether you need a new website from scratch or want to rebuild an outdated one, we keep the
                existing brand strengths and improve structure, speed, and user experience.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="service-included-list">
                {extras.map((item) => (
                  <li key={item}>
                    <FaCheckCircle />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="section service-cta-section">
        <div className="container">
          <div className="service-cta-grid">
            <div className="service-cta-content">
              <h2>Ready to Build Your Website?</h2>
              <p>
                Let's discuss your project and create a website that perfectly represents your brand 
                and drives business growth.
              </p>
              <ul className="cta-points">
                <li><FaCheckCircle /> Free consultation & quote</li>
                <li><FaCheckCircle /> Custom design mockups</li>
                <li><FaCheckCircle /> Responsive & mobile-friendly</li>
              </ul>
            </div>
            <div className="service-form">
              <ContactForm 
                formTitle="Request a Quote" 
                defaultService="Web Design & Development"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
