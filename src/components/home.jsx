import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaFacebook,
  FaTiktok,
  FaTelegram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaExternalLinkAlt,
  FaCode,
  FaUser,
  FaCertificate,
  FaProjectDiagram,
  FaComments
} from "react-icons/fa";
import { Dialog, useDialog } from "./Dialog";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const profileDialog = useDialog();
  const [selectedCert, setSelectedCert] = useState(null);
  const certificateDialog = useDialog();
  const [certTab, setCertTab] = useState("certificates");
  const [selectedPdf, setSelectedPdf] = useState(null);
  const pdfDialog = useDialog();
  const aboutDialog = useDialog();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('nav')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  const navItems = [
    { label: "Home", section: "home", icon: <FaUser className="md:hidden" /> },
    { label: "About", section: "about", icon: <FaUser className="md:hidden" /> },
    { label: "Skills", section: "skills", icon: <FaCode className="md:hidden" /> },
    { label: "Projects", section: "projects", icon: <FaProjectDiagram className="md:hidden" /> },
    { label: "Certificates", section: "certificates", icon: <FaCertificate className="md:hidden" /> },
    { label: "Contact", section: "contact", icon: <FaComments className="md:hidden" /> },
  ];

  const skills = [
    { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS", level: 90, color: "from-blue-500 to-indigo-500" },
    { name: "JavaScript", level: 88, color: "from-yellow-500 to-amber-500" },
    { name: "React", level: 85, color: "from-cyan-500 to-blue-500" },
    { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-emerald-500" },
    { name: "Python", level: 80, color: "from-blue-600 to-purple-600" },
  ];

  const projects = [
    {
      title: "Converter Website",
      desc: "A web application that converts Philippine peso (PHP) into other currencies with real-time rates",
      img: "converter.png",
      url: "converter-activity/index.html",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Calculator Website",
      desc: "A sophisticated calculator with advanced functionality and clean, intuitive interface",
      img: "loop.png",
      url: "Calculator/index.html",
      tech: ["JavaScript", "CSS", "HTML"]
    },
    {
      title: "Loop Application",
      desc: "Interactive tool for mathematical calculations with number sequence analysis",
      img: "calculator.png",
      url: "Loop/index.html",
      tech: ["JavaScript", "DOM Manipulation"]
    },
    {
      title: "To Do List Website",
      desc: "Modern task management application built with React for daily productivity",
      imgs: ["todo.png", "list.png"],
      url: "https://to-do-client-brown.vercel.app/",
      tech: ["React", "LocalStorage", "CSS"]
    },
    {
      title: "Employee Management",
      desc: "Employee information system using JavaScript arrays and objects with data management",
      imgs: ["array.png", "ray.png"],
      url: "Array Objects/index.html",
      tech: ["JavaScript", "Objects", "Arrays"]
    }
  ];

  const certificates = [
    {
      name: "AI Fundamentals with IBM SkillsBuild",
      file: "AI-Fundamentals-IBM.png",
      type: "image",
      issuer: "IBM & Cisco",
      date: "2024"
    },
    {
      name: "Apply AI - Analyze Customer Reviews",
      file: "Apply-AI.png",
      type: "image",
      issuer: "Cisco",
      date: "2024"
    },
    {
      name: "Apply AI - Update Your Resume",
      file: "AI-Update-Your-Resume.png",
      type: "image",
      issuer: "Cisco",
      date: "2024"
    },
    {
      name: "Python Certificate",
      file: "python.png",
      type: "image",
      issuer: "Cisco",
      date: "2024"
    },
    {
      name: "Data Science Certificate",
      file: "data.png",
      type: "image",
      issuer: "Cisco",
      date: "2024"
    },
    {
      name: "Modern AI Certification",
      file: "aii.png",
      type: "image",
      issuer: "Cisco",
      date: "2024"
    }
  ];

  const webinars = [
    {
      name: "Digital Safety - Cybersecurity & PNPKI",
      file: "lheng-digital-safety.jpg",
      type: "image",
      issuer: "Professional Webinar",
      date: "2024"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com/rossellah.07", label: "Facebook" },
    { icon: <FaTiktok />, href: "https://tiktok.com/@_sellang/", label: "TikTok" },
    { icon: <FaTelegram />, href: "https://t.me/lhengiee/", label: "Telegram" },
    { icon: <FaGithub />, href: "https://github.com/Rossellah", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rossellah-marie-boda%C3%B1o-2195b7349", label: "LinkedIn" },
  ];

  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 font-sans overflow-x-hidden">
      {/* Professional Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-lg py-3 shadow-2xl" : "bg-transparent py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
                <div className="relative rounded-lg bg-gray-900 p-2 border border-indigo-500/30">
                  <span className="font-bold text-xl bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">RB</span>
                </div>
              </div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent hidden sm:block">
                Rossellah Bodaño
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.section}
                  href={`#${item.section}`}
                  onClick={() => {
                    setActive(item.section);
                  }}
                  className={`px-4 py-2.5 text-gray-300 hover:text-white font-medium transition-all duration-200 rounded-lg hover:bg-gray-800/50 group ${
                    active === item.section ? "text-indigo-300" : ""
                  }`}
                >
                  {item.label}
                  <span className={`block h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                    active === item.section ? "w-full bg-gradient-to-r from-indigo-500 to-purple-500" : "bg-gradient-to-r from-indigo-500 to-purple-500"
                  }`}></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <FaBars className={`text-xl transition-transform ${menuOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800 animate-slideDown">
              {navItems.map((item) => (
                <a
                  key={item.section}
                  href={`#${item.section}`}
                  onClick={() => {
                    setMenuOpen(false);
                    setActive(item.section);
                  }}
                  className={`flex items-center gap-3 px-6 py-3.5 text-gray-300 hover:text-white hover:bg-gray-800/50 font-medium border-b border-gray-800 last:border-b-0 transition-colors ${
                    active === item.section ? "text-indigo-300 bg-gray-800/30" : ""
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Professional Hero Section */}
        <header className="text-center mb-16 md:mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10 blur-3xl -z-10"></div>
          
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              src="lhengie.jpg"
              alt="Rossellah Marie Bodaño"
              className="relative mx-auto rounded-full border-4 border-gray-900 w-40 h-40 md:w-48 md:h-48 object-cover shadow-2xl z-10 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={profileDialog.open}
            />
            <div className="absolute -bottom-2 -right-2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center z-20 border-4 border-gray-900 shadow-xl">
              <span className="text-xs md:text-sm font-bold">DEV</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Rossellah Marie Bodaño
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium mb-6 max-w-2xl mx-auto">
            Frontend Developer & UI/UX Specialist
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Frontend Development", "UI/UX Design", "React.js", "JavaScript", "Responsive Design", "Web Applications"].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm text-indigo-300 rounded-full text-xs md:text-sm font-medium border border-indigo-500/30 hover:border-indigo-400 transition-colors cursor-pointer hover:bg-gray-800/70"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <FaComments /> Get In Touch
            </a>
            <button 
              onClick={aboutDialog.open}
              className="px-6 py-2.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/70 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaUser /> View Profile
            </button>
          </div>
        </header>

        {/* Professional About Section */}
        <section
          id="about"
          className="mb-16 md:mb-20 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
        >
          <div className="flex items-center mb-6 md:mb-8">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg md:text-xl">01</span>
            </div>
            <h2 className="ml-3 md:ml-4 text-2xl md:text-3xl font-bold text-white">
              About <span className="text-indigo-300">Me</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I am an Information Technology student and dedicated web developer specializing in creating clean, intuitive interfaces that merge visual elegance with robust functionality. Based in Gaddani, Tayum, Abra, I bring a meticulous eye for detail and pixel-perfect precision to every project.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With expertise in modern web technologies, I transform conceptual ideas into responsive, interactive applications. Currently expanding my skills into back-end development to become a proficient full-stack developer.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-indigo-400" />
                  <span className="text-sm text-gray-400">Gaddani, Tayum, Abra</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-indigo-400" />
                  <span className="text-sm text-gray-400">dbodanorossellahmarie@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg md:text-xl text-white mb-4">Core Expertise</h3>
              <div className="space-y-3">
                {skills.slice(0, 4).map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 font-medium text-sm md:text-base">{skill.name}</span>
                      <span className="text-indigo-300 font-bold text-sm md:text-base">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="mb-16 md:mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Technical <span className="text-indigo-300">Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Proficient in modern web technologies and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 md:p-6 hover:border-indigo-500/50 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col items-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm md:text-base font-medium text-gray-300 group-hover:text-indigo-300 transition-colors text-center">{skill.name}</p>
                <p className="text-xs text-indigo-400 mt-2">{skill.level}%</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Projects Section */}
        <section id="projects" className="mb-16 md:mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Featured <span className="text-indigo-300">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcasing my work in web development and application design
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-900/30 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h3>
                        <FaExternalLinkAlt className="text-gray-600 group-hover:text-indigo-400 transition-colors" />
                      </div>
                      <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((tech, techIdx) => (
                          <span key={techIdx} className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full border border-indigo-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 text-sm"
                    >
                      Live Demo
                    </a>
                    <span className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                      Interactive Project
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Certificates Section */}
        <section id="certificates" className="mb-16 md:mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Certifications & <span className="text-indigo-300">Webinars</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional certifications and training sessions completed
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 justify-center mb-8">
            <button
              onClick={() => setCertTab("certificates")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all text-sm md:text-base ${
                certTab === "certificates"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-gray-900/50 text-gray-300 border border-gray-800 hover:border-indigo-500/50 hover:bg-gray-900/70"
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setCertTab("webinars")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all text-sm md:text-base ${
                certTab === "webinars"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-gray-900/50 text-gray-300 border border-gray-800 hover:border-indigo-500/50 hover:bg-gray-900/70"
              }`}
            >
              Webinars
            </button>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {(certTab === "certificates" ? certificates : webinars).map((cert, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer"
                onClick={() => {
                  setSelectedCert(cert.file);
                  certificateDialog.open();
                }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                  <img
                    src={cert.file}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors text-sm md:text-base">{cert.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-400">{cert.issuer}</p>
                    <p className="text-xs text-indigo-400">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Contact Section */}
        <section id="contact" className="mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Let's <span className="text-indigo-300">Connect</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Interested in collaborating or have a project in mind? Get in touch!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">dbodanorossellahmarie@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                      <FaPhoneAlt className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white">09603458372</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">Gaddani, Tayum, Abra</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-white mb-4">Follow Me</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 hover:border-indigo-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20"
                        aria-label={link.label}
                      >
                        <span className="text-gray-300 hover:text-white text-lg">{link.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                  <button
                    type="button"
                    onClick={() => window.location.href = 'mailto:dbodanorossellahmarie@gmail.com'}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/30 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Rossellah Marie Bodaño. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Crafted with precision using React & modern web technologies
            </p>
          </div>
        </div>
      </footer>

      {/* Profile Dialog */}
      <Dialog
        isOpen={profileDialog.isOpen}
        onClose={profileDialog.close}
        title="Profile Overview"
      >
        <div className="flex flex-col items-center gap-6">
          <img
            src="leng.jpg"
            alt="Rossellah Marie Bodaño"
            className="w-48 h-48 rounded-full border-4 border-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl object-cover"
          />
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Rossellah Marie Bodaño</h3>
            <p className="text-indigo-300 font-medium">Frontend Developer & UI/UX Specialist</p>
            <p className="text-gray-300 mt-3">Information Technology Student</p>
          </div>
        </div>
      </Dialog>

      {/* Certificate Dialog */}
      <Dialog
        isOpen={certificateDialog.isOpen}
        onClose={certificateDialog.close}
        title="Certificate View"
      >
        {selectedCert && (
          <div className="flex flex-col items-center gap-6">
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full max-h-[60vh] object-contain rounded-lg"
            />
            <div className="flex gap-3">
              <a
                href={selectedCert}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload /> Download
              </a>
              <button
                onClick={certificateDialog.close}
                className="px-5 py-2.5 bg-gray-800/50 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/70 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Dialog>

      {/* About Dialog */}
      <Dialog
        isOpen={aboutDialog.isOpen}
        onClose={aboutDialog.close}
        title="Professional Background"
      >
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            As an Information Technology student from Gaddani, Tayum, Abra, I combine academic rigor with practical expertise in web development. My approach emphasizes clean design, user-centric interfaces, and technical excellence.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Proficient in HTML, CSS, JavaScript, React, and modern frameworks, I create responsive, accessible web applications. Currently expanding into back-end technologies (PHP, MySQL, Python) to deliver comprehensive full-stack solutions.
          </p>
          <div className="pt-4 border-t border-gray-800">
            <h4 className="text-white font-medium mb-2">Key Strengths:</h4>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Pixel-perfect UI/UX implementation</li>
              <li>Responsive and mobile-first design</li>
              <li>Modern JavaScript frameworks</li>
              <li>Clean, maintainable code structure</li>
              <li>Continuous learning and adaptation</li>
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Home;