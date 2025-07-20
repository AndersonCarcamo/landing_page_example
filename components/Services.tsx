'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Globe, Palette, Zap, Shield } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desarrollo Web',
      description: 'Sitios web modernos y responsivos con las últimas tecnologías como React, Next.js y TypeScript.',
      features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimizado']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas y híbridas para iOS y Android con React Native y Flutter.',
      features: ['React Native', 'Flutter', 'UI/UX Nativo', 'Performance']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'E-commerce',
      description: 'Tiendas online completas con sistemas de pago y gestión de inventario.',
      features: ['Shopify', 'WooCommerce', 'Pasarelas de Pago', 'Gestión de Stock']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Diseño UI/UX',
      description: 'Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.',
      features: ['Figma', 'Adobe XD', 'Prototipado', 'User Research']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Optimización',
      description: 'Mejora el rendimiento y velocidad de tus aplicaciones web existentes.',
      features: ['Performance', 'SEO', 'Core Web Vitals', 'Analytics']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Mantenimiento',
      description: 'Soporte continuo y actualizaciones para mantener tu proyecto al día.',
      features: ['Updates', 'Security', 'Backups', 'Monitoring']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mis <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrezco soluciones completas de desarrollo web y móvil para hacer crecer tu negocio digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
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
          <button className="btn-primary">
            Ver Todos los Servicios
          </button>
        </motion.div>
      </div>
    </section>
  )
} 