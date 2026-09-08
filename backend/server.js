const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const dbPath = path.resolve(__dirname, 'portfolio.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

// Initialize database tables
function initializeDatabase() {
  db.serialize(() => {
    // Projects table
    db.run(`CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      technologies TEXT,
      imageUrl TEXT,
      githubUrl TEXT,
      liveUrl TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Skills table
    db.run(`CREATE TABLE IF NOT EXISTS skills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT,
      proficiency INTEGER DEFAULT 50,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Contact messages table
    db.run(`CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT,
      message TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Profile/About table
    db.run(`CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      title TEXT,
      bio TEXT,
      email TEXT,
      phone TEXT,
      linkedin TEXT,
      github TEXT,
      resume TEXT
    )`);

    // Experience table
    db.run(`CREATE TABLE IF NOT EXISTS experience (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company TEXT NOT NULL,
      position TEXT NOT NULL,
      location TEXT,
      startDate TEXT,
      endDate TEXT,
      description TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Education table
    db.run(`CREATE TABLE IF NOT EXISTS education (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      institution TEXT NOT NULL,
      degree TEXT NOT NULL,
      field TEXT,
      startDate TEXT,
      endDate TEXT,
      gpa TEXT,
      coursework TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Certifications table
    db.run(`CREATE TABLE IF NOT EXISTS certifications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      issuer TEXT,
      date TEXT,
      description TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Insert sample data if tables are empty
    insertSampleData();
  });
}

function insertSampleData() {
  // Always update or insert profile
  db.get("SELECT * FROM profile WHERE id = 1", (err, row) => {
    if (err) return;
    if (row) {
      db.run(`UPDATE profile SET name = ?, title = ?, bio = ?, email = ?, phone = ?, linkedin = ?, github = ? WHERE id = 1`,
        ['Shailesh Kole', 'Software Engineer', 'Software Engineer with hands-on experience building full-stack and mobile applications using React.js, Node.js, Flutter, and React Native. Skilled at designing REST APIs, integrating real-time databases, and shipping production-ready apps with measurable improvements in stability and performance.', 'shaileshkole.scoe.it@gmail.com', '+91 77967 02856', 'linkedin.com/in/shaileshkole', 'github.com/shaileshkole']);
    } else {
      db.run(`INSERT INTO profile (name, title, bio, email, phone, linkedin, github) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        ['Shailesh Kole', 'Software Engineer', 'Software Engineer with hands-on experience building full-stack and mobile applications using React.js, Node.js, Flutter, and React Native. Skilled at designing REST APIs, integrating real-time databases, and shipping production-ready apps with measurable improvements in stability and performance.', 'shaileshkole.scoe.it@gmail.com', '+91 77967 02856', 'linkedin.com/in/shaileshkole', 'github.com/shaileshkole']);
    }
  });

  // Delete and re-insert projects
  db.run("DELETE FROM projects", (err) => {
    if (err) return;
    const sampleProjects = [
      ['Nursery App', 'E-commerce application with product browsing, cart management, and order tracking. Implemented Firebase Authentication and Firestore for secure login and real-time inventory updates. Utilized scalable state management for improved responsiveness and performance. Designed intuitive and responsive UI/UX and integrated push notifications for order updates.', 'Flutter, Firebase, Authentication, UI Development, SQLite', '', 'github.com/shaileshkole/nursery-app', ''],
      ['HR Management System', 'Full-stack HR management system with employee management, attendance tracking, and department organization features. Built RESTful APIs using Express.js and integrated MySQL with relational database design and constraints. Implemented Firebase Authentication (Email/Password & Google Sign-In) and protected routes for secure access. Created a responsive React.js frontend with real-time dashboard, employee search, and department-wise analytics.', 'React.js, Node.js, Express.js, MySQL, Firebase, TanStack Query', '', 'github.com/shaileshkole/hr-management-system', ''],
      ['Portfolio Website', 'Full-stack portfolio website with React, Express, and SQLite', 'React, Express, SQLite, Node.js, TailwindCSS', '', 'github.com/shaileshkole/portfolio', '']
    ];
    sampleProjects.forEach(project => {
      db.run(`INSERT INTO projects (title, description, technologies, imageUrl, githubUrl, liveUrl) VALUES (?, ?, ?, ?, ?, ?)`, project);
    });
  });

  // Delete and re-insert skills
  db.run("DELETE FROM skills", (err) => {
    if (err) return;
    const sampleSkills = [
      ['Java', 'Languages', 85],
      ['JavaScript', 'Languages', 90],
      ['Dart', 'Languages', 80],
      ['C', 'Languages', 75],
      ['C++', 'Languages', 75],
      ['SQL', 'Languages', 85],
      ['React.js', 'Frontend Development', 90],
      ['HTML5', 'Frontend Development', 95],
      ['CSS3', 'Frontend Development', 95],
      ['Responsive UI Design', 'Frontend Development', 90],
      ['UI/UX Principles', 'Frontend Development', 85],
      ['Flutter', 'Mobile Development', 85],
      ['React Native', 'Mobile Development', 80],
      ['Android fundamentals', 'Mobile Development', 75],
      ['iOS fundamentals (Swift, UIKit)', 'Mobile Development', 70],
      ['Firebase Auth', 'Mobile Development', 85],
      ['Firebase Firestore', 'Mobile Development', 85],
      ['Firebase Cloud Messaging', 'Mobile Development', 80],
      ['SQLite', 'Mobile Development', 85],
      ['Node.js', 'Backend & APIs', 85],
      ['Express.js', 'Backend & APIs', 85],
      ['Spring Boot', 'Backend & APIs', 75],
      ['Spring Data JPA/Hibernate', 'Backend & APIs', 70],
      ['REST API Design', 'Backend & APIs', 90],
      ['MySQL', 'Databases', 85],
      ['Firebase Firestore', 'Databases', 80],
      ['Firebase Realtime DB', 'Databases', 75],
      ['SQLite', 'Databases', 85],
      ['MongoDB', 'Databases', 70],
      ['Data Structures & Algorithms', 'CS Fundamentals', 85],
      ['Operating Systems', 'CS Fundamentals', 80],
      ['OOP Principles', 'CS Fundamentals', 90],
      ['DBMS', 'CS Fundamentals', 85],
      ['Git', 'Tools & Platforms', 90],
      ['GitHub', 'Tools & Platforms', 90],
      ['VS Code', 'Tools & Platforms', 95],
      ['Android Studio', 'Tools & Platforms', 75],
      ['Linux Shell Scripting', 'Tools & Platforms', 70],
      ['Agile Development', 'Tools & Platforms', 80],
      ['Postman', 'Tools & Platforms', 85]
    ];
    sampleSkills.forEach(skill => {
      db.run(`INSERT INTO skills (name, category, proficiency) VALUES (?, ?, ?)`, skill);
    });
  });

  // Delete and re-insert experience
  db.run("DELETE FROM experience", (err) => {
    if (err) return;
    const sampleExperience = [
      ['Incubators Systems Pvt Ltd', 'Mobile Application Development Intern', 'Pune, India', 'Aug 2024', 'Nov 2024', 'Developed and integrated Sqflite for offline storage and Firebase Authentication with Cloud Storage for real-time sync. Built responsive and user-friendly interfaces, improving usability and engagement. Implemented state management and seamless REST API integration for improved user experience. Conducted testing and debugging, reducing app crashes by 20%.']
    ];
    sampleExperience.forEach(exp => {
      db.run(`INSERT INTO experience (company, position, location, startDate, endDate, description) VALUES (?, ?, ?, ?, ?, ?)`, exp);
    });
  });

  // Delete and re-insert education
  db.run("DELETE FROM education", (err) => {
    if (err) return;
    const sampleEducation = [
      ['CDAC', 'Post Graduate Diploma in Advanced Computing - Mobile Computing (PG-DMC)', 'Mobile Computing', '2024', '2024', '', 'Operating Systems & Linux, DBMS & SQL/NoSQL (MongoDB), OOPs & Core Java, Data Structures & Algorithms, Spring Boot & JPA, Android & iOS App Development, Hybrid App Development (React Native), Machine Learning Fundamentals for Mobile (TensorFlow Lite, Core ML)'],
      ['Savitribai Phule Pune University, Pune', 'Bachelor of Engineering (Information Technology)', 'Information Technology', 'July 2021', 'June 2025', '7.31', ''],
      ['Dayanand Science College, Latur', 'Higher Secondary (12th - Science)', 'Science', 'June 2019', 'March 2021', '96.17%', ''],
      ['Shri Sadanand Vidyalay, Latur', 'Secondary School (10th)', '', 'June 2017', 'March 2019', '82%', '']
    ];
    sampleEducation.forEach(edu => {
      db.run(`INSERT INTO education (institution, degree, field, startDate, endDate, gpa, coursework) VALUES (?, ?, ?, ?, ?, ?, ?)`, edu);
    });
  });

  // Delete and re-insert certifications
  db.run("DELETE FROM certifications", (err) => {
    if (err) return;
    const sampleCertifications = [
      ['Flutter Language Certification', 'Core2Web and Incubators', '2024', 'Issued by Core2Web and Incubators'],
      ['Flutter Super X Program Certification', 'Core2Web and Incubators', '2024', 'Recognized expertise in Flutter app development and project management'],
      ['Quizeethon Participant', 'Core2Web and Incubators', '2024', 'Participated in a Flutter-related technical quiz competition organized by Core2Web and Incubators, demonstrating strong Flutter development knowledge']
    ];
    sampleCertifications.forEach(cert => {
      db.run(`INSERT INTO certifications (name, issuer, date, description) VALUES (?, ?, ?, ?)`, cert);
    });
  });
}

// API Routes

// Get profile info
app.get('/api/profile', (req, res) => {
  db.get("SELECT * FROM profile WHERE id = 1", (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(row || {});
    }
  });
});

// Update profile
app.put('/api/profile/:id', (req, res) => {
  const { name, title, bio, email, phone, linkedin, github, resume } = req.body;
  db.run(
    `UPDATE profile SET name = ?, title = ?, bio = ?, email = ?, phone = ?, linkedin = ?, github = ?, resume = ? WHERE id = ?`,
    [name, title, bio, email, phone, linkedin, github, resume, req.params.id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID, changes: this.changes });
      }
    }
  );
});

// Get all projects
app.get('/api/projects', (req, res) => {
  db.all("SELECT * FROM projects ORDER BY createdAt DESC", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Get single project
app.get('/api/projects/:id', (req, res) => {
  db.get("SELECT * FROM projects WHERE id = ?", [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'Project not found' });
    } else {
      res.json(row);
    }
  });
});

// Create project
app.post('/api/projects', (req, res) => {
  const { title, description, technologies, imageUrl, githubUrl, liveUrl } = req.body;
  db.run(
    `INSERT INTO projects (title, description, technologies, imageUrl, githubUrl, liveUrl) VALUES (?, ?, ?, ?, ?, ?)`,
    [title, description, technologies, imageUrl, githubUrl, liveUrl],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});

// Update project
app.put('/api/projects/:id', (req, res) => {
  const { title, description, technologies, imageUrl, githubUrl, liveUrl } = req.body;
  db.run(
    `UPDATE projects SET title = ?, description = ?, technologies = ?, imageUrl = ?, githubUrl = ?, liveUrl = ? WHERE id = ?`,
    [title, description, technologies, imageUrl, githubUrl, liveUrl, req.params.id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ changes: this.changes });
      }
    }
  );
});

// Delete project
app.delete('/api/projects/:id', (req, res) => {
  db.run("DELETE FROM projects WHERE id = ?", [req.params.id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ changes: this.changes });
    }
  });
});

// Get all skills
app.get('/api/skills', (req, res) => {
  db.all("SELECT * FROM skills ORDER BY proficiency DESC", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Create skill
app.post('/api/skills', (req, res) => {
  const { name, category, proficiency } = req.body;
  db.run(
    `INSERT INTO skills (name, category, proficiency) VALUES (?, ?, ?)`,
    [name, category, proficiency],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});

// Update skill
app.put('/api/skills/:id', (req, res) => {
  const { name, category, proficiency } = req.body;
  db.run(
    `UPDATE skills SET name = ?, category = ?, proficiency = ? WHERE id = ?`,
    [name, category, proficiency, req.params.id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ changes: this.changes });
      }
    }
  );
});

// Delete skill
app.delete('/api/skills/:id', (req, res) => {
  db.run("DELETE FROM skills WHERE id = ?", [req.params.id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ changes: this.changes });
    }
  });
});

// Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  db.run(
    `INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)`,
    [name, email, subject, message],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID, message: 'Message sent successfully' });
      }
    }
  );
});

// Get contact messages (admin)
app.get('/api/contact', (req, res) => {
  db.all("SELECT * FROM contact_messages ORDER BY createdAt DESC", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Experience endpoints
// Get all experience
app.get('/api/experience', (req, res) => {
  db.all("SELECT * FROM experience ORDER BY startDate DESC", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Get single experience
app.get('/api/experience/:id', (req, res) => {
  db.get("SELECT * FROM experience WHERE id = ?", [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'Experience not found' });
    } else {
      res.json(row);
    }
  });
});

// Create experience
app.post('/api/experience', (req, res) => {
  const { company, position, location, startDate, endDate, description } = req.body;
  db.run(
    `INSERT INTO experience (company, position, location, startDate, endDate, description) VALUES (?, ?, ?, ?, ?, ?)`,
    [company, position, location, startDate, endDate, description],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});

// Update experience
app.put('/api/experience/:id', (req, res) => {
  const { company, position, location, startDate, endDate, description } = req.body;
  db.run(
    `UPDATE experience SET company = ?, position = ?, location = ?, startDate = ?, endDate = ?, description = ? WHERE id = ?`,
    [company, position, location, startDate, endDate, description, req.params.id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ changes: this.changes });
      }
    }
  );
});

// Delete experience
app.delete('/api/experience/:id', (req, res) => {
  db.run("DELETE FROM experience WHERE id = ?", [req.params.id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ changes: this.changes });
    }
  });
});

// Education endpoints
// Get all education
app.get('/api/education', (req, res) => {
  db.all("SELECT * FROM education ORDER BY endDate DESC", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Get single education
app.get('/api/education/:id', (req, res) => {
  db.get("SELECT * FROM education WHERE id = ?", [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'Education not found' });
    } else {
      res.json(row);
    }
  });
});

// Create education
app.post('/api/education', (req, res) => {
  const { institution, degree, field, startDate, endDate, gpa, coursework } = req.body;
  db.run(
    `INSERT INTO education (institution, degree, field, startDate, endDate, gpa, coursework) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [institution, degree, field, startDate, endDate, gpa, coursework],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});

// Update education
app.put('/api/education/:id', (req, res) => {
  const { institution, degree, field, startDate, endDate, gpa, coursework } = req.body;
  db.run(
    `UPDATE education SET institution = ?, degree = ?, field = ?, startDate = ?, endDate = ?, gpa = ?, coursework = ? WHERE id = ?`,
    [institution, degree, field, startDate, endDate, gpa, coursework, req.params.id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ changes: this.changes });
      }
    }
  );
});

// Delete education
app.delete('/api/education/:id', (req, res) => {
  db.run("DELETE FROM education WHERE id = ?", [req.params.id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ changes: this.changes });
    }
  });
});

// Certifications endpoints
// Get all certifications
app.get('/api/certifications', (req, res) => {
  db.all("SELECT * FROM certifications ORDER BY date DESC", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Get single certification
app.get('/api/certifications/:id', (req, res) => {
  db.get("SELECT * FROM certifications WHERE id = ?", [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'Certification not found' });
    } else {
      res.json(row);
    }
  });
});

// Create certification
app.post('/api/certifications', (req, res) => {
  const { name, issuer, date, description } = req.body;
  db.run(
    `INSERT INTO certifications (name, issuer, date, description) VALUES (?, ?, ?, ?)`,
    [name, issuer, date, description],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});

// Update certification
app.put('/api/certifications/:id', (req, res) => {
  const { name, issuer, date, description } = req.body;
  db.run(
    `UPDATE certifications SET name = ?, issuer = ?, date = ?, description = ? WHERE id = ?`,
    [name, issuer, date, description, req.params.id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ changes: this.changes });
      }
    }
  );
});

// Delete certification
app.delete('/api/certifications/:id', (req, res) => {
  db.run("DELETE FROM certifications WHERE id = ?", [req.params.id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ changes: this.changes });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
