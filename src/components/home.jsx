import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaFacebook,
  FaTiktok,
  FaTelegram,
  FaPhoneAlt
} from "react-icons/fa";
import { Dialog, useDialog } from "./Dialog";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const profileDialog = useDialog();
  const [selectedCert, setSelectedCert] = useState(null);
  const certificateDialog = useDialog();
  const [certTab, setCertTab] = useState("certificates");
  const [selectedPdf, setSelectedPdf] = useState(null);
  const pdfDialog = useDialog();
  const aboutDialog = useDialog();


  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#121829] text-[#f1f5f9] font-sans">

      {/* Navigation Bar */}
      <nav className="bg-[#121829]/80 sticky top-0 z-50 backdrop-blur-xl border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between py-5">
          <h1 className="text-lg sm:text-xl font-semibold text-[#f1f5f9] tracking-tight">My Portfolio</h1>
          <button
            className="sm:hidden text-[#f1f5f9] text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col sm:flex sm:flex-row gap-6 sm:gap-10 text-sm font-medium text-[#94a3b8] sm:items-center absolute sm:static right-0 bg-[#121829] sm:bg-transparent bg-opacity-95 px-6 py-6 sm:p-0 shadow-lg sm:shadow-none backdrop-blur-xl sm:backdrop-blur-none rounded-b-2xl sm:rounded-none transition-all duration-300`}
            style={menuOpen ? {
              top: "100%",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px"
            } : {}}
          >
            {["home", "about", "skills", "projects", "certificates", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => {
                    setMenuOpen(false);
                    setActive(section);
                  }}
                  className={`hover:text-[#4f46e5] transition-colors duration-300 pb-1 ${
                    active === section ? "text-[#4f46e5] font-semibold border-b-2 border-[#4f46e5]" : ""
                  }`}
                >
                  {section === "home"
                    ? "Home"
                    : section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, " $1")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <img
            src="lhengie.jpg"
            className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-[#1e293b] shadow-2xl shadow-[#4f46e5]/10 mb-10 object-cover cursor-pointer hover:shadow-[#4f46e5]/20 transition-all duration-300"
            alt="Rossellah Marie Bodaño"
            onClick={profileDialog.open}
          />
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-[#f1f5f9] leading-tight tracking-tight">
            Rossellah Marie Bodaño
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-[#cbd5e1] font-medium">
            Frontend Developer & UI/UX Specialist
          </p>
        </div>
      </section>
      {/* About Me */}
      <section
        id="about"
        className="scroll-mt-24 bg-[#1a1f3a]/50 border border-[#1e293b] rounded-2xl p-10 sm:p-14 mb-20 shadow-lg backdrop-blur-sm max-w-[95%] sm:max-w-4xl mx-4 sm:mx-auto hover:bg-[#1a1f3a]/70 hover:border-[#4f46e5]/30 transition-all duration-300 cursor-pointer group"
        onClick={aboutDialog.open}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#f1f5f9] group-hover:text-[#4f46e5] transition-colors">About Me</h2>
        <div className="space-y-5">
          <p className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed">
            I am an Information Technology student and a dedicated web developer from Gaddani, Tayum, Abra. I specialize in designing clean, intuitive interfaces that seamlessly merge visual elegance with robust functionality.
          </p>
          <p className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed">
            Equipped with advanced skills in HTML, CSS, JavaScript, Bootstrap, and React, I excel at transforming conceptual ideas into responsive, interactive web applications. I'm actively expanding my expertise in back-end technologies such as PHP, MySQL, and Python, aiming to become a proficient full-stack developer.
          </p>
        </div>
      </section>

      <section id="skills" className="pt-16 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#f1f5f9] mb-16 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
              { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
              { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
              { name: "React", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
              { name: "Tailwind CSS", img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
              { name: "Python", img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-[#1a1f3a]/50 border border-[#1e293b] rounded-xl p-8 shadow-lg hover:border-[#4f46e5]/50 hover:bg-[#1a1f3a]/80 hover:shadow-xl hover:shadow-[#4f46e5]/10 transition-all duration-300 flex flex-col items-center group"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-14 h-14 mb-4 object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-base font-medium text-[#cbd5e1] group-hover:text-[#4f46e5] transition-colors">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-4xl font-bold text-center text-[#f1f5f9] mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              title: "Converter Website",
              desc: "A web application that converts Philippine peso (PHP) into other currencies such as US Dollar (USD), Chinese Yuan (CNY), and Japanese Yen (JPY)",
              img: "converter.png",
              url: "converter-activity/index.html"
            },
            {
              title: "Calculator Website",
              desc: "A calculator built with JavaScript that performs basic arithmetic operations with a clean, intuitive interface.",
              img: "loop.png",
              url: "Calculator/index.html"
            },
            {
              title: "Loop Application",
              desc: "An interactive tool that lets you input a number and calculate the sum, factorial, odd, and even numbers using JavaScript.",
              img: "calculator.png",
              url: "Loop/index.html"
            },
            {
              title: "To Do List Website",
              desc: "A React-based to-do list app for managing daily goals. Users can create, update, delete, and mark tasks as done.",
              imgs: ["todo.png", "list.png"],
              url: "https://to-do-client-brown.vercel.app/"
            },
            {
              title: "Employee Management",
              desc: "An employee list system using JavaScript arrays and objects to store, manage, and display employee information.",
              imgs: ["array.png", "ray.png"],
              url: "Array Objects/index.html"
            }
          ].map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1f3a]/50 border border-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:border-[#4f46e5]/50 hover:bg-[#1a1f3a]/80 hover:shadow-xl hover:shadow-[#4f46e5]/10 transition-all duration-300 cursor-pointer group"
              onClick={() => window.open(project.url, "_blank")}
            >
              {project.img ? (
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="flex gap-2 overflow-x-auto scroll-smooth h-48 sm:h-56 bg-[#1e293b]">
                  {project.imgs.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-60 h-full object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                      alt={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#f1f5f9] group-hover:text-[#4f46e5] transition-colors">{project.title}</h3>
                <p className="text-[#cbd5e1] text-sm leading-relaxed mb-4">{project.desc}</p>
                <span className="text-[#4f46e5] font-medium text-sm hover:text-[#6366f1] transition-colors">View Project →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="scroll-mt-24 mb-20">
        <h2 className="text-4xl font-bold mt-20 text-center text-[#f1f5f9] mb-14">
          Certificates & Webinars
        </h2>
        
        {/* Tab Navigation */}
        <div className="flex gap-4 justify-center mb-14">
          <button
            onClick={() => setCertTab("certificates")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              certTab === "certificates"
                ? "bg-[#4f46e5] text-white shadow-lg shadow-[#4f46e5]/30"
                : "bg-[#1a1f3a]/50 text-[#cbd5e1] border border-[#1e293b] hover:border-[#4f46e5]/50 hover:bg-[#1a1f3a]/70"
            }`}
          >
            Certificates
          </button>
          <button
            onClick={() => setCertTab("webinars")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              certTab === "webinars"
                ? "bg-[#4f46e5] text-white shadow-lg shadow-[#4f46e5]/30"
                : "bg-[#1a1f3a]/50 text-[#cbd5e1] border border-[#1e293b] hover:border-[#4f46e5]/50 hover:bg-[#1a1f3a]/70"
            }`}
          >
            Webinars
          </button>
        </div>

        {/* Certificates Tab */}
        {certTab === "certificates" && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="bg-[#1a1f3a]/50 border border-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:border-[#4f46e5]/50 hover:bg-[#1a1f3a]/80 hover:shadow-xl hover:shadow-[#4f46e5]/10 transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    if (cert.type === "pdf") {
                      setSelectedPdf(cert);
                      pdfDialog.open();
                    } else {
                      setSelectedCert(cert.file);
                      certificateDialog.open();
                    }
                  }}
                >
                  {cert.type === "pdf" ? (
                    <div className="bg-gradient-to-br from-[#4f46e5] to-[#1e3a8a] p-8 flex items-center justify-center h-48">
                      <div className="text-center">
                        <p className="text-white font-bold text-sm">{cert.name}</p>
                        <p className="text-[#a5b4fc] text-xs mt-2">📄 PDF</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={cert.file}
                      alt={cert.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-sm font-medium text-[#cbd5e1] text-center group-hover:text-[#4f46e5] transition-colors">{cert.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Webinars Tab */}
        {certTab === "webinars" && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Digital Safety - Cybersecurity & PNPKI",
                  file: "lheng-digital-safety.jpg",
                  type: "image"
                }
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#1a1f3a]/50 border border-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:border-[#4f46e5]/50 hover:bg-[#1a1f3a]/80 hover:shadow-xl hover:shadow-[#4f46e5]/10 transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    setSelectedCert(cert.file);
                    certificateDialog.open();
                  }}
                >
                  {cert.type === "image" && (
                    <img
                      src={cert.file}
                      alt={cert.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-sm font-medium text-[#cbd5e1] text-center group-hover:text-[#4f46e5] transition-colors">{cert.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="scroll-mt-24 w-full max-w-[95%] sm:max-w-4xl mx-auto my-20 bg-[#1a1f3a]/50 border border-[#1e293b] rounded-2xl p-10 sm:p-14 shadow-lg text-center backdrop-blur-sm hover:bg-[#1a1f3a]/70 hover:border-[#4f46e5]/30 transition-all duration-300"
      >
        <h2 className="text-4xl font-bold mb-3 text-[#f1f5f9]">Let's Connect</h2>
        <p className="text-[#cbd5e1] mb-10 text-lg">Feel free to reach out for collaborations or inquiries.</p>
        
        <form action="mailto:dbodanorossellahmarie@gmail.com" method="POST" encType="text/plain" className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-[#121829] border border-[#1e293b] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:border-transparent transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-[#121829] border border-[#1e293b] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:border-transparent transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 rounded-lg bg-[#121829] border border-[#1e293b] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:border-transparent transition-all resize-none"
          ></textarea>
          <button type="submit" className="bg-[#4f46e5] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#4338ca] hover:shadow-xl hover:shadow-[#4f46e5]/20 transition-all duration-300">
            Send Message
          </button>
        </form>
      </section>

      <footer className="bg-[#121829]/50 border-t border-[#1e293b] py-14 px-4 mt-24 backdrop-blur-sm">
        <div className="max-w-screen-md mx-auto text-center">
          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-2xl text-[#4f46e5] mb-10 flex-wrap">
            <a href="https://facebook.com/rossellah.07" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366f1] hover:scale-110 transition duration-300"><FaFacebook /></a>
            <a href="https://tiktok.com/@_sellang/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366f1] hover:scale-110 transition duration-300"><FaTiktok /></a>
            <a href="https://t.me/lhengiee/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366f1] hover:scale-110 transition duration-300"><FaTelegram /></a>
            <a href="https://github.com/Rossellah" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366f1] hover:scale-110 transition duration-300"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rossellah-marie-boda%C3%B1o-2195b7349" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366f1] hover:scale-110 transition duration-300"><FaLinkedin /></a>
          </div>

          {/* Contact Info */}
          <div className="text-[#cbd5e1] text-sm sm:text-base font-medium space-y-2">
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#4f46e5]" />
              <span className="hover:text-[#f1f5f9] transition">09603458372</span>
            </p>
          </div>

          {/* Footer note */}
          <p className="mt-10 text-sm text-[#94a3b8] tracking-wide">
            &copy; 2025 Rossellah Marie Bodaño. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Profile Picture Dialog */}
      <Dialog
        isOpen={profileDialog.isOpen}
        onClose={profileDialog.close}
        title="My Profile"
      >
        <div className="flex flex-col items-center gap-4">
          <img
            src="leng.jpg"
            alt="Rossellah Marie Bodaño"
            className="w-64 h-64 rounded-full border-2 border-[#4f46e5] shadow-lg shadow-[#4f46e5]/20 object-cover"
          />
          <h3 className="text-2xl font-bold text-[#f1f5f9]">Rossellah Marie Bodaño</h3>
          <p className="text-[#cbd5e1] text-center">Frontend Developer · UI/UX Specialist</p>
        </div>
      </Dialog>

      {/* Certificate Dialog */}
      <Dialog
        isOpen={certificateDialog.isOpen}
        onClose={certificateDialog.close}
        title="Certificate"
      >
        {selectedCert && (
          <div className="flex flex-col items-center gap-4">
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <a
              href={selectedCert}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4f46e5] text-white px-6 py-2 rounded-lg hover:bg-[#4338ca] transition font-semibold shadow-lg hover:shadow-[#4f46e5]/20"
            >
              Download
            </a>
          </div>
        )}
      </Dialog>

      {/* PDF Certificate Dialog */}
      <Dialog
        isOpen={pdfDialog.isOpen}
        onClose={pdfDialog.close}
        title={selectedPdf?.name}
      >
        {selectedPdf && (
          <div className="flex flex-col items-center gap-4">
            <iframe
              src={`/pdf/${selectedPdf.file}`}
              width="100%"
              height="400"
              style={{ border: "1px solid #1e293b", borderRadius: "8px" }}
              title="PDF Viewer"
            />
            <div className="flex gap-3">
              <a
                href={`/pdf/${selectedPdf.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4f46e5] text-white px-6 py-2 rounded-lg hover:bg-[#4338ca] transition font-semibold shadow-lg"
              >
                Open Full Screen
              </a>
              <a
                href={`/pdf/${selectedPdf.file}`}
                download={selectedPdf.file}
                className="bg-[#1a1f3a] border border-[#1e293b] text-[#cbd5e1] px-6 py-2 rounded-lg hover:bg-[#1a1f3a]/80 transition font-semibold"
              >
                Download PDF
              </a>
            </div>
          </div>
        )}
      </Dialog>

      {/* About Dialog */}
      <Dialog
        isOpen={aboutDialog.isOpen}
        onClose={aboutDialog.close}
        title="About Me"
      >
        <div className="flex flex-col items-center gap-5">
          <p className="text-[#cbd5e1] leading-relaxed text-center">
            I am an Information Technology student and a dedicated web developer from Gaddani, Tayum, Abra, with a profound appreciation for refined aesthetics and meticulous, pixel-perfect layouts. I specialize in designing clean, intuitive interfaces that seamlessly merge visual elegance with robust functionality, ensuring that every design not only captivates the eye but also provides a comfortable and user-friendly experience.
          </p>
          <p className="text-[#cbd5e1] leading-relaxed text-center">
            Equipped with advanced skills in HTML, CSS, JavaScript, Bootstrap, and React, I excel in transforming conceptual ideas into responsive, interactive web applications. Additionally, I am actively expanding my expertise in back-end technologies such as PHP, MySQL, and Python, with the goal of evolving into a proficient full-stack developer. Whether engaged in academic projects or personal endeavors, I approach each challenge with creativity, precision, and an unwavering commitment to excellence.
          </p>
        </div>
      </Dialog>
    </div>
  );
}

export default Home;
