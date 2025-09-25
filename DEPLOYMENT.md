# TRUE Healthcare™ - Deployment Guide

## 🚀 Quick Start

This project is ready for deployment on Vercel with minimal configuration.

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (Neon recommended)
- Vercel account

### Environment Variables Required
```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
```

## 📦 Deployment Steps

### 1. Vercel Deployment (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts and add environment variables
```

### 2. Manual Build Process
```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm run start
```

### 3. Database Setup
```bash
# Push schema to production database
npm run db:push
```

## 🏗️ Architecture Overview

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js + TypeScript 
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack Query

## 📧 Email Configuration

The following email addresses are configured for different departments:

- `info@truehealthcare.co.in` - General inquiries
- `careers@truehealthcare.co.in` - Job applications
- `sales@truehealthcare.co.in` - Sales team
- `marketing@truehealthcare.co.in` - Marketing team  
- `expansion@truehealthcare.co.in` - Territory development
- `internships@truehealthcare.co.in` - Internship applications

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Type checking
npm run check

# Database schema push
npm run db:push

# Production build
npm run build

# Production server
npm run start
```

## 🌐 SEO Features

- Comprehensive meta tags on all pages
- Structured data (JSON-LD) for better search visibility
- Open Graph and Twitter Card support
- Canonical URLs
- Optimized for local SEO in India

## 📱 Features

### Business Features
- **Franchise Application System**: Complete territory checking and application forms
- **Product Catalog**: Detailed product information with inquiry forms
- **Career Portal**: Job listings with WhatsApp application system
- **Territory Management**: Real-time availability checking

### Technical Features
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: All pages have proper meta tags and structured data
- **WhatsApp Integration**: Direct messaging for inquiries
- **Form Validation**: Robust client and server-side validation
- **Database Integration**: PostgreSQL with type-safe ORM

## 🛠️ Maintenance

### Adding New Pages
1. Create page component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Include SEO component with appropriate meta tags
4. Add navigation links in `Navigation.tsx` and `Footer.tsx`

### Database Schema Changes
```bash
# Never manually write migrations
# Always use Drizzle Kit
npm run db:push
```

### Email Updates
Update email addresses in:
- `client/src/components/Footer.tsx`
- `client/src/pages/Careers.tsx`
- Any component with contact forms

## 🔐 Security Features

- Environment variable protection
- Input validation with Zod
- SQL injection protection via Drizzle ORM
- CORS configuration
- Session management

## 📊 Performance Optimizations

- Code splitting with React.lazy
- Image optimization
- Bundle size optimization
- Database query optimization
- CDN-ready static assets

## 🐛 Troubleshooting

### Common Issues

1. **Build Failures**: Check TypeScript errors with `npm run check`
2. **Database Connection**: Verify DATABASE_URL environment variable
3. **Missing Dependencies**: Run `npm install`
4. **Port Conflicts**: Default port is 5000, configurable via PORT env var

### Development Issues
- **HMR Errors**: Normal in Replit environment, doesn't affect functionality
- **Cache Issues**: Clear browser cache or hard refresh
- **Database Sync**: Use `npm run db:push --force` if schema conflicts

## 📞 Support

For technical support or questions:
- **Development**: Website developed by [Cehpoint](https://cehpoint.co.in)
- **Business**: Contact TRUE Healthcare™ team

---

**Built with ❤️ by Cehpoint** - [cehpoint.co.in](https://cehpoint.co.in)