import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Code, Zap, Users, Award } from 'lucide-react';
import { personalInfo, achievements } from '../data/mockData';

const AboutSection = () => {
  const stats = [
    { number: '3+', label: 'Years Experience', icon: Code },
    { number: '20+', label: 'Projects Completed', icon: Zap },
    { number: '95+', label: 'Lighthouse Score', icon: Award },
    { number: '5+', label: 'Technologies Mastered', icon: Users }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
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

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Key Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Personal Values */}
            <Card className="bg-gradient-to-br from-purple-50 to-emerald-50 dark:from-purple-900/20 dark:to-emerald-900/20 border-purple-200 dark:border-purple-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  My Philosophy
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I believe in creating digital experiences that are not just functional, but delightful. 
                  Every line of code I write is focused on performance, accessibility, and user experience. 
                  I'm passionate about staying at the forefront of web technologies and sharing knowledge 
                  with the developer community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;