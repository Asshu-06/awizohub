# Awizo Hub - Project Structure

## Directory Structure

```
awizo-hub/
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   ├── robots.txt           # Search engine crawler instructions
│   └── favicon.svg          # Website favicon
│
├── src/
│   ├── assets/              # Static assets (images, icons)
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/          # Reusable React components
│   │   ├── common/
│   │   │   ├── ContactForm.jsx       # Reusable contact form
│   │   │   ├── ContactForm.css
│   │   │   ├── FloatingButtons.jsx   # WhatsApp & Call buttons
│   │   │   ├── FloatingButtons.css
│   │   │   └── ScrollToTop.jsx       # Auto-scroll to top on route change
│   │   │
│   │   └── layout/
│   │       ├── Header.jsx            # Main navigation header
│   │       ├── Header.css
│   │       ├── Footer.jsx            # Site footer
│   │       └── Footer.css
│   │
│   ├── config/              # Configuration files
│   │   └── supabase.js      # Supabase client setup
│   │
│   ├── pages/               # Page components
│   │   ├── Home.jsx                  # Homepage
│   │   ├── Home.css
│   │   ├── About.jsx                 # About page
│   │   ├── About.css
│   │   ├── Services.jsx              # Services hub
│   │   ├── Services.css
│   │   ├── Careers.jsx               # Careers page
│   │   ├── Careers.css
│   │   ├── Blog.jsx                  # Blog listing
│   │   ├── Blog.css
│   │   ├── BlogPost.jsx              # Individual blog post
│   │   ├── BlogPost.css
│   │   ├── Contact.jsx               # Contact page
│   │   ├── Contact.css
│   │   ├── ThankYou.jsx              # Post-submission page
│   │   ├── ThankYou.css
│   │   ├── PrivacyPolicy.jsx         # Privacy policy
│   │   ├── TermsConditions.jsx       # Terms & conditions
│   │   ├── LegalPage.css             # Shared legal pages styles
│   │   ├── NotFound.jsx              # 404 error page
│   │   ├── NotFound.css
│   │   │
│   │   └── services/                 # Service detail pages
│   │       ├── DigitalMarketing.jsx
│   │       ├── ITPlacement.jsx
│   │       ├── AbroadEducation.jsx
│   │       ├── OnlineEducation.jsx
│   │       └── ServiceDetail.css     # Shared service page styles
│   │
│   ├── utils/               # Utility functions
│   │   ├── analytics.js     # Google Analytics & Meta Pixel
│   │   └── formValidation.js # Form validation helpers
│   │
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React app entry point
│   └── index.css            # Global styles and CSS variables
│
├── .env                     # Environment variables (local)
├── .env.example             # Environment variables template
├── .gitignore              # Git ignore rules
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── README.md               # Project overview
├── SETUP.md                # Detailed setup instructions
└── PROJECT_STRUCTURE.md    # This file

```

## Key Features by Page

### Home Page (`/`)
- Hero section with value proposition
- Services overview cards
- Trust badges (clients, ratings, success rate)
- Why Choose Us section
- CTA sections
- Lead capture form

### About Page (`/about`)
- Company introduction
- Mission & Vision cards
- Core values grid
- Statistics showcase
- CTA to contact

### Services Page (`/services`)
- Overview of all 4 service verticals
- Detailed feature lists per service
- Links to individual service pages
- Consultation CTA

### Service Detail Pages (`/services/*`)
- **Digital Marketing** (`/services/digital-marketing`)
- **IT Placement** (`/services/it-placement`)
- **Abroad Education** (`/services/abroad-education`)
- **Online Education** (`/services/online-education`)

Each includes:
- Service-specific hero
- Detailed feature list
- Benefits overview
- Service-specific contact form

### Careers Page (`/careers`)
- Why work with us section
- Current job openings list
- Application form

### Blog Pages (`/blog`, `/blog/:slug`)
- Blog listing with categories
- Individual blog post view
- Author and date metadata

### Contact Page (`/contact`)
- Contact information cards
- Contact form
- Google Maps integration
- Business hours

### Legal Pages
- Privacy Policy (`/privacy-policy`)
- Terms & Conditions (`/terms-conditions`)

### Utility Pages
- Thank You (`/thank-you`) - Post-form submission
- 404 Not Found (`*`) - Custom error page

## Component Architecture

### Layout Components
- **Header**: Sticky navigation with dropdown menus, mobile responsive
- **Footer**: Site links, social media, contact info
- **FloatingButtons**: Persistent WhatsApp & Call CTAs
- **ScrollToTop**: Auto-scroll on route changes

### Common Components
- **ContactForm**: Reusable form with validation, spam protection, Supabase integration

## Styling Architecture

- **Global Styles**: `src/index.css` - CSS variables, utility classes, reset
- **Component Styles**: Co-located with components
- **CSS Variables**: Used for colors, spacing, typography, shadows
- **Responsive**: Mobile-first approach with breakpoints at 480px, 768px, 1024px

## Routing Structure

```
/                           → Home
/about                      → About
/services                   → Services Hub
/services/digital-marketing → Digital Marketing
/services/it-placement      → IT Placement
/services/abroad-education  → Abroad Education
/services/online-education  → Online Education
/careers                    → Careers
/blog                       → Blog Listing
/blog/:slug                 → Individual Post
/contact                    → Contact
/thank-you                  → Thank You
/privacy-policy             → Privacy Policy
/terms-conditions           → Terms & Conditions
*                           → 404 Not Found
```

## Data Flow

1. **Form Submission**:
   User fills form → Validation → Honeypot check → Rate limit check → Supabase insert → Analytics tracking → Redirect to Thank You page

2. **Analytics Tracking**:
   Page load → Track page view → User interactions → Track events → Send to GA & Meta

## Configuration Files

- **vite.config.js**: Vite bundler configuration
- **eslint.config.js**: Code linting rules
- **package.json**: Dependencies and scripts
- **.env**: Environment variables (not committed)
- **.env.example**: Template for environment variables

## NPM Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## External Integrations

- **Supabase**: Database for form submissions and blog posts
- **Google Analytics**: User behavior tracking
- **Meta Pixel**: Facebook/Instagram ad tracking
- **Google Maps**: Location embed on contact page
- **WhatsApp API**: Direct messaging integration
- **React Icons**: Icon library

## Security Features

- Environment variables for sensitive data
- Honeypot spam protection
- Client-side rate limiting
- Input validation and sanitization
- Supabase Row Level Security
- HTTPS ready (SSL configuration)

## SEO Features

- Semantic HTML structure
- Meta tags (title, description, OG, Twitter)
- Sitemap.xml
- Robots.txt
- Clean URL structure
- Google Fonts optimization
- Image alt texts
- Structured data ready

## Performance Optimizations

- Code splitting with React Router
- Lazy loading potential
- Optimized images
- CSS minification
- Tree shaking
- Font preloading
- Asset caching

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment Checklist

- [ ] Update .env with production values
- [ ] Configure Supabase production database
- [ ] Set up Google Analytics
- [ ] Configure Meta Pixel
- [ ] Add Google Maps API key
- [ ] Update contact information
- [ ] Add real images
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Verify analytics tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Set up SSL certificate
- [ ] Configure domain DNS

## Future Enhancements

- [ ] Blog CMS integration
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Live chat integration
- [ ] Testimonials section
- [ ] Case studies
- [ ] Portfolio/projects showcase
- [ ] Multi-language support
- [ ] Dark mode
