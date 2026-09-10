export const serviceCategories = [
  {
    label: 'Services',
    options: [
      'Web Design & Development',
      'SEO & Performance Marketing',
      'Cloud Hosting & Infrastructure',
      'CRM & Automation',
      'Digital Strategy & Growth',
      'AI Lead Generation',
      'Video Editing & Production',
      'Payment Gateway Integration',
      'Online Education',
      'Study Abroad',
      'IT Placement Assistance',
    ],
  },
  {
    label: 'Digital Marketing',
    options: [
      'Digital Marketing Services',
      'Social Media Marketing',
      'Meta & Facebook Ads',
      'Email Marketing',
      'Video Marketing',
      'Local SEO',
      'Google Ads Management',
      'Content Marketing',
      'WhatsApp Marketing',
      'Influencer Marketing',
      'E-Commerce Marketing',
    ],
  },
];

export const allServices = serviceCategories.flatMap((category) => category.options);

export const generalInquiryOption = 'General Inquiry';

export const formServiceOptions = [...allServices, generalInquiryOption];
