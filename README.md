# Awizo Hub - Professional Service Business Website

A modern, fully responsive, and conversion-focused website for Awizo Hub - a service provider specializing in Digital Marketing, IT Placement, Education Guidance, and Online Learning.

## 🚀 Features

- **Multi-page Website**: Home, About, Services (4 sub-services), Careers, Blog, Contact, Legal pages
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Lead Generation**: Multiple contact forms with validation and spam protection
- **Supabase Integration**: Form submissions stored securely in Supabase
- **Analytics Ready**: Google Analytics and Meta Pixel integration
- **SEO Optimized**: Clean URL structure, meta tags, sitemap.xml, robots.txt
- **Floating CTAs**: WhatsApp and Call buttons on every page
- **Modern UI/UX**: Professional design with smooth animations and transitions
- **Performance Optimized**: Fast loading times with code splitting

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Routing**: React Router DOM
- **Backend**: Supabase (PostgreSQL)
- **Styling**: Custom CSS with CSS Variables
- **Icons**: React Icons
- **Forms**: Custom validation with honeypot spam protection

## 📦 Quick Start

```bash
# Install dependencies
npm install

# Create .env file (see .env.example)
cp .env.example .env

# Start development server
npm run dev

# Build for production
npm run build
```

## 📖 Documentation

See [SETUP.md](./SETUP.md) for detailed setup instructions including:
- Supabase configuration
- Environment variables
- Analytics setup
- Deployment guides

## 🎨 Customization

The website is highly customizable:
- **Colors**: Update CSS variables in `src/index.css`
- **Content**: Edit page components in `src/pages/`
- **Contact Info**: Update `.env` file
- **Services**: Add/edit service pages in `src/pages/services/`

## 📱 Pages Included

1. **Home** - Hero section, services overview, trust badges, contact form
2. **About** - Company info, mission, vision, values, statistics
3. **Services** - Main services hub
   - Digital Marketing
   - IT Placement
   - Abroad Education  
   - Online Education
4. **Careers** - Job openings and application form
5. **Blog** - Article listing and individual post pages
6. **Contact** - Contact form with Google Maps integration
7. **Thank You** - Post-submission confirmation page
8. **Privacy Policy** - GDPR-compliant privacy policy
9. **Terms & Conditions** - Legal terms
10. **404** - Custom not found page

## 🔧 Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_META_PIXEL_ID=XXXXXXXXXX
VITE_WHATSAPP_NUMBER=+1234567890
VITE_PHONE_NUMBER=+1234567890
VITE_EMAIL=info@awizohub.com
VITE_GOOGLE_MAPS_EMBED_URL=your_maps_url
```

## 📊 Form Submissions

All form submissions are stored in Supabase with:
- Name, Email, Phone, Service, Location, Message
- Timestamp and source tracking
- Spam protection (honeypot + rate limiting)

## 🚀 Deployment

The site is ready to deploy on:
- **Vercel** (Recommended)
- **Netlify**
- **Custom Server**

See SETUP.md for deployment instructions.

## 📄 License

© 2024 Awizo Hub. All rights reserved.

## 💬 Support

For questions or support, contact: info@awizohub.com
