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
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaStar,
  FaImage
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
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
  const [selectedProject, setSelectedProject] = useState(null);
  const projectDialog = useDialog();

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

  // Handle image errors
  const handleImageError = (e) => {
    e.target.src = `https://ui-avatars.com/api/?name=Rossellah+Bodano&background=7c3aed&color=fff&bold=true&size=200`;
  };

  const handleCertError = (e) => {
    e.target.src = `https://via.placeholder.com/600x400/0f172a/334155?text=Certificate+Image`;
  };

  const handleProjectError = (e) => {
    e.target.src = `https://via.placeholder.com/600x400/0f172a/334155?text=Project+Image`;
  };

  // Function to handle certificate download
  const handleCertificateDownload = (certificateUrl) => {
    if (!certificateUrl) return;
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = certificateUrl;
    
    // Extract filename from URL or use default
    const fileName = certificateUrl.split('/').pop() || 'certificate';
    link.download = fileName;
    
    // Append to body, trigger click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close the dialog after download
    certificateDialog.close();
  };

  const navItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Projects", section: "projects" },
    { label: "Certificates", section: "certificates" },
    { label: "Contact", section: "contact" },
  ];

  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 />, color: "bg-gradient-to-br from-orange-500 to-red-600" },
    { name: "CSS", level: 90, icon: <FaCss3Alt />, color: "bg-gradient-to-br from-blue-500 to-indigo-600" },
    { name: "JavaScript", level: 88, icon: <FaJs />, color: "bg-gradient-to-br from-yellow-500 to-amber-600" },
    { name: "React", level: 85, icon: <FaReact />, color: "bg-gradient-to-br from-cyan-500 to-blue-600" },
    { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss />, color: "bg-gradient-to-br from-teal-500 to-emerald-600" },
    { name: "Python", level: 80, icon: <FaPython />, color: "bg-gradient-to-br from-blue-600 to-purple-700" },
    { name: "Git", level: 85, icon: <FaGitAlt />, color: "bg-gradient-to-br from-orange-600 to-red-600" },
    { name: "Figma", level: 75, icon: <FaFigma />, color: "bg-gradient-to-br from-pink-500 to-purple-600" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com/rossellah.07", label: "Facebook", color: "bg-gradient-to-br from-blue-600 to-blue-800" },
    { icon: <FaTiktok />, href: "https://tiktok.com/@_sellang/", label: "TikTok", color: "bg-gradient-to-br from-black to-gray-800" },
    { icon: <FaTelegram />, href: "https://t.me/lhengiee/", label: "Telegram", color: "bg-gradient-to-br from-blue-500 to-cyan-600" },
    { icon: <FaGithub />, href: "https://github.com/Rossellah", label: "GitHub", color: "bg-gradient-to-br from-gray-800 to-gray-900" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rossellah-marie-boda%C3%B1o-2195b7349", label: "LinkedIn", color: "bg-gradient-to-br from-blue-700 to-blue-900" },
  ];

  // Fallback profile image URL
  const profileImageUrl = "lhengie.jpg";
  const profileFallbackUrl = `https://ui-avatars.com/api/?name=Rossellah+Bodano&background=7c3aed&color=fff&bold=true&size=200`;

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 font-sans overflow-x-hidden relative">
      {/* Glittery Background - Simplified */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5"></div>
        
        {/* Interactive Gradient */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 80%)`,
          }}
        ></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-xl py-3 shadow-2xl" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo/Brand - Removed icon, just name */}
            <div className="group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  MY PORTFOLIO
                </h1>
                <span className="text-xs text-gray-400 hidden sm:block">Creative Developer</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.section}
                  href={`#${item.section}`}
                  onClick={() => setActive(item.section)}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                    active === item.section 
                      ? "text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-sm">{item.label}</span>
                  {active === item.section && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
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

          {/* Mobile Navigation */}
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
                    className={`flex items-center justify-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 mb-1 last:mb-0 ${
                      active === item.section
                        ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border border-pink-500/30"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10">
        {/* Hero Section */}
        <header className="text-center mb-20 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10"></div>
          
          {/* Profile Image */}
          <div className="relative inline-block mb-8 group cursor-pointer" onClick={profileDialog.open}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-spin-slow opacity-30 blur-xl"></div>
            <div className="relative rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              <div className="relative rounded-full overflow-hidden border-4 border-gray-900 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52">
                <img
                  src={profileImageUrl}
                  alt="Rossellah Marie Bodaño"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={handleImageError}
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Name */}
          <div className="mb-6 px-4">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full border border-pink-500/30 mb-4">
              <span className="text-sm font-medium text-pink-300">
                INFORMATION TECHNOLOGY STUDENT
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              <span className="block mb-2 text-gray-300">I'm</span>
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                Rossellah Marie Bodaño
              </span>
            </h1>
          </div>
          
          {/* Tagline */}
          <div className="relative inline-block mb-8 px-4">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium px-4 sm:px-6 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg">
              <span className="text-pink-300">Frontend Developer</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-purple-300">UI/UX Specialist</span>
            </p>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl mx-auto px-4">
            {["React Ecosystem", "Modern JavaScript", "Responsive Design", "UI/UX Principles", "Web Performance", "Creative Coding"].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm text-gray-300 rounded-full text-xs sm:text-sm font-medium border border-gray-700 hover:border-pink-500/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-pink-500/10"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a 
              href="#projects" 
              className="group px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Explore Work
            </a>
            <button 
              onClick={aboutDialog.open}
              className="group px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-gray-300 font-semibold rounded-xl hover:bg-gray-800/90 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Profile
            </button>
          </div>
        </header>

        {/* About Section */}
        <section
          id="about"
          className="mb-20 relative group px-4 sm:px-0"
        >
          <div className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-900/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-800/50 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <FaUser className="text-white text-lg" />
                </div>
              </div>
              <h2 className="ml-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Creative <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  Passionate Information Technology student from Gaddani, Tayum, Abra, specializing in crafting digital experiences that blend aesthetic elegance with functional excellence.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  With expertise spanning modern web technologies, I transform conceptual visions into responsive, intuitive applications. Continuously expanding my skill set towards full-stack development while maintaining a commitment to clean, efficient code.
                </p>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
                  {[
                    { label: "Projects", value: "10+", color: "from-pink-500 to-rose-500" },
                    { label: "Technologies", value: "8+", color: "from-purple-500 to-indigo-500" },
                    { label: "Experience", value: "2 Years", color: "from-indigo-500 to-blue-500" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <h3 className="font-bold text-lg sm:text-xl text-white mb-6">
                  Technical Mastery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="group relative">
                      <div className={`p-3 sm:p-4 rounded-xl ${skill.color} border border-gray-800/50 hover:border-white/30 transition-all duration-300 group-hover:scale-[1.02]`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-lg sm:text-xl text-white">{skill.icon}</span>
                            <span className="font-medium text-white text-sm sm:text-base">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs sm:text-sm font-bold text-white/90">{skill.level}%</span>
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

        {/* Projects Section - Darker with glow effect */}
        <section id="projects" className="mb-20 px-4 sm:px-0 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full border border-pink-500/30 mb-4">
                <span className="text-sm font-medium text-pink-300">
                  Portfolio
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                Creative <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                Showcasing innovative solutions and elegant implementations
              </p>
            </div>

            {/* Projects Grid - Darker with subtle glow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              {[
                {
                  title: "Converter Website",
                  desc: "A simple web application that allows users to convert Philippine peso (PHP) into other currencies, such as US Dollar (USD), Chinese Yuan (CNY), and Japanese Yen (JPY)",
                  img: "converter.png",
                  url: "converter-activity/index.html",
                  tech: ["HTML5", "CSS3", "JavaScript"]
                },
                {
                  title: "Calculator Website",
                  desc: "A calculator built with JavaScript that performs basic arithmetic operations.",
                  img: "calculator.png",
                  url: "Calculator/index.html",
                  tech: ["JavaScript", "CSS Grid", "Responsive"]
                },
                {
                  title: "Loop Analysis Tool",
                  desc: "A loop that lets you input a number and can see the sum, factorial, odd, and even numbers using JavaScript.",
                  img: "loop.png",
                  url: "Loop/index.html",
                  tech: ["JavaScript", "Algorithms", "DOM"]
                },
                {
                  title: "To Do List Website",
                  desc: "A React-based to-do list app for daily goals. Users can create, update, delete, and mark tasks as done.",
                  imgs: ["todo.png", "list.png"],
                  url: "https://to-do-client-brown.vercel.app/",
                  tech: ["React", "LocalStorage", "Tailwind"]
                },
                {
                  title: "Employee Management",
                  desc: "Employee Management is an employee list system that uses JavaScript arrays and objects to store, manage, and display employee information.",
                  imgs: ["array.png", "ray.png"],
                  url: "Array Objects/index.html",
                  tech: ["JavaScript", "Data Structures", "UI/UX"]
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 shadow-xl transition-all duration-500 cursor-pointer overflow-hidden relative hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/5"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-indigo-500/0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    {/* Project Image */}
                    {project.img ? (
                      <img
                        src={project.img}
                        alt={project.title}
                        className="rounded-xl mb-5 w-full h-48 sm:h-52 object-cover border border-gray-700/50 group-hover:border-purple-500/20 transition-all duration-500"
                        onError={handleProjectError}
                      />
                    ) : (
                      <div className="flex gap-3 overflow-x-auto scroll-smooth mb-5">
                        {project.imgs.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            className="rounded-xl w-60 h-48 object-cover border border-gray-700/50 group-hover:border-purple-500/20 transition-all duration-500 flex-shrink-0"
                            alt={`Slide ${i + 1}`}
                            onError={handleProjectError}
                          />
                        ))}
                      </div>
                    )}

                    {/* Project Title with glow effect */}
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="mb-4 text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {project.desc}
                    </p>

                    {/* Tech Tags - Darker with subtle glow */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-800/70 to-gray-900/70 text-gray-300 text-xs rounded-lg border border-gray-700/50 group-hover:border-purple-500/20 group-hover:text-gray-200 group-hover:bg-gray-800/80 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link with glow */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 font-medium text-sm group-hover:text-purple-300 group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center gap-2">
                        <FaExternalLinkAlt className="text-xs" />
                        View Project
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700/50 flex items-center justify-center group-hover:border-purple-500/30 group-hover:bg-gray-800/80 transition-all duration-300">
                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-purple-300 text-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Subtle bottom border glow */}
                  <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section - Darker with subtle glow */}
        <section id="certificates" className="mb-20 px-4 sm:px-0">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full border border-indigo-500/30 mb-4">
              <span className="text-sm font-medium text-indigo-300">
                Achievements
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Professional <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Credentials</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Industry-recognized certifications and specialized training
            </p>
          </div>

          {/* Tab Navigation - Darker */}
          <div className="flex gap-2 justify-center mb-10 flex-wrap">
            <button
              onClick={() => setCertTab("certificates")}
              className={`px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                certTab === "certificates"
                  ? "bg-gradient-to-r from-gray-900/80 to-gray-900/90 text-white border border-indigo-500/30 shadow-lg shadow-indigo-500/20"
                  : "bg-gradient-to-r from-gray-800/70 to-gray-900/70 text-gray-300 border border-gray-700/50 hover:border-indigo-500/30 hover:text-gray-200"
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setCertTab("webinars")}
              className={`px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                certTab === "webinars"
                  ? "bg-gradient-to-r from-gray-900/80 to-gray-900/90 text-white border border-indigo-500/30 shadow-lg shadow-indigo-500/20"
                  : "bg-gradient-to-r from-gray-800/70 to-gray-900/70 text-gray-300 border border-gray-700/50 hover:border-indigo-500/30 hover:text-gray-200"
              }`}
            >
              Webinars
            </button>
          </div>

          {/* Certificates Tab - Darker cards */}
          {certTab === "certificates" && (
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
                {[
                  {
                    name: "AI Fundamentals with IBM SkillsBuild",
                    file: "AI-Fundamentals-IBM.png",
                    type: "image"
                  },
                  {
                    name: "Apply AI - Analyze Customer Reviews",
                    file: "Apply-AI.png",
                    type: "image"
                  },
                  {
                    name: "Apply AI - Update Your Resume",
                    file: "AI-Update-Your-Resume.png",
                    type: "image"
                  },
                  {
                    name: "Python Certificate",
                    file: "python.png",
                    type: "image"
                  },
                  {
                    name: "Data Certificate",
                    file: "data.png",
                    type: "image"
                  },
                  {
                    name: "AI Certificate",
                    file: "aii.png",
                    type: "image"
                  }
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="group w-full max-w-xs mx-auto rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/70 to-gray-900/80 p-4 shadow-lg transition-all duration-500 cursor-pointer hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/5"
                    onClick={() => {
                      setSelectedCert(cert.file);
                      certificateDialog.open();
                    }}
                  >
                    {/* Certificate image container with dark overlay */}
                    <div className="relative rounded-lg overflow-hidden mb-4 border border-gray-700/50 group-hover:border-indigo-500/20 transition-all duration-300">
                      <img
                        src={cert.file}
                        alt={cert.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={handleCertError}
                      />
                      {/* Dark overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Certificate name with subtle glow */}
                    <p className="text-sm font-semibold text-gray-300 text-center group-hover:text-indigo-300 group-hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.3)] transition-all duration-300">
                      {cert.name}
                    </p>
                    
                    {/* View text with glow */}
                    <div className="text-center mt-3">
                      <span className="text-xs text-gray-500 group-hover:text-indigo-400 transition-colors duration-300">
                        Click to view
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Webinars Tab - Darker cards */}
          {certTab === "webinars" && (
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
                {[
                  {
                    name: "Digital Safety & Cybersecurity",
                    file: "lheng-digital-safety.jpg",
                    type: "image"
                  }
                ].map((webinar, index) => (
                  <div
                    key={index}
                    className="group w-full max-w-xs mx-auto rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/70 to-gray-900/80 p-4 shadow-lg transition-all duration-500 cursor-pointer hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/5"
                    onClick={() => {
                      setSelectedCert(webinar.file);
                      certificateDialog.open();
                    }}
                  >
                    {/* Webinar image container with dark overlay */}
                    <div className="relative rounded-lg overflow-hidden mb-4 border border-gray-700/50 group-hover:border-indigo-500/20 transition-all duration-300">
                      <img
                        src={webinar.file}
                        alt={webinar.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={handleCertError}
                      />
                      {/* Dark overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Webinar name with subtle glow */}
                    <p className="text-sm font-semibold text-gray-300 text-center group-hover:text-indigo-300 group-hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.3)] transition-all duration-300">
                      {webinar.name}
                    </p>
                    
                    {/* View text with glow */}
                    <div className="text-center mt-3">
                      <span className="text-xs text-gray-500 group-hover:text-indigo-400 transition-colors duration-300">
                        Click to view
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Contact Section - Fixed Responsive Issues */}
        <section id="contact" className="mb-16 px-4 sm:px-0">
          <div className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-900/20 backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-800/50 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-full border border-pink-500/30 mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-medium text-pink-300">
                    Get In Touch
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                  Let's <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Collaborate</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm lg:text-base px-2">
                  Have a project in mind? I'd love to hear about it
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Contact Info - Fixed for mobile */}
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6">
                    Connect With Me
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { icon: <FaEnvelope />, label: "Email", value: "dbodanorossellahmarie@gmail.com", color: "from-pink-500 to-rose-500" },
                      { icon: <FaPhoneAlt />, label: "Phone", value: "09603458372", color: "from-purple-500 to-indigo-500" },
                      { icon: <FaMapMarkerAlt />, label: "Location", value: "Gaddani, Tayum, Abra", color: "from-indigo-500 to-blue-500" },
                    ].map((info, idx) => (
                      <div
                        key={idx}
                        className="group flex items-start sm:items-center gap-2 sm:gap-3 lg:gap-4 p-2.5 sm:p-3 lg:p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                          <span className="text-sm sm:text-base lg:text-lg text-white">
                            {info.icon}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent overflow */}
                          <p className="text-xs sm:text-sm text-gray-400">
                            {info.label}
                          </p>
                          <p className="text-white font-medium text-sm sm:text-base lg:text-lg truncate hover:text-clip hover:whitespace-normal">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links - Fixed for mobile */}
                  <div className="mt-6 sm:mt-8">
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3 sm:mb-4">
                      Follow My Journey
                    </h4>
                    <div className="flex gap-1.5 sm:gap-2 lg:gap-3 flex-wrap">
                      {socialLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl ${link.color} border border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-900/30 flex-shrink-0`}
                          aria-label={link.label}
                        >
                          <span className="text-white text-sm sm:text-base lg:text-lg">{link.icon}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form - Fixed for mobile */}
                <div className="mt-4 sm:mt-0">
                  <form className="space-y-3 sm:space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2.5 sm:p-3 lg:p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all text-sm sm:text-base"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2.5 sm:p-3 lg:p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all text-sm sm:text-base"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative">
                      <textarea
                        placeholder="Your Message"
                        rows="3"
                        className="w-full p-2.5 sm:p-3 lg:p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                      ></textarea>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <button
                      type="button"
                      onClick={() => window.location.href = 'mailto:dbodanorossellahmarie@gmail.com'}
                      className="w-full py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl sm:hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800/30 bg-gray-900/20 backdrop-blur-xl py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center">
                <FaCode className="text-pink-400 text-xs sm:text-sm lg:text-base" />
              </div>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} Rossellah Marie Bodaño
            </p>
            <p className="text-gray-600 text-xs mt-1 sm:mt-2">
              Crafted with creativity and precision
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
        <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-spin-slow opacity-20 blur-xl"></div>
            <img
              src={profileImageUrl}
              alt="Rossellah Marie Bodaño"
              className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full border-4 border-gray-900 shadow-2xl object-cover"
              onError={handleImageError}
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
              Rossellah Marie Bodaño
            </h3>
            <p className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-medium text-xs sm:text-sm lg:text-base">Frontend Developer & UI/UX Specialist</p>
            <p className="text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base">
              Information Technology Student
            </p>
          </div>
        </div>
      </Dialog>

      {/* Certificate Dialog - Updated with download only */}
      <Dialog
        isOpen={certificateDialog.isOpen}
        onClose={certificateDialog.close}
        title="Certificate Preview"
      >
        {selectedCert && (
          <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-6">
            <div className="relative">
              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full max-h-[40vh] sm:max-h-[50vh] lg:max-h-[60vh] object-contain rounded-lg border border-gray-700"
                onError={handleCertError}
              />
            </div>
            <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
              <button
                onClick={() => handleCertificateDownload(selectedCert)}
                className="px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm lg:text-base hover:scale-105 active:scale-95"
              >
                <FaDownload className="text-xs sm:text-sm" /> Download Certificate
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
        <div className="space-y-3 sm:space-y-4">
          <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
            As a passionate Information Technology student from Gaddani, Tayum, Abra, I merge academic excellence with creative web development. My approach focuses on crafting digital experiences that are both visually stunning and functionally robust.
          </p>
          <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
            Specializing in modern web technologies, I transform ideas into responsive, intuitive applications. With expertise in front-end development and expanding into full-stack capabilities, I deliver solutions that prioritize user experience and technical excellence.
          </p>
          <div className="pt-3 sm:pt-4 border-t border-gray-800">
            <h4 className="text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base lg:text-lg">
              Creative Philosophy:
            </h4>
            <ul className="text-gray-300 space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base">
              {[
                "Pixel-perfect UI/UX implementation",
                "Responsive, mobile-first design approach",
                "Modern JavaScript ecosystem expertise",
                "Clean, maintainable code architecture",
                "Continuous learning and innovation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
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
        
        /* Prevent text overflow on mobile */
        @media (max-width: 640px) {
          .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          .truncate:hover {
            white-space: normal;
            text-overflow: clip;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;