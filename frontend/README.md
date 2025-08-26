# WanderBite: Frontend Setup Instructions

Documentation for the frontend folder — including file purpose, local environment setup, and how to get the application running in development mode.

## 📁 Frontend Folder Contents

| File/Folder | Purpose |
|-------------|---------|
| `src/` | Main application source code, including components, pages, and logic |
| `src/components/` | Reusable UI components (e.g., buttons, forms, cards) |
| `src/pages/` | Route-specific views (e.g., Home, Explore, BucketList) |
| `src/services/` | Handles API requests to the backend |
| `src/assets/` | Static images, icons, and styling assets |
| `src/App.jsx` | Root component managing route layout |
| `src/main.jsx` | App entry point, renders to DOM |
| `public/index.html` | HTML template used by Vite |
| `vite.config.js` | Vite configuration (aliases, proxy, etc.) |
| `.env.example` | Template for environment variables |
| `package.json` | Project dependencies and scripts |
| `README.md` | This document |

---


## 🛠 Tech Stack

- React 
- Vite 
- JavaScript 
- CSS Modules / Tailwind / Styled Components 


---

## Getting Started

### Prerequisites

- Node.js 
- npm
- Backend server running (`cd backend && npm run dev`)

### Installation

Clone the repo and install dependencies:


$ git clone https://github.com/tl-smith/WanderBite.git
$ cd WanderBite
$ cd frontend
$ npm install

Running the Frontend Server

$ npm run dev


## Frontend Features

Destination and food suggestion

Add experiences to a personalized bucket list

Responsive UI for mobile and desktop users

Seamless connection to backend API
