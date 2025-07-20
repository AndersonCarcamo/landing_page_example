'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-purple-50">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-primary-600 font-semibold text-lg"
              >
                👋 ¡Hola! Soy
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                <span className="gradient-text">Tu Nombre</span>
                <br />
                Desarrollador Freelance
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Transformo ideas en experiencias digitales únicas. Especializado en React, Next.js y aplicaciones web modernas que destacan y convierten.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary flex items-center justify-center gap-2">
                Empezar Proyecto
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Descargar CV
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-6 pt-4"
            >
              <span className="text-gray-500 font-medium">Sígueme:</span>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">TN</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded-full w-48 mx-auto"></div>
                    <div className="h-4 bg-white/20 rounded-full w-32 mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-8 h-8 bg-primary-400 rounded-full animate-bounce-slow"></div>
              <div className="absolute bottom-20 right-16 w-6 h-6 bg-purple-400 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-8 w-4 h-4 bg-yellow-400 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 