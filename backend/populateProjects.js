const mongoose = require('mongoose');
require('dotenv').config();
const Project = require('./models/Project');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const projects = [
  {
    name: 'BugRecon',
    tech: 'Web Application, Cybersecurity',
    desc: 'A tool for reconnaissance and vulnerability scanning in web applications.',
    url: 'https://bugrecon.onrender.com'
  },
  {
    name: 'ArapHunter',
    tech: 'Web Application, Penetration Testing',
    desc: 'A platform for automated penetration testing and security assessments.',
    url: 'https://araphunter.onrender.com'
  },
  {
    name: 'CySec',
    tech: 'Cybersecurity, Web Platform',
    desc: 'A cybersecurity platform for threat analysis and mitigation.',
    url: 'https://cysec.onrender.com'
  },
  {
    name: 'ArapCode',
    tech: 'Web Development, Coding Platform',
    desc: 'A coding platform for secure development and collaboration.',
    url: 'https://arapcode.onrender.com'
  },
  {
    name: 'HowCode',
    tech: 'Web Application, Educational',
    desc: 'An educational platform teaching secure coding practices.',
    url: 'https://howcode.onrender.com'
  },
  {
    name: 'CyberVault',
    tech: 'Web Application, Secure Storage',
    desc: 'A secure vault for storing sensitive data with advanced encryption.',
    url: 'https://cybervault-y26q.onrender.com'
  },
  {
    name: 'ChainSecure',
    tech: 'Blockchain, Cybersecurity',
    desc: 'A blockchain-based security solution for decentralized applications.',
    url: 'https://chainsecure.onrender.com'
  }
];

const populateProjects = async () => {
  try {
    // Clear existing projects (optional, comment out if you want to keep existing data)
    await Project.deleteMany({});
    // Insert new projects
    await Project.insertMany(projects);
    console.log('Projects successfully added to the database');
  } catch (err) {
    console.error('Error populating projects:', err);
  } finally {
    mongoose.connection.close();
  }
};

populateProjects();
