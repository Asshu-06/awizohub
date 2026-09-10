import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaEnvelope
} from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
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
    // Close menus on route change
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setOpenSubMenu(null);
    setDesktopDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-dropdown')) {
        setDesktopDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
    { name: 'Web Design & Development', path: '/services/web-design', icon: '🌐' },
    { name: 'SEO & Performance Marketing', path: '/services/seo-marketing', icon: '📊' },
    { name: 'Cloud Hosting & Infrastructure', path: '/services/cloud-hosting', icon: '☁️' },
    { name: 'CRM & Automation', path: '/services/crm-automation', icon: '⚡' },
    { name: 'Digital Strategy & Growth', path: '/services/digital-strategy', icon: '🎯' },
    { name: 'AI Lead Generation', path: '/services/ai-lead-generation', icon: '🤖' },
    { name: 'Video Editing & Production', path: '/services/video-editing', icon: '🎬' },
    { name: 'Payment Gateway Integration', path: '/services/payment-gateway', icon: '💳' },
    { name: 'Online Education', path: '/services/online-education', icon: '🎓' },
    { name: 'Study Abroad', path: '/services/abroad-education', icon: '🌍' },
    { name: 'IT Placement Assistance', path: '/services/it-placement', icon: '💼' }
  ];

  const digitalMarketingMenu = [
    { name: 'Social Media Marketing', path: '/digital-marketing/social-media', icon: '🟪' },
    { name: 'Meta & Facebook Ads', path: '/digital-marketing/meta-ads', icon: '🟦' },
    { name: 'Email Marketing', path: '/digital-marketing/email', icon: '✉️' },
    { name: 'Video Marketing', path: '/digital-marketing/video', icon: '🎥' },
    { name: 'Local SEO', path: '/digital-marketing/local-seo', icon: '📍' },
    { name: 'Google Ads Management', path: '/digital-marketing/google-ads', icon: '🎯' },
    { name: 'Content Marketing', path: '/digital-marketing/content', icon: '👍' },
    { name: 'WhatsApp Marketing', path: '/digital-marketing/whatsapp', icon: '💬' },
    { name: 'Influencer Marketing', path: '/digital-marketing/influencer', icon: '⭐' },
    { name: 'E-Commerce Marketing', path: '/digital-marketing/ecommerce', icon: '🛒' }
  ];

  const handleServiceNavigation = (path) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setOpenSubMenu(null);
    setDesktopDropdown(null);
    navigate(path);
  };

  const toggleDesktopDropdown = (menu) => {
    setDesktopDropdown((current) => (current === menu ? null : menu));
  };

  const closeDesktopDropdown = () => {
    setDesktopDropdown(null);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header-topbar">
        <div className="container">
          <div className="topbar-content">
            <div className="topbar-left">
              <a href={`tel:${phoneNumber}`} className="topbar-link">
                <BsTelephoneFill className="phone-icon" aria-hidden="true" />
                <span>{phoneNumber}</span>
              </a>
              <a href={`mailto:${email}`} className="topbar-link topbar-email">
                <FaEnvelope aria-hidden="true" />
                <span className="topbar-email-text">{email}</span>
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
              <li
                className={`nav-item nav-dropdown ${desktopDropdown === 'services' ? 'is-open' : ''}`}
                onMouseLeave={closeDesktopDropdown}
              >
                <button 
                  type="button"
                  className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                  aria-expanded={desktopDropdown === 'services'}
                  aria-haspopup="true"
                  aria-label="Services menu"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDesktopDropdown('services');
                  }}
                >
                  Services <FaChevronDown className="dropdown-icon" />
                </button>
                <ul className="dropdown-menu dropdown-menu-services" role="menu">
                  {servicesMenu.map((service, index) => (
                    <li key={index} role="none">
                      <Link 
                        to={service.path}
                        className="dropdown-item" 
                        role="menuitem"
                        onClick={closeDesktopDropdown}
                      >
                        <span className="service-icon">{service.icon}</span>
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={`nav-item nav-dropdown ${desktopDropdown === 'digital-marketing' ? 'is-open' : ''}`}
                onMouseLeave={closeDesktopDropdown}
              >
                <button 
                  type="button"
                  className={`nav-link ${location.pathname.startsWith('/digital-marketing') ? 'active' : ''}`}
                  aria-expanded={desktopDropdown === 'digital-marketing'}
                  aria-haspopup="true"
                  aria-label="Digital Marketing menu"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDesktopDropdown('digital-marketing');
                  }}
                >
                  Digital Marketing <FaChevronDown className="dropdown-icon" />
                </button>
                <ul className="dropdown-menu dropdown-menu-digital-marketing" role="menu">
                  {digitalMarketingMenu.map((item, index) => (
                    <li key={index} role="none">
                      <Link 
                        to={item.path}
                        className="dropdown-item" 
                        role="menuitem"
                        onClick={closeDesktopDropdown}
                      >
                        <span className="service-icon">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
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
                    <Link 
                      to={service.path}
                      className="mobile-dropdown-item"
                      onClick={() => handleServiceNavigation(service.path)}
                    >
                      <span className="service-icon">{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
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
                    <Link 
                      to={item.path}
                      className="mobile-dropdown-item"
                      onClick={() => handleServiceNavigation(item.path)}
                    >
                      <span className="service-icon">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
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
