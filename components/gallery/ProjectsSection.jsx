"use client";
import { useState } from 'react';
import Image from 'next/image';
import { X, Plus } from 'lucide-react';
import { projectsData, PROJECT_FILTERS, PROJECT_STATUSES } from '@/data/projectsData';

const ProjectGalleryModal = ({ project, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="min-h-screen px-4 py-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8 text-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
              <p className="text-orange-500">{project.status}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-orange-500 p-2"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <p className="text-lg max-w-3xl">{project.description}</p>
        </div>

        {/* Image Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((image, index) => (
              <div 
                key={index} 
                className="relative"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`${project.name} - Image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 700px) 80vw, 40vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState(PROJECT_STATUSES.ALL);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(project => 
    filter === PROJECT_STATUSES.ALL ? true : project.status === filter
  );

  const openGallery = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-lg mb-2">Our Projects</p>
          <h2 className="text-4xl font-bold text-navy-900 mb-8">Visit Our Projects</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {PROJECT_FILTERS.map((filterName) => (
              <button
                key={filterName}
                onClick={() => setFilter(filterName)}
                className={`px-6 py-2 rounded transition-colors ${
                  filter === filterName
                    ? 'bg-navy-900 text-white'
                    : 'bg-orange-500 text-navy-900 hover:bg-navy-900 hover:text-white'
                }`}
              >
                {filterName}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.mainImage}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={95}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-6 text-white h-full flex flex-col items-center justify-center text-center">
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="bg-navy-900 p-4 flex justify-between items-center">
                <h3 className="text-orange-500 font-bold">{project.name}</h3>
                <button
                  onClick={() => openGallery(project)}
                  className="text-white hover:text-orange-500"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Modal */}
        {selectedProject && (
          <ProjectGalleryModal 
            project={selectedProject} 
            onClose={closeGallery}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;