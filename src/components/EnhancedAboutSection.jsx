import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Code, Zap, Users, Award, TrendingUp, Globe, Heart } from 'lucide-react';
import { personalInfo, achievements } from '../data/mockData';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const EnhancedAboutSection = () => {
  const stats = [
    { number: '3+', label: 'Years Experience', icon: Code, color: 'from-blue-500 to-purple-500' },
    { number: '20+', label: 'Projects Completed', icon: Zap, color: 'from-purple-500 to-pink-500' },
    { number: '95+', label: 'Lighthouse Score', icon: Award, color: 'from-emerald-500 to-teal-500' },
    { number: '5+', label: 'Technologies Mastered', icon: Users, color: 'from-orange-500 to-red-500' }
  ];

  const values = [
    {
      icon: Globe,
      title: 'Global Mindset',
      description: 'Building solutions that work across cultures and markets'
    },
    {
      icon: TrendingUp,
      title: 'Performance First',
      description: 'Optimizing for speed, accessibility, and user experience'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Love for creating beautiful, functional digital experiences'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, transparent 60%)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <ScrollAnimationWrapper>
              <div className="space-y-4">
                <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400">
                  About Me
                </Badge>
                
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                  Crafting Digital{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={200}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Key Achievements
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <ScrollAnimationWrapper key={index} delay={300 + index * 100}>
                      <div className="flex items-start gap-3 group">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </ScrollAnimationWrapper>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Values Section */}
            <ScrollAnimationWrapper delay={600}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  My Values
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <ScrollAnimationWrapper delay={400}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <ScrollAnimationWrapper key={index} delay={500 + index * 150}>
                    <Card className="group hover:shadow-xl transition-all duration-500 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 hover:scale-105 transform">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4 flex justify-center">
                          <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                            <stat.icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </ScrollAnimationWrapper>

            {/* Philosophy Card */}
            <ScrollAnimationWrapper delay={800}>
              <Card className="bg-gradient-to-br from-purple-50 to-emerald-50 dark:from-purple-900/20 dark:to-emerald-900/20 border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        My Philosophy
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        I believe in creating digital experiences that are not just functional, but delightful. 
                        Every line of code I write is focused on performance, accessibility, and user experience. 
                        I'm passionate about staying at the forefront of web technologies and sharing knowledge 
                        with the developer community.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>

            {/* Quote Section */}
            <ScrollAnimationWrapper delay={1000}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-6xl text-purple-500/20 font-serif">"</div>
                <blockquote className="text-lg italic text-gray-600 dark:text-gray-400 pl-8 pr-4 py-4 border-l-4 border-purple-500 bg-white dark:bg-slate-800 rounded-r-lg">
                  Code is poetry written in logic. Every bug fixed is a verse perfected, every feature added is a stanza completed.
                </blockquote>
                <div className="text-right mt-2">
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">- {personalInfo.name}</span>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;