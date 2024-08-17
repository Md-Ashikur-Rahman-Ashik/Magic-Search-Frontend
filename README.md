# Fullstack Product Management Website

This project is a full-stack single-page application (SPA) built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to search, filter, sort, and paginate through a list of products. Additionally, the application includes authentication using Firebase.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
  - [Setup and Basic Structure](#setup-and-basic-structure)
  - [Pagination](#pagination)
  - [Searching](#searching)
  - [Categorization](#categorization)
  - [Sorting](#sorting)
  - [Authentication](#authentication)
  - [UI Instructions](#ui-instructions)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a full-stack SPA that allows users to view a list of products with advanced filtering, searching, and sorting functionalities. The application is responsive and adheres to a mobile-first design approach. Users can log in using Google or email/password authentication via Firebase.

## Features

### Setup and Basic Structure

- **MERN Stack**: The project is built using MongoDB, Express.js, React.js, and Node.js.
- **API Structure**: The backend API is designed to fetch product data from the MongoDB database.
- **Product Data**: The database is pre-populated with at least 40 products, each with attributes such as name, image, description, price, category, ratings, and creation date.

### Pagination

- **Backend Pagination**: Efficiently loads products using pagination on the server side.
- **Frontend Navigation**: Includes page numbers and navigation buttons (Next, Previous).

### Searching

- **Search Functionality**: Users can search for products by name.

### Categorization

- **Filters**: Products can be filtered by brand name, category name, and price range. Users can apply multiple filters simultaneously.

### Sorting

- **Price Sorting**: Users can sort products by price (Low to High, High to Low).
- **Date Sorting**: Users can sort products by the date they were added (Newest First).

### Authentication

- **Google Authentication**: Implemented using Firebase.
- **Email/Password Authentication**: Implemented using Firebase.

### UI Instructions

- **Responsive Design**: The website is fully responsive with a mobile-first approach.
- **Product Cards**: Fixed-size product cards are used to display product details.
- **Navbar and Footer**: Includes a navbar with the website name/logo and a footer with relevant information.

## Installation

### Backend

1. **Clone the backend repository**:
   ```bash
   git clone https://github.com/Md-Ashikur-Rahman-Ashik/Magic-Search-Backend
Navigate to the project directory:

Install dependencies:
npm install


Run the backend server:


npm start
Frontend
Clone the frontend repository:

git clone [<frontend-repo-link>](https://github.com/Md-Ashikur-Rahman-Ashik/Magic-Search-Frontend)
Navigate to the project directory:


Install dependencies:


npm install


Run the frontend server:
npm start

Visit the website and log in using Google or Email/Password.
Browse the products, use the search bar, apply filters, and sort the products as needed.
Navigate between pages using the pagination controls.
Technologies Used
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js, MongoDB
Authentication: Firebase
Other: Axios, React Router
