'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Tienda online completa con carrito de compras, pasarela de pagos y panel de administración.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'E-commerce'
    },
    {
      title: 'App de Gestión',
      description: 'Aplicación web para gestión de proyectos con dashboard interactivo y reportes en tiempo real.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web App'
    },
    {
      title: 'Landing Page Corporativa',
      description: 'Sitio web corporativo con diseño moderno, animaciones suaves y optimizado para SEO.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Framer Motion', 'TypeScript', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Landing Page'
    },
    {
      title: 'App Móvil Fitness',
      description: 'Aplicación móvil para seguimiento de entrenamientos con integración de wearables.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Mobile App'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Panel de control con métricas y gráficos interactivos para análisis de datos empresariales.',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Dashboard'
    },
    {
      title: 'Blog Personal',
      description: 'Blog personal con sistema de gestión de contenido y diseño minimalista.',
      image: '/api/placeholder/400/300',
      technologies: ['Gatsby', 'GraphQL', 'MDX', 'Netlify'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Blog'
    }
  ]

  const categories = ['Todos', 'Web App', 'E-commerce', 'Mobile App', 'Landing Page', 'Dashboard', 'Blog']

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mi <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proyectos recientes que demuestran mi experiencia y pasión por crear soluciones digitales excepcionales
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-600 font-medium transition-all duration-200"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg mx-auto flex items-center justify-center">
                      <span className="text-white text-lg font-bold">P</span>
                    </div>
                    <p className="text-primary-600 font-medium">{project.category}</p>
                  </div>
                </div>
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white rounded-full text-gray-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white rounded-full text-gray-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 btn-primary text-center text-sm py-2"
                  >
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Ver Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 btn-secondary text-center text-sm py-2"
                  >
                    <Github className="w-4 h-4 inline mr-2" />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-secondary">
            Ver Más Proyectos
          </button>
        </motion.div>
      </div>
    </section>
  )
} 