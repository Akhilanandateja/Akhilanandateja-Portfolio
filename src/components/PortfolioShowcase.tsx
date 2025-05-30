
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

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
      technologies: ["WordPress", "HTML", "CSS", "Canva"]
    },
    {
      title: "PHP Website",
      description: "The PHP website focuses on car booking services, using PHP for backend logic and MySQL for database management. HTML, CSS, and JavaScript were employed for a dynamic and user-friendly frontend.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      liveDemo: "#",
      github: "#",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Smart Variable Health Monitor",
      description: "The Smart Wearable Health Monitoring System was developed using Python and scikit-learn for robust machine learning capabilities, with Matplotlib and Seaborn used for generating insightful data visualizations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      liveDemo: null,
      github: "#",
      technologies: ["Python", "Scikit-learn", "Flask", "Matplotlib", "Seaborn"]
    },
    {
      title: "Ecommerce Review Sentiment Analyzer",
      description: "The Ecommerce Review Sentiment Analyzer was developed using Python and NLTK's VADER for accurate sentiment analysis, with Matplotlib, Seaborn, and Plotly used for creating detailed data visualizations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      liveDemo: null,
      github: "#",
      technologies: ["Python", "NLTK", "Flask", "Plotly", "Sentiment Analysis"]
    },
    {
      title: "Potato Leaf Disease Detection",
      description: "A deep learning project for classifying potato leaf images as 'Healthy' or 'Late Blight' using a Convolutional Neural Network (CNN) and transfer learning with ResNet50.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      liveDemo: null,
      github: "#",
      technologies: ["Python", "TensorFlow", "CNN", "ResNet50", "Deep Learning"]
    }
  ];

  const certifications = [
    {
      title: "Python Programming",
      issuer: "Reliance Foundation",
      date: "May 2024",
      link: "https://drive.google.com/file/d/1dEzpHLMIdCRwZVlFieMT21wDr5wejPJC/view"
    },
    {
      title: "CISCO Certified - Introduction To Network",
      issuer: "Cisco",
      date: "March 2024",
      link: "https://www.credly.com/badges/5395ff92-075c-4fc2-8c25-038f8e0cdef4/public_url"
    },
    {
      title: "AWS Certified - AWS Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "February 2024",
      link: "https://www.credly.com/badges/f7da821b-4136-4bed-82cf-c2e99d0cbb87/public_url"
    },
    {
      title: "Microsoft Certified - Azure Fundamentals",
      issuer: "Microsoft",
      date: "March 2024",
      link: "https://www.credly.com/badges/29363e1f-2059-4f18-b7c0-59fc049df3a4/public_url"
    },
    {
      title: "SpringerLink Certification",
      issuer: "Springer",
      date: "2024",
      link: "#"
    }
  ];

  const tabs = [
    { id: 'projects', label: 'Projects', count: 5 },
    { id: 'skills', label: 'Skills', count: Object.values(skills).flat().length },
    { id: 'certifications', label: 'Certifications', count: 5 }
  ];

  const renderProjects = () => (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="group hover-scale animate-fade-in overflow-hidden">
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                {project.github && (
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveDemo && (
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline" size="lg" className="hover-scale">
          <a href="#" className="flex items-center space-x-2">
            <Github size={20} />
            <span>More Projects</span>
          </a>
        </Button>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-8">
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="animate-fade-in">
          <h3 className="text-xl font-semibold mb-4 capitalize text-blue-600">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillList.map((skill, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {skill.charAt(0)}
                    </span>
                  </div>
                  <p className="font-medium text-sm">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertifications = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {certifications.map((cert, index) => (
        <Card key={index} className="hover-scale animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild className="w-full">
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
        <div className="flex bg-muted rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
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
