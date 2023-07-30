# Live Link (https://pc-builder-inky.vercel.app/)

## PC Builder Website

This is a clean and straightforward PC Builder website for PC parts and components built using Next.js. The main feature of the website is the PC Builder tool, allowing users to select and develop their own custom PCs by adding different PC components. The application follows the Server-Side Rendering (SSR) approach for specific pages, like the Home Page and Product Detail Page, and the Server-Side Rendering (SSR) approach for the PC Builder Page.

### Requirements:

- Build a clean and straightforward PC Builder website for PC parts and components using Next.js. The website should include a PC Builder tool where users can add selected PC components to build their own PC.

### Features:

1. **Navbar:**
   - The PC Builder button redirects users to the PC Builder page.
   - Categories dropdown with individual routes for CPU, Motherboard, RAM, PSU, Storage, Monitor, and Others.

2. **Home Page (SSG):**
   - Displays 6 random Featured Products with essential details.
   - Each Featured Product card is clickable and leads to the Product Detail Page.
   - 6 Featured Categories sections for easy navigation to specific product categories.

3. **Featured Category Sections (SSG):**
   - Clickable sections redirect users to pages with 3 products of the selected category.
   - Product cards with essential details and links to the Product Detail Page.

4. **Product Detail Page (SSG):**
   - Detailed information about each PC component, including images, category, status, price, description, key features, individual and average ratings, and reviews.

5. **PC Builder Page (SSR):**
   - Sections for CPU, Motherboard, RAM, PSU, Storage, and Monitor components with Choose/Select buttons.
   - Clicking the Choose/Select button displays 3 components of the specific category.
   - Add To Builder button adds the selected component to the PC Builder and updates the state.
   - Complete Build button is activated after adding at least 5-6 components, indicating the user can proceed.
     
- Protected/Private PC Builder Page: Accessible to logged-in users only using NextAuth with social login (Google/Github) provider for user authentication.
- Success alert upon clicking the Complete Build button.
- Hero section/banner and footer on the Home page.
- Responsive design for seamless user experience across various devices.
