import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/common/FloatingButtons';
import ScrollToTop from './components/common/ScrollToTop';
import IntroScreen from './components/common/IntroScreen';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import DigitalMarketing from './pages/services/DigitalMarketing';
import WebDesign from './pages/services/WebDesign';
import SEOMarketing from './pages/services/SEOMarketing';
import CloudHosting from './pages/services/CloudHosting';
import CRMAutomation from './pages/services/CRMAutomation';
import DigitalStrategy from './pages/services/DigitalStrategy';
import AILeadGeneration from './pages/services/AILeadGeneration';
import VideoEditing from './pages/services/VideoEditing';
import PaymentGateway from './pages/services/PaymentGateway';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

// Additional Service Pages
import ServiceDetailLayout from './components/common/ServiceDetailLayout';
import additionalServicePages from './data/additionalServicePages';

// Analytics
import { initAnalytics } from './utils/analytics';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Initialize analytics on mount
    initAnalytics();
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Show intro screen only on first load
  if (showIntro) {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/seo-marketing" element={<SEOMarketing />} />
            <Route path="/services/cloud-hosting" element={<CloudHosting />} />
            <Route path="/services/crm-automation" element={<CRMAutomation />} />
            <Route path="/services/digital-strategy" element={<DigitalStrategy />} />
            <Route path="/services/ai-lead-generation" element={<AILeadGeneration />} />
            <Route path="/services/video-editing" element={<VideoEditing />} />
            <Route path="/services/payment-gateway" element={<PaymentGateway />} />
            {additionalServicePages.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                element={<ServiceDetailLayout {...page} />}
              />
            ))}
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
