# 🚀 Portfolio Personal - Systems Engineer

![React](https://img.shields.io/badge/React-19.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-0.173-000000?logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-3.14-88ce02?logo=greensock)

Un portafolio web de alto rendimiento, diseñado para exhibir proyectos de ingeniería y desarrollo de software con una experiencia visual inmersiva. Construido con las últimas tecnologías del ecosistema React.

🔗 **Live Demo:** [https://ciaphasc.github.io](https://ciaphasc.github.io)

## ⚡ Sobre el Proyecto

Este proyecto es una representación moderna de una identidad digital profesional. Combina una arquitectura de software sólida con diseño UI/UX avanzado, incorporando animaciones fluidas y efectos 3D para crear una narrativa visual atractiva.

El objetivo principal es demostrar no solo las habilidades técnicas a través de los proyectos listados, sino también la capacidad de construir interfaces web complejas, performantes y estéticamente agradables.

## 🛠️ Tecnologías y Herramientas

### Core
- **React 19**: Aprovechando las últimas características como Server Components (si aplica) y mejoras en renderizado.
- **TypeScript 5.7**: Tipado estático estricto para un código robusto y escalable.
- **Vite 5.4**: Build tool de próxima generación para un desarrollo ultrarrápido.

### Estilos y Diseño
- **TailwindCSS 3.4**: Framework de utilidades para un diseño rápido y consistente.
- **PostCSS**: Procesamiento avanzado de CSS.
- **Lucide React**: Iconografía moderna y ligera.
- **Diseño Responsivo**: Adaptable a cualquier dispositivo y tamaño de pantalla.

### Animaciones y Efectos Visuales
- **Three.js**: Renderizado de gráficos 3D en tiempo real (Fondo "Void" interactivo).
- **GSAP (GreenSock Navigation Platform)**: Animaciones de alto rendimiento para interacciones complejas.
- **Custom Hooks**: Hooks personalizados para animaciones de texto (Typewriter, Scramble, Stagger) y scroll reveal.

## ✨ Características Principales

- **🌌 Fondo 3D Interactivo**: Un entorno visual dinámico generado con Three.js que reacciona a la navegación.
- **🚀 Navegación Fluida**: Sistema de navegación suave entre secciones (Hero, Projects, Lab, Contact).
- **📝 Efectos de Texto Dinámicos**: Componentes reutilizables para efectos de escritura, desifrado (scramble) y aparición escalonada.
- **🎨 Tema oscuro premium**: Paleta de colores cuidadosamente seleccionada (Dark aesthetic con acentos Indigo).
- **📱 Mobile First**: Experiencia de usuario optimizada tanto para escritorio como para dispositivos móviles.
- **🏗️ Arquitectura Modular**: Estructura de carpetas basada en funcionalidades (`features/`) para facilitar el mantenimiento y escalabilidad.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura organizada y escalable:

```
src/
├── app/                    # Configuración principal de la aplicación
├── features/               # Módulos principales de funcionalidad
│   ├── contact/            # Sección de contacto
│   ├── hero/               # Sección principal (Landing)
│   ├── lab/                # Sección experimental
│   ├── navigation/         # Componentes de navegación
│   └── projects/           # Galería de proyectos
├── shared/                 # Recursos compartidos
│   ├── components/         # Componentes UI reutilizables (Animations, Backgrounds, etc.)
│   ├── config/             # Configuraciones globales (Theme tokens)
│   ├── data/               # Datos estáticos (Projects, Social links)
│   ├── hooks/              # Custom Hooks (Scroll, Navigation)
│   ├── lib/                # Utilidades y helpers
│   └── types/              # Definiciones de tipos TypeScript
└── main.tsx                # Punto de entrada
```

## 🚀 Instalación y Desarrollo Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/CiaphasC/CiaphasC.github.io.git
    cd CiaphasC.github.io
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    # o si usas pnpm (recomendado)
    pnpm install
    ```

3.  **Iniciar servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:5173`.

## 📦 Construcción para Producción

Para generar los archivos estáticos optimizados para producción:

```bash
npm run build
```

Esto generará la carpeta `dist/` con el código minificado y listo para despliegue.

## 👤 Autor

**CiaphasC**

- GitHub: [@CiaphasC](https://github.com/CiaphasC)

---

Desarrollado con ❤️ y mucho café ☕.
