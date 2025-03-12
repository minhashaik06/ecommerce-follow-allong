# E-Commerce Platform (MERN Stack)

This is a mentor-assisted full-stack e-commerce project developed with the **MERN stack** (**MongoDB, Express.js, React.js, Node.js**). The site features **user authentication, product management, order processing, and secure transactions**.

## Tech Stack

### Frontend:
- **React.js**
- **Tailwind CSS**
- **Axios** (API management)
- **React Router** (Navigation)
- **Context API** (State management)

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose for schema creation)
- **Multer** (File uploads)
- **JWT** (Authentication)
- **bcrypt** (Password encryption)

## Project Roadmap

### Milestone 1: Project Planning & Setup
- Set project scope and core functionalities:
  - User Authentication (Signup & Login)
  - Product Management (Add, Update, View)
  - Order Processing & Secure Checkout
- Designed API structure & MongoDB schema
- Set up GitHub repository and organized project files

### Milestone 2: Frontend & Backend Foundation
#### Frontend:
- Initialized React with Tailwind CSS
- Implemented login page with UI components

#### Backend:
- Set up Node.js server with Express
- Created MongoDB connection using Mongoose

### Milestone 3: Backend Structure & Database Integration
- Implemented a modular backend with routes, controllers, and models
- Implemented MongoDB schemas for users, products, and orders
- Added basic error handling and logging

### Milestone 4: User Authentication & File Uploads
- Developed user authentication system:
  - JWT for secure session handling
  - bcrypt for password encryption
- Added Multer for file upload handling
- Updated documentation and API testing through Postman

### Milestone 5: Registration & Form Validation
- Created and implemented a Signup Form with:
  - Email & password validation
  - Instantaneous feedback for password strength
  - Responsive UI with Tailwind CSS
- Implemented backend API for user registration

### Milestone 6: Integrating Frontend & Backend
- Integrated authentication APIs in React using Axios
- Installed localStorage to persist user sessions
- Introduced protected routes for secured access
- Integrated role-based access (Admin vs. Users)

### Milestone 7: User Login & Secure Authentication
- Built a login API (`POST /api/auth/login`)
- Completed authentication process:
  - Used bcrypt to validate password
  - Generated JWT token for secure login
  - Maintained session with localStorage
- Tested API using Postman

### Milestone 8: Homepage & Product Listings
- Designed responsive homepage structure using Tailwind CSS
- Built a reusable Product Card Component
- Rendered dynamic product listings through mock data

### Milestone 9: Product Form & Image Uploads
- Implemented a Product Creation Form with fields for:
  - Name, description, price, category, and images
- Allowed for multiple image selection & preview
- Styled UI for accessibility & responsiveness

### Milestone 10: Product Schema & API Endpoints
- Implemented a Mongoose Schema for storing products
- Defined fields with data validation & constraints
- Implemented a `POST` API to submit products
- Enabled request validation for secure data storage

### Milestone 11: Fetching & Displaying Products
- Created a `GET` API endpoint (`/api/products`) to retrieve all products
- Implemented Axios in React to fetch data dynamically
- Passed retrieved data to the Product Card Component

### Milestone 12: User-Specific Product Management
- Created an API endpoint (`/api/products/user`) to retrieve products based on the logged-in user
- Implemented JWT authentication to ensure secure access
- Updated frontend to render only the user's own products

---
