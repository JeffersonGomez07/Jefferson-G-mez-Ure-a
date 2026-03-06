import { Briefcase, Box, Circle, Globe, Layers, Monitor, Smartphone, Utensils, Coffee, Building, Home, Dumbbell, User, Users, ShoppingCart } from 'lucide-react';

import type { Project } from '@/shared/types/portfolio';

const preview = (url: string): string => `https://image.thum.io/get/width/1200/noanimate/${url}`;

export const projects: ReadonlyArray<Project> = [
  {
    title: 'Menú digital',
    subtitle: 'Sistema de menú digital con pedidos por QR',
    description:
      'Este proyecto consiste en el desarrollo de un menú digital interactivo para restaurantes, que permite a los clientes visualizar productos, precios y categorías de forma clara y atractiva desde cualquier dispositivo.',
    tags: ['Next.js', 'React', 'Node.js', 'Express', 'PostgreSQL'],
    icon: Utensils,
    theme: 'blue',
    link: 'https://github.com/JeffersonGomez07/Menu-Digital',
    previewImage: '/menu-vistas.png',
    size: 'large',
  },
  {
    title: 'Sitio Freelancer',
    subtitle: 'Servicios digitales',
    description:
      'Plataforma web personal para ofrecer servicios digitales, mostrar portafolio de proyectos y permitir que clientes contacten fácilmente.',
    tags: ['HTML', 'CSS', 'Responsive Design'],
    icon: Globe,
    theme: 'blue',
    link: 'https://web-freelancer-jeff.vercel.app/',
    previewImage: '/freelancer.png',
    size: 'small',
  },
  {
    title: 'Blog de Café',
    subtitle: 'Blog & Cursos Online',
    description:
      'Sitio web tipo blog enfocado en contenido sobre café, recetas y cursos para aprender técnicas de preparación. Incluye diseño responsive, optimización de carga de recursos, imágenes en formato WebP y estructura moderna para una navegación clara.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Web Performance'],
    icon: Coffee,
    theme: 'cyan',
    link: 'https://cafe-three-gamma.vercel.app/',
    previewImage: '/cafe.png',
    size: 'small',
  },
  {
    title: 'Sistema de Reservas para Hotel',
    subtitle: 'Gestión Hotelera',
    description:
      'Aplicación web para la gestión de reservas de hotel, incluyendo administración de habitaciones, control de fechas bloqueadas, registro de usuarios y panel administrativo. El sistema integra backend en Python con rutas estructuradas, motor de plantillas para el frontend y conexión a base de datos para persistencia de reservas.',
    tags: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    icon: Building,
    theme: 'blue',
    link: 'https://github.com/JeffersonGomez07/Hotel',
    previewImage: '/Hotel.png',
    size: 'large',
  },
  {
    title: 'Bienes Raíces',
    subtitle: 'Plataforma Inmobiliaria',
    description:
      'Sitio web inmobiliario para la visualización de propiedades en venta. Incluye diseño responsive, listado de propiedades, blog informativo y secciones de contacto optimizadas para una experiencia moderna.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    icon: Home,
    theme: 'cyan',
    link: 'https://proyecto-bienes-raices-nine.vercel.app/',
    previewImage: '/bienes-raices.png',
    size: 'small',
  },
{
    title: 'Gym App',
    subtitle: 'Fitness Management System',
    description:
      'Sistema de gestion para gimnasios desarrollado en .NET con arquitectura por capas. Incluye API, logica de negocio, acceso a datos, DTO y una aplicacion MVC con interfaz web para la administracion del centro fitness.',
    tags: ['C#', '.NET', 'ASP.NET MVC', 'Web API', 'SQL'],
    icon: Dumbbell,
    theme: 'cyan',
    link: 'https://github.com/JeffersonGomez07/GymApp',
    previewImage: '/Gym-App.jpg',
    size: 'small',
  },
  {
    title: 'Plataforma de Reclutamiento',
    subtitle: 'Aplicación Web',
    description:
      'Plataforma integral de reclutamiento con gestión de puestos, postulaciones y administración de usuarios. Paneles diferenciados para administrador, reclutador, gestión y usuario final.',
    tags: ['JavaScript', 'Node.js', 'Express', 'HTML', 'CSS'],
    icon: Users,
    theme: 'blue',
    link: 'https://github.com/JeffersonGomez07/Sitio-Reclutamiento',
    previewImage: '/usuario.png',
    size: 'large',
  },
  {
    title: 'Frontend Store',
    subtitle: 'Tienda Web',
    description:
      'Tienda online moderna desarrollada con HTML y CSS. Diseño responsive, experiencia de usuario optimizada y navegación fluida en todos los dispositivos.',
    tags: ['HTML', 'CSS', 'Responsive Design'],
    icon: ShoppingCart,
    theme: 'blue', 
    link: 'https://front-end-store-eight.vercel.app/',
    previewImage: '/frontendstore.png',
    size: 'small',
  },
] as const;
