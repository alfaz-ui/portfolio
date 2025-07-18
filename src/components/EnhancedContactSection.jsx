import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { personalInfo } from '../data/mockData';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const EnhancedContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Formspree endpoint - replace with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xeoqpvqp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
          duration: 5000,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Drop me an email anytime',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: 'Call me for urgent matters',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      description: 'Based in India',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-gray-100',
      bg: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
      color: 'hover:text-red-600',
      bg: 'hover:bg-red-50 dark:hover:bg-red-900/20'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(139, 92, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-16">
          <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollAnimationWrapper delay={200}>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  I'm currently available for freelance work and full-time opportunities. 
                  Whether you have a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </div>
            </ScrollAnimationWrapper>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <ScrollAnimationWrapper key={index} delay={400 + index * 200}>
                  <Card className="group hover:shadow-xl transition-all duration-500 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 hover:scale-105 transform">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {method.label}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {method.description}
                          </p>
                          <a
                            href={method.href}
                            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200 font-medium"
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>

            {/* Social Links */}
            <ScrollAnimationWrapper delay={1000}>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} ${social.bg} transition-all duration-300 hover:shadow-lg hover:scale-110 transform`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Availability Status */}
            <ScrollAnimationWrapper delay={1200}>
              <Card className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-700 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Available for Work
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Currently open to new opportunities and projects
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          </div>

          {/* Enhanced Contact Form */}
          <ScrollAnimationWrapper delay={600}>
            <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white font-semibold py-6 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Message Sent!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <AlertCircle className="mr-2 h-5 w-5" />
                        Try Again
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    This form is powered by Formspree. Your message will be sent directly to my email.
                  </p>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;