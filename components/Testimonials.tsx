'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María García',
      role: 'CEO, TechStart',
      content: 'Excelente trabajo en nuestro proyecto. La comunicación fue constante y el resultado superó nuestras expectativas. Definitivamente volveremos a trabajar juntos.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Fundador, DigitalAgency',
      content: 'Profesionalismo y calidad excepcional. Entregó el proyecto antes del plazo y con todas las funcionalidades solicitadas. Altamente recomendado.',
      rating: 5,
      avatar: 'CR'
    },
    {
      name: 'Ana Martínez',
      role: 'Product Manager, InnovateLab',
      content: 'Increíble experiencia de trabajo. No solo desarrolló lo que pedimos, sino que aportó ideas valiosas que mejoraron significativamente el producto final.',
      rating: 5,
      avatar: 'AM'
    },
    {
      name: 'Luis Fernández',
      role: 'Director, StartupXYZ',
      content: 'La mejor decisión que tomamos fue contratar a este desarrollador. Su expertise técnico y atención al detalle son sobresalientes.',
      rating: 5,
      avatar: 'LF'
    },
    {
      name: 'Sofia López',
      role: 'CEO, E-commercePro',
      content: 'Transformó completamente nuestra presencia online. El sitio web que desarrolló aumentó nuestras ventas en un 200%. Simplemente increíble.',
      rating: 5,
      avatar: 'SL'
    },
    {
      name: 'Diego Morales',
      role: 'CTO, FinTech Solutions',
      content: 'Trabajo de alta calidad y entrega puntual. Su conocimiento técnico y capacidad de resolver problemas complejos son excepcionales.',
      rating: 5,
      avatar: 'DM'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen mis <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios reales de clientes satisfechos que han confiado en mi trabajo para sus proyectos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
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
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para ser el próximo cliente satisfecho?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Únete a la lista de clientes que han transformado sus ideas en realidades digitales exitosas.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Empezar Proyecto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 