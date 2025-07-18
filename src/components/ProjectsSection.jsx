import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const technologies = [...new Set(projects.flatMap(project => project.technologies))];
  const filters = ['all', ...technologies];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(selectedFilter));

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my best work spanning web applications, mobile apps, and enterprise solutions
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              variant={selectedFilter === filter ? "default" : "outline"}
              className={`
                ${selectedFilter === filter 
                  ? 'bg-gradient-to-r from-purple-600 to-emerald-600 text-white' 
                  : 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20'
                }
                rounded-full px-4 py-2 transition-all duration-300
              `}
            >
              <Filter className="h-4 w-4 mr-2" />
              {filter === 'all' ? 'All Projects' : filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 overflow-hidden">
              <CardContent className="p-0">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-purple-500 to-emerald-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <Button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <Button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                      {project.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <Button
                    onClick={() => openProjectModal(project)}
                    className="w-full bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      {selectedProject.company}
                    </p>
                  </div>
                  <Button
                    onClick={closeProjectModal}
                    variant="outline"
                    size="sm"
                    className="border-gray-300 dark:border-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Project Description
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, techIndex) => (
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

                  <div className="flex gap-4 pt-4">
                    {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                      <Button
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                      <Button
                        onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                        variant="outline"
                        className="border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;