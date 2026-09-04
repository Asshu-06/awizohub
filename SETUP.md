# Awizo Hub - Setup Guide

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account (free tier available)

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   
   Create a `.env` file in the root directory and add the following variables:
   
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   VITE_META_PIXEL_ID=XXXXXXXXXX
   VITE_WHATSAPP_NUMBER=+1234567890
   VITE_PHONE_NUMBER=+1234567890
   VITE_EMAIL=info@awizohub.com
   VITE_GOOGLE_MAPS_EMBED_URL=your_google_maps_embed_url
   ```

## Supabase Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Copy your project URL and anon key to the `.env` file

### 2. Create Database Tables

Run the following SQL in your Supabase SQL Editor:

```sql
-- Create enquiries table
CREATE TABLE enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  service VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  message TEXT,
  source VARCHAR(50) DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for contact form)
CREATE POLICY "Allow public inserts" ON enquiries
  FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated users to read
CREATE POLICY "Allow authenticated reads" ON enquiries
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create index for faster queries
CREATE INDEX idx_enquiries_created_at ON enquiries(created_at DESC);
CREATE INDEX idx_enquiries_service ON enquiries(service);

-- Create blog posts table (optional)
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to read published posts" ON blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Allow authenticated to manage posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
```

### 3. Configure Storage (Optional)

If you want to upload images:

1. Go to Storage in Supabase dashboard
2. Create a new bucket called "images"
3. Set it to public
4. Upload images for blog posts, services, etc.

## Google Analytics Setup

1. Create a Google Analytics 4 property
2. Copy the Measurement ID (format: G-XXXXXXXXXX)
3. Add it to `.env` as `VITE_GOOGLE_ANALYTICS_ID`

## Meta Pixel Setup

1. Create a Meta Pixel in Facebook Business Manager
2. Copy the Pixel ID
3. Add it to `.env` as `VITE_META_PIXEL_ID`

## Google Maps Setup

1. Go to Google Cloud Console
2. Enable Maps JavaScript API
3. Create an API key
4. Get your location's embed URL from Google Maps
5. Add it to `.env` as `VITE_GOOGLE_MAPS_EMBED_URL`

## Running the Application

### Development Mode
```bash
npm run dev
```

The application will run on `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Add environment variables in Vercel dashboard

### Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

### Custom Server

1. Build: `npm run build`
2. Upload the `dist` folder to your server
3. Configure web server (Apache/Nginx) to serve the files
4. Ensure all routes redirect to `index.html` for React Router

## Features Implemented

✅ Multi-page responsive website
✅ SEO-optimized structure
✅ Lead capture forms with validation
✅ Supabase integration for form submissions
✅ WhatsApp & Call floating buttons
✅ Google Analytics & Meta Pixel integration
✅ Mobile-responsive design
✅ Sitemap.xml & robots.txt
✅ Privacy Policy & Terms pages
✅ Service-specific landing pages
✅ Blog layout
✅ Careers page
✅ Contact page with Google Maps
✅ Thank you page after form submission
✅ 404 page

## Customization

### Update Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary-blue: #0066cc;
  --secondary-orange: #ff6b35;
  --accent-teal: #00b4d8;
  /* ... */
}
```

### Add More Services

1. Create a new page in `src/pages/services/`
2. Add route in `src/App.jsx`
3. Update the services array in relevant components

### Update Contact Information

All contact info is pulled from environment variables. Update your `.env` file.

## Troubleshooting

### Forms not submitting
- Check Supabase credentials in `.env`
- Verify the `enquiries` table exists
- Check RLS policies in Supabase

### Analytics not tracking
- Verify Analytics IDs in `.env`
- Check browser console for errors
- Ensure IDs are in correct format

### Styles not loading
- Clear browser cache
- Check if CSS files are imported correctly
- Verify build output

## Support

For issues or questions, contact: info@awizohub.com
