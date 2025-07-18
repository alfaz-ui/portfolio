import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Code, Server, Wrench, Zap } from 'lucide-react';
import { skills } from '../data/mockData';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillCategories = [
    { id: 'frontend', label: 'Frontend', icon: Code, skills: skills.frontend },
    { id: 'backend', label: 'Backend', icon: Server, skills: skills.backend },
    { id: 'tools', label: 'Tools', icon: Wrench, skills: skills.tools },
    { id: 'other', label: 'Other', icon: Zap, skills: skills.other }
  ];

  const SkillCard = ({ skill }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
          <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
            {skill.level}%
          </span>
        </div>
        <Progress 
          value={skill.level} 
          className="h-2"
          style={{
            '--progress-foreground': `linear-gradient(90deg, rgb(147, 51, 234) 0%, rgb(16, 185, 129) 100%)`
          }}
        />
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
            Skills
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white transition-all duration-300"
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center bg-gradient-to-br from-purple-50 to-emerald-50 dark:from-purple-900/20 dark:to-emerald-900/20 border-purple-200 dark:border-purple-700">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Frontend Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Expert in modern React.js ecosystem with advanced state management and performance optimization
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border-emerald-200 dark:border-emerald-700">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Performance Optimizer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Specialized in code splitting, lazy loading, and achieving 95+ Lighthouse scores
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Full-Stack Ready
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Comfortable with backend technologies and API integration for end-to-end solutions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;