import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Youtube, Heart, Download, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ThemeToggle from '@/components/ThemeToggle';
import PortfolioShowcase from '@/components/PortfolioShowcase';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = [
    "Frontend Development.",
    "Backend Development.", 
    "DSA.",
    "Problem Solving.",
    "Machine Learning & AI."
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentString = typingTexts[currentIndex];

    if (!isDeleting && charIndex < currentString.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentString.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setCurrentText(currentString.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentString.length) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((currentIndex + 1) % typingTexts.length);
    }
  }, [currentText, charIndex, isDeleting, currentIndex, typingTexts]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'portfolio', 'experience', 'contact'];
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
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent float-animation">
              Akhilanandateja
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-6">
                {['Home', 'About', 'Education', 'Portfolio', 'Experience', 'Contact'].map((item, index) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-background dark:from-blue-950/20 dark:via-purple-950/20 dark:to-background animate-pulse" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Akhilanandateja
                    </span>
                    <br />
                    <span className="text-3xl lg:text-4xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>Sanga</span>
                  </h1>
                  <div className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <span className="inline-block hover:text-blue-600 transition-colors duration-300 transform hover:scale-105">AI Engineer</span> • 
                    <span className="inline-block hover:text-purple-600 transition-colors duration-300 transform hover:scale-105"> Full-Stack Developer</span> • 
                    <span className="inline-block hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"> Software Engineer</span>
                  </div>
                  <div className="text-lg animate-fade-in" style={{ animationDelay: '0.9s' }}>
                    <span className="text-muted-foreground">I'm good at </span>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                      {currentText}
                      <span className="animate-pulse">|</span>
                    </span>
                  </div>
                </div>
                <p className="text-lg leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '1.2s' }}>
                  Passionate software developer specializing in AI/ML and full-stack development. 
                  Transforming innovative ideas into functional applications that solve real-world challenges.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-scale-in" style={{ animationDelay: '1.5s' }}>
                  <Button 
                    onClick={() => scrollToSection('portfolio')}
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="hover-scale border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 group"
                  >
                    <Download size={20} className="mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </div>
                <div className="flex space-x-6 animate-fade-in" style={{ animationDelay: '1.8s' }}>
                  {[
                    { href: "https://github.com/Akhilanandateja", icon: Github, color: "hover:text-blue-600" },
                    { href: "https://www.linkedin.com/in/akhilanandateja", icon: Linkedin, color: "hover:text-blue-600" },
                    { href: "mailto:akhilanandatejasanga@gmail.com", icon: Mail, color: "hover:text-purple-600" }
                  ].map(({ href, icon: Icon, color }, index) => (
                    <a 
                      key={href}
                      href={href} 
                      className={`text-muted-foreground ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
                      style={{ animationDelay: `${1.8 + index * 0.1}s` }}
                    >
                      <Icon size={28} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="relative group">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg animate-pulse transform group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-md shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                    <img 
                      src="/placeholder.svg" 
                      alt="Akhilanandateja Sanga" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20 blur-xl animate-pulse" />
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
      <section id="about" className="py-20 bg-gradient-to-br from-muted/30 to-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { value: "8.5+", label: "CGPA", color: "from-blue-600 to-purple-600" },
                { value: "10+", label: "Projects", color: "from-purple-600 to-blue-600" },
                { value: "Fresher", label: "Experience", color: "from-blue-600 to-purple-600" }
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
              <div className="transform hover:scale-[1.02] transition-transform duration-300 p-6 rounded-lg bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20">
                <p>
                  With a degree in computer science, I have cultivated a diverse skill set that spans AI Engineering, Full-Stack Development, and the fundamentals of Android Development. My experience includes a variety of projects that have not only honed my technical skills but also enhanced my ability to think critically and solve problems effectively.
                </p>
              </div>
              <div className="transform hover:scale-[1.02] transition-transform duration-300 p-6 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
                <p>
                  In my spare time, I love diving into the latest technological advancements, contributing to open-source initiatives, and tackling coding challenges on platforms like <strong className="text-blue-600">LeetCode</strong> and <strong className="text-purple-600">HackerRank</strong>.
                </p>
              </div>
              <div className="transform hover:scale-[1.02] transition-transform duration-300 p-6 rounded-lg bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20">
                <p>
                  If you're looking to collaborate, share ideas, or engage in a stimulating tech discussion, I would love to connect. Together, let's create something extraordinary!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education Journey</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "SR University, Warangal",
                  subtitle: "Bachelor's in Computer Science",
                  period: "2022–2026",
                  badge: "Current CGPA: 8.5",
                  icon: "🎓"
                },
                {
                  title: "Resonance Junior College",
                  subtitle: "Class 12 - PCM with English",
                  period: "2020–2022",
                  badge: "91.3%",
                  icon: "📚"
                },
                {
                  title: "Vaagdevi High School",
                  subtitle: "SSC - Science Stream",
                  period: "2019–2020",
                  badge: "100%",
                  icon: "🏫"
                }
              ].map((edu, index) => (
                <Card key={index} className="hover-scale animate-fade-in group overflow-hidden h-full" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-6 relative h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{edu.icon}</div>
                      <Badge variant="secondary" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white transform group-hover:scale-110 transition-transform duration-300 mb-3">
                        {edu.badge}
                      </Badge>
                    </div>
                    <div className="flex-1 text-center transform group-hover:translate-y-[-2px] transition-transform duration-300">
                      <h4 className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300 mb-2">{edu.title}</h4>
                      <p className="text-muted-foreground text-sm mb-1">{edu.subtitle}</p>
                      <p className="text-xs text-muted-foreground">{edu.period}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-muted/30 to-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio Showcase</h2>
          <PortfolioShowcase skills={skills} />
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Professional Experience</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className={`flex items-center animate-fade-in ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} style={{ animationDelay: `${index * 0.3}s` }}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="hover-scale group overflow-hidden">
                        <CardContent className="p-6 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="transform group-hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-between mb-3">
                              <Badge variant="outline" className="transform group-hover:scale-110 transition-transform duration-300">
                                {exp.duration}
                              </Badge>
                            </div>
                            <h4 className="text-xl font-semibold group-hover:text-purple-600 transition-colors duration-300 mb-2">{exp.title}</h4>
                            <p className="text-lg text-blue-600 font-medium mb-4">{exp.company}</p>
                            <div>
                              <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                              <ul className={`list-disc space-y-1 text-muted-foreground text-sm ${index % 2 === 0 ? 'list-inside' : 'list-inside'}`}>
                                {exp.responsibilities.map((resp, idx) => (
                                  <li key={idx} className="hover:text-foreground transition-colors duration-300">{resp}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="w-2/12 flex justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-background shadow-lg transform group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get in Touch</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Send a Message */}
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold mb-8 text-white">Send a Message</h3>
                <div className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input 
                      placeholder="Your Name" 
                      className="pl-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input 
                      placeholder="Your Email" 
                      type="email"
                      className="pl-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-muted-foreground" size={20} />
                    <Select>
                      <SelectTrigger className="pl-12 bg-gray-800/50 border-gray-700 text-white h-12">
                        <SelectValue placeholder="Purpose of Message" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="job">Job Opportunity</SelectItem>
                        <SelectItem value="freelance">Freelance Project</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea 
                    placeholder="Your Message"
                    rows={5}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 transform hover:scale-105 transition-all duration-300">
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="mb-12">
                  <h3 className="text-3xl font-bold mb-8 text-white">Contact Info</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <Phone className="text-purple-400" size={24} />
                      <div>
                        <span className="text-gray-400">Phone </span>
                        <span className="text-white">+91 8328632167</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <Mail className="text-purple-400" size={24} />
                      <div>
                        <span className="text-gray-400">Email </span>
                        <span className="text-white">akhilanandatejasanga@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-8 text-white">Connect with Me</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { platform: "LinkedIn", handle: "@akhilanandateja", icon: Linkedin, href: "https://www.linkedin.com/in/akhilanandateja" },
                      { platform: "GitHub", handle: "@Akhilanandateja", icon: Github, href: "https://github.com/Akhilanandateja" },
                    ].map((social, index) => (
                      <a
                        key={social.platform}
                        href={social.href}
                        className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <social.icon className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={20} />
                          <div>
                            <div className="text-white font-medium">{social.platform}</div>
                            <div className="text-gray-400 text-sm">{social.handle}</div>
                          </div>
                        </div>
                        <div className="w-5 h-5 border-2 border-gray-600 rounded group-hover:border-purple-400 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-600 rounded group-hover:bg-purple-400 transition-colors duration-300"></div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-background to-muted/30 border-t py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Akhilanandateja Sanga</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Passionate AI Engineer and Full-Stack Developer dedicated to creating innovative solutions 
                  that solve real-world challenges through technology.
                </p>
                <div className="flex space-x-4">
                  {[
                    { href: "https://github.com/Akhilanandateja", icon: Github, color: "hover:text-blue-600" },
                    { href: "https://www.linkedin.com/in/akhilanandateja", icon: Linkedin, color: "hover:text-blue-600" },
                    { href: "mailto:akhilanandatejasanga@gmail.com", icon: Mail, color: "hover:text-purple-600" },
                    { href: "https://wa.me/918328632167", icon: Phone, color: "hover:text-purple-600" }
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

              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h4 className="text-lg font-semibold mb-4 text-blue-600">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'About', 'Education', 'Portfolio', 'Experience', 'Contact'].map((link, index) => (
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

              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-lg font-semibold mb-4 text-purple-600">Contact Info</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2 group">
                    <Phone size={16} className="text-blue-600 group-hover:animate-bounce" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">+91 8328632167</span>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <Mail size={16} className="text-purple-600 group-hover:animate-bounce" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">akhilanandatejasanga@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

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
