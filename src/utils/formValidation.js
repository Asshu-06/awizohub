// Form validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  // Check if it has 10 digits (adjust based on your region)
  return cleaned.length >= 10 && cleaned.length <= 15;
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateForm = (formData) => {
  const errors = {};

  // Name validation
  if (!validateRequired(formData.name)) {
    errors.name = 'Name is required';
  } else if (formData.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (!validateRequired(formData.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Service validation
  if (!validateRequired(formData.service)) {
    errors.service = 'Please select a service';
  }

  // Location validation
  if (!validateRequired(formData.location)) {
    errors.location = 'Location is required';
  }

  // Message validation (optional but check if provided)
  if (formData.message && formData.message.length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Honeypot spam protection
export const checkHoneypot = (honeypotValue) => {
  // If honeypot field has any value, it's likely a bot
  return honeypotValue === '' || honeypotValue === undefined;
};

// Rate limiting for form submissions (client-side)
const submissionTimestamps = {};

export const checkRateLimit = (formId, limitMinutes = 5) => {
  const now = Date.now();
  const lastSubmission = submissionTimestamps[formId];

  if (lastSubmission) {
    const timeDiff = (now - lastSubmission) / 1000 / 60; // in minutes
    if (timeDiff < limitMinutes) {
      return {
        allowed: false,
        message: `Please wait ${Math.ceil(limitMinutes - timeDiff)} minutes before submitting again`,
      };
    }
  }

  submissionTimestamps[formId] = now;
  return { allowed: true };
};
