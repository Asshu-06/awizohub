// Google Analytics Integration
export const initAnalytics = () => {
  const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
  const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

  // Google Analytics
  if (GA_ID && GA_ID !== 'G-XXXXXXXXXX') {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_ID);
    
    window.gtag = gtag;
  }

  // Meta Pixel
  if (META_PIXEL_ID && META_PIXEL_ID !== 'XXXXXXXXXX') {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', eventName, eventParams);
  }
};

// Track page views
export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_ID, {
      page_path: url,
    });
  }

  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track form submissions
export const trackFormSubmission = (formName, serviceType = '') => {
  trackEvent('form_submission', {
    form_name: formName,
    service_type: serviceType,
  });
  
  // Meta Lead event
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: formName,
      content_category: serviceType,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  });
};
