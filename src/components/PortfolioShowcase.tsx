
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Award, Code2, Palette } from 'lucide-react';

interface PortfolioShowcaseProps {
  skills: {
    programming: string[];
    web: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    design: string[];
    domains: string[];
  };
}

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ skills }) => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "WordPress Website",
      description: "The website was built using WordPress for its intuitive CMS capabilities, with Canva used for editing images and enhancing visuals. Basic HTML was added to customize the layout, creating a responsive and clean design ideal for showcasing hotel and restaurant services.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      liveDemo: "#",
      github: null,
      technologies: ["WordPress", "HTML", "CSS", "Canva"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "PHP Website",
      description: "The PHP website focuses on car booking services, using PHP for backend logic and MySQL for database management. HTML, CSS, and JavaScript were employed for a dynamic and user-friendly frontend.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      liveDemo: "#",
      github: "#",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Smart Variable Health Monitor",
      description: "The Smart Wearable Health Monitoring System was developed using Python and scikit-learn for robust machine learning capabilities, with Matplotlib and Seaborn used for generating insightful data visualizations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      liveDemo: null,
      github: "#",
      technologies: ["Python", "Scikit-learn", "Flask", "Matplotlib", "Seaborn"],
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Ecommerce Review Sentiment Analyzer",
      description: "The Ecommerce Review Sentiment Analyzer was developed using Python and NLTK's VADER for accurate sentiment analysis, with Matplotlib, Seaborn, and Plotly used for creating detailed data visualizations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      liveDemo: null,
      github: "#",
      technologies: ["Python", "NLTK", "Flask", "Plotly", "Sentiment Analysis"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Potato Leaf Disease Detection",
      description: "A deep learning project for classifying potato leaf images as 'Healthy' or 'Late Blight' using a Convolutional Neural Network (CNN) and transfer learning with ResNet50.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      liveDemo: null,
      github: "#",
      technologies: ["Python", "TensorFlow", "CNN", "ResNet50", "Deep Learning"],
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  const certifications = [
    {
      title: "Python Programming",
      issuer: "Reliance Foundation",
      date: "May 2024",
      link: "https://drive.google.com/file/d/1dEzpHLMIdCRwZVlFieMT21wDr5wejPJC/view",
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      title: "CISCO Certified - Introduction To Network",
      issuer: "Cisco",
      date: "March 2024",
      link: "https://www.credly.com/badges/5395ff92-075c-4fc2-8c25-038f8e0cdef4/public_url",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "AWS Certified - AWS Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "February 2024",
      link: "https://www.credly.com/badges/f7da821b-4136-4bed-82cf-c2e99d0cbb87/public_url",
      gradient: "from-orange-600 to-yellow-600"
    },
    {
      title: "Microsoft Certified - Azure Fundamentals",
      issuer: "Microsoft",
      date: "March 2024",
      link: "https://www.credly.com/badges/29363e1f-2059-4f18-b7c0-59fc049df3a4/public_url",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "SpringerLink Certification",
      issuer: "Springer",
      date: "2024",
      link: "#",
      gradient: "from-green-600 to-blue-600"
    }
  ];

  const skillCategories = [
    { key: 'programming', label: 'Programming Languages', icon: Code2, gradient: 'from-blue-600 to-purple-600' },
    { key: 'web', label: 'Web Technologies', icon: Palette, gradient: 'from-purple-600 to-pink-600' },
    { key: 'frameworks', label: 'Frameworks & Libraries', icon: Code2, gradient: 'from-pink-600 to-red-600' },
    { key: 'databases', label: 'Databases', icon: Code2, gradient: 'from-green-600 to-blue-600' },
    { key: 'tools', label: 'Tools & Platforms', icon: Code2, gradient: 'from-orange-600 to-yellow-600' },
    { key: 'design', label: 'Design & Content', icon: Palette, gradient: 'from-cyan-600 to-blue-600' },
    { key: 'domains', label: 'Domain Knowledge', icon: Award, gradient: 'from-indigo-600 to-purple-600' }
  ];

  const tabs = [
    { id: 'projects', label: 'Projects', count: 5, icon: Code2, gradient: 'from-blue-600 to-purple-600' },
    { id: 'skills', label: 'Skills', count: Object.values(skills).flat().length, icon: Palette, gradient: 'from-purple-600 to-pink-600' },
    { id: 'certifications', label: 'Certifications', count: 5, icon: Award, gradient: 'from-green-600 to-blue-600' }
  ];

  const renderProjects = () => (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="group hover-scale animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center space-x-4`}>
                {project.github && (
                  <Button size="sm" variant="secondary" asChild className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveDemo && (
                  <Button size="sm" variant="secondary" asChild className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100" style={{ transitionDelay: '0.1s' }}>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <CardContent className="p-6 relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm group-hover:text-foreground transition-colors duration-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="outline" 
                    className="text-xs transform group-hover:scale-105 transition-transform duration-300 hover:bg-blue-50 dark:hover:bg-blue-950"
                    style={{ transitionDelay: `${techIndex * 0.05}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center animate-fade-in">
        <Button variant="outline" size="lg" className="hover-scale border-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 group">
          <a href="#" className="flex items-center space-x-2">
            <Github size={20} className="group-hover:animate-spin" />
            <span>More Projects</span>
          </a>
        </Button>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-12">
      {skillCategories.map(({ key, label, icon: Icon, gradient }, categoryIndex) => {
        const skillList = skills[key as keyof typeof skills];
        return (
          <div key={key} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
            <div className="flex items-center space-x-3 mb-6">
              <Icon className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} size={28} />
              <h3 className={`text-2xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {label}
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillList.map((skill, index) => (
                <Card key={index} className="hover-scale group overflow-hidden animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2 + index * 0.05}s` }}>
                  <CardContent className="p-4 text-center relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <span className="text-white font-bold text-sm">
                        {skill.charAt(0)}
                      </span>
                    </div>
                    <p className="font-medium text-sm group-hover:text-blue-600 transition-colors duration-300">{skill}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderCertifications = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {certifications.map((cert, index) => (
        <Card key={index} className="hover-scale animate-fade-in group overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
          <CardContent className="p-6 relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 transform group-hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{cert.title}</h3>
                <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </div>
              <div className={`w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                <Award className="text-white" size={24} />
              </div>
            </div>
            <Button variant="outline" size="sm" asChild className="w-full group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-300">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-muted/50 rounded-2xl p-2 backdrop-blur-sm">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-xl font-medium transition-all duration-500 flex items-center space-x-2 transform hover:scale-105 animate-fade-in ${
                  activeTab === tab.id
                    ? 'bg-background text-foreground shadow-lg scale-105'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon 
                  size={20} 
                  className={activeTab === tab.id ? `bg-gradient-to-r ${tab.gradient} bg-clip-text text-transparent` : ''} 
                />
                <span className={activeTab === tab.id ? `bg-gradient-to-r ${tab.gradient} bg-clip-text text-transparent` : ''}>
                  {tab.label}
                </span>
                <Badge 
                  variant={activeTab === tab.id ? "default" : "secondary"} 
                  className={`ml-2 ${activeTab === tab.id ? `bg-gradient-to-r ${tab.gradient} text-white` : ''} transform hover:scale-110 transition-transform duration-300`}
                >
                  {tab.count}
                </Badge>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {activeTab === 'projects' && renderProjects()}
        {activeTab === 'skills' && renderSkills()}
        {activeTab === 'certifications' && renderCertifications()}
      </div>
    </div>
  );
};

export default PortfolioShowcase;
