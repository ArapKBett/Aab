import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  // Static project data
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

  return (
    <section className="py-20 max-w-6xl mx-auto px-4 pt-20">
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m a Web Developer and Cybersecurity Specialist experienced in crafting secure Websites, Apps, and Software Systems. I’ve led teams and helped reduce vulnerabilities with cutting-edge security audits.
        </p>
      </div>

      <div className="mb-20 bg-gray-800 py-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            { title: 'Languages', items: ['HTML', 'JavaScript', 'Node.js', 'React', 'Tailwind', 'C', 'C++', 'Java', 'Python', 'Kotlin', 'Angular', 'SQL'] },
            { title: 'Cybersecurity', items: ['Penetration Testing', 'Incident Response', 'Digital Forensics', 'Malware Analysis', 'Threat Intelligence', 'Vulnerability Assessment', 'Security Operations', 'Red Teaming', 'Blue Teaming', 'Reverse Engineering', 'Cryptography', 'Threat Modeling'] },
            { title: 'Tools', items: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'TCPDump', 'Snort', 'Suricata', 'Splunk', 'ELK Stack', 'Tenable Nessus', 'Qualys', 'OpenVAS', 'OWASP ZAP', 'BloodHound', 'Mimikatz', 'John the Ripper', 'Hydra', 'Maltego', 'Aircrack-ng'] },
          ].map((skill) => (
            <motion.div key={skill.title} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-lg shadow-lg border border-cyan-500">
              <h3 className="text-2xl font-semibold text-purple-400">{skill.title}</h3>
              <ul className="mt-4 space-y-2 text-gray-300">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">Experience</h2>
        <div className="space-y-8">
          {[
            { role: 'Lead Consultant, Teaburg International', time: 'March 2022 - Present', tasks: ['Reduced vulnerabilities by 80%', 'Implemented firewalls'] },
            { role: 'Internal Web Developer, Autoburg International', time: 'June 2020 - Feb 2022', tasks: ['Built secure intranet', 'Optimized performance'] },
          ].map((job) => (
            <motion.div key={job.role} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-400">{job.role}</h3>
              <p className="text-gray-400">{job.time}</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                {job.tasks.map((task) => (
                  <li key={task} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span> {task}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 py-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-lg shadow-lg border border-purple-500">
              <h3 className="text-2xl font-semibold text-cyan-400">{project.name}</h3>
              <p className="text-gray-400">{project.tech}</p>
              <p className="mt-2 text-gray-300">{project.desc}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-cyan-400 hover:text-cyan-300"
              >
                Visit Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
