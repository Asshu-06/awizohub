import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const phoneNumber = '7845787567';
  const whatsappNumber = '917845787567'; // with country code for WhatsApp
  const email = import.meta.env.VITE_EMAIL || 'info@awizohub.com';

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
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const services = [
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'IT Placement', path: '/services/it-placement' },
    { name: 'Abroad Education', path: '/services/abroad-education' },
    { name: 'Online Education', path: '/services/online-education' },
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
              <span className="logo-text" style={{ display: 'none' }}>Awizo Hub</span>
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
                  onClick={toggleServices}
                >
                  Services <FaChevronDown className="dropdown-icon" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/services" className="dropdown-item">
                      All Services
                    </Link>
                  </li>
                  {services.map((service) => (
                    <li key={service.path}>
                      <Link to={service.path} className="dropdown-item">
                        {service.name}
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
                <li>
                  <Link to="/services" className="mobile-dropdown-item">
                    All Services
                  </Link>
                </li>
                {services.map((service) => (
                  <li key={service.path}>
                    <Link to={service.path} className="mobile-dropdown-item">
                      {service.name}
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
