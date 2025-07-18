import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const titles = [
    'Frontend Developer',
    'React.js Specialist',
    'UI/UX Enthusiast',
    'Performance Optimizer'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, currentIndex, isTyping, titles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/20 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  Available for opportunities
                </span>
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-300">
                  {displayText}
                  <span className="animate-pulse text-emerald-400">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {personalInfo.summary.substring(0, 200)}...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white font-semibold py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline" 
                className="border-2 border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/50 font-semibold py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-purple-400" />
                {personalInfo.phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-purple-400" />
                {personalInfo.email}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-500 via-emerald-500 to-blue-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-purple-600 to-emerald-600 flex items-center justify-center">
                    <span className="text-6xl lg:text-8xl font-bold text-white">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Floating Social Icons */}
              <div className="absolute -top-4 -right-4 bg-purple-500/20 backdrop-blur-sm rounded-full p-4 border border-purple-500/30">
                <Github className="h-6 w-6 text-purple-300" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-emerald-500/20 backdrop-blur-sm rounded-full p-4 border border-emerald-500/30">
                <Linkedin className="h-6 w-6 text-emerald-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-purple-300 hover:text-purple-200 transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;