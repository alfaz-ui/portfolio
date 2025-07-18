import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Building, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { experience } from '../data/mockData';

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My career progression through innovative companies and challenging projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-emerald-500 hidden md:block"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-full border-4 border-white dark:border-slate-950 hidden md:block"></div>

                <div className="md:ml-16">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="h-5 w-5 text-purple-500" />
                            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                              {exp.company}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.duration}
                            </div>
                          </div>
                        </div>
                        
                        <Button
                          onClick={() => toggleCard(index)}
                          variant="outline"
                          className="mt-4 lg:mt-0 border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20"
                        >
                          {expandedCard === index ? (
                            <>
                              <ChevronUp className="h-4 w-4 mr-2" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4 mr-2" />
                              Show More
                            </>
                          )}
                        </Button>
                      </div>

                      {expandedCard === index && (
                        <div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
                          <div className="space-y-3">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Key Responsibilities & Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.description.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;