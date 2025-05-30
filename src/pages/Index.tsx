
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Youtube } from 'lucide-react';
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
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 animate-fade-in">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Akhilanandateja
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-6">
                {['Home', 'About', 'Portfolio', 'Qualifications', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                      activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-muted-foreground'
                    }`}
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />
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
                    <span className="text-3xl lg:text-4xl text-muted-foreground">Sanga</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    AI Engineer • Full-Stack Developer • Software Engineer
                  </p>
                </div>
                <p className="text-lg leading-relaxed max-w-xl">
                  Passionate software developer specializing in AI/ML and full-stack development. 
                  Transforming innovative ideas into functional applications that solve real-world challenges.
                </p>
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => scrollToSection('portfolio')}
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white animate-scale-in"
                  >
                    View My Work
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="hover-scale"
                  >
                    Get In Touch
                  </Button>
                </div>
                <div className="flex space-x-6">
                  <a href="https://github.com/Akhilanandateja" className="text-muted-foreground hover:text-blue-600 transition-colors hover-scale">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/akhilanandateja" className="text-muted-foreground hover:text-blue-600 transition-colors hover-scale">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:akhilanandatejasanga@gmail.com" className="text-muted-foreground hover:text-blue-600 transition-colors hover-scale">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end animate-scale-in">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl animate-pulse" />
                  <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Akhilanandateja Sanga" 
                      className="w-full h-full object-cover"
                    />
                  </div>
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
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">About Me</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover-scale animate-fade-in">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8.5+</div>
                  <div className="text-muted-foreground">CGPA</div>
                </CardContent>
              </Card>
              <Card className="text-center hover-scale animate-fade-in">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-muted-foreground">Projects</div>
                </CardContent>
              </Card>
              <Card className="text-center hover-scale animate-fade-in">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">Fresher</div>
                  <div className="text-muted-foreground">Experience</div>
                </CardContent>
              </Card>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none animate-fade-in">
              <p>
                Hello! I'm <strong className="text-blue-600">Akhilanandateja Sanga</strong>, a dedicated software developer with a fervent passion for harnessing technology to solve complex challenges. My journey in the tech world has been driven by a strong interest in <strong className="text-purple-600">Artificial Intelligence and Machine Learning</strong>, alongside a solid foundation in full-stack development.
              </p>
              <p>
                With a degree in computer science, I have cultivated a diverse skill set that spans AI Engineering, Full-Stack Development, and the fundamentals of Android Development. My experience includes a variety of projects that have not only honed my technical skills but also enhanced my ability to think critically and solve problems effectively.
              </p>
              <p>
                In my spare time, I love diving into the latest technological advancements, contributing to open-source initiatives, and tackling coding challenges on platforms like <strong className="text-blue-600">LeetCode</strong> and <strong className="text-green-600">HackerRank</strong>.
              </p>
              <p>
                If you're looking to collaborate, share ideas, or engage in a stimulating tech discussion, I would love to connect. Together, let's create something extraordinary!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Portfolio Showcase</h2>
          <PortfolioShowcase skills={skills} />
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Qualifications</h2>
            
            {/* Education */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-blue-600">Education Journey</h3>
              <div className="space-y-6">
                <Card className="hover-scale animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">SR University, Warangal</h4>
                        <p className="text-muted-foreground">Bachelor's in Computer Science (2022–2026)</p>
                      </div>
                      <Badge variant="secondary">Current CGPA: 8.5</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">Resonance Junior College</h4>
                        <p className="text-muted-foreground">Class 12 - PCM with English (2020–2022)</p>
                      </div>
                      <Badge variant="secondary">91.3%</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">Vaagdevi High School</h4>
                        <p className="text-muted-foreground">SSC - Science Stream</p>
                      </div>
                      <Badge variant="secondary">100%</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-purple-600">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="hover-scale animate-fade-in">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-semibold">{exp.title}</h4>
                          <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline">{exp.duration}</Badge>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
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
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 animate-fade-in">Contact Me</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="hover-scale animate-fade-in">
                <CardContent className="p-6 text-center">
                  <Phone className="mx-auto mb-4 text-blue-600" size={32} />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 8328632167</p>
                </CardContent>
              </Card>
              <Card className="hover-scale animate-fade-in">
                <CardContent className="p-6 text-center">
                  <Mail className="mx-auto mb-4 text-purple-600" size={32} />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">akhilanandatejasanga@gmail.com</p>
                </CardContent>
              </Card>
              <Card className="hover-scale animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-8 h-8 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">L</span>
                  </div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Hanamkonda, Telangana, India</p>
                </CardContent>
              </Card>
              <Card className="hover-scale animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-8 h-8 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">W</span>
                  </div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <a href="https://wa.me/918328632167" className="text-blue-600 hover:underline">
                    Chat Now
                  </a>
                </CardContent>
              </Card>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white animate-scale-in"
            >
              <a href="#" className="flex items-center space-x-2">
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/Akhilanandateja" className="text-muted-foreground hover:text-blue-600 transition-colors hover-scale">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/akhilanandateja" className="text-muted-foreground hover:text-blue-600 transition-colors hover-scale">
                <Linkedin size={24} />
              </a>
              <a href="mailto:akhilanandatejasanga@gmail.com" className="text-muted-foreground hover:text-blue-600 transition-colors hover-scale">
                <Mail size={24} />
              </a>
              <a href="https://wa.me/918328632167" className="text-muted-foreground hover:text-green-600 transition-colors hover-scale">
                <Phone size={24} />
              </a>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Akhilanandateja Sanga</h3>
              <p className="text-muted-foreground">Created with ❤️ using React & Tailwind CSS</p>
              <p className="text-sm text-muted-foreground">© 2024 All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
