
Portafolio Personal - Desarrollador de Software y estudiante de Ingenieria en Sistemas

Link: https://portafoliojgu.vercel.app/



Portafolio web de alto rendimiento para mostrar proyectos de desarrollo e ingeniería de software, con animaciones e interacciones 3D. Construido con React, TypeScript y Vite para una experiencia rápida y moderna.



Sobre el Proyecto

Este portafolio representa mi identidad profesional digital. Combina arquitectura de software moderna con diseño UI/UX avanzado, incorporando animaciones fluidas y efectos 3D que crean una experiencia visual atractiva.

El objetivo es mostrar no solo mis habilidades técnicas en proyectos, sino también la capacidad de construir interfaces web complejas, performantes y visualmente agradables.

Tecnologías y Herramientas
Core

React 19: Uso de las últimas características y mejoras en renderizado.

TypeScript 5.7: Tipado estático para código más seguro y escalable.

Vite 5.4: Herramienta de desarrollo ultrarrápida.

Estilos y Diseño

TailwindCSS 3.4: Diseño rápido con clases utilitarias.

PostCSS: Optimización de CSS.

Lucide React: Iconos modernos y livianos.

Responsive Design: Adaptable a todos los dispositivos.

Animaciones y Visuales

Three.js: Fondos y efectos 3D interactivos.

GSAP: Animaciones de alto rendimiento.

Custom Hooks: Efectos de texto, scroll reveal y animaciones personalizadas.

Características Principales

Fondo 3D Interactivo: Entorno dinámico que responde a la navegación.

Navegación Fluida: Transiciones suaves entre secciones.

Efectos de Texto: Escribir, desifrado (scramble) y aparición escalonada.

Tema oscuro premium: Paleta Dark con acentos Indigo.

Mobile First: Optimizado para móvil y escritorio.

Arquitectura Modular: Estructura basada en funcionalidades para fácil mantenimiento.

Estructura del Proyecto
src/
├── app/                    # Configuración principal
├── features/               # Secciones principales
│   ├── contact/            # Contacto
│   ├── hero/               # Landing page
│   ├── lab/                # Experimentos
│   ├── navigation/         # Componentes de navegación
│   └── projects/           # Galería de proyectos
├── shared/                 # Recursos compartidos
│   ├── components/         # Componentes UI y animaciones
│   ├── config/             # Config global (theme)
│   ├── data/               # Datos estáticos
│   ├── hooks/              # Custom Hooks
│   ├── lib/                # Funciones helper
│   └── types/              # Tipos TypeScript
└── main.tsx                # Entry point
Instalación y Desarrollo Local

Clonar repositorio:

git clone https://github.com/JeffersonGomez07/Jefferson-G-mez-Ure-a.git

Instalar dependencias:

npm install
# o pnpm install

Iniciar servidor de desarrollo:

npm run dev

La app estará disponible en http://localhost:5173.

Producción

Para compilar la versión optimizada:

npm run build

Los archivos finales se generarán en dist/.
