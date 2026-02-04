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
  FaComments,
  FaSparkles,
  FaPalette,
  FaLayerGroup,
  FaRocket,
  FaStar
} from "react-icons/fa";
import { Dialog, useDialog } from "./Dialog";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profileDialog = useDialog();
  const [selectedCert, setSelectedCert] = useState(null);
  const certificateDialog = useDialog();
  const [certTab, setCertTab] = useState("certificates");
  const aboutDialog = useDialog();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move effect for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    { label: "Home", section: "home", icon: <FaSparkles /> },
    { label: "About", section: "about", icon: <FaUser /> },
    { label: "Skills", section: "skills", icon: <FaCode /> },
    { label: "Projects", section: "projects", icon: <FaProjectDiagram /> },
    { label: "Certificates", section: "certificates", icon: <FaCertificate /> },
    { label: "Contact", section: "contact", icon: <FaComments /> },
  ];

  const skills = [
    { name: "HTML", level: 95, icon: "🌐", color: "bg-gradient-to-br from-orange-500 to-red-600" },
    { name: "CSS", level: 90, icon: "🎨", color: "bg-gradient-to-br from-blue-500 to-indigo-600" },
    { name: "JavaScript", level: 88, icon: "⚡", color: "bg-gradient-to-br from-yellow-500 to-amber-600" },
    { name: "React", level: 85, icon: "⚛️", color: "bg-gradient-to-br from-cyan-500 to-blue-600" },
    { name: "Tailwind CSS", level: 92, icon: "💨", color: "bg-gradient-to-br from-teal-500 to-emerald-600" },
    { name: "Python", level: 80, icon: "🐍", color: "bg-gradient-to-br from-blue-600 to-purple-700" },
  ];

  const projects = [
    {
      title: "Currency Converter",
      desc: "Real-time currency conversion application supporting multiple international exchange rates",
      url: "converter-activity/index.html",
      tech: ["HTML5", "CSS3", "JavaScript"],
      icon: "💱"
    },
    {
      title: "Advanced Calculator",
      desc: "Sophisticated calculator with scientific functions and elegant user interface",
      url: "Calculator/index.html",
      tech: ["JavaScript", "CSS Grid", "Responsive"],
      icon: "🧮"
    },
    {
      title: "Loop Analysis Tool",
      desc: "Interactive tool for analyzing mathematical patterns and sequences",
      url: "Loop/index.html",
      tech: ["JavaScript", "Algorithms", "DOM"],
      icon: "🔄"
    },
    {
      title: "Task Manager Pro",
      desc: "Modern task management application built with React featuring drag-and-drop",
      url: "https://to-do-client-brown.vercel.app/",
      tech: ["React", "LocalStorage", "Tailwind"],
      icon: "✅"
    },
    {
      title: "Employee Management System",
      desc: "Comprehensive employee data management with visualization capabilities",
      url: "Array Objects/index.html",
      tech: ["JavaScript", "Data Structures", "UI/UX"],
      icon: "👥"
    }
  ];

  const certificates = [
    {
      name: "AI Fundamentals with IBM SkillsBuild",
      file: "AI-Fundamentals-IBM.png",
      issuer: "IBM & Cisco",
      category: "Artificial Intelligence"
    },
    {
      name: "Apply AI - Analyze Customer Reviews",
      file: "Apply-AI.png",
      issuer: "Cisco",
      category: "AI Applications"
    },
    {
      name: "Apply AI - Update Your Resume",
      file: "AI-Update-Your-Resume.png",
      issuer: "Cisco",
      category: "Career Development"
    },
    {
      name: "Python Programming",
      file: "python.png",
      issuer: "Cisco",
      category: "Programming"
    },
    {
      name: "Data Science Foundations",
      file: "data.png",
      issuer: "Cisco",
      category: "Data Science"
    },
    {
      name: "Modern AI Certification",
      file: "aii.png",
      issuer: "Cisco",
      category: "Advanced AI"
    }
  ];

  const webinars = [
    {
      name: "Digital Safety & Cybersecurity",
      file: "lheng-digital-safety.jpg",
      issuer: "Professional Webinar",
      category: "Security"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com/rossellah.07", label: "Facebook", color: "bg-gradient-to-br from-blue-600 to-blue-800" },
    { icon: <FaTiktok />, href: "https://tiktok.com/@_sellang/", label: "TikTok", color: "bg-gradient-to-br from-black to-gray-800" },
    { icon: <FaTelegram />, href: "https://t.me/lhengiee/", label: "Telegram", color: "bg-gradient-to-br from-blue-500 to-cyan-600" },
    { icon: <FaGithub />, href: "https://github.com/Rossellah", label: "GitHub", color: "bg-gradient-to-br from-gray-800 to-gray-900" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rossellah-marie-boda%C3%B1o-2195b7349", label: "LinkedIn", color: "bg-gradient-to-br from-blue-700 to-blue-900" },
  ];

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 font-sans overflow-x-hidden relative">
      {/* Interactive Background Gradient */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 80%)`,
        }}
      ></div>

      {/* Floating Stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <FaStar className={`text-yellow-300/30 ${Math.random() > 0.5 ? 'text-sm' : 'text-xs'}`} />
          </div>
        ))}
      </div>

      {/* Unique Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-xl py-3 shadow-2xl" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo/Brand with unique design */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative rounded-xl bg-gray-900/80 p-2.5 border border-purple-500/30 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                  <FaStar className="text-xl text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text" />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Rossellah
                </h1>
                <span className="text-xs text-gray-400">Creative Developer</span>
              </div>
            </div>

            {/* Desktop Navigation with unique style */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.section}
                  href={`#${item.section}`}
                  onClick={() => setActive(item.section)}
                  className={`relative px-5 py-2.5 font-medium transition-all duration-300 group ${
                    active === item.section 
                      ? "text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm opacity-70">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                    {active === item.section && <FaStar className="text-xs text-yellow-400 ml-1" />}
                  </div>
                  {active === item.section && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`relative w-6 h-6 transition-all duration-300 ${menuOpen ? 'rotate-180' : ''}`}>
                <div className={`absolute w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-300 ${menuOpen ? 'top-1/2 rotate-45' : 'top-1'}`}></div>
                <div className={`absolute w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`absolute w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-300 ${menuOpen ? 'top-1/2 -rotate-45' : 'bottom-1'}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation with unique design */}
          {menuOpen && (
            <div className="md:hidden mt-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800 animate-slideDown overflow-hidden">
              <div className="p-2">
                {navItems.map((item) => (
                  <a
                    key={item.section}
                    href={`#${item.section}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setActive(item.section);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 mb-1 last:mb-0 ${
                      active === item.section
                        ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border border-pink-500/30"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    <span className={`text-lg ${active === item.section ? 'text-pink-400' : 'text-gray-500'}`}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                    {active === item.section && <FaStar className="text-xs text-yellow-400 ml-auto" />}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10">
        {/* Unique Hero Section */}
        <header className="text-center mb-20 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10"></div>
          
          {/* Profile Image with Unique Border */}
          <div className="relative inline-block mb-8 group cursor-pointer" onClick={profileDialog.open}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-spin-slow opacity-30 blur-xl"></div>
            <div className="relative rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              <div className="relative rounded-full overflow-hidden border-4 border-gray-900 w-44 h-44 md:w-52 md:h-52">
                <img
                  src="lhengie.jpg"
                  alt="Rossellah Marie Bodaño"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            {/* Unique Floating Element */}
            <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-2xl border-2 border-gray-900 rotate-12 group-hover:rotate-0 transition-transform duration-300">
              <FaStar className="text-white" />
            </div>
          </div>
          
          {/* Name with Unique Typography */}
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full border border-pink-500/30 mb-4">
              <span className="text-sm font-medium text-pink-300 flex items-center gap-1">
                <FaStar className="text-yellow-400" /> Welcome
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
              <span className="block mb-2 text-gray-300">I'm</span>
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                Rossellah Marie Bodaño
              </span>
            </h1>
          </div>
          
          {/* Tagline with Unique Style */}
          <div className="relative inline-block mb-8">
            <p className="text-lg md:text-xl text-gray-300 font-medium px-6 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg flex items-center gap-2">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-pink-300">Frontend Developer</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-purple-300">UI/UX Specialist</span>
              <FaStar className="text-yellow-400 text-sm" />
            </p>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <FaStar className="text-white text-xs" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
              <FaStar className="text-white text-xs" />
            </div>
          </div>
          
          {/* Tech Stack with Unique Layout */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl mx-auto">
            {["React Ecosystem", "Modern JavaScript", "Responsive Design", "UI/UX Principles", "Web Performance", "Creative Coding"].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:border-pink-500/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-pink-500/10 flex items-center gap-1"
              >
                <FaStar className="text-yellow-400 text-xs" />
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons with Unique Design */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#projects" 
              className="group px-8 py-3.5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <FaStar className="group-hover:rotate-90 transition-transform duration-300" />
              Explore Work
            </a>
            <button 
              onClick={aboutDialog.open}
              className="group px-8 py-3.5 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-gray-300 font-semibold rounded-xl hover:bg-gray-800/90 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaStar className="group-hover:scale-110 transition-transform" />
              View Profile
            </button>
          </div>
        </header>

        {/* Unique About Section */}
        <section
          id="about"
          className="mb-20 relative group"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-indigo-500/5 rounded-3xl -z-10"></div>
          
          <div className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-900/20 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/50 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <FaUser className="text-white text-lg" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                  <FaStar className="text-white text-xs" />
                </div>
              </div>
              <h2 className="ml-4 text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                Creative <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Passionate Information Technology student from Gaddani, Tayum, Abra, specializing in crafting digital experiences that blend aesthetic elegance with functional excellence.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With expertise spanning modern web technologies, I transform conceptual visions into responsive, intuitive applications. Continuously expanding my skill set towards full-stack development while maintaining a commitment to clean, efficient code.
                </p>
                {/* Unique Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { label: "Projects", value: "10+", color: "from-pink-500 to-rose-500" },
                    { label: "Technologies", value: "8+", color: "from-purple-500 to-indigo-500" },
                    { label: "Experience", value: "2 Years", color: "from-indigo-500 to-blue-500" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 flex items-center justify-center gap-1`}>
                        <FaStar className="text-yellow-400" />
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  Technical Mastery
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="group relative">
                      <div className={`p-4 rounded-xl ${skill.color} border border-gray-800/50 hover:border-white/30 transition-all duration-300 group-hover:scale-[1.02]`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{skill.icon}</span>
                            <span className="font-medium text-white">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-white/90">{skill.level}%</span>
                            <FaStar className="text-yellow-300 text-xs" />
                          </div>
                        </div>
                        <div className="h-1.5 bg-gray-900/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-white/80 to-white rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Projects Section */}
        <section id="projects" className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full border border-pink-500/30 mb-4">
              <span className="text-sm font-medium text-pink-300 flex items-center gap-1">
                <FaStar className="text-yellow-400" /> Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center gap-2">
              <FaStar className="text-yellow-400" />
              Creative <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Works</span>
              <FaStar className="text-yellow-400" />
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcasing innovative solutions and elegant implementations
            </p>
          </div>

          {/* Unique Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-800/50 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10"
              >
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                        <span className="text-2xl">{project.icon}</span>
                        <FaStar className="absolute -top-1 -right-1 text-yellow-400 text-xs" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FaStar className="text-yellow-400 text-xs" />
                          <FaExternalLinkAlt className="text-gray-600 group-hover:text-purple-400 transition-colors text-sm" />
                          <span className="text-xs text-gray-500 group-hover:text-gray-400">Live Preview</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gradient-to-r from-gray-800/80 to-gray-900/80 text-gray-300 text-xs rounded-full border border-gray-700/50 group-hover:border-purple-500/30 transition-colors flex items-center gap-1"
                      >
                        <FaStar className="text-yellow-400 text-xs" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-800/80 to-gray-900/80 text-gray-300 font-medium rounded-lg border border-gray-700/50 hover:border-pink-500/50 hover:text-white hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 group/btn"
                  >
                    <FaStar className="group-hover/btn:rotate-90 transition-transform" />
                    <span>View Project</span>
                    <FaExternalLinkAlt className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Unique Certificates Section */}
        <section id="certificates" className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full border border-indigo-500/30 mb-4">
              <span className="text-sm font-medium text-indigo-300 flex items-center gap-1">
                <FaStar className="text-yellow-400" /> Achievements
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center gap-2">
              <FaStar className="text-yellow-400" />
              Professional <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Credentials</span>
              <FaStar className="text-yellow-400" />
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Industry-recognized certifications and specialized training
            </p>
          </div>

          {/* Tab Navigation with Unique Design */}
          <div className="flex gap-2 justify-center mb-10">
            <button
              onClick={() => setCertTab("certificates")}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                certTab === "certificates"
                  ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-gradient-to-r from-gray-800/80 to-gray-900/80 text-gray-300 border border-gray-700/50 hover:border-indigo-500/50"
              }`}
            >
              <FaStar className={certTab === "certificates" ? "text-yellow-300" : "text-yellow-400/50"} />
              Certifications
            </button>
            <button
              onClick={() => setCertTab("webinars")}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                certTab === "webinars"
                  ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-gradient-to-r from-gray-800/80 to-gray-900/80 text-gray-300 border border-gray-700/50 hover:border-indigo-500/50"
              }`}
            >
              <FaStar className={certTab === "webinars" ? "text-yellow-300" : "text-yellow-400/50"} />
              Webinars
            </button>
          </div>

          {/* Certificates Grid with Unique Card Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(certTab === "certificates" ? certificates : webinars).map((cert, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer"
                onClick={() => {
                  setSelectedCert(cert.file);
                  certificateDialog.open();
                }}
              >
                {/* Card Content */}
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 flex items-center justify-center relative">
                      <FaCertificate className="text-indigo-400" />
                      <FaStar className="absolute -top-1 -right-1 text-yellow-400 text-xs" />
                    </div>
                    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 text-indigo-300 text-xs rounded-full border border-indigo-500/30 flex items-center gap-1">
                      <FaStar className="text-yellow-400 text-xs" />
                      {cert.category}
                    </span>
                  </div>

                  {/* Certificate Details */}
                  <h3 className="font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300 text-lg mb-2 flex items-center gap-2">
                    <FaStar className="text-yellow-400 text-xs flex-shrink-0" />
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 flex items-center gap-1">
                    <FaStar className="text-yellow-400/50 text-xs" />
                    {cert.issuer}
                  </p>

                  {/* Preview Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors flex items-center gap-1">
                      <FaStar className="text-yellow-400/50 text-xs" />
                      Click to preview
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform relative">
                      <FaExternalLinkAlt className="text-gray-500 group-hover:text-indigo-400 transition-colors text-sm" />
                      <FaStar className="absolute -top-1 -right-1 text-yellow-400 text-xs" />
                    </div>
                  </div>
                </div>

                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Unique Contact Section */}
        <section id="contact" className="mb-16">
          <div className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-900/20 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/50 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-full border border-pink-500/30 mb-4">
                  <span className="text-sm font-medium text-pink-300 flex items-center gap-1">
                    <FaStar className="text-yellow-400" /> Get In Touch
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                  <FaStar className="text-yellow-400" />
                  Let's <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Collaborate</span>
                  <FaStar className="text-yellow-400" />
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Have a project in mind? I'd love to hear about it
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Info with Unique Cards */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    Connect With Me
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: <FaEnvelope />, label: "Email", value: "dbodanorossellahmarie@gmail.com", color: "from-pink-500 to-rose-500" },
                      { icon: <FaPhoneAlt />, label: "Phone", value: "09603458372", color: "from-purple-500 to-indigo-500" },
                      { icon: <FaMapMarkerAlt />, label: "Location", value: "Gaddani, Tayum, Abra", color: "from-indigo-500 to-blue-500" },
                    ].map((info, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] relative"
                      >
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-400 flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-xs" />
                            {info.label}
                          </p>
                          <p className="text-white font-medium truncate">{info.value}</p>
                        </div>
                        <FaStar className="absolute -top-1 -right-1 text-yellow-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>

                  {/* Social Links with Unique Design */}
                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <FaStar className="text-yellow-400" />
                      Follow My Journey
                    </h4>
                    <div className="flex gap-3">
                      {socialLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`w-12 h-12 rounded-xl ${link.color} border border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-900/30 relative`}
                          aria-label={link.label}
                        >
                          <span className="text-white text-lg">{link.icon}</span>
                          <FaStar className="absolute -top-1 -right-1 text-yellow-400 text-xs" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form with Unique Styling */}
                <div>
                  <form className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                      />
                      <FaStar className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-400/50 text-sm" />
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                      />
                      <FaStar className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-400/50 text-sm" />
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative">
                      <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="w-full p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                      ></textarea>
                      <FaStar className="absolute right-3 top-3 text-yellow-400/50 text-sm" />
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <button
                      type="button"
                      onClick={() => window.location.href = 'mailto:dbodanorossellahmarie@gmail.com'}
                      className="w-full py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      <FaStar className="group-hover:rotate-90 transition-transform" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Unique Footer */}
      <footer className="border-t border-gray-800/30 bg-gray-900/20 backdrop-blur-xl py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center">
                <FaStar className="text-yellow-400" />
              </div>
            </div>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
              <FaStar className="text-yellow-400 text-xs" />
              © {new Date().getFullYear()} Rossellah Marie Bodaño
            </p>
            <p className="text-gray-600 text-xs mt-2 flex items-center justify-center gap-1">
              <FaStar className="text-yellow-400/50 text-xs" />
              Crafted with creativity and precision
              <FaStar className="text-yellow-400/50 text-xs" />
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
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-spin-slow opacity-20 blur-xl"></div>
            <img
              src="leng.jpg"
              alt="Rossellah Marie Bodaño"
              className="relative w-48 h-48 rounded-full border-4 border-gradient-to-r from-pink-500 to-purple-500 shadow-2xl object-cover"
            />
            <FaStar className="absolute -top-2 -right-2 text-yellow-400 text-xl" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              Rossellah Marie Bodaño
              <FaStar className="text-yellow-400" />
            </h3>
            <p className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-medium">Frontend Developer & UI/UX Specialist</p>
            <p className="text-gray-300 mt-3 flex items-center justify-center gap-1">
              <FaStar className="text-yellow-400 text-xs" />
              Information Technology Student
              <FaStar className="text-yellow-400 text-xs" />
            </p>
          </div>
        </div>
      </Dialog>

      {/* Certificate Dialog */}
      <Dialog
        isOpen={certificateDialog.isOpen}
        onClose={certificateDialog.close}
        title="Certificate Preview"
      >
        {selectedCert && (
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full max-h-[60vh] object-contain rounded-lg border border-gray-700"
              />
              <FaStar className="absolute -top-2 -left-2 text-yellow-400 text-xl" />
              <FaStar className="absolute -bottom-2 -right-2 text-yellow-400 text-xl" />
            </div>
            <div className="flex gap-3">
              <a
                href={selectedCert}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center gap-2"
              >
                <FaStar className="text-yellow-300" />
                <FaDownload /> Download
              </a>
              <button
                onClick={certificateDialog.close}
                className="px-5 py-2.5 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/70 transition-all duration-300 flex items-center gap-2"
              >
                <FaStar className="text-yellow-400/50" />
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
        title="Creative Journey"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <p className="text-gray-300 leading-relaxed">
            As a passionate Information Technology student from Gaddani, Tayum, Abra, I merge academic excellence with creative web development. My approach focuses on crafting digital experiences that are both visually stunning and functionally robust.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Specializing in modern web technologies, I transform ideas into responsive, intuitive applications. With expertise in front-end development and expanding into full-stack capabilities, I deliver solutions that prioritize user experience and technical excellence.
          </p>
          <div className="pt-4 border-t border-gray-800">
            <h4 className="text-white font-medium mb-2 flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              Creative Philosophy:
            </h4>
            <ul className="text-gray-300 space-y-2">
              {[
                "Pixel-perfect UI/UX implementation",
                "Responsive, mobile-first design approach",
                "Modern JavaScript ecosystem expertise",
                "Clean, maintainable code architecture",
                "Continuous learning and innovation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaStar className="text-yellow-400 text-xs" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center gap-2 pt-4">
            <FaStar className="text-yellow-400 animate-pulse" />
            <FaStar className="text-yellow-400 animate-pulse" />
            <FaStar className="text-yellow-400 animate-pulse" />
          </div>
        </div>
      </Dialog>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Home;