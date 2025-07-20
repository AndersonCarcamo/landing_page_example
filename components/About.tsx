'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: <Award className="w-6 h-6" />, number: '50+', label: 'Proyectos Completados' },
    { icon: <Users className="w-6 h-6" />, number: '30+', label: 'Clientes Satisfechos' },
    { icon: <Clock className="w-6 h-6" />, number: '3+', label: 'Años de Experiencia' },
    { icon: <CheckCircle className="w-6 h-6" />, number: '100%', label: 'Tiempo de Entrega' }
  ]

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Docker', level: 75 }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Sobre <span className="gradient-text">Mí</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Soy un desarrollador freelance apasionado por crear experiencias digitales excepcionales que transforman ideas en realidades.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Con más de 3 años de experiencia en desarrollo web, me especializo en crear aplicaciones modernas y escalables utilizando las últimas tecnologías. Mi enfoque se centra en la calidad del código, la experiencia del usuario y la entrega a tiempo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Trabajo de manera colaborativa con mis clientes, asegurándome de entender sus necesidades específicas y ofrecer soluciones que no solo cumplan, sino que superen sus expectativas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Mis Habilidades</h3>
              <p className="text-gray-600">
                Tecnologías y herramientas que utilizo para crear soluciones digitales de alta calidad.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3">¿Listo para trabajar juntos?</h4>
              <p className="text-gray-600 mb-4">
                Cuéntame sobre tu proyecto y cómo puedo ayudarte a alcanzar tus objetivos.
              </p>
              <button className="btn-primary w-full">
                Empezar Conversación
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 