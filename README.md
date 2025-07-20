# 🚀 Plantilla de Landing Page para Freelance

Una plantilla moderna y profesional de landing page construida con Next.js 14, TypeScript, Tailwind CSS y Framer Motion. Perfecta para desarrolladores freelance que quieren mostrar su trabajo y atraer nuevos clientes.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con gradientes y animaciones suaves
- 📱 **Totalmente Responsive**: Optimizada para todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Construida con Next.js 14 y optimizaciones de rendimiento
- 🎭 **Animaciones Suaves**: Animaciones con Framer Motion que mejoran la experiencia del usuario
- 🎯 **SEO Optimizado**: Metadatos y estructura optimizada para motores de búsqueda
- 🔧 **Fácil Personalización**: Código limpio y bien estructurado para fácil modificación
- 📧 **Formulario de Contacto**: Formulario funcional para capturar leads
- 🌙 **Accesible**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Biblioteca de animaciones
- **Lucide React** - Iconos modernos
- **PostCSS** - Procesador de CSS

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd freelance-landing-template
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abre tu navegador**
   Navega a [http://localhost:3000](http://localhost:3000)

## 🎨 Personalización

### Cambiar Información Personal

1. **Nombre y título**: Edita `app/layout.tsx` y `components/Hero.tsx`
2. **Información de contacto**: Actualiza `components/Contact.tsx` y `components/Footer.tsx`
3. **Servicios**: Modifica el array `services` en `components/Services.tsx`
4. **Portfolio**: Actualiza el array `projects` en `components/Portfolio.tsx`
5. **Testimonios**: Edita el array `testimonials` en `components/Testimonials.tsx`

### Personalizar Colores

Los colores principales se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... más tonos
  }
}
```

### Agregar Imágenes

1. Coloca tus imágenes en la carpeta `public/`
2. Importa y usa las imágenes en los componentes correspondientes
3. Para el portfolio, puedes usar servicios como Unsplash o tus propias capturas de pantalla

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── Header.tsx           # Navegación
│   ├── Hero.tsx             # Sección principal
│   ├── Services.tsx         # Servicios ofrecidos
│   ├── Portfolio.tsx        # Proyectos
│   ├── About.tsx            # Información personal
│   ├── Testimonials.tsx     # Testimonios
│   ├── Contact.tsx          # Formulario de contacto
│   └── Footer.tsx           # Pie de página
├── public/                  # Archivos estáticos
├── tailwind.config.js       # Configuración de Tailwind
├── next.config.js           # Configuración de Next.js
└── package.json             # Dependencias
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El despliegue se realizará automáticamente

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `.next`

### Otros Proveedores

El proyecto es compatible con cualquier proveedor que soporte Node.js y Next.js.

## 📝 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter

## 🎯 Próximas Mejoras

- [ ] Modo oscuro
- [ ] Blog integrado
- [ ] Sistema de CMS
- [ ] Analytics integrado
- [ ] Chat en vivo
- [ ] Múltiples idiomas

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarme:

- Email: tu@email.com
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- GitHub: [Tu Usuario](https://github.com/tu-usuario)

---

¡Espero que esta plantilla te ayude a crear una landing page increíble para tu negocio freelance! 🚀 