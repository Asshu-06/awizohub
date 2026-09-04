import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../config/supabase';
import { validateForm, checkHoneypot, checkRateLimit } from '../../utils/formValidation';
import { trackFormSubmission } from '../../utils/analytics';
import './ContactForm.css';

const ContactForm = ({ formTitle = 'Get in Touch', defaultService = '' }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    location: '',
    message: '',
    honeypot: '', // spam protection
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Digital Marketing Services',
    'IT Placement Assistance',
    'Abroad Education Guidance',
    'Online Education Assistance',
    'General Inquiry',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Honeypot spam check
    if (!checkHoneypot(formData.honeypot)) {
      console.warn('Potential spam detected');
      return;
    }

    // Rate limiting check
    const rateLimit = checkRateLimit('contact-form', 5);
    if (!rateLimit.allowed) {
      setErrors({ submit: rateLimit.message });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Submit to Supabase
      const { data, error } = await supabase
        .from('enquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            location: formData.location,
            message: formData.message,
            source: 'website',
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) {
        // If Supabase is not configured or has an error, log it but don't fail
        console.error('Supabase error:', error);
        // You can implement a fallback here (e.g., send to an API endpoint)
      }

      // Track form submission
      trackFormSubmission('contact_form', formData.service);

      // Redirect to thank you page
      navigate('/thank-you', {
        state: {
          formType: 'contact',
          service: formData.service,
        },
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({
        submit: 'Something went wrong. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <h3 className="form-title">{formTitle}</h3>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ position: 'absolute', left: '-9999px' }}
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? 'form-control-error' : ''}`}
              placeholder="John Doe"
              required
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? 'form-control-error' : ''}`}
              placeholder="john@example.com"
              required
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-control ${errors.phone ? 'form-control-error' : ''}`}
              placeholder="+1 (234) 567-8900"
              required
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="service" className="form-label">
              Service Required <span className="required">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`form-control form-select ${errors.service ? 'form-control-error' : ''}`}
              required
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && <span className="form-error">{errors.service}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location" className="form-label">
            Location <span className="required">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`form-control ${errors.location ? 'form-control-error' : ''}`}
            placeholder="City, State"
            required
          />
          {errors.location && <span className="form-error">{errors.location}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form-control ${errors.message ? 'form-control-error' : ''}`}
            placeholder="Tell us more about your requirements..."
            rows="4"
          ></textarea>
          {errors.message && <span className="form-error">{errors.message}</span>}
        </div>

        {errors.submit && (
          <div className="form-error-message">
            {errors.submit}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-lg btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Submitting...
            </>
          ) : (
            'Submit Enquiry'
          )}
        </button>

        <p className="form-note">
          By submitting this form, you agree to our{' '}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">
            Terms & Conditions
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
