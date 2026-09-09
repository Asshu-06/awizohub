import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const phoneNumber = '7845787567';
  const whatsappNumber = '917845787567'; // with country code for WhatsApp
  const email = import.meta.env.VITE_EMAIL || 'info@awizohub.com';

  // Scroll to section helper
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation to home sections
  const handleSectionNavigation = (sectionId) => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setOpenSubMenu(null);

    if (location.pathname === '/') {
      // Already on home page, just scroll
      scrollToSection(sectionId);
    } else {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setOpenSubMenu(null);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
    setOpenSubMenu(null);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (serviceName) => {
    setOpenSubMenu(openSubMenu === serviceName ? null : serviceName);
  };

  const servicesMenu = [
    { name: 'Web Design & Development', path: '/#web-design', icon: '🌐' },
    { name: 'SEO & Performance Marketing', path: '/#seo-marketing', icon: '📊' },
    { name: 'Cloud Hosting & Infrastructure', path: '/#cloud-hosting', icon: '☁️' },
    { name: 'CRM & Automation', path: '/#crm-automation', icon: '⚡' },
    { name: 'Digital Strategy & Growth', path: '/#digital-strategy', icon: '🎯' },
    { name: 'AI Lead Generation', path: '/#ai-lead-generation', icon: '🤖' },
    { name: 'Video Editing & Production', path: '/#video-editing', icon: '🎬' },
    { name: 'Payment Gateway Integration', path: '/#payment-gateway', icon: '💳' },
    { name: 'Online Education', path: '/#online-education', icon: '🎓' },
    { name: 'Study Abroad', path: '/#study-abroad', icon: '🌍' },
    { name: 'IT Placement Assistance', path: '/#it-placement', icon: '💼' }
  ];

  const digitalMarketingMenu = [
    { name: 'Social Media Marketing', path: '/#digital-marketing', icon: '🟪' },
    { name: 'Meta & Facebook Ads', path: '/#digital-marketing', icon: '🟦' },
    { name: 'Email Marketing', path: '/#digital-marketing', icon: '✉️' },
    { name: 'Video Marketing', path: '/#digital-marketing', icon: '🎥' },
    { name: 'Local SEO', path: '/#digital-marketing', icon: '📍' },
    { name: 'Google Ads Management', path: '/#digital-marketing', icon: '🎯' },
    { name: 'Content Marketing', path: '/#digital-marketing', icon: '👍' },
    { name: 'WhatsApp Marketing', path: '/#digital-marketing', icon: '💬' },
    { name: 'Influencer Marketing', path: '/#digital-marketing', icon: '⭐' },
    { name: 'E-Commerce Marketing', path: '/#digital-marketing', icon: '🛒' }
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header-topbar">
        <div className="container">
          <div className="topbar-content">
            <div className="topbar-left">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="topbar-link">
                <FaPhone /> {phoneNumber}
              </a>
              <a href={`mailto:${email}`} className="topbar-link">
                <FaEnvelope /> {email}
              </a>
            </div>
            <div className="topbar-right">
              <a href={`https://wa.me/${whatsappNumber}?text=Hi, I would like a free consultation`} target="_blank" rel="noopener noreferrer" className="topbar-cta">
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <img 
                src="/awizo-logo.png" 
                alt="Awizo Hub" 
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
              <span className="logo-text">Awizo Hub</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-menu">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/about" 
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item nav-dropdown">
                <button 
                  className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-label="Services menu"
                >
                  Services <FaChevronDown className="dropdown-icon" />
                </button>
                <ul className="dropdown-menu dropdown-menu-services" role="menu">
                  {servicesMenu.map((service, index) => (
                    <li key={index} role="none">
                      <button 
                        onClick={() => handleSectionNavigation('services')}
                        className="dropdown-item" 
                        role="menuitem"
                      >
                        <span className="service-icon">{service.icon}</span>
                        <span>{service.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item nav-dropdown">
                <button 
                  className={`nav-link ${location.pathname.startsWith('/digital-marketing') ? 'active' : ''}`}
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-label="Digital Marketing menu"
                >
                  Digital Marketing <FaChevronDown className="dropdown-icon" />
                </button>
                <ul className="dropdown-menu dropdown-menu-digital-marketing" role="menu">
                  {digitalMarketingMenu.map((item, index) => (
                    <li key={index} role="none">
                      <button 
                        onClick={() => handleSectionNavigation('digital-marketing')}
                        className="dropdown-item" 
                        role="menuitem"
                      >
                        <span className="service-icon">{item.icon}</span>
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link 
                  to="/careers" 
                  className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`}
                >
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/blog" 
                  className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className="nav-link nav-link-cta"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <button 
          className="mobile-menu-close"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
        <ul className="mobile-nav-menu">
          <li className="mobile-nav-item">
            <Link to="/" className="mobile-nav-link">
              Home
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/about" className="mobile-nav-link">
              About Us
            </Link>
          </li>
          <li className="mobile-nav-item">
            <button 
              className="mobile-nav-link mobile-dropdown-toggle"
              onClick={toggleServices}
            >
              Services <FaChevronDown className={`dropdown-icon ${isServicesOpen ? 'rotated' : ''}`} />
            </button>
            {isServicesOpen && (
              <ul className="mobile-dropdown-menu">
                {servicesMenu.map((service, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleSectionNavigation('services')}
                      className="mobile-dropdown-item"
                    >
                      <span className="service-icon">{service.icon}</span>
                      <span>{service.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="mobile-nav-item">
            <button 
              className="mobile-nav-link mobile-dropdown-toggle"
              onClick={() => setOpenSubMenu(openSubMenu === 'digital-marketing' ? null : 'digital-marketing')}
            >
              Digital Marketing <FaChevronDown className={`dropdown-icon ${openSubMenu === 'digital-marketing' ? 'rotated' : ''}`} />
            </button>
            {openSubMenu === 'digital-marketing' && (
              <ul className="mobile-dropdown-menu">
                {digitalMarketingMenu.map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleSectionNavigation('digital-marketing')}
                      className="mobile-dropdown-item"
                    >
                      <span className="service-icon">{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="mobile-nav-item">
            <Link to="/careers" className="mobile-nav-link">
              Careers
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/blog" className="mobile-nav-link">
              Blog
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/contact" className="mobile-nav-link mobile-nav-link-cta">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
