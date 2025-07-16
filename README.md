# Quore B2B Marketing Platform

## Project Overview
Quore B2B Marketing is a platform designed to help businesses streamline their marketing efforts and enhance customer engagement through innovative solutions. The platform offers comprehensive business technology guides in the form of downloadable whitepapers, along with lead capture functionality to connect with potential customers.

## File Structure

- **src/app/**  
  Contains the main application pages and feature-specific folders.  
  - `Out-Whitepaper/` - Contains pages related to whitepapers, including listing, detail pages, and data.  
  - `Services/` - Contains pages related to services offered by the platform.  
  - `layout.jsx` - The root layout component that wraps the entire app, including navigation and footer.

- **src/components/**  
  Contains reusable UI components used throughout the app.  
  - `WhitepaperCard/` - Component to display individual whitepapers in various card layouts with animations and interactions.  
  - `WhitepaperForm/` - Modal form component for capturing user details before downloading a whitepaper.  
  - `WhitepaperDetail/` - Components related to detailed views of whitepapers.  
  - `upNav.jsx` and `lowNav.jsx` - Navigation components for the top and bottom navigation bars.  
  - `cards.jsx`, `Footer.jsx` - Other UI components used in the layout.

- **src/styles/**  
  Contains CSS files for styling the application, including global styles.

- **public/images/**  
  Contains image assets used throughout the app, including logos, whitepaper images, and marketing graphics.

## Key Concepts

- **Whitepaper Feature**  
  The platform prominently features whitepapers as downloadable business guides. This includes:  
  - Listing pages that display collections of whitepapers with SEO-friendly metadata.  
  - Reusable card components (`WhitepaperCard`) with multiple animated layouts for displaying whitepaper summaries.  
  - Detail pages for individual whitepapers accessed via dynamic routing.  
  - A lead capture form (`WhitepaperForm`) that validates user input, prevents free email domains, and submits data before allowing downloads.

- **Navigation**  
  The app uses two navigation components, `UpNav` and `LowNav`, to provide consistent navigation across pages.

- **Layout and Styling**  
  The app uses Next.js App Router with a root layout component that includes global styles, font setup (Google Quicksand), and shared UI components. Tailwind CSS is used extensively for styling and responsive design.

- **SEO and Metadata**  
  Pages include metadata and structured data (JSON-LD) for SEO optimization, improving search engine visibility and rich results.

## Running and Building the Project

Instructions for running or building the project are not explicitly provided in the codebase. Typically, for a Next.js project, you can use:

```bash
npm install
npm run dev       # To run the development server
npm run build     # To build the production version
npm start         # To start the production server
```

Ensure you have Node.js and npm installed before running these commands.

## Additional Notes

- The project uses modern React features and Next.js conventions, including server and client components.
- Animations are implemented using Framer Motion.
- Routing uses Next.js dynamic routes for whitepaper detail pages.
- The form submission is handled via a Next.js API route (`/api/submit-whitepaper`), which is expected to process lead data.

---

This README provides an overview of the project structure and core concepts to help developers and contributors understand and navigate the codebase effectively.
