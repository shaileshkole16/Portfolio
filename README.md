# Portfolio Website

A full-stack portfolio website built with React (frontend), Express (backend), and SQLite (database).

## Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS, Lucide Icons
- **Backend**: Express.js, Node.js
- **Database**: SQLite3
- **API**: RESTful API with CORS support

## Features

- Responsive design with modern UI
- Dynamic content management through API
- Project showcase with images and links
- Skills section with proficiency bars
- Experience/work history section
- Contact form with message storage
- Profile/About section with phone support
- Smooth scrolling navigation
- Mobile-friendly hamburger menu

## Project Structure

```
portfolio/
├── backend/
│   ├── server.js          # Express server and API routes
│   ├── package.json       # Backend dependencies
│   ├── portfolio.db       # SQLite database (auto-generated)
│   └── .gitignore
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Experience.jsx
    │   │   ├── Skills.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Contact.jsx
    │   │   └── Navbar.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── postcss.config.js
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000` and automatically create the SQLite database with sample data.

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Profile
- `GET /api/profile` - Get profile information
- `PUT /api/profile/:id` - Update profile information

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create new skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)

### Experience
- `GET /api/experience` - Get all experience entries
- `GET /api/experience/:id` - Get single experience entry
- `POST /api/experience` - Create new experience entry
- `PUT /api/experience/:id` - Update experience entry
- `DELETE /api/experience/:id` - Delete experience entry

## Database Schema

### Profile Table
- id, name, title, bio, email, phone, linkedin, github, resume

### Projects Table
- id, title, description, technologies, imageUrl, githubUrl, liveUrl, createdAt

### Skills Table
- id, name, category, proficiency, createdAt

### Experience Table
- id, company, position, location, startDate, endDate, description, createdAt

### Contact Messages Table
- id, name, email, subject, message, createdAt

## Customization

### Update Profile Information

Edit the sample data in `backend/server.js` or use the API endpoints to update:
- Your name and title
- Bio/description
- Contact information (email, phone)
- Social media links
- Resume URL

### Add Projects

Use the API or directly insert into the database:
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Your Project",
    "description": "Project description",
    "technologies": "React, Node.js, MongoDB",
    "imageUrl": "",
    "githubUrl": "github.com/yourusername/project",
    "liveUrl": "yourproject.com"
  }'
```

### Add Skills

Use the API or directly insert into the database:
```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "name": "JavaScript",
    "category": "Frontend",
    "proficiency": 90
  }'
```

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```

The built files will be in the `dist/` directory.

### Backend
The backend is production-ready. You may want to:
1. Set up environment variables for sensitive data
2. Use a production database instead of SQLite
3. Add authentication for admin endpoints
4. Deploy to a hosting service (Heroku, Vercel, etc.)

## License

MIT License - feel free to use this for your own portfolio!
