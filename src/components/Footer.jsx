import React from 'react';
import { Badge } from './ui/badge';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'hover:text-red-600'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </h3>
              <p className="text-gray-400 mt-2">
                {personalInfo.title}
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Passionate about creating exceptional digital experiences with modern web technologies. 
              Always eager to take on new challenges and collaborate on innovative projects.
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/20 text-emerald-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  Available for work
                </span>
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-3">
              <div className="text-gray-400 text-sm">
                <p>{personalInfo.email}</p>
              </div>
              <div className="text-gray-400 text-sm">
                <p>{personalInfo.phone}</p>
              </div>
              <div className="text-gray-400 text-sm">
                <p>{personalInfo.location}</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3">Follow Me</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-slate-800 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;