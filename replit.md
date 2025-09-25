# Overview

This is a B2B franchise recruitment website for TRUE Healthcare™, an Indian wellness company offering premium food supplements. The application is built as a lead generation platform focused on attracting potential franchise partners rather than selling products directly. It features a modern React frontend with TypeScript, Express backend, and PostgreSQL database integration through Drizzle ORM. The site includes territory availability checking, franchise inquiry forms, and comprehensive product information to help potential partners understand the business opportunity.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for client-side routing with three main pages (Home, Products, Apply)
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **UI Components**: Radix UI primitives wrapped in custom shadcn/ui components

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful endpoints for territory management and franchise inquiries
- **Middleware**: Express middleware for JSON parsing, CORS handling, and request logging
- **Development**: Vite middleware integration for hot reloading in development

## Data Storage Solutions
- **Database**: PostgreSQL with connection through @neondatabase/serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared TypeScript schema definitions with Zod validation
- **Migration**: Drizzle Kit for database schema management
- **Fallback**: In-memory storage implementation for development/testing

## Authentication and Authorization
- **Session Management**: Express sessions with connect-pg-simple for PostgreSQL session storage
- **Current State**: Basic user schema defined but not implemented in the application flow
- **Security**: Input validation through Zod schemas and form validation

## Database Schema Design
- **Users Table**: Basic user authentication structure (not currently used)
- **Franchise Inquiries**: Stores potential partner applications with contact details and investment preferences
- **Territories**: Manages geographic availability for franchise slots with hierarchical structure (State > District > Tehsil > Panchayat)
- **Data Types**: Uses PostgreSQL-specific types with UUID primary keys

## Component Architecture
- **Layout Components**: Navigation, Footer, and page-specific layouts
- **Feature Components**: Territory checker, franchise form, product displays
- **UI Components**: Reusable shadcn/ui components for consistency
- **Form Handling**: Controlled components with validation and error handling

# External Dependencies

## Core Frameworks and Libraries
- **React Ecosystem**: React 18, React DOM, TypeScript support
- **Build Tools**: Vite for frontend bundling, esbuild for backend compilation
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer

## UI and Component Libraries
- **Design System**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Hookform Resolvers
- **State Management**: TanStack React Query for server state

## Backend Dependencies
- **Web Framework**: Express.js with TypeScript support
- **Database**: PostgreSQL via Neon serverless, Drizzle ORM
- **Session Management**: express-session with connect-pg-simple
- **Validation**: Zod for runtime type checking

## Development and Build Tools
- **TypeScript**: Full TypeScript support across frontend and backend
- **Development**: tsx for TypeScript execution, Vite dev server
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Replit Integration**: Specific Vite plugins for Replit development environment

## External Services
- **Database Hosting**: Neon PostgreSQL (serverless)
- **Image Assets**: Unsplash for product category images
- **Font Loading**: Google Fonts (Montserrat, Inter) for typography
- **Development Environment**: Replit-specific tooling and plugins