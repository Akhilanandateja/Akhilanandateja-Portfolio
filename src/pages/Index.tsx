
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Youtube, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ThemeToggle from '@/components/ThemeToggle';
import PortfolioShowcase from '@/components/PortfolioShowcase';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'qualifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    programming: ['Python', 'Java', 'C'],
    web: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    frameworks: ['React', 'Node.js', 'Django', 'Bootstrap'],
    databases: ['SQL', 'MySQL'],
    tools: ['Git', 'GitHub', 'GitHub Actions', 'Visual Studio', 'AWS', 'Apache', 'Jupyter Notebook'],
    design: ['WordPress', 'Canva'],
    domains: ['Artificial Intelligence & Machine Learning', 'Data Structures & Algorithms', 'Operating System', 'Database Management System', 'Natural Language Processing', 'Data Analysis using Python']
  };

  const experiences = [
    {
      title: 'Web Developer Fellowship',
      company: 'Monosage Thought Works',
      duration: 'April 2024 - July 2024',
      responsibilities: [
        'Developed user-friendly interfaces',
        'WordPress Development',
        'PHP Full Stack Development',
        'Search Engine Optimization (SEO)'
      ]
    },
    {
      title: 'Machine Learning Intern',
      company: 'SkillCraft Technology',
      duration: 'July 2024 - August 2024',
      responsibilities: [
        'Data Preprocessing and Analysis',
        'Model Development and Training',
        'Feature Engineering and Optimization',
        'Testing and Evaluation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50 animate-slide-in-right">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold animate-gradient float-animation">
              Akhilanandateja
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-6">
                {['Home', 'About', 'Portfolio', 'Qualifications', 'Contact'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-all duration-500 hover:text-blue-600 transform hover:scale-110 hover:-translate-y-1 ${
                      activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-muted-foreground'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 animate-pulse" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold">
                    <span className="animate-gradient">
                      Akhilanandateja
                    </span>
                    <br />
                    <span className="text-3xl lg:text-4xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>Sanga</span>
                  </h1>
                  <div className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <span className="inline-block hover:text-blue-600 transition-colors duration-300 transform hover:scale-105">AI Engineer</span> • 
                    <span className="inline-block hover:text-purple-600 transition-colors duration-300 transform hover:scale-105"> Full-Stack Developer</span> • 
                    <span className="inline-block hover:text-green-600 transition-colors duration-300 transform hover:scale-105"> Software Engineer</span>
                  </div>
                </div>
                <p className="text-lg leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.9s' }}>
                  Passionate software developer specializing in AI/ML and full-stack development. 
                  Transforming innovative ideas into functional applications that solve real-world challenges.
                </p>
                <div className="flex space-x-4 animate-scale-in" style={{ animationDelay: '1.2s' }}>
                  <Button 
                    onClick={() => scrollToSection('portfolio')}
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View My Work
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="hover-scale border-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  >
                    Get In Touch
                  </Button>
                </div>
                <div className="flex space-x-6 animate-fade-in" style={{ animationDelay: '1.5s' }}>
                  {[
                    { href: "https://github.com/Akhilanandateja", icon: Github, color: "hover:text-gray-800 dark:hover:text-white" },
                    { href: "https://www.linkedin.com/in/akhilanandateja", icon: Linkedin, color: "hover:text-blue-600" },
                    { href: "mailto:akhilanandatejasanga@gmail.com", icon: Mail, color: "hover:text-red-500" }
                  ].map(({ href, icon: Icon, color }, index) => (
                    <a 
                      key={href}
                      href={href} 
                      className={`text-muted-foreground ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
                      style={{ animationDelay: `${1.5 + index * 0.1}s` }}
                    >
                      <Icon size={28} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="relative group">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-2xl animate-pulse transform group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                    <img 
                      src="/placeholder.svg" 
                      alt="Akhilanandateja Sanga" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 blur-xl animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in animate-gradient">About Me</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { value: "8.5+", label: "CGPA", color: "from-blue-600 to-cyan-600" },
                { value: "10+", label: "Projects", color: "from-purple-600 to-pink-600" },
                { value: "Fresher", label: "Experience", color: "from-green-600 to-emerald-600" }
              ].map((stat, index) => (
                <Card key={stat.label} className="text-center hover-scale animate-fade-in group overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none animate-fade-in space-y-6">
              <div className="transform hover:scale-[1.02] transition-transform duration-300 p-6 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
                <p>
                  Hello! I'm <strong className="text-blue-600 animate-gradient">Akhilanandateja Sanga</strong>, a dedicated software developer with a fervent passion for harnessing technology to solve complex challenges. My journey in the tech world has been driven by a strong interest in <strong className="text-purple-600">Artificial Intelligence and Machine Learning</strong>, alongside a solid foundation in full-stack development.
                </p>
              </div>
              <div className="transform hover:scale-[1.02] transition-transform duration-300 p-6 rounded-lg bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
                <p>
                  With a degree in computer science, I have cultivated a diverse skill set that spans AI Engineering, Full-Stack Development, and the fundamentals of Android Development. My experience includes a variety of projects that have not only honed my technical skills but also enhanced my ability to think critically and solve problems effectively.
                </p>
              </div>
              <div className="transform hover:scale-[1.02] transition-transform duration-300 p-6 rounded-lg bg-gradient-to-r from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20">
                <p>
                  In my spare time, I love diving into the latest technological advancements, contributing to open-source initiatives, and tackling coding challenges on platforms like <strong className="text-blue-600">LeetCode</strong> and <strong className="text-green-600">HackerRank</strong>.
                </p>
              </div>
              <div className="transform hover:scale-[1.02] transition-transform duration-300 p-6 rounded-lg bg-gradient-to-r from-pink-50/50 to-orange-50/50 dark:from-pink-950/20 dark:to-orange-950/20">
                <p>
                  If you're looking to collaborate, share ideas, or engage in a stimulating tech discussion, I would love to connect. Together, let's create something extraordinary!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in animate-gradient">Portfolio Showcase</h2>
          <PortfolioShowcase skills={skills} />
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-20 bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in animate-gradient">Qualifications</h2>
            
            {/* Education */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">Education Journey</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "SR University, Warangal",
                    subtitle: "Bachelor's in Computer Science (2022–2026)",
                    badge: "Current CGPA: 8.5",
                    gradient: "from-blue-600 to-purple-600"
                  },
                  {
                    title: "Resonance Junior College",
                    subtitle: "Class 12 - PCM with English (2020–2022)",
                    badge: "91.3%",
                    gradient: "from-purple-600 to-pink-600"
                  },
                  {
                    title: "Vaagdevi High School",
                    subtitle: "SSC - Science Stream",
                    badge: "100%",
                    gradient: "from-green-600 to-blue-600"
                  }
                ].map((edu, index) => (
                  <Card key={index} className="hover-scale animate-fade-in group overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                    <CardContent className="p-6 relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      <div className="flex justify-between items-start mb-4">
                        <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                          <h4 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">{edu.title}</h4>
                          <p className="text-muted-foreground">{edu.subtitle}</p>
                        </div>
                        <Badge variant="secondary" className={`bg-gradient-to-r ${edu.gradient} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                          {edu.badge}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="hover-scale animate-fade-in group overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                    <CardContent className="p-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="flex justify-between items-start mb-4">
                        <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                          <h4 className="text-xl font-semibold group-hover:text-purple-600 transition-colors duration-300">{exp.title}</h4>
                          <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="transform group-hover:scale-110 transition-transform duration-300">{exp.duration}</Badge>
                      </div>
                      <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                        <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="hover:text-foreground transition-colors duration-300">{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 animate-fade-in animate-gradient">Contact Me</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { icon: Phone, title: "Phone", info: "+91 8328632167", color: "from-blue-600 to-cyan-600", href: "tel:+918328632167" },
                { icon: Mail, title: "Email", info: "akhilanandatejasanga@gmail.com", color: "from-red-600 to-pink-600", href: "mailto:akhilanandatejasanga@gmail.com" },
                { icon: "L", title: "Location", info: "Hanamkonda, Telangana, India", color: "from-green-600 to-emerald-600", href: "#" },
                { icon: "W", title: "WhatsApp", info: "Chat Now", color: "from-green-500 to-green-600", href: "https://wa.me/918328632167" }
              ].map((contact, index) => (
                <Card key={index} className="hover-scale animate-fade-in group overflow-hidden cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    {typeof contact.icon === 'string' ? (
                      <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${contact.color} rounded-full flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                        <span className="text-white font-bold text-lg">{contact.icon}</span>
                      </div>
                    ) : (
                      <contact.icon className={`mx-auto mb-4 bg-gradient-to-br ${contact.color} bg-clip-text text-transparent transform group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300`} size={48} />
                    )}
                    <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{contact.title}</h3>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">{contact.info}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-700 hover:via-blue-700 hover:to-purple-700 text-white animate-scale-in transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="#" className="flex items-center space-x-2">
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-background via-muted/30 to-background border-t py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* About Column */}
              <div className="md:col-span-2 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 animate-gradient">Akhilanandateja Sanga</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Passionate AI Engineer and Full-Stack Developer dedicated to creating innovative solutions 
                  that solve real-world challenges through technology.
                </p>
                <div className="flex space-x-4">
                  {[
                    { href: "https://github.com/Akhilanandateja", icon: Github, color: "hover:text-gray-800 dark:hover:text-white" },
                    { href: "https://www.linkedin.com/in/akhilanandateja", icon: Linkedin, color: "hover:text-blue-600" },
                    { href: "mailto:akhilanandatejasanga@gmail.com", icon: Mail, color: "hover:text-red-500" },
                    { href: "https://wa.me/918328632167", icon: Phone, color: "hover:text-green-600" }
                  ].map(({ href, icon: Icon, color }, index) => (
                    <a 
                      key={href}
                      href={href} 
                      className={`text-muted-foreground ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 animate-fade-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h4 className="text-lg font-semibold mb-4 text-blue-600">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'About', 'Portfolio', 'Qualifications', 'Contact'].map((link, index) => (
                    <li key={link}>
                      <button
                        onClick={() => scrollToSection(link.toLowerCase())}
                        className="text-muted-foreground hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2 animate-fade-in"
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-lg font-semibold mb-4 text-purple-600">Contact Info</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2 group">
                    <Phone size={16} className="text-blue-600 group-hover:animate-bounce" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">+91 8328632167</span>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <Mail size={16} className="text-red-500 group-hover:animate-bounce" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">akhilanandatejasanga@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center group-hover:animate-bounce">
                      <span className="text-white text-xs font-bold">📍</span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Hanamkonda, Telangana</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left animate-fade-in">
                  <p className="text-muted-foreground flex items-center justify-center md:justify-start space-x-1">
                    <span>Created with</span>
                    <Heart size={16} className="text-red-500 animate-pulse" />
                    <span>using React & Tailwind CSS</span>
                  </p>
                </div>
                <div className="text-center md:text-right animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <p className="text-sm text-muted-foreground">
                    © 2024 Akhilanandateja Sanga. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
