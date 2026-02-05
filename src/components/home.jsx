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
  FaImage,
  FaRocket,
  FaLightbulb,
  FaPaintBrush,
  FaPalette,
  FaMagic,
  FaBolt,
  FaFire,
  FaMeteor
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiVercel, SiNetlify } from "react-icons/si";
import { Dialog, useDialog } from "./Dialog";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const profileDialog = useDialog();
  const [selectedCert, setSelectedCert] = useState(null);
  const certificateDialog = useDialog();
  const [certTab, setCertTab] = useState("certificates");
  const aboutDialog = useDialog();
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [isHoveringHero, setIsHoveringHero] = useState(false);

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

  // Create floating particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: [
          'from-pink-500/40 via-purple-500/40 to-blue-500/40',
          'from-cyan-500/40 via-blue-500/40 to-purple-500/40',
          'from-yellow-500/40 via-orange-500/40 to-red-500/40',
          'from-green-500/40 via-emerald-500/40 to-teal-500/40'
        ][Math.floor(Math.random() * 4)]
      });
    }
    setParticles(newParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: (p.y + p.speed) % 100,
        x: (p.x + Math.sin(Date.now() * 0.001 + p.id) * 0.1) % 100
      })));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 100);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle image errors
  const handleImageError = (e) => {
    e.target.src = `https://ui-avatars.com/api/?name=Rossellah+Bodano&background=linear-gradient(45deg,#ff6b6b,#ffa726,#ffee58,#51cf66,#339af0)&color=fff&bold=true&size=200`;
  };

  const handleCertError = (e) => {
    e.target.src = `https://via.placeholder.com/800x600/0a0a0a/ff6b6b?text=Certificate+Preview`;
  };

  const handleProjectError = (e) => {
    e.target.src = `https://via.placeholder.com/800x600/0a0a0a/339af0?text=Project+Showcase`;
  };

  // Function to handle certificate download
  const handleCertificateDownload = (certificateUrl) => {
    if (!certificateUrl) return;
    
    const link = document.createElement('a');
    link.href = certificateUrl;
    const fileName = certificateUrl.split('/').pop() || 'certificate';
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    certificateDialog.close();
  };

  const navItems = [
    { label: "HOME", section: "home", icon: <FaRocket /> },
    { label: "ABOUT", section: "about", icon: <FaUser /> },
    { label: "SKILLS", section: "skills", icon: <FaBolt /> },
    { label: "PROJECTS", section: "projects", icon: <FaCode /> },
    { label: "CERTIFICATES", section: "certificates", icon: <FaCertificate /> },
    { label: "CONTACT", section: "contact", icon: <FaComments /> },
  ];

  const skills = [
    { name: "HTML5", level: 95, icon: <FaHtml5 />, color: "from-orange-500 via-red-500 to-pink-500" },
    { name: "CSS3", level: 90, icon: <FaCss3Alt />, color: "from-blue-500 via-indigo-500 to-purple-500" },
    { name: "JavaScript", level: 88, icon: <FaJs />, color: "from-yellow-500 via-amber-500 to-orange-500" },
    { name: "React", level: 85, icon: <FaReact />, color: "from-cyan-500 via-blue-500 to-indigo-500" },
    { name: "Tailwind", level: 92, icon: <SiTailwindcss />, color: "from-teal-500 via-emerald-500 to-green-500" },
    { name: "TypeScript", level: 75, icon: <SiTypescript />, color: "from-blue-600 via-indigo-600 to-purple-600" },
    { name: "Next.js", level: 80, icon: <SiNextdotjs />, color: "from-gray-800 via-gray-900 to-black" },
    { name: "Python", level: 80, icon: <FaPython />, color: "from-blue-600 via-purple-600 to-indigo-600" },
    { name: "Git", level: 85, icon: <FaGitAlt />, color: "from-orange-600 via-red-600 to-rose-600" },
    { name: "Figma", level: 75, icon: <FaFigma />, color: "from-pink-500 via-purple-500 to-fuchsia-500" },
    { name: "UI/UX", level: 88, icon: <FaPaintBrush />, color: "from-purple-500 via-pink-500 to-rose-500" },
    { name: "Vercel", level: 82, icon: <SiVercel />, color: "from-gray-900 via-black to-gray-800" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com/rossellah.07", label: "Facebook", color: "from-blue-600 via-blue-700 to-blue-800" },
    { icon: <FaTiktok />, href: "https://tiktok.com/@_sellang/", label: "TikTok", color: "from-black via-gray-900 to-gray-800" },
    { icon: <FaTelegram />, href: "https://t.me/lhengiee/", label: "Telegram", color: "from-blue-500 via-cyan-500 to-blue-400" },
    { icon: <FaGithub />, href: "https://github.com/Rossellah", label: "GitHub", color: "from-gray-800 via-gray-900 to-black" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rossellah-marie-boda%C3%B1o-2195b7349", label: "LinkedIn", color: "from-blue-700 via-blue-800 to-blue-900" },
  ];

  const profileImageUrl = "lhengie.jpg";

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-gray-100 font-sans overflow-x-hidden relative">
      {/* Cosmic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Nebula Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-pink-500/10 via-transparent to-transparent"></div>
        </div>

        {/* Animated Particles */}
        {particles.map(p => (
          <div
            key={p.id}
            className={`absolute w-${Math.ceil(p.size)} h-${Math.ceil(p.size)} bg-gradient-to-br ${p.color} rounded-full animate-pulse`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.opacity,
              animationDuration: `${1 + Math.random() * 2}s`,
              animationDelay: `${p.id * 0.1}s`,
            }}
          />
        ))}

        {/* Interactive Light */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-300"
          style={{
            background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 70%)`,
          }}
        ></div>

        {/* Grid Pattern with Animation */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite',
            }}
          ></div>
        </div>

        {/* Light Beams */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 via-transparent to-pink-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 rounded-full blur-3xl animate-spin-slow animation-delay-1000"></div>
      </div>

      {/* Navigation Bar - Futuristic Design */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-black/90 backdrop-blur-2xl py-3 border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo with Glitch Effect */}
            <div className="group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 blur-xl opacity-30 transition-opacity duration-500 group-hover:opacity-60 ${glitchEffect ? 'animate-pulse' : ''}`}></div>
                <div className="relative flex flex-col">
                  <h1 className="font-bold text-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    MY PORTFOLIO<sup className="text-lg">†</sup>
                  </h1>
                  <span className="text-xs text-cyan-300/60 font-mono tracking-widest hidden sm:block">CREATIVE DEVELOPER</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Futuristic */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.section}
                  href={`#${item.section}`}
                  onClick={() => setActive(item.section)}
                  className={`relative px-5 py-2.5 font-mono text-sm tracking-widest transition-all duration-500 group overflow-hidden ${
                    active === item.section 
                      ? "text-white" 
                      : "text-gray-400 hover:text-cyan-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-cyan-400/50 group-hover:text-cyan-300 transition-colors">
                      {item.icon}
                    </span>
                    {item.label}
                  </span>
                  {active === item.section && (
                    <>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-sm"></div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12"></div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button - Futuristic */}
            <button
              className="md:hidden text-gray-300 hover:text-cyan-300 p-2 relative group"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`relative w-8 h-8 transition-all duration-500 ${menuOpen ? 'rotate-180' : ''}`}>
                <div className={`absolute w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-500 ${menuOpen ? 'top-1/2 rotate-45' : 'top-2'}`}></div>
                <div className={`absolute w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full top-1/2 -translate-y-1/2 transition-all duration-500 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`absolute w-full h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full transition-all duration-500 ${menuOpen ? 'top-1/2 -rotate-45' : 'bottom-2'}`}></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Navigation - Futuristic */}
          {menuOpen && (
            <div className="md:hidden mt-4 bg-black/90 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 animate-slideDown overflow-hidden">
              <div className="p-2 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.section}
                    href={`#${item.section}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setActive(item.section);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm tracking-wider transition-all duration-300 ${
                      active === item.section
                        ? "bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 text-white border border-cyan-500/30"
                        : "text-gray-300 hover:text-white hover:bg-gray-900/50 border border-transparent hover:border-cyan-500/20"
                    }`}
                  >
                    <span className="text-cyan-400">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        {/* Hero Section - Futuristic */}
        <header 
          className="text-center mb-32 relative"
          onMouseEnter={() => setIsHoveringHero(true)}
          onMouseLeave={() => setIsHoveringHero(false)}
        >
          {/* Holographic Effect */}
          <div className={`absolute inset-0 -z-10 transition-all duration-1000 ${
            isHoveringHero ? 'opacity-30' : 'opacity-10'
          }`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Profile Image with Holographic Effect */}
          <div className="relative inline-block mb-12 group cursor-pointer" onClick={profileDialog.open}>
            {/* Outer Rings */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute inset-[-20px] border-4 border-transparent border-t-cyan-500 border-r-purple-500 border-b-pink-500 border-l-cyan-500 rounded-full"></div>
              <div className="absolute inset-[-30px] border-4 border-transparent border-t-purple-500 border-r-pink-500 border-b-cyan-500 border-l-purple-500 rounded-full animate-spin-slow animation-delay-1000"></div>
            </div>
            
            {/* Image Container */}
            <div className="relative rounded-full p-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-border">
              <div className="relative rounded-full overflow-hidden border-4 border-black/50 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 group-hover:scale-110 transition-transform duration-700">
                <img
                  src={profileImageUrl}
                  alt="Rossellah Marie Bodaño"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={handleImageError}
                />
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center animate-float">
              <FaStar className="text-white text-sm" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-float animation-delay-500">
              <FaMagic className="text-white text-sm" />
            </div>
          </div>
          
          {/* Name with Glitch Effect */}
          <div className="mb-8 px-4 relative">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full border border-cyan-500/30 mb-6 backdrop-blur-sm">
              <span className="text-sm font-mono tracking-widest text-cyan-300">
                <FaRocket className="inline mr-2" />
                BIST STUDENT
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="block mb-2 text-gray-400 font-light">HELLO, I'M</span>
              <span className={`bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${
                glitchEffect ? 'animate-glitch' : ''
              }`}>
                ROSSELLAH MARIE BODAÑO
              </span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-300 font-mono tracking-wider">
              <span className="text-cyan-300">FRONTEND DEVELOPER</span>
             
            </div>
          </div>
          
          {/* Dynamic Tagline */}
          <div className="relative inline-block mb-10 px-4">
            <div className="relative px-6 py-4 bg-gradient-to-r from-black/40 via-gray-900/40 to-black/40 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden">
              <p className="text-base sm:text-lg text-gray-300 font-medium">
                <FaLightbulb className="inline mr-2 text-yellow-400 animate-pulse" />
                <span className="text-cyan-300">Transforming</span> ideas into{" "}
                <span className="text-purple-300">digital experiences</span> that{" "}
                <span className="text-pink-300">inspire</span>
              </p>
              {/* Animated Border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            </div>
          </div>
          
          {/* Tech Orbital */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto px-4">
            {["REACT ECOSYSTEM", "MODERN JS", "UI/UX", "PERFORMANCE", "RESPONSIVE"].map((tech, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                <span className="relative px-4 py-2.5 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm text-gray-300 rounded-full text-xs sm:text-sm font-mono tracking-wider border border-cyan-500/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer overflow-hidden">
                  {tech}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
                </span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons - Futuristic */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 px-4">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-3 text-sm sm:text-base tracking-wider overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
              <FaRocket className="text-lg animate-bounce group-hover:animate-spin" />
              EXPLORE UNIVERSE
            </a>
            <button 
              onClick={aboutDialog.open}
              className="group relative px-8 py-4 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border border-cyan-500/30 text-gray-300 font-bold rounded-xl hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 flex items-center justify-center gap-3 text-sm sm:text-base tracking-wider overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              <FaUser className="text-lg" />
              VIEW PROFILE
            </button>
          </div>
        </header>

        {/* About Section - Futuristic */}
        <section
          id="about"
          className="mb-32 relative group"
        >
          {/* Section Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-sm"></div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/40 via-black/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 rounded-full blur-3xl"></div>

            <div className="flex items-center mb-12">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <FaUser className="text-white text-xl" />
                </div>
                <div className="absolute -inset-2 border-2 border-cyan-500/30 rounded-2xl animate-ping"></div>
              </div>
              <h2 className="ml-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">COSMIC</span>{" "}
                <span className="text-gray-300">JOURNEY</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg sm:text-xl">
                  <span className="text-cyan-300 font-bold">Digital Visionary</span> from Gaddani, Tayum, Abra, specializing in creating immersive web experiences that blend <span className="text-purple-300">cutting-edge technology</span> with <span className="text-pink-300">artistic expression</span>.
                </p>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  With expertise in the modern web stack, I transform <span className="text-cyan-300">abstract concepts</span> into <span className="text-purple-300">tangible digital realities</span>. Continuously pushing boundaries towards full-stack excellence while maintaining <span className="text-pink-300">flawless execution</span>.
                </p>
                {/* Stats - Futuristic */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { label: "PROJECTS", value: "15+", color: "from-cyan-500 to-blue-500", icon: <FaCode /> },
                    { label: "TECH STACK", value: "12+", color: "from-purple-500 to-pink-500", icon: <FaBolt /> },
                    { label: "EXPERIENCE", value: "3YRS", color: "from-pink-500 to-rose-500", icon: <FaFire /> },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center group">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-2xl">{stat.icon}</span>
                        <div className="absolute inset-0 border-2 border-white/20 rounded-2xl animate-pulse"></div>
                      </div>
                      <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 tracking-widest font-mono">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
  <h3 className="font-bold text-2xl sm:text-3xl text-white mb-8 tracking-wider">
    <FaBolt className="inline mr-3 text-cyan-400" />
    SKILLS
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {skills.map((skill, idx) => (
      <div key={idx} className="group relative">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} border border-white/10 hover:border-white/30 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-purple-500/20`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl text-white">{skill.icon}</span>
              <span className="font-bold text-white text-sm sm:text-base tracking-wide">{skill.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs sm:text-sm font-bold text-white/90">{skill.level}%</span>
            </div>
          </div>
          <div className="h-2 bg-black/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-1000"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        </div>
      </div>
    ))}
  </div>
</div>
            </div>
          </div>
        </section>

        {/* Projects Section - Futuristic Grid */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full border border-cyan-500/30 mb-6 backdrop-blur-sm">
                <FaRocket className="text-cyan-300 text-sm" />
                <span className="text-sm font-mono tracking-widest text-cyan-300">
                  PORTFOLIO
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">DIGITAL</span>{" "}
                <span className="text-gray-300">CREATIONS</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg font-light">
                Showcasing innovative solutions and boundary-pushing implementations
              </p>
            </div>

            {/* Projects Grid - Futuristic */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "CONVERTER",
                  desc: "Advanced currency conversion platform with real-time rates and predictive analytics",
                  img: "converter.png",
                  url: "converter-activity/index.html",
                  tech: ["HTML5", "CSS3", "JS", "API"],
                  glow: "from-cyan-500/20 to-blue-500/20"
                },
                {
                  title: "CALCULATOR NEXUS",
                  desc: "Scientific calculator with advanced functions and responsive design",
                  img: "loop.png",
                  url: "Calculator/index.html",
                  tech: ["JS", "ALGORITHMS", "UI/UX"],
                  glow: "from-purple-500/20 to-pink-500/20"
                },
                {
                  title: "LOOP ANALYTICS",
                  desc: "Mathematical analysis tool for sequence processing and pattern recognition",
                  img: "calculator.png",
                  url: "Loop/index.html",
                  tech: ["JS", "DATA", "VISUALIZATION"],
                  glow: "from-pink-500/20 to-rose-500/20"
                },
                {
                  title: "TO DO LIST",
                  desc: "AI-powered task management system with intelligent scheduling",
                  imgs: ["todo.png", "list.png"],
                  url: "https://to-do-client-brown.vercel.app/",
                  tech: ["REACT", "AI", "CLOUD"],
                  glow: "from-blue-500/20 to-cyan-500/20"
                },
                {
                  title: "EMPLOYEE MATRIX",
                  desc: "Enterprise management system with advanced data structures",
                  imgs: ["array.png", "ray.png"],
                  url: "Array Objects/index.html",
                  tech: ["JS", "DATA", "SYSTEMS"],
                  glow: "from-green-500/20 to-emerald-500/20"
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/20 shadow-xl transition-all duration-700 cursor-pointer overflow-hidden hover:scale-[1.02] hover:border-purple-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  {/* Animated Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.glow} opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  {/* Project Number */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-cyan-300 text-sm font-mono">0{index + 1}</span>
                  </div>
                  
                  <div className="relative">
                    {/* Project Image */}
                    {project.img ? (
                      <div className="relative rounded-2xl mb-6 overflow-hidden border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-500">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={handleProjectError}
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>
                    ) : (
                      <div className="flex gap-4 overflow-x-auto scroll-smooth mb-6">
                        {project.imgs.map((img, i) => (
                          <div key={i} className="relative rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-500 flex-shrink-0">
                            <img
                              src={img}
                              className="w-80 h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                              alt={`Slide ${i + 1}`}
                              onError={handleProjectError}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 tracking-wider">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="mb-5 text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {project.desc}
                    </p>

                    {/* Tech Tags - Futuristic */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-800/70 to-black/70 text-gray-300 text-xs rounded-lg border border-cyan-500/20 group-hover:border-purple-500/30 group-hover:text-cyan-300 group-hover:bg-gray-800/80 transition-all duration-300 tracking-wider font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 font-medium text-sm group-hover:text-cyan-300 group-hover:tracking-wider transition-all duration-300 flex items-center gap-2">
                        <FaExternalLinkAlt className="text-xs" />
                        LAUNCH PROJECT
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800/70 to-black/70 border border-cyan-500/20 flex items-center justify-center group-hover:border-purple-500/30 group-hover:bg-gray-800/80 group-hover:rotate-90 transition-all duration-500">
                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-cyan-300 text-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section - Futuristic Gallery */}
        <section id="certificates" className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 rounded-full border border-indigo-500/30 mb-6 backdrop-blur-sm">
              <FaCertificate className="text-indigo-300 text-sm" />
              <span className="text-sm font-mono tracking-widest text-indigo-300">
                CREDENTIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">DIGITAL</span>{" "}
              <span className="text-gray-300">CERTIFICATES</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg font-light">
              Industry-recognized certifications and specialized achievements
            </p>
          </div>

          {/* Tab Navigation - Futuristic */}
          <div className="flex gap-3 justify-center mb-12 flex-wrap">
            <button
              onClick={() => setCertTab("certificates")}
              className={`px-6 sm:px-10 py-3 rounded-xl font-mono text-sm tracking-wider transition-all duration-500 flex items-center gap-3 ${
                certTab === "certificates"
                  ? "bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-cyan-600/20 text-white border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
                  : "bg-gradient-to-r from-gray-800/70 to-black/70 text-gray-300 border border-gray-700/50 hover:border-cyan-500/30 hover:text-cyan-300"
              }`}
            >
              <FaCertificate className="text-sm" />
              CERTIFICATIONS
            </button>
            <button
              onClick={() => setCertTab("webinars")}
              className={`px-6 sm:px-10 py-3 rounded-xl font-mono text-sm tracking-wider transition-all duration-500 flex items-center gap-3 ${
                certTab === "webinars"
                  ? "bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-cyan-600/20 text-white border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
                  : "bg-gradient-to-r from-gray-800/70 to-black/70 text-gray-300 border border-gray-700/50 hover:border-cyan-500/30 hover:text-cyan-300"
              }`}
            >
              <FaComments className="text-sm" />
              WEBINARS
            </button>
          </div>

          {/* Certificates Grid - Futuristic */}
          {certTab === "certificates" && (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "AI FUNDAMENTALS",
                    subtitle: "IBM SkillsBuild",
                    file: "AI-Fundamentals-IBM.png",
                    color: "from-cyan-500/20 to-blue-500/20"
                  },
                  {
                    name: "APPLY AI",
                    subtitle: "Customer Reviews Analysis",
                    file: "Apply-AI.png",
                    color: "from-purple-500/20 to-pink-500/20"
                  },
                  {
                    name: "AI RESUME BUILDER",
                    subtitle: "Smart Career Tools",
                    file: "AI-Update-Your-Resume.png",
                    color: "from-pink-500/20 to-rose-500/20"
                  },
                  {
                    name: "PYTHON MASTERY",
                    subtitle: "Advanced Programming",
                    file: "python.png",
                    color: "from-blue-500/20 to-indigo-500/20"
                  },
                  {
                    name: "DATA SCIENCE",
                    subtitle: "Analytics & Processing",
                    file: "data.png",
                    color: "from-green-500/20 to-emerald-500/20"
                  },
                  {
                    name: "AI ENGINEER",
                    subtitle: "Machine Learning",
                    file: "aii.png",
                    color: "from-orange-500/20 to-red-500/20"
                  }
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="group relative rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-xl p-5 shadow-xl transition-all duration-700 cursor-pointer hover:scale-[1.03] hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
                    onClick={() => {
                      setSelectedCert(cert.file);
                      certificateDialog.open();
                    }}
                  >
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl`}></div>
                    
                    {/* Certificate Image */}
                    <div className="relative rounded-2xl overflow-hidden mb-5 border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-500">
                      <img
                        src={cert.file}
                        alt={cert.name}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={handleCertError}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                      {/* Badge Number */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-500/50 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Certificate Info */}
                    <div className="relative text-center">
                      <p className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                        {cert.name}
                      </p>
                      <p className="text-sm text-gray-400 mb-3">{cert.subtitle}</p>
                      <div className="text-xs text-cyan-400 tracking-widest font-mono group-hover:tracking-wider transition-all duration-300">
                        CLICK TO VIEW
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Webinars Grid */}
          {certTab === "webinars" && (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "CYBER SECURITY",
                    subtitle: "Digital Safety Protocol",
                    file: "lheng-digital-safety.jpg",
                    color: "from-cyan-500/20 to-blue-500/20"
                  }
                ].map((webinar, index) => (
                  <div
                    key={index}
                    className="group relative rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-xl p-5 shadow-xl transition-all duration-700 cursor-pointer hover:scale-[1.03] hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
                    onClick={() => {
                      setSelectedCert(webinar.file);
                      certificateDialog.open();
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${webinar.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl`}></div>
                    
                    <div className="relative rounded-2xl overflow-hidden mb-5 border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-500">
                      <img
                        src={webinar.file}
                        alt={webinar.name}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={handleCertError}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-500/50 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">★</span>
                      </div>
                    </div>
                    
                    <div className="relative text-center">
                      <p className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                        {webinar.name}
                      </p>
                      <p className="text-sm text-gray-400 mb-3">{webinar.subtitle}</p>
                      <div className="text-xs text-cyan-400 tracking-widest font-mono group-hover:tracking-wider transition-all duration-300">
                        CLICK TO VIEW
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Contact Section - Futuristic */}
        <section id="contact" className="mb-20">
          <div className="bg-gradient-to-br from-gray-900/40 via-black/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden relative">
            {/* Animated Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 rounded-full blur-3xl animate-spin-slow animation-delay-1000"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full border border-cyan-500/30 mb-6 backdrop-blur-sm">
                  <FaComments className="text-cyan-300 text-sm" />
                  <span className="text-sm font-mono tracking-widest text-cyan-300">
                    CONNECT
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">LET'S</span>{" "}
                  <span className="text-gray-300">CREATE</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg font-light">
                  Ready to bring your digital vision to life?
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Contact Info - Futuristic */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 tracking-wider">
                    <FaBolt className="inline mr-3 text-cyan-400" />
                    CONNECT WITH ME
                  </h3>
                  <div className="space-y-5">
                    {[
                      { icon: <FaEnvelope />, label: "EMAIL", value: "dbodanorossellahmarie@gmail.com", color: "from-cyan-500 to-blue-500" },
                      { icon: <FaPhoneAlt />, label: "PHONE", value: "+63 960 345 8372", color: "from-purple-500 to-pink-500" },
                      { icon: <FaMapMarkerAlt />, label: "LOCATION", value: "Gaddani, Tayum, Abra, Philippines", color: "from-pink-500 to-rose-500" },
                    ].map((info, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-900/50 to-black/50 border border-cyan-500/20 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02]"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                          <span className="text-white text-lg">{info.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-400 tracking-widest font-mono">
                            {info.label}
                          </p>
                          <p className="text-white font-medium text-sm sm:text-base truncate hover:text-clip hover:whitespace-normal">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links - Futuristic */}
                  <div className="mt-10">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-6 tracking-wider">
                      FOLLOW THE JOURNEY
                    </h4>
                    <div className="flex gap-3">
                      {socialLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} border border-gray-700 flex items-center justify-center transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:shadow-cyan-500/30`}
                          aria-label={link.label}
                        >
                          <span className="text-white text-lg">{link.icon}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form - Futuristic */}
                <div>
                  <form className="space-y-5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="YOUR NAME"
                        className="w-full p-4 rounded-2xl bg-gradient-to-r from-gray-900/50 to-black/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm tracking-wider font-mono"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="YOUR EMAIL"
                        className="w-full p-4 rounded-2xl bg-gradient-to-r from-gray-900/50 to-black/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm tracking-wider font-mono"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative">
                      <textarea
                        placeholder="YOUR MESSAGE"
                        rows="4"
                        className="w-full p-4 rounded-2xl bg-gradient-to-r from-gray-900/50 to-black/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none text-sm tracking-wider font-mono"
                      ></textarea>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <button
                      type="button"
                      onClick={() => window.location.href = 'mailto:dbodanorossellahmarie@gmail.com'}
                      className="w-full py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-3 text-sm tracking-wider"
                    >
                      <FaRocket className="text-lg" />
                      LAUNCH MESSAGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer - Futuristic */}
      <footer className="border-t border-cyan-500/20 bg-black/50 backdrop-blur-2xl py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                <FaCode className="text-cyan-400 text-base" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ROSSEL
                </h3>
                <p className="text-xs text-gray-500 font-mono tracking-widest">DIGITAL ARTISAN</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm tracking-wider font-mono mb-2">
              © {new Date().getFullYear()} ROSSELLAH MARIE BODAÑO
            </p>
            <p className="text-gray-600 text-xs tracking-widest font-mono">
              CRAFTED WITH <FaFire className="inline text-orange-500" /> AND <FaBolt className="inline text-yellow-500" />
            </p>
          </div>
        </div>
      </footer>

      {/* Profile Dialog - Futuristic */}
      <Dialog
        isOpen={profileDialog.isOpen}
        onClose={profileDialog.close}
        title={
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
              <FaUser className="text-white text-sm" />
            </div>
            <span className="text-white font-bold tracking-wider">DIGITAL PROFILE</span>
          </div>
        }
        className="bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 border border-cyan-500/20 backdrop-blur-2xl"
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-20 blur-xl"></div>
            <img
              src={profileImageUrl}
              alt="Rossellah Marie Bodaño"
              className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-black shadow-2xl object-cover"
              onError={handleImageError}
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              ROSSELLAH MARIE BODAÑO
            </h3>
            <p className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-bold text-sm sm:text-base tracking-wider mb-3">
              DIGITAL ARTISAN & CREATIVE DEVELOPER
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/30">
              <span className="text-cyan-300 text-xs sm:text-sm font-mono tracking-wider">
                IT STUDENT • FRONTEND SPECIALIST
              </span>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Certificate Dialog - Futuristic */}
      <Dialog
        isOpen={certificateDialog.isOpen}
        onClose={certificateDialog.close}
        title={
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
              <FaCertificate className="text-white text-sm" />
            </div>
            <span className="text-white font-bold tracking-wider">CERTIFICATES</span>
          </div>
        }
        className="bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 border border-cyan-500/20 backdrop-blur-2xl"
      >
        {selectedCert && (
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30">
              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full max-h-[50vh] sm:max-h-[60vh] object-contain"
                onError={handleCertError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleCertificateDownload(selectedCert)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3 text-sm tracking-wider hover:scale-105"
              >
                <FaDownload className="text-sm" /> DOWNLOAD CERTIFICATE
              </button>
            </div>
          </div>
        )}
      </Dialog>

      {/* About Dialog - Futuristic */}
      <Dialog
        isOpen={aboutDialog.isOpen}
        onClose={aboutDialog.close}
        title={
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <FaBolt className="text-white text-sm" />
            </div>
            <span className="text-white font-bold tracking-wider">ABOUT ME</span>
          </div>
        }
        className="bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 border border-cyan-500/20 backdrop-blur-2xl"
      >
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            As a <span className="text-cyan-300 font-bold">visionary developer</span> from Gaddani, Tayum, Abra, I merge <span className="text-purple-300">technical precision</span> with <span className="text-pink-300">artistic innovation</span> to create digital experiences that transcend expectations.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Specializing in the cutting edge of web technology, I transform <span className="text-cyan-300">abstract concepts</span> into <span className="text-purple-300">immersive realities</span>. With expertise spanning front-end mastery and expanding into full-stack frontiers, I deliver solutions that prioritize <span className="text-pink-300">user delight</span> and <span className="text-cyan-300">technical excellence</span>.
          </p>
          <div className="pt-6 border-t border-cyan-500/20">
            <h4 className="text-white font-bold mb-4 text-lg tracking-wider flex items-center gap-2">
              <FaMagic className="text-purple-400" />
              MY PRINCIPLES:
            </h4>
            <ul className="text-gray-300 space-y-3 text-sm sm:text-base">
              {[
                "Pixel-perfect implementation with artistic flair",
                "Responsive, mobile-first approach with futuristic design",
                "Modern JavaScript ecosystem with bleeding-edge tools",
                "Clean, scalable architecture with performance optimization",
                "Continuous innovation with boundary-pushing creativity"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mt-2 flex-shrink-0"></div>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes gradient-border {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradient-border 2s ease infinite;
        }
        
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          animation: glitch 0.3s linear;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6, #ec4899);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed, #db2777);
        }
        
        /* Text selection */
        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: white;
        }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default Home;