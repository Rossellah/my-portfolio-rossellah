import { useState, useEffect, useRef, memo } from "react";
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
  FaMeteor,
  FaFileAlt,
  FaIdCard,
  FaQrcode,
  FaShieldAlt,
  FaMicrochip,
  FaFilePdf,
  FaFileImage,
  FaSchool,
  FaGraduationCap,
  FaUserGraduate,
  FaLink,
  FaCube,
  FaSun,
  FaMoon
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiVercel, SiNetlify } from "react-icons/si";
import { Dialog, useDialog } from "./Dialog";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Lanyard from "./Lanyard";
import CircularText from "./CircularText";
import InfiniteMenu from './InfiniteMenu'; // <-- NEW IMPORT

// Memoize Lanyard to prevent unnecessary re-renders
const MemoizedLanyard = memo(Lanyard);

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const certificateDialog = useDialog();
  const [certTab, setCertTab] = useState("certificates");
  const aboutDialog = useDialog();
  const resumeDialog = useDialog();
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const [displayName, setDisplayName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  const fullName = "ROSSELLAH MARIE BODAÑO";

  const profileImageUrl = "/lhengie.jpg";
  const idCardImageUrl = "/we.png";

  // Media query hook for responsive design
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
  };

  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');

  // InfiniteMenu items – NEW
  const menuItems = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://google.com/',
      title: 'Item 1',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: 'https://google.com/',
      title: 'Item 2',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: 'https://google.com/',
      title: 'Item 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Item 4',
      description: 'This is pretty cool, right?'
    }
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && nameIndex === fullName.length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && nameIndex === 0) {
      setTimeout(() => setIsDeleting(false), pauseTime / 2);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayName(fullName.substring(0, nameIndex - 1));
        setNameIndex(nameIndex - 1);
      } else {
        setDisplayName(fullName.substring(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [nameIndex, isDeleting, fullName]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Particle generation
  useEffect(() => {
    const newParticles = [];
    const particleCount = isDarkMode ? 50 : 30;

    for (let i = 0; i < particleCount; i++) {
      const colors = isDarkMode
        ? [
            'from-pink-500/40 via-purple-500/40 to-blue-500/40',
            'from-cyan-500/40 via-blue-500/40 to-purple-500/40',
            'from-yellow-500/40 via-orange-500/40 to-red-500/40',
            'from-green-500/40 via-emerald-500/40 to-teal-500/40'
          ]
        : [
            'from-cyan-500/60 via-blue-500/60 to-purple-500/60',
            'from-pink-500/60 via-rose-500/60 to-orange-500/60',
            'from-emerald-500/60 via-teal-500/60 to-cyan-500/60',
            'from-amber-500/60 via-yellow-500/60 to-orange-500/60'
          ];

      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: isDarkMode ? Math.random() * 0.5 + 0.1 : Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setParticles(newParticles);
  }, [isDarkMode]);

  // Particle animation – slowed down from 50ms to 150ms to prevent blinking
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: (p.y + p.speed * 0.5) % 100,
        x: (p.x + Math.sin(Date.now() * 0.001 + p.id) * 0.05) % 100
      })));
    }, 150); // <--- CHANGED FROM 50 TO 150
    return () => clearInterval(interval);
  }, [particles.length]);

  useEffect(() => {
    if (!isDarkMode) return;

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 100);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isDarkMode]);

  const handleImageError = (e) => {
    e.target.src = `https://ui-avatars.com/api/?name=Rossellah+Bodano&background=linear-gradient(45deg,#ff6b6b,#ffa726,#ffee58,#51cf66,#339af0)&color=fff&bold=true&size=200`;
  };

  const handleCertError = (e) => {
    e.target.src = `https://via.placeholder.com/800x600/0a0a0a/ff6b6b?text=Certificate+Preview`;
  };

  const handleProjectError = (e) => {
    e.target.src = `https://via.placeholder.com/800x600/0a0a0a/339af0?text=Project+Showcase`;
  };

  const handleResumeError = (e) => {
    e.target.src = `https://via.placeholder.com/800x1000/0a0a0a/cyan?text=Resume+Image`;
  };

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

  const handleResumePDFDownload = () => {
    const resumeUrl = "/Rossellah_Marie_Bodano_Resume.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Rossellah_Marie_Bodano_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeImageDownload = () => {
    const resumeImageUrl = "/resume-image.png";
    const link = document.createElement('a');
    link.href = resumeImageUrl;
    link.download = "Rossellah_Marie_Bodano_Resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Navigation items – added "MENU" after ABOUT
  const navItems = [
    { label: "HOME", section: "home", icon: <FaRocket /> },
    { label: "ABOUT", section: "about", icon: <FaUser /> },
    { label: "MENU", section: "menu", icon: <FaCube /> },   // <-- NEW
    { label: "PROJECTS", section: "projects", icon: <FaCode /> },
    { label: "CERTIFICATES", section: "certificates", icon: <FaCertificate /> },
    { label: "RESUME", section: "resume", icon: <FaFileAlt />, action: "dialog" },
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

  // Animation variants
  const cardVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === 'left' ? -100 : 100, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  });

  const textPopUp = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.5
      }
    }
  };

  return (
    <div
      id="home"
      className={`min-h-screen bg-gradient-to-br ${isDarkMode ? "from-gray-950 via-black to-gray-950" : "from-cyan-100 via-blue-100 to-purple-100"} ${isDarkMode ? "text-gray-100" : "text-gray-900"} font-sans overflow-x-hidden relative transition-colors duration-500`}
    >
      {/* Cosmic/Pattern Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {isDarkMode ? (
          <>
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-pink-500/10 via-transparent to-transparent"></div>
            </div>

            {particles.map(p => (
              <div
                key={p.id}
                className={`absolute bg-gradient-to-br ${p.color} rounded-full animate-pulse`}
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  opacity: p.opacity,
                  animationDuration: `${1 + Math.random() * 2}s`,
                  animationDelay: `${p.id * 0.1}s`,
                }}
              />
            ))}

            <div
              className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-300"
              style={{
                background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 70%)`,
              }}
            ></div>

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
          </>
        ) : (
          <>
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/50 via-blue-200/50 to-purple-200/50"></div>
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-cyan-300/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-300/40 via-transparent to-transparent"></div>
            </div>

            {particles.map(p => (
              <div
                key={p.id}
                className={`absolute bg-gradient-to-br ${p.color} rounded-full animate-float`}
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size * 1.5}px`,
                  height: `${p.size * 1.5}px`,
                  opacity: p.opacity,
                  animationDuration: `${3 + Math.random() * 2}s`,
                  animationDelay: `${p.id * 0.1}s`,
                }}
              />
            ))}

            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 30px 30px, #0891b2 2px, transparent 2px),
                                   radial-gradient(circle at 70px 70px, #7c3aed 2px, transparent 2px)`,
                  backgroundSize: '100px 100px',
                  animation: 'float 10s ease-in-out infinite',
                }}
              ></div>
            </div>

            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-300/40 to-blue-300/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-300/40 to-pink-300/40 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          </>
        )}
      </div>

      {/* Enhanced Navigation Bar */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? isDarkMode
            ? "top-2 sm:top-3 bg-black/95 backdrop-blur-2xl py-1.5 sm:py-2 px-4 sm:px-6 mx-4 sm:mx-6 lg:mx-8 rounded-2xl sm:rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
            : "top-2 sm:top-3 bg-white/98 backdrop-blur-2xl py-1.5 sm:py-2 px-4 sm:px-6 mx-4 sm:mx-6 lg:mx-8 rounded-2xl sm:rounded-3xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30"
          : "top-0 bg-transparent py-4 sm:py-6 px-4 sm:px-6 lg:px-8"
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo area */}
            <div className="flex items-center gap-1 sm:gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <CircularText
                text="✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿"
                spinDuration={15}
                onHover="goBonkers"
                className={`w-12 h-12 sm:w-20 sm:h-20 text-[0.7rem] sm:text-sm font-black tracking-tight text-transparent bg-gradient-to-r ${
                  isDarkMode
                    ? "from-cyan-400 via-purple-400 to-pink-400"
                    : scrolled
                      ? "from-cyan-700 via-purple-700 to-pink-700"
                      : "from-cyan-600 via-purple-600 to-pink-600"
                } bg-clip-text drop-shadow-lg`}
              />
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  isDarkMode ? "from-cyan-500 to-pink-500" : scrolled ? "from-cyan-700 to-pink-700" : "from-cyan-600 to-pink-600"
                } blur-xl opacity-30 transition-opacity duration-500 group-hover:opacity-60 ${glitchEffect ? 'animate-pulse' : ''}`}></div>
                <div className="relative flex flex-col">
                  <h1 className={`font-bold text-base sm:text-xl md:text-2xl bg-gradient-to-r ${
                    isDarkMode
                      ? "from-cyan-400 via-purple-400 to-pink-400"
                      : scrolled
                        ? "from-cyan-700 via-purple-700 to-pink-700"
                        : "from-cyan-600 via-purple-600 to-pink-600"
                  } bg-clip-text text-transparent drop-shadow-lg whitespace-nowrap`}>
                    MY PORTFOLIO<sup className="text-[0.6rem] sm:text-base ml-0.5">†</sup>
                  </h1>
                  <span className={`text-[0.6rem] sm:text-xs font-mono tracking-widest drop-shadow ${
                    isDarkMode ? "text-cyan-300/80" : scrolled ? "text-cyan-700/90" : "text-cyan-700/80"
                  }`}>
                    CREATIVE DEVELOPER
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop nav items */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                item.action === "dialog" ? (
                  <button
                    key={item.section}
                    onClick={() => {
                      setActive(item.section);
                      resumeDialog.open();
                    }}
                    className={`relative px-4 lg:px-5 py-2 lg:py-2.5 font-mono text-xs lg:text-sm tracking-widest transition-all duration-300 group overflow-hidden rounded-lg hover:scale-105 hover:shadow-lg ${
                      active === item.section
                        ? isDarkMode
                          ? "text-white bg-gradient-to-r from-cyan-600/20 to-purple-600/20"
                          : "text-cyan-800 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-500/50"
                        : isDarkMode
                          ? "text-gray-400 hover:text-cyan-300"
                          : "text-gray-700 hover:text-cyan-700"
                    }`}
                  >
                    <span className="flex items-center gap-1 lg:gap-2 relative z-10">
                      <span className={`${isDarkMode ? "text-cyan-400/70" : "text-cyan-700"} group-hover:text-cyan-300 transition-colors text-sm`}>{item.icon}</span>
                      <span className="hidden lg:inline">{item.label}</span>
                      <span className="lg:hidden text-xs">{item.label.substring(0, 3)}</span>
                    </span>
                    {active === item.section && (
                      <>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-sm"></div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 -skew-x-12 rounded-lg"></div>
                  </button>
                ) : (
                  <a
                    key={item.section}
                    href={`#${item.section}`}
                    onClick={() => setActive(item.section)}
                    className={`relative px-4 lg:px-5 py-2 lg:py-2.5 font-mono text-xs lg:text-sm tracking-widest transition-all duration-300 group overflow-hidden rounded-lg hover:scale-105 hover:shadow-lg ${
                      active === item.section
                        ? isDarkMode
                          ? "text-white bg-gradient-to-r from-cyan-600/20 to-purple-600/20"
                          : "text-cyan-800 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-500/50"
                        : isDarkMode
                          ? "text-gray-400 hover:text-cyan-300"
                          : "text-gray-700 hover:text-cyan-700"
                    }`}
                  >
                    <span className="flex items-center gap-1 lg:gap-2 relative z-10">
                      <span className={`${isDarkMode ? "text-cyan-400/70" : "text-cyan-700"} group-hover:text-cyan-300 transition-colors text-sm`}>{item.icon}</span>
                      <span className="hidden lg:inline">{item.label}</span>
                      <span className="lg:hidden text-xs">{item.label.substring(0, 3)}</span>
                    </span>
                    {active === item.section && (
                      <>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-sm"></div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 -skew-x-12 rounded-lg"></div>
                  </a>
                )
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`ml-2 p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? "bg-gray-800/50 hover:bg-gray-700/50 text-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20"
                    : "bg-gradient-to-r from-cyan-500/30 to-purple-500/30 hover:from-cyan-500/40 hover:to-purple-500/40 text-gray-700 hover:shadow-lg hover:shadow-cyan-500/30"
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </button>
            </div>

            {/* Mobile right side */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800/50 text-yellow-400 hover:bg-gray-700/50"
                    : "bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-gray-700 hover:from-cyan-500/40 hover:to-purple-500/40"
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun className="text-base" /> : <FaMoon className="text-base" />}
              </button>

              <button
                className={`p-2 relative group ${
                  isDarkMode ? "text-gray-300 hover:text-cyan-300" : "text-gray-700 hover:text-cyan-700"
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <div className={`relative w-6 h-6 sm:w-8 sm:h-8 transition-all duration-500 ${menuOpen ? 'rotate-180' : ''}`}>
                  <div className={`absolute w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-500 ${menuOpen ? 'top-1/2 rotate-45' : 'top-1'}`}></div>
                  <div className={`absolute w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full top-1/2 -translate-y-1/2 transition-all duration-500 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                  <div className={`absolute w-full h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full transition-all duration-500 ${menuOpen ? 'top-1/2 -rotate-45' : 'bottom-1'}`}></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden mt-4 backdrop-blur-2xl rounded-2xl border shadow-2xl overflow-hidden ${
                isDarkMode
                  ? "bg-black/90 border-cyan-500/20 shadow-cyan-500/10"
                  : "bg-white/90 border-cyan-500/40 shadow-lg shadow-cyan-500/20"
              }`}
            >
              <div className="p-2 space-y-1">
                {navItems.map((item) => (
                  item.action === "dialog" ? (
                    <button
                      key={item.section}
                      onClick={() => {
                        setMenuOpen(false);
                        setActive(item.section);
                        resumeDialog.open();
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm tracking-wider transition-all duration-300 w-full hover:scale-[1.02] hover:shadow-md ${
                        active === item.section
                          ? isDarkMode
                            ? "bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 text-white border border-cyan-500/30"
                            : "bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 text-cyan-800 border border-cyan-500/50"
                          : isDarkMode
                            ? "text-gray-300 hover:text-white hover:bg-gray-900/50 border border-transparent hover:border-cyan-500/20"
                            : "text-gray-700 hover:text-cyan-700 hover:bg-cyan-50/80 border border-transparent hover:border-cyan-500/40"
                      }`}
                    >
                      <span className={isDarkMode ? "text-cyan-400" : "text-cyan-600"}>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ) : (
                    <a
                      key={item.section}
                      href={`#${item.section}`}
                      onClick={() => {
                        setMenuOpen(false);
                        setActive(item.section);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm tracking-wider transition-all duration-300 w-full hover:scale-[1.02] hover:shadow-md ${
                        active === item.section
                          ? isDarkMode
                            ? "bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 text-white border border-cyan-500/30"
                            : "bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 text-cyan-800 border border-cyan-500/50"
                          : isDarkMode
                            ? "text-gray-300 hover:text-white hover:bg-gray-900/50 border border-transparent hover:border-cyan-500/20"
                            : "text-gray-700 hover:text-cyan-700 hover:bg-cyan-50/80 border border-transparent hover:border-cyan-500/40"
                      }`}
                    >
                      <span className={isDarkMode ? "text-cyan-400" : "text-cyan-600"}>{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative z-10">
        {/* Hero Section */}
        <section
          className="text-center mb-20 sm:mb-32 relative"
          onMouseEnter={() => setIsHoveringHero(true)}
          onMouseLeave={() => setIsHoveringHero(false)}
        >
          {isDarkMode ? (
            <div className={`absolute inset-0 -z-10 transition-all duration-1000 ${
              isHoveringHero ? 'opacity-30' : 'opacity-10'
            }`}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
          ) : (
            <div className="absolute inset-0 -z-10 opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-cyan-400/40 via-purple-400/40 to-pink-400/40 rounded-full blur-3xl"></div>
            </div>
          )}

          {/* Profile section – image slides left, info card always on the right */}
          <div
            className="relative inline-block mb-8 sm:mb-12"
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => {
              setTimeout(() => {
                if (!isHoveringImage) return;
                setIsHoveringImage(false);
              }, 200);
            }}
          >
            {/* Image container – slides left on hover (responsive distance) */}
            <motion.div
              animate={{ x: isHoveringImage ? (isMobile ? -60 : isTablet ? -120 : -200) : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-10"
            >
              {/* Base decorative rings (always visible, subtle) */}
              {isDarkMode ? (
                <>
                  <div className="absolute inset-[-10px] sm:inset-[-15px] md:inset-[-20px] border-4 border-transparent border-t-cyan-500 border-r-purple-500 border-b-pink-500 border-l-cyan-500 rounded-full opacity-30"></div>
                  <div className="absolute inset-[-15px] sm:inset-[-20px] md:inset-[-25px] border-4 border-transparent border-t-purple-500 border-r-pink-500 border-b-cyan-500 border-l-purple-500 rounded-full opacity-20"></div>
                </>
              ) : (
                <>
                  <div className="absolute inset-[-10px] sm:inset-[-15px] md:inset-[-20px] bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                  <div className="absolute inset-[-15px] sm:inset-[-20px] md:inset-[-25px] border-2 border-dashed border-cyan-500/20 rounded-full"></div>
                </>
              )}

              {/* Hover-specific orbital rings (appear only on hover) */}
              <AnimatePresence>
                {isHoveringImage && (
                  <>
                    {/* Glowing outer ring */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-[-30px] sm:inset-[-50px] md:inset-[-70px] rounded-full"
                    >
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl sm:blur-2xl"></div>
                    </motion.div>

                    {/* Rotating ring 1 */}
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-25px] sm:inset-[-40px] md:inset-[-60px] rounded-full border-2 border-dashed border-cyan-400/40"
                    />

                    {/* Rotating ring 2 */}
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-35px] sm:inset-[-55px] md:inset-[-75px] rounded-full border border-purple-400/30"
                      style={{ borderWidth: '2px', borderStyle: 'dotted' }}
                    />

                    {/* Rotating ring 3 */}
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-45px] sm:inset-[-70px] md:inset-[-90px] rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent 50%, rgba(236,72,153,0.2) 80%, transparent)',
                        filter: 'blur(5px)',
                      }}
                    />

                    {/* Orbiting particles */}
                    {[...Array(isMobile ? 6 : 12)].map((_, i) => {
                      const angle = (i / (isMobile ? 6 : 12)) * 360;
                      const distance = isMobile ? 40 : 80;
                      return (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                          className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${distance}px)`,
                            transformOrigin: 'center',
                          }}
                        />
                      );
                    })}
                  </>
                )}
              </AnimatePresence>

              {/* Main profile image */}
              <div className="relative rounded-full p-1.5 sm:p-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-border">
                <div className="relative rounded-full overflow-hidden border-4 border-black/50 dark:border-black/50 w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 shadow-2xl">
                  <img
                    src={profileImageUrl}
                    alt="Rossellah Marie Bodaño"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                  {/* Inner border with switch animation */}
                  <motion.div
                    animate={isHoveringImage ? { scale: 1.1, rotate: 180, borderColor: '#ec4899' } : { scale: 1, rotate: 0, borderColor: '#06b6d4' }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 border-4 border-transparent rounded-full"
                    style={{
                      borderTopColor: '#06b6d4',
                      borderRightColor: '#a855f7',
                      borderBottomColor: '#ec4899',
                      borderLeftColor: '#06b6d4',
                    }}
                  />
                </div>
              </div>

              {/* Decorative floating icons */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center animate-float">
                <FaStar className="text-white text-xs sm:text-sm" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-float animation-delay-500">
                <FaMagic className="text-white text-xs sm:text-sm" />
              </div>
            </motion.div>

            {/* Info card – tiny on mobile, regular on desktop */}
            <AnimatePresence>
              {isHoveringImage && (
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 30, scale: 0.9 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  onMouseEnter={() => setIsHoveringImage(true)}
                  onMouseLeave={() => setIsHoveringImage(false)}
                  className={`absolute left-1/2 top-1/2 transform -translate-y-1/2 z-20
                    w-36 xs:w-44 sm:w-64 md:w-72 lg:w-80 xl:w-96
                    max-h-[40vh] sm:max-h-[50vh] overflow-y-auto
                    ml-0.5 xs:ml-1 sm:ml-3 md:ml-4 lg:ml-6
                    p-1.5 xs:p-2 sm:p-3 md:p-4 lg:p-5
                    rounded-md sm:rounded-lg md:rounded-xl shadow-2xl
                    ${isDarkMode
                      ? "bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 border border-cyan-500/30 backdrop-blur-xl"
                      : "bg-gradient-to-br from-white/95 via-cyan-50/95 to-white/95 border border-cyan-500/40 backdrop-blur-xl"
                    }`}
                  style={{
                    boxShadow: isDarkMode
                      ? '0 25px 50px -12px rgba(6,182,212,0.25), 0 0 0 1px rgba(168,85,247,0.2) inset'
                      : '0 25px 50px -12px rgba(6,182,212,0.3), 0 0 0 1px rgba(168,85,247,0.3) inset'
                  }}
                >
                  {/* Decorative inner glow */}
                  <div className="absolute inset-0 rounded-md sm:rounded-lg md:rounded-xl bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>

                  {/* Responsive content: tiny text on mobile, regular on desktop */}
                  <div className="relative flex flex-col space-y-1 sm:space-y-2 md:space-y-3">
                    {/* Name & Title */}
                    <div className="text-center">
                      <h3 className={`
                        font-bold bg-gradient-to-r ${
                          isDarkMode ? "from-cyan-400 to-purple-400" : "from-cyan-600 to-purple-600"
                        } bg-clip-text text-transparent
                        text-[8px] xs:text-[10px] sm:text-sm md:text-base lg:text-lg
                      `}>
                        ROSSELLAH MARIE BODAÑO
                      </h3>
                      <p className={`
                        font-mono tracking-wider
                        text-[6px] xs:text-[7px] sm:text-xs md:text-sm
                        ${isDarkMode ? "text-cyan-300" : "text-cyan-700"}
                      `}>
                        DIGITAL ARTISAN
                      </p>
                    </div>

                    {/* Location & Tagline */}
                    <div className="flex items-center justify-center gap-1 sm:gap-2 text-[6px] xs:text-[7px] sm:text-xs md:text-sm">
                      <FaMapMarkerAlt className={isDarkMode ? "text-pink-400" : "text-pink-600"} />
                      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Gaddani, Abra</span>
                      <span className={`italic ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>• Ideas→Digital</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-0.5 sm:gap-1">
                      {['React', 'JavaScript', 'Tailwind'].map((skill, i) => (
                        <span
                          key={i}
                          className={`
                            px-1 sm:px-2 py-0.5 rounded-full
                            text-[5px] xs:text-[6px] sm:text-xs
                            ${isDarkMode
                              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                              : "bg-cyan-500/30 text-cyan-800 border border-cyan-500/50"
                            }
                          `}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social + Button */}
                    <div className="flex items-center justify-between gap-1 sm:gap-2">
                      <div className="flex gap-0.5 sm:gap-1">
                        <a href="https://github.com/Rossellah" target="_blank" rel="noreferrer" className={`p-0.5 sm:p-1 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:scale-110 transition-transform`}>
                          <FaGithub className="text-[6px] xs:text-[7px] sm:text-sm" />
                        </a>
                        <a href="https://www.linkedin.com/in/rossellah-marie-boda%C3%B1o-2195b7349" target="_blank" rel="noreferrer" className={`p-0.5 sm:p-1 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 text-white hover:scale-110 transition-transform`}>
                          <FaLinkedin className="text-[6px] xs:text-[7px] sm:text-sm" />
                        </a>
                        <a href="https://facebook.com/rossellah.07" target="_blank" rel="noreferrer" className={`p-0.5 sm:p-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:scale-110 transition-transform`}>
                          <FaFacebook className="text-[6px] xs:text-[7px] sm:text-sm" />
                        </a>
                      </div>
                      <button
                        onClick={aboutDialog.open}
                        className={`
                          px-1.5 sm:px-3 py-0.5 sm:py-1 rounded bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold tracking-wider
                          text-[5px] xs:text-[6px] sm:text-xs md:text-sm
                          hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
                        `}
                      >
                        VIEW PROFILE
                      </button>
                    </div>
                  </div>

                  {/* Arrow pointing left */}
                  <div
                    className={`absolute -left-1.5 sm:-left-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 sm:w-3 sm:h-3 rotate-45 ${
                      isDarkMode
                        ? "bg-gray-900/95 border-l border-b border-cyan-500/30"
                        : "bg-white/95 border-l border-b border-cyan-500/40"
                    }`}
                  ></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mb-6 sm:mb-8 px-2 sm:px-4 relative">
            <div className={`inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r ${
              isDarkMode ? "from-cyan-500/10 via-purple-500/10 to-pink-500/10" : "from-cyan-500/20 via-purple-500/20 to-pink-500/20"
            } rounded-full border mb-4 sm:mb-6 backdrop-blur-sm ${
              isDarkMode ? "border-cyan-500/30" : "border-cyan-500/50 shadow-lg shadow-cyan-500/30"
            }`}>
              <span className={`text-xs sm:text-sm font-mono tracking-widest ${isDarkMode ? "text-cyan-300" : "text-cyan-700"}`}>
                <FaRocket className="inline mr-1 sm:mr-2 text-xs sm:text-sm" />
                BSIT STUDENT
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 tracking-tight min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]">
              <span className={`block mb-1 sm:mb-2 font-light text-base sm:text-lg md:text-xl ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                HELLO, I'M
              </span>
              <span className={`bg-gradient-to-r ${
                isDarkMode ? "from-cyan-400 via-purple-400 to-pink-400" : "from-cyan-600 via-purple-600 to-pink-600"
              } bg-clip-text text-transparent ${
                glitchEffect && isDarkMode ? 'animate-glitch' : ''
              }`}>
                {displayName}
                <span className={`inline-block w-[3px] h-[1em] ml-1 ${
                  isDarkMode ? "bg-cyan-400" : "bg-cyan-600"
                } align-middle ${
                  blink ? 'opacity-100' : 'opacity-0'
                }`}></span>
              </span>
            </h1>

            <div className={`text-sm sm:text-base md:text-lg lg:text-xl font-mono tracking-wider mt-3 sm:mt-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              <span className={`${isDarkMode ? "text-cyan-300" : "text-cyan-700"} ${
                blink ? 'opacity-100' : 'opacity-50'
              } transition-opacity duration-100`}>
                &lt;FRONTEND DEVELOPER/&gt;
              </span>
            </div>
          </div>

          <div className="relative inline-block mb-6 sm:mb-10 px-2 sm:px-4">
            <div className={`relative px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-xl rounded-xl sm:rounded-2xl border shadow-xl sm:shadow-2xl overflow-hidden max-w-2xl mx-auto ${
              isDarkMode
                ? "bg-gradient-to-r from-black/40 via-gray-900/40 to-black/40 border-cyan-500/20 shadow-cyan-500/10"
                : "bg-gradient-to-r from-white/90 via-blue-50/90 to-white/90 border-cyan-500/40 shadow-lg shadow-cyan-500/30"
            }`}>
              <p className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}>
                <FaLightbulb className="inline mr-1 sm:mr-2 text-yellow-400 animate-pulse text-sm sm:text-base" />
                <span className={isDarkMode ? "text-cyan-300" : "text-cyan-700"}>Transforming</span> ideas into{" "}
                <span className={isDarkMode ? "text-purple-300" : "text-purple-700"}>digital experiences</span> that{" "}
                <span className={isDarkMode ? "text-pink-300" : "text-pink-700"}>inspire</span>
              </p>
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent ${
                !isDarkMode && "opacity-70"
              }`}></div>
              <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent ${
                !isDarkMode && "opacity-70"
              }`}></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 max-w-3xl mx-auto px-2 sm:px-4">
            {["REACT ECOSYSTEM", "MODERN JS", "UI/UX", "PERFORMANCE", "RESPONSIVE"].map((tech, idx) => (
              <div key={idx} className="relative group">
                <span className={`relative px-3 sm:px-4 py-1.5 sm:py-2.5 backdrop-blur-sm rounded-full text-xs font-mono tracking-wider border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isDarkMode
                    ? "bg-gradient-to-r from-gray-900/80 to-black/80 text-gray-300 border-cyan-500/30 hover:border-purple-500/50"
                    : "bg-gradient-to-r from-white/80 to-blue-50/80 text-gray-700 border-cyan-500/50 hover:border-purple-500/70 shadow-sm hover:shadow-md"
                }`}>
                  <span className="hidden sm:inline">{tech}</span>
                  <span className="sm:hidden">{tech.split(" ")[0]}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-5 px-2 sm:px-4">
            <a
              href="#projects"
              className={`group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base tracking-wider overflow-hidden ${
                !isDarkMode && "hover:shadow-cyan-500/50"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
              <FaRocket className="text-sm sm:text-lg animate-bounce group-hover:animate-spin" />
              <span>EXPLORE PROJECTS</span>
            </a>
            <button
              onClick={aboutDialog.open}
              className={`group relative px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-sm border font-bold rounded-lg sm:rounded-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base tracking-wider overflow-hidden ${
                isDarkMode
                  ? "bg-gradient-to-r from-gray-900/80 to-black/80 border-cyan-500/30 text-gray-300 hover:border-purple-500/50 hover:shadow-purple-500/20"
                  : "bg-gradient-to-r from-white/90 to-blue-50/90 border-cyan-500/50 text-gray-700 hover:border-purple-500/70 hover:shadow-purple-500/30"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
              <FaUser className="text-sm sm:text-lg" />
              <span>VIEW PROFILE</span>
            </button>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="mb-20 sm:mb-32 relative group scroll-mt-20"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-sm"></div>
          </div>

          <div className={`bg-gradient-to-br backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border shadow-xl sm:shadow-2xl relative overflow-hidden ${
            isDarkMode
              ? "from-gray-900/40 via-black/40 to-gray-900/40 border-cyan-500/20 shadow-cyan-500/10"
              : "from-white/90 via-blue-50/90 to-white/90 border-cyan-500/40 shadow-lg shadow-cyan-500/30"
          }`}>
            {isDarkMode ? (
              <>
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 rounded-full blur-3xl"></div>
              </>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-cyan-400/30 via-transparent to-purple-400/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-tr from-pink-400/30 via-transparent to-blue-400/30 rounded-full blur-3xl"></div>
              </>
            )}

            <div className="flex items-center mb-8 sm:mb-12">
              <div className="relative">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg ${
                  isDarkMode ? "shadow-cyan-500/30" : "shadow-cyan-500/50"
                }`}>
                  <FaUser className="text-white text-lg sm:text-xl" />
                </div>
                <div className="absolute -inset-1.5 sm:-inset-2 border-2 border-cyan-500/30 rounded-xl sm:rounded-2xl animate-ping"></div>
              </div>
              <motion.h2
                variants={textPopUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="ml-4 sm:ml-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">COSMIC</span>{" "}
                <span className={isDarkMode ? "text-gray-300" : "text-gray-800"}>JOURNEY</span>
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <div className="space-y-4 sm:space-y-6">
                <motion.p
                  variants={textPopUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className={`leading-relaxed text-sm sm:text-base md:text-lg ${
                    isDarkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  <span className={`font-bold ${isDarkMode ? "text-cyan-300" : "text-cyan-700"}`}>Digital Visionary</span> from Gaddani, Tayum, Abra, specializing in creating immersive web experiences that blend <span className={isDarkMode ? "text-purple-300" : "text-purple-700"}>cutting-edge technology</span> with <span className={isDarkMode ? "text-pink-300" : "text-pink-700"}>artistic expression</span>.
                </motion.p>

                <motion.p
                  variants={textPopUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.1 }}
                  className={`leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg ${
                    isDarkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  With expertise in the modern web stack, I transform <span className={isDarkMode ? "text-cyan-300" : "text-cyan-700"}>abstract concepts</span> into <span className={isDarkMode ? "text-purple-300" : "text-purple-700"}>tangible digital realities</span>. Continuously pushing boundaries towards full-stack excellence while maintaining <span className={isDarkMode ? "text-pink-300" : "text-pink-700"}>flawless execution</span>.
                </motion.p>

                {/* Memoized Lanyard – prevents flickering */}
                <motion.div
                  variants={cardVariants('left')}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.2 }}
                  className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
                >
                  <MemoizedLanyard
                    position={[0, 0, 20]}
                    gravity={[0, -40, 0]}
                    isDarkMode={isDarkMode}
                    profileImageUrl={profileImageUrl}
                    idCardImageUrl={idCardImageUrl}
                  />
                </motion.div>

                <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                  {[
                    { label: "PROJECTS", value: "15+", color: "from-cyan-500 to-blue-500", icon: <FaCode /> },
                    { label: "TECH STACK", value: "12+", color: "from-purple-500 to-pink-500", icon: <FaBolt /> },
                    { label: "EXPERIENCE", value: "3YRS", color: "from-pink-500 to-rose-500", icon: <FaFire /> },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      variants={cardVariants('left')}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="text-center group"
                    >
                      <div className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-lg sm:text-xl md:text-2xl">{stat.icon}</span>
                        <div className={`absolute inset-0 border-2 border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl animate-pulse`}></div>
                      </div>
                      <div className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                        {stat.value}
                      </div>
                      <div className={`text-xs sm:text-sm tracking-widest font-mono ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative mt-6 lg:mt-0">
                <motion.h3
                  variants={textPopUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className={`font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 tracking-wider ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <FaBolt className={`inline mr-2 sm:mr-3 text-sm sm:text-base ${
                    isDarkMode ? "text-cyan-400" : "text-cyan-600"
                  }`} />
                  SKILLS
                </motion.h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={cardVariants(idx % 2 === 0 ? 'left' : 'right')}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group relative"
                    >
                      <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${skill.color} border border-white/10 hover:border-white/30 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-lg sm:group-hover:shadow-xl ${
                        isDarkMode ? "group-hover:shadow-purple-500/20" : "group-hover:shadow-purple-500/30"
                      }`}>
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-lg sm:text-xl md:text-2xl text-white">{skill.icon}</span>
                            <span className="font-bold text-white text-xs sm:text-sm md:text-base tracking-wide">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs sm:text-sm font-bold text-white/90">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="h-1.5 sm:h-2 bg-black/30 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="mb-20 sm:mb-32 scroll-mt-20">
          <div className="text-center mb-12 sm:mb-16">
            <div className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-1.5 sm:py-2.5 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 rounded-full border backdrop-blur-sm mb-4 sm:mb-6 ${
              isDarkMode ? "border-indigo-500/30" : "border-indigo-500/50"
            }`}>
              <FaCertificate className={`text-xs sm:text-sm ${isDarkMode ? "text-indigo-300" : "text-indigo-700"}`} />
              <span className={`text-xs sm:text-sm font-mono tracking-widest ${isDarkMode ? "text-indigo-300" : "text-indigo-700"}`}>CREDENTIALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">DIGITAL</span>{" "}
              <span className={isDarkMode ? "text-gray-300" : "text-gray-800"}>CERTIFICATES</span>
            </h2>
            <p className={`max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg font-light px-2 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Industry-recognized certifications and specialized achievements
            </p>
          </div>

          <div className="flex gap-2 sm:gap-3 justify-center mb-8 sm:mb-12 flex-wrap px-2">
            <button
              onClick={() => setCertTab("certificates")}
              className={`px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 rounded-lg sm:rounded-xl font-mono text-xs sm:text-sm tracking-wider transition-all duration-500 flex items-center gap-2 sm:gap-3 ${
                certTab === "certificates"
                  ? isDarkMode
                    ? "bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-cyan-600/20 text-white border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
                    : "bg-gradient-to-r from-indigo-500/30 via-blue-500/30 to-cyan-500/30 text-indigo-800 border border-indigo-500/50 shadow-lg shadow-indigo-500/30"
                  : isDarkMode
                    ? "bg-gradient-to-r from-gray-800/70 to-black/70 text-gray-300 border border-gray-700/50 hover:border-cyan-500/30 hover:text-cyan-300"
                    : "bg-gradient-to-r from-gray-100/80 to-gray-200/80 text-gray-700 border border-gray-300/60 hover:border-indigo-500/50 hover:text-indigo-700"
              }`}
            >
              <FaCertificate className="text-xs sm:text-sm" />
              <span className="hidden sm:inline">CERTIFICATIONS</span>
              <span className="sm:hidden">CISCO</span>
            </button>

            <button
              onClick={() => setCertTab("webinars")}
              className={`px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 rounded-lg sm:rounded-xl font-mono text-xs sm:text-sm tracking-wider transition-all duration-500 flex items-center gap-2 sm:gap-3 ${
                certTab === "webinars"
                  ? isDarkMode
                    ? "bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-rose-600/20 text-white border border-purple-500/30 shadow-lg shadow-purple-500/20"
                    : "bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-rose-500/30 text-purple-800 border border-purple-500/50 shadow-lg shadow-purple-500/30"
                  : isDarkMode
                    ? "bg-gradient-to-r from-gray-800/70 to-black/70 text-gray-300 border border-gray-700/50 hover:border-purple-500/30 hover:text-purple-300"
                    : "bg-gradient-to-r from-gray-100/80 to-gray-200/80 text-gray-700 border border-gray-300/60 hover:border-purple-500/50 hover:text-purple-700"
              }`}
            >
              <FaComments className="text-xs sm:text-sm" />
              <span className="hidden sm:inline">WEBINARS</span>
              <span className="sm:hidden">WEBINARS</span>
            </button>
          </div>

          {certTab === "certificates" && (
            <div className="max-w-7xl mx-auto px-2 sm:px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {[
                  {
                    name: "DATA ANALYTICS ESSENTIALS",
                    subtitle: "Learn the essential tools of the trade.",
                    file: "DATAAL.png",
                    color: "from-orange-500/20 to-yellow-500/20"
                  },
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
                  <motion.div
                    key={index}
                    variants={cardVariants(index % 2 === 0 ? 'left' : 'right')}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative rounded-xl sm:rounded-2xl md:rounded-3xl border bg-gradient-to-br backdrop-blur-xl p-3 sm:p-4 md:p-5 shadow-lg sm:shadow-xl transition-all duration-700 cursor-pointer hover:scale-[1.03] hover:border-cyan-500/50 hover:shadow-xl sm:hover:shadow-2xl ${
                      isDarkMode
                        ? "from-gray-900/50 via-black/50 to-gray-900/50 border-cyan-500/20 hover:shadow-cyan-500/10"
                        : "from-white/90 via-blue-50/90 to-white/90 border-cyan-500/40 hover:shadow-cyan-500/30"
                    }`}
                    onClick={() => {
                      setSelectedCert(cert.file);
                      certificateDialog.open();
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl sm:rounded-2xl md:rounded-3xl`}></div>
                    <div className={`relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden mb-3 sm:mb-4 md:mb-5 border transition-all duration-500 group-hover:border-cyan-500/40 ${
                      isDarkMode ? "border-gray-700/50" : "border-gray-300/70"
                    }`}>
                      <img
                        src={cert.file}
                        alt={cert.name}
                        className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={handleCertError}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className={`absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border flex items-center justify-center ${
                        isDarkMode ? "border-cyan-500/50" : "border-cyan-500/70"
                      }`}>
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="relative text-center px-1">
                      <p className={`text-sm sm:text-base md:text-lg font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}>
                        {cert.name}
                      </p>
                      <p className={`text-xs sm:text-sm mb-2 sm:mb-3 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}>{cert.subtitle}</p>
                      <div className={`text-xs tracking-widest font-mono group-hover:tracking-wider transition-all duration-300 ${
                        isDarkMode ? "text-cyan-400" : "text-cyan-700"
                      }`}>
                        CLICK TO VIEW
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {certTab === "webinars" && (
            <div className="max-w-7xl mx-auto px-2 sm:px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {[
                  {
                    name: "Data Privacy, Freedom of Information, and AI Safety",
                    subtitle: "Certificate of Attendance",
                    file: "CER.png",
                    color: "from-cyan-500/20 to-blue-500/20"
                  },
                  {
                    name: "CYBER SECURITY",
                    subtitle: "Digital Safety Protocol",
                    file: "lheng-digital-safety.jpg",
                    color: "from-cyan-500/20 to-blue-500/20"
                  }
                ].map((webinar, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants(index % 2 === 0 ? 'left' : 'right')}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative rounded-xl sm:rounded-2xl md:rounded-3xl border bg-gradient-to-br backdrop-blur-xl p-3 sm:p-4 md:p-5 shadow-lg sm:shadow-xl transition-all duration-700 cursor-pointer hover:scale-[1.03] hover:border-cyan-500/50 hover:shadow-xl sm:hover:shadow-2xl ${
                      isDarkMode
                        ? "from-gray-900/50 via-black/50 to-gray-900/50 border-cyan-500/20 hover:shadow-cyan-500/10"
                        : "from-white/90 via-blue-50/90 to-white/90 border-cyan-500/40 hover:shadow-cyan-500/30"
                    }`}
                    onClick={() => {
                      setSelectedCert(webinar.file);
                      certificateDialog.open();
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${webinar.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl sm:rounded-2xl md:rounded-3xl`}></div>
                    <div className={`relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden mb-3 sm:mb-4 md:mb-5 border transition-all duration-500 group-hover:border-cyan-500/40 ${
                      isDarkMode ? "border-gray-700/50" : "border-gray-300/70"
                    }`}>
                      <img
                        src={webinar.file}
                        alt={webinar.name}
                        className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={handleCertError}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className={`absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border flex items-center justify-center ${
                        isDarkMode ? "border-cyan-500/50" : "border-cyan-500/70"
                      }`}>
                        <span className="text-white text-xs font-bold">★</span>
                      </div>
                    </div>
                    <div className="relative text-center px-1">
                      <p className={`text-sm sm:text-base md:text-lg font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}>
                        {webinar.name}
                      </p>
                      <p className={`text-xs sm:text-sm mb-2 sm:mb-3 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}>{webinar.subtitle}</p>
                      <div className={`text-xs tracking-widest font-mono group-hover:tracking-wider transition-all duration-300 ${
                        isDarkMode ? "text-cyan-400" : "text-cyan-700"
                      }`}>
                        CLICK TO VIEW
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          variants={cardVariants('left')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-12 sm:mb-20 scroll-mt-20"
        >
          <div className={`bg-gradient-to-br backdrop-blur-2xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border shadow-xl sm:shadow-2xl overflow-hidden relative ${
            isDarkMode
              ? "from-gray-900/40 via-black/40 to-gray-900/40 border-cyan-500/20 shadow-cyan-500/10"
              : "from-white/90 via-blue-50/90 to-white/90 border-cyan-500/40 shadow-lg shadow-cyan-500/30"
          }`}>
            {isDarkMode ? (
              <>
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 rounded-full blur-3xl animate-spin-slow animation-delay-1000"></div>
              </>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-cyan-400/30 via-transparent to-purple-400/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-tr from-pink-400/30 via-transparent to-blue-400/30 rounded-full blur-3xl"></div>
              </>
            )}
            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <div className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-1.5 sm:py-2.5 bg-gradient-to-r ${
                  isDarkMode ? "from-cyan-500/10 via-purple-500/10 to-pink-500/10" : "from-cyan-500/20 via-purple-500/20 to-pink-500/20"
                } rounded-full border backdrop-blur-sm mb-4 sm:mb-6 ${
                  isDarkMode ? "border-cyan-500/30" : "border-cyan-500/50"
                }`}>
                  <FaComments className={`text-xs sm:text-sm ${isDarkMode ? "text-cyan-300" : "text-cyan-700"}`} />
                  <span className={`text-xs sm:text-sm font-mono tracking-widest ${isDarkMode ? "text-cyan-300" : "text-cyan-700"}`}>CONNECT</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">LET'S</span>{" "}
                  <span className={isDarkMode ? "text-gray-300" : "text-gray-800"}>CREATE</span>
                </h2>
                <p className={`max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg font-light px-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  Ready to bring your digital vision to life?
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                <div>
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>
                    <FaBolt className={`inline mr-2 text-sm sm:text-base ${
                      isDarkMode ? "text-cyan-400" : "text-cyan-600"
                    }`} />
                    CONNECT WITH ME
                  </h3>
                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    {[
                      { icon: <FaEnvelope />, label: "EMAIL", value: "dbodanorossellahmarie@gmail.com", color: "from-cyan-500 to-blue-500" },
                      { icon: <FaPhoneAlt />, label: "PHONE", value: "+63 960 345 8372", color: "from-purple-500 to-pink-500" },
                      { icon: <FaMapMarkerAlt />, label: "LOCATION", value: "Gaddani, Tayum, Abra, Philippines", color: "from-pink-500 to-rose-500" },
                    ].map((info, idx) => (
                      <div
                        key={idx}
                        className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl md:rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
                          isDarkMode
                            ? "bg-gradient-to-r from-gray-900/50 to-black/50 border-cyan-500/20 hover:border-purple-500/30"
                            : "bg-gradient-to-r from-white/80 to-blue-50/80 border-cyan-500/40 hover:border-purple-500/50"
                        }`}
                      >
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                          <span className="text-white text-sm sm:text-base md:text-lg">{info.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs tracking-widest font-mono mb-0.5 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}>{info.label}</p>
                          <p className={`font-medium text-xs sm:text-sm md:text-base truncate hover:text-clip hover:whitespace-normal break-words ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}>{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 sm:mt-8 md:mt-10">
                    <h4 className={`text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-wider ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      FOLLOW THE JOURNEY
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {socialLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${link.color} border border-gray-700 flex items-center justify-center transition-all duration-500 hover:scale-110 sm:hover:scale-125 hover:shadow-lg sm:hover:shadow-2xl ${
                            isDarkMode ? "hover:shadow-cyan-500/30" : "hover:shadow-purple-500/40"
                          }`}
                          aria-label={link.label}
                        >
                          <span className="text-white text-sm sm:text-base md:text-lg">{link.icon}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 lg:mt-0">
                  <form className="space-y-3 sm:space-y-4 md:space-y-5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="YOUR NAME"
                        className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r border placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 text-xs sm:text-sm tracking-wider font-mono ${
                          isDarkMode
                            ? "from-gray-900/50 to-black/50 border-cyan-500/20 text-white"
                            : "from-white/80 to-blue-50/80 border-cyan-500/40 text-gray-900"
                        }`}
                      />
                      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="YOUR EMAIL"
                        className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r border placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 text-xs sm:text-sm tracking-wider font-mono ${
                          isDarkMode
                            ? "from-gray-900/50 to-black/50 border-cyan-500/20 text-white"
                            : "from-white/80 to-blue-50/80 border-cyan-500/40 text-gray-900"
                        }`}
                      />
                      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                    <div className="relative">
                      <textarea
                        placeholder="YOUR MESSAGE"
                        rows="4"
                        className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r border placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 resize-none text-xs sm:text-sm tracking-wider font-mono ${
                          isDarkMode
                            ? "from-gray-900/50 to-black/50 border-cyan-500/20 text-white"
                            : "from-white/80 to-blue-50/80 border-cyan-500/40 text-gray-900"
                        }`}
                      ></textarea>
                      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                    <button
                      type="button"
                      onClick={() => window.location.href = 'mailto:dbodanorossellahmarie@gmail.com'}
                      className={`w-full py-3 sm:py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white font-bold rounded-lg sm:rounded-xl md:rounded-2xl hover:shadow-lg sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base tracking-wider ${
                        isDarkMode ? "hover:shadow-cyan-500/30" : "hover:shadow-purple-500/40"
                      }`}
                    >
                      <FaRocket className="text-sm sm:text-lg" />
                      LAUNCH MESSAGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className={`border-t py-6 sm:py-8 md:py-10 lg:py-12 ${
        isDarkMode
          ? "border-cyan-500/20 bg-black/50"
          : "border-cyan-500/40 bg-gradient-to-r from-white/80 via-blue-50/80 to-white/80"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border flex items-center justify-center ${
                isDarkMode ? "border-cyan-500/30" : "border-cyan-500/50"
              }`}>
                <FaCode className={`text-sm sm:text-base ${isDarkMode ? "text-cyan-400" : "text-cyan-600"}`} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ROSSELLAH MARIE BODAÑO
                </h3>
                <p className={`text-xs font-mono tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-400"
                }`}>
                  DIGITAL ARTISAN
                </p>
              </div>
            </div>
            <p className={`text-xs sm:text-sm tracking-wider font-mono mb-2 ${
              isDarkMode ? "text-gray-500" : "text-gray-400"
            }`}>
              © {new Date().getFullYear()} ROSSELLAH MARIE BODAÑO
            </p>
            <p className={`text-xs tracking-widest font-mono ${
              isDarkMode ? "text-gray-600" : "text-gray-500"
            }`}>
              CRAFTED WITH <FaFire className="inline text-orange-500" /> AND <FaBolt className="inline text-yellow-500" />
            </p>
          </div>
        </div>
      </footer>

      {/* Dialogs */}
      <Dialog
        isOpen={certificateDialog.isOpen}
        onClose={certificateDialog.close}
        title={
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
              <FaCertificate className="text-white text-xs sm:text-sm" />
            </div>
            <span className="text-white font-bold text-sm sm:text-base tracking-wider">CERTIFICATES</span>
          </div>
        }
        className={`bg-gradient-to-br border backdrop-blur-2xl ${
          isDarkMode
            ? "from-gray-900/90 via-black/90 to-gray-900/90 border-cyan-500/20"
            : "from-white via-blue-50 to-white border-cyan-500/40"
        } max-w-[95vw] sm:max-w-lg md:max-w-xl`}
      >
        {selectedCert && (
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
            <div className={`relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border ${
              isDarkMode ? "border-cyan-500/30" : "border-cyan-500/50"
            }`}>
              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] object-contain"
                onError={handleCertError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full px-2">
              <button
                onClick={() => handleCertificateDownload(selectedCert)}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-lg sm:hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm tracking-wider hover:scale-105 flex-1"
              >
                <FaDownload className="text-xs sm:text-sm" /> DOWNLOAD CERTIFICATE
              </button>
              <button
                onClick={certificateDialog.close}
                className={`px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r font-bold rounded-lg sm:rounded-xl hover:shadow-lg sm:hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm tracking-wider hover:scale-105 flex-1 ${
                  isDarkMode
                    ? "from-gray-800/70 to-black/70 text-gray-300 hover:shadow-purple-500/20"
                    : "from-gray-200/80 to-gray-300/80 text-gray-700 hover:shadow-purple-500/30"
                }`}
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </Dialog>

      <Dialog
        isOpen={resumeDialog.isOpen}
        onClose={resumeDialog.close}
        title={
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center">
              <FaFileAlt className="text-white text-xs sm:text-sm" />
            </div>
            <span className="text-white font-bold text-sm sm:text-base tracking-wider">RESUME</span>
          </div>
        }
        className={`bg-gradient-to-br border backdrop-blur-2xl ${
          isDarkMode
            ? "from-gray-900/90 via-black/90 to-gray-900/90 border-cyan-500/20"
            : "from-white via-blue-50 to-white border-cyan-500/40"
        } max-w-[95vw] sm:max-w-3xl md:max-w-4xl`}
      >
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className={`relative w-full rounded-lg sm:rounded-xl overflow-hidden border bg-gradient-to-br p-2 sm:p-3 ${
            isDarkMode
              ? "border-cyan-500/30 from-gray-800/50 to-gray-900/50"
              : "border-cyan-500/40 from-gray-100/80 to-gray-200/80"
          }`}>
            <div className="relative w-full max-h-[60vh] sm:max-h-[70vh] overflow-y-auto custom-scrollbar">
              <img
                src="/resume.jpg"
                alt="Rossellah Marie Bodaño Resume"
                className="w-full h-auto object-contain rounded-lg"
                onError={handleResumeError}
              />
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-1.5 border border-cyan-500/30">
                <span className="text-[10px] sm:text-xs text-cyan-300 font-mono flex items-center gap-1">
                  <FaImage className="text-[10px] sm:text-xs" /> PREVIEW
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <button
              onClick={handleResumePDFDownload}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-lg sm:hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm tracking-wider hover:scale-105"
            >
              <FaFilePdf className="text-sm sm:text-lg" /> DOWNLOAD PDF
            </button>
            <button
              onClick={handleResumeImageDownload}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-lg sm:hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm tracking-wider hover:scale-105"
            >
              <FaFileImage className="text-sm sm:text-lg" /> DOWNLOAD IMAGE
            </button>
          </div>
        </div>
      </Dialog>

      <Dialog
        isOpen={aboutDialog.isOpen}
        onClose={aboutDialog.close}
        title={
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <FaBolt className="text-white text-xs sm:text-sm" />
            </div>
            <span className="text-white font-bold text-sm sm:text-base tracking-wider">ABOUT ME</span>
          </div>
        }
        className={`border backdrop-blur-2xl ${
          isDarkMode
            ? "bg-gray-900/90 border-cyan-500/20"
            : "bg-gray-900/90 border-cyan-500/30"
        } max-w-[95vw] sm:max-w-lg md:max-w-xl`}
      >
        <div className="space-y-4 sm:space-y-6">
          <p className="leading-relaxed text-xs sm:text-sm md:text-base font-medium text-white">
            As a <span className="font-bold text-cyan-300">visionary developer</span> from Gaddani, Tayum, Abra, I merge <span className="text-purple-300">technical precision</span> with <span className="text-pink-300">artistic innovation</span> to create digital experiences that transcend expectations.
          </p>
          <p className="leading-relaxed text-xs sm:text-sm md:text-base font-medium text-white">
            Specializing in the cutting edge of web technology, I transform <span className="text-cyan-300">abstract concepts</span> into <span className="text-purple-300">immersive realities</span>. With expertise spanning front-end mastery and expanding into full-stack frontiers, I deliver solutions that prioritize <span className="text-pink-300">user delight</span> and <span className="text-cyan-300">technical excellence</span>.
          </p>
          <div className="pt-4 sm:pt-6 border-t border-cyan-500/20">
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg tracking-wider flex items-center gap-2 text-white">
              <FaMagic className="text-sm sm:text-base text-purple-400" />
              MY PRINCIPLES:
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base font-medium text-white">
              {[
                "Pixel-perfect implementation with artistic flair",
                "Responsive, mobile-first approach with futuristic design",
                "Modern JavaScript ecosystem with bleeding-edge tools",
                "Clean, scalable architecture with performance optimization",
                "Continuous innovation with boundary-pushing creativity"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Dialog>

      <style jsx>{`
        @keyframes gradient {
          0%,100%{background-position:0% 50%}
          50%{background-position:100% 50%}
        }
        .animate-gradient{background-size:200% 200%;animation:gradient 3s ease infinite}
        @keyframes spin-slow{from{transform:rotate(0)}to{transform:rotate(360deg)}}
        .animate-spin-slow{animation:spin-slow 20s linear infinite}
        @keyframes slideDown{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}
        .animate-slideDown{animation:slideDown 0.3s ease-out forwards}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .animate-float{animation:float 3s ease-in-out infinite}
        @keyframes gradient-border{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        .animate-gradient-border{background-size:200% 200%;animation:gradient-border 2s ease infinite}
        @keyframes gridMove{0%{background-position:0 0}100%{background-position:50px 50px}}
        @keyframes glitch{0%{transform:translate(0)}20%{transform:translate(-2px,2px)}40%{transform:translate(-2px,-2px)}60%{transform:translate(2px,2px)}80%{transform:translate(2px,-2px)}100%{transform:translate(0)}}
        .animate-glitch{animation:glitch 0.3s linear}
        .animation-delay-500{animation-delay:500ms}
        .animation-delay-1000{animation-delay:1000ms}
        .perspective-1000{perspective:1000px}
        ::-webkit-scrollbar{width:8px}
        ::-webkit-scrollbar-track{background:rgba(0,0,0,0.3)}
        ::-webkit-scrollbar-thumb{background:linear-gradient(to bottom,#06b6d4,#8b5cf6,#ec4899);border-radius:4px}
        ::-webkit-scrollbar-thumb:hover{background:linear-gradient(to bottom,#0891b2,#7c3aed,#db2777)}
        .custom-scrollbar::-webkit-scrollbar{width:6px}
        .custom-scrollbar::-webkit-scrollbar-track{background:rgba(0,0,0,0.2);border-radius:10px}
        .custom-scrollbar::-webkit-scrollbar-thumb{background:linear-gradient(to bottom,#06b6d4,#8b5cf6);border-radius:10px}
        ::selection{background:rgba(6,182,212,0.3);color:white}
        *{transition:background-color 0.3s ease,border-color 0.3s ease, color 0.3s ease}
        @media (max-width:640px){.text-balance{text-wrap:balance}}
        .break-words{overflow-wrap:break-word;word-break:break-word}
      `}</style>
    </div>
  );
}

export default Home;