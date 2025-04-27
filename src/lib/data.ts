export const personalInfo = {
  name: "Matías Jara",
  location: "Santiago, Chile",
  email: "engineer@matiasjara.dev",
  github: "https://github.com/matiasjara987",
  linkedin: "https://www.linkedin.com/in/matias987/",
};

export const workExperience = [
  {
    company: "TIMED",
    location: "Santiago, Chile",
    position: "Ingeniero Junior de Integración RIS",
    period: "Dic 2024 - Presente",
    achievements: [
     "Optimización de consultas y gestión de bases de datos en PostgreSQL: Me dedico a optimizar consultas complejas, mejorando el rendimiento y la eficiencia en la gestión de datos en PostgreSQL, con un enfoque en la reducción de tiempos de respuesta y el uso eficiente de los recursos.",
"Desarrollo e integración de procesos de mensajería en Mirth Connect: Implemento y mantengo soluciones de integración de datos en sistemas de salud, utilizando Mirth Connect para procesar y transformar mensajes en formatos HL7 y DICOM, asegurando la interoperabilidad entre sistemas médicos.",
"Revisión y validación de mensajes HL7 y DICOM: Realizo la revisión y validación de mensajes HL7 y DICOM, garantizando que la información médica se transmita de manera precisa y conforme a los estándares de la industria.",
"Optimización de la eficiencia de sistemas de mensajería y bases de datos: Mejoro los procesos de mensajería en sistemas de salud, con un enfoque en la optimización de la transferencia de datos y la integración eficiente entre plataformas utilizando tecnologías como HL7, DICOM y PostgreSQL.",
"Tecnologías Utilizadas: MIRTH, HL7, DICOM, PostgreSQL, Microsoft Server, Remote Desktop"
    ],
  },
  
];

export const education = [
  {
    institution: "Sence Chile (Servicio Nacional de Capacitación y Empleo)",
    location: "Santiago, Chile",
    degree: "Diplomado  Diseñador y Desarrollador Web",
    period: "Ene 2024 - Ene 2025",
    achievements: [
      "HTML, Css, JavaScript",
      "Java, SQL",
      "Angular, React, Vue",
      "Figma, UI/UX",
    ],
  },
  {
    institution: "Universidad Bernardo O'Higgins",
    location: "Santiago, Chile",
    degree: "Ingeniería Informática",
    period: "Mar 2022 - Ene 2026",
    achievements: [
      "POO, SOLID, MVC",
      "Java, Python, C#, JavaScript",
      "Bases de datos SQL",
      "Análisis de datos ",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "Java",
    "Python",
    "Dart",
    "Go",
  ],
  frontendDevelopment: [
    "Astro",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["SpringBoot", "Flask"],
  databaseAndStorage: ["PostgreSQL", "MySQL", "Hibernate (ORM)"],
  cloudAndDevOps: ["Azure"],
  toolsAndServices: [
    "Clerk (Auth)",
    "Sanity (CMS)",
    "Tinybird (analytics)",
    "Zod",
    "Sentry",
    "Mixpanel",
    "Trigger.dev",
  ],
};

export const projects = [
  {
    title: "Inventario Viewer",
    github: "https://github.com/matiasjara987/InventarioViewer",
    description: [
     "InventarioViewer es una herramienta diseñada específicamente para facilitar el control y seguimiento de productos y existencias en tiempo real, lo que garantiza una administración eficiente del inventario y una mejor toma de decisiones en todo momento.",
"ofrece una interfaz intuitiva y fácil de usar que permite visualizar datos precisos y actualizados de inventarios, stocks y productos con solo unos pocos clics, eliminando la complejidad de los sistemas tradicionales y mejorando la experiencia del usuario.",
"gestiona productos, categorías, ubicaciones y otros detalles clave, permitiendo a los usuarios optimizar sus operaciones, ajustar niveles de stock y asegurar que los productos esenciales estén siempre disponibles cuando se necesiten.",
"envía alertas y notificaciones personalizadas, alertando sobre productos que están por agotarse o que han alcanzado niveles críticos, lo que ayuda a evitar tanto faltantes de inventario como el exceso de productos no vendidos.",
"y permite generar reportes detallados e históricos del inventario, proporcionando datos clave para tomar decisiones informadas, al mismo tiempo que se integra sin problemas con tus sistemas existentes, asegurando una transición fluida y una experiencia de uso coherente."
    ],
  },
  {
    title: "Escalera Piano ",
    github: "https://github.com/matiasjara987/escalonPiano",
    description: [
      "El proyecto 'Escalera Piano' transforma una escalera común en un instrumento musical interactivo, promoviendo el uso de escaleras en lugar de ascensores o escaleras mecánicas mediante una experiencia lúdica y musical mientras se sube o baja.",
"utiliza una placa Arduino como el componente principal de control, junto con sensores de presión y movimiento en cada escalón, lo que permite activar diferentes sonidos a medida que se pisa cada peldaño, creando una experiencia única y divertida.",
"integra un sistema de iluminación LED en cada escalón, que acompaña la reproducción de sonidos, mejorando la inmersión y ofreciendo un aspecto visual atractivo mientras se utiliza la escalera.",
"el código del proyecto está cuidadosamente estructurado en varios archivos para controlar aspectos como la configuración del sistema, el manejo de las luces LED, la reproducción de melodías y la lectura de sensores, todo integrado de manera eficiente en el archivo principal de Arduino.",
"el sistema se instala fácilmente en cualquier escalera siguiendo un proceso paso a paso, donde solo se requiere contar con el hardware necesario, el software adecuado y realizar una sencilla configuración para disfrutar de la interacción musical al subir o bajar por la escalera.",
    ],
  },
];

export const awards = [
  {
    name: "Universidad Java - De Cero a Experto - Más completo +156 Horas ",
    issuer: "Udemy",
    date: "Abr 2024",
    type: "International",
    position: "Backend",
  },
  {
    name: "Spring Boot & Spring WebFlux Programación Reactiva RESTful",
    issuer: "Udemy",
    date: "Ago 2024",
    type: "International",
    position: "Backend",
    
  },
  {
    name: "Flutter - Móvil: De cero a experto",
    issuer: "Udemy",
    date: "Jul 2025",
    type: "International",
    position: "Movil",
  },
  {
    name: "Azure AZ-900",
    issuer: "Microsoft",
    date: "May 2025",
    type: "International",
    position: "Cloud",
  },
  {
    name: " Introducción a la Interoperabilidad y al estándar FHIR",
    issuer: "Organización Panamericana de la Salud",
    date: "Mar 2025",
    type: "International",
    position: "Salud",
  },
  {
    name: "Git y GitHub Completo Desde Cero ACTUALIZADO",
    issuer: "Udemy",
    date: "Oct 2024",
    type: "National",
    position: "Herramientas",
  },
];
