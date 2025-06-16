/* ---------- Data ---------- */
const data = {
  es: {
    hero: {
      title: 'Diego Asencio',
      sub: 'Ingeniero de Sistemas │ Especialista en Ingeniería de Software │ Sr Full-Stack Engineer',
      cta: 'Conóceme más'
    },
    about: {
      title: 'Sobre mí',
      description:
        'Ingeniero de Software con experiencia en el sector logístico en entornos de alto rendimiento. Ademas he trabajado con proyectos blockchain y arquitectura Web3. ' +
        'He liderado proyectos de optimización en gigantes como MercadoLibre y startups como Rappi, aplicando algoritmos y análisis de datos para resolver desafíos logísticos complejos. ' +
        'Paralelamente, he diseñado y construido ecosistemas descentralizados, desde marketplaces de NFTs y tokenización de RWA hasta desarrollo sobre EVM. ' +
        'Mi experiencia en Startups me permite entregar soluciones robustas en entornos de máxima exigencia.',
      stack: [
        '👨‍💻 Ingeniero de Software',
        '⛓️ Web3',
        '📈 Optimización Logística',
        '🖼️ Frontend',
        '⚙️ Backend',
        '🪙 NFTs & RWA',
        '🤖 Algoritmos',
        '🌉 EVM & Bridges',
        '📊 Data Science'
      ]
    },
    edu: {
      title: 'Educación',
      items: [
        {
          deg: 'Ingeniería de Sistemas',
          org: 'Universidad de los Llanos',
          period: '2013-2020',
          logo: 'https://repositorio.unillanos.edu.co/server/api/core/bitstreams/75c5fc59-8833-4dce-afbb-708f39abd595/content'
        },
        {
          deg: 'Especialización en Ing. de Software',
          org: 'Universidad de los Llanos',
          period: '2021-2022',
          logo: 'https://repositorio.unillanos.edu.co/server/api/core/bitstreams/75c5fc59-8833-4dce-afbb-708f39abd595/content'
        }
      ],
      stack: [
        '👨‍💻 Software Engineer',
        '⛓️ Web3',
        '📈 Logistics Optimization',
        '🖼️ Frontend',
        '⚙️ Backend',
        '🪙 NFTs & RWA',
        '🤖 Algorithms',
        '🌉 EVM & Bridges',
        '📊 Data Science'
      ]
    },
    cert: {
      title: 'Certificaciones',
      items: [
        {
          name: 'Scrum Master Professional Certificate',
          org: 'CertiProf',
          year: '2023',
          logo: 'https://certiprof.com/cdn/shop/files/Certiprof_Scrum_Master_badge480x480_1440x1440.webp?v=1742418498'
        },
        {
          name: 'Google Cloud Skills Boost: Baseline Data, ML, AI',
          org: 'Google Cloud',
          year: '2021',
          logo: 'https://cdn.qwiklabs.com/gxhIJxr6qsTOqs8BPaiqxuMKbdpHr%2FJh9q16J%2BsUBNo%3D'
        },
        {
          name: 'Google Cloud Skills Boost: Build and Secure Networks',
          org: 'Google Cloud',
          year: '2021',
          logo: 'https://cdn.qwiklabs.com/6QsPX5Wdg0eHWFed3ZKTbX2c88yVFGgaWPlYt%2BJdp4Q%3D'
        },
        {
          name: 'Google Cloud Skills Boost: Configura un entorno de desarrollo de apps',
          org: 'Google Cloud',
          year: '2021',
          logo: 'https://cdn.qwiklabs.com/SOUHCWvev6HmfC5QztXJd%2BCkSK8%2B3WGWg%2BF%2Fww%2FfqXA%3D'
        },
        {
          name: 'Google Cloud Skills Boost: Implementa el balanceo de cargas en Compute Engine',
          org: 'Google Cloud',
          year: '2021',
          logo: 'https://cdn.qwiklabs.com/TbOoOcpQdNxRawSvSE3K5cbakxBmki8F%2FgjwN6yKY98%3D'
        }
      ]
    },
    skills: {
      title: 'Habilidades Técnicas',
      categories: [
        {
          name: 'Frontend',
          items: [
            { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'VueJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' }
          ]
        },
        {
          name: 'Backend',
          items: [
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
            { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
            { name: 'Nest.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
            { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' }
          ]
        },
        {
          name: 'Web3 & Blockchain',
          items: [
            { name: 'Solidity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
            { name: 'Ethers.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/ethers/ethers-original.svg' }
          ]
        },
        {
          name: 'Bases de Datos, Cloud & DevOps',
          items: [
            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Digital Ocean', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'SonarQube', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg' },
            { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' }
          ]
        }
      ]
    },
    exp: {
      title: 'Experiencia',
      items: [
        {
          role: 'Sr Software Engineer',
          org: 'MercadoLibre',
          period: '2024 - Actualidad',
          logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGBWvG8qkeDWA/company-logo_100_100/B4DZUUsRzCGcAU-/0/1739808906936/mercadolibre_logo?e=1754524800&v=beta&t=DBFVzM-dHjuicRPOnsV_mhcGvB0tKaAemVeFGLVGSUc',
          desc: 'Lidero el diseño y desarrollo de microservicios de alta disponibilidad para el ecosistema de Mercado Envíos, soportando más de 50 millones de usuarios.'
        },
        {
          role: 'Software Technical Leader (Tech Lead)',
          org: 'Binkio Lab',
          period: '2024 - 2025',
          logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEFODodj8o0mw/company-logo_100_100/company-logo_100_100/0/1706795077220?e=1754524800&v=beta&t=4QuCQBD7CXVpKp7DU5MRRXa6tiUI9cLXUedjxnqQwf8',
          desc: 'Como líder técnico, dirijo la arquitectura y desarrollo de una plataforma de RWA (Real World Assets) sobre blockchain, implementando smart contracts y protocolos de tokenización.'
        },
        {
          role: 'Ingeniero de Software Senior',
          org: 'Alcaldía Municipal de Villavicencio',
          period: '2024',
          logo: 'https://villavicencio.gov.co/wp-content/uploads/2024/02/Logo-Alcaldia-Texto-Azul.png',
          desc: 'Desarrollo de software para el Observatorio de Salud, sistemas de hojas de vida de equipos tecnológicos, módulos de Gobierno en Línea y otros proyectos TIC públicos.'
        },
        {
          role: 'Sr Backend Engineer / Blockchain Engineer',
          org: 'Splendor Labs',
          period: '2023 - 2025',
          logo: 'https://www.splendor.org/static/favicon.png',
          desc: 'Desarrollo y mantengo software para nodos validadores en redes blockchain, creando sistemas de monitoreo y asegurando la operativa a gran escala en un entorno Web3.'
        },
        {
          role: 'Sr Fullstack Developer',
          org: 'Rurall',
          period: '2023 - 2024',
          logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGj1P-7BmspBg/company-logo_100_100/company-logo_100_100/0/1662469714224?e=1754524800&v=beta&t=CnLZ_9nD-CRDhWWRi_cE8crzIBJKg20FMn2YMpHrFRk',
          desc: 'Diseñé e implementé una plataforma logística full-stack para optimizar la cadena de suministro de productores rurales, utilizando tecnologías web modernas.'
        },
        {
          role: 'Ingeniero de Software Senior',
          org: 'Alcaldía Municipal de Villavicencio',
          period: '2023',
          logo: 'https://villavicencio.gov.co/wp-content/uploads/2024/02/Logo-Alcaldia-Texto-Azul.png',
          desc: 'Desarrollo de software para el Observatorio de Salud, sistemas de hojas de vida de equipos tecnológicos, módulos de Gobierno en Línea y otros proyectos TIC públicos.'
        },
        {
          role: 'Ssr Software Engineer',
          org: 'MercadoLibre',
          period: '2021 - 2023',
          logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGBWvG8qkeDWA/company-logo_100_100/B4DZUUsRzCGcAU-/0/1739808906936/mercadolibre_logo?e=1754524800&v=beta&t=DBFVzM-dHjuicRPOnsV_mhcGvB0tKaAemVeFGLVGSUc',
          desc: 'Integrante del equipo de User Accounts, donde lideré el desarrollo de la funcionalidad de cancelación de cuenta para millones de usuarios. Responsable de la lógica de negocio, seguridad y performance de los microservicios involucrados.'
        },
        {
          role: 'Ingeniero de Software Senior',
          org: 'Universidad de los Llanos (Observatorio de Salud)',
          period: '2022',
          logo: 'https://repositorio.unillanos.edu.co/server/api/core/bitstreams/75c5fc59-8833-4dce-afbb-708f39abd595/content',
          desc: 'Desarrollo de sistemas de información y análisis de datos para el Observatorio de Salud, apoyando proyectos de investigación y visualización de datos en salud pública.'
        },
        {
          role: 'Backend Developer',
          org: 'Rappi',
          period: '2019 - 2021',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIa7grF6DG3PEtibFiRs2VIagg22hSlz0fhg&s',
          desc: 'Implementé y optimicé algoritmos de asignación de órdenes y repartidores para la super-app, mejorando la eficiencia logística y reduciendo tiempos de entrega.'
        },
        {
          role: 'Backend Developer',
          org: 'Grupo CATO',
          period: '2018 - 2019',
          logo: 'https://fueradelmolde-blog.gumlet.io/tools/logos/CATO_Logo_2017_Negativo.png?w=200',
          desc: 'Desarrollé APIs y sistemas internos para la gestión de inventarios y facturación electrónica en el sector retail, usando Python y bases de datos relacionales.'
        },
        {
          role: 'Web Developer',
          org: 'XCP SAS',
          period: '2017 - 2018',
          logo: 'https://www.xcp.com.co/wp-content/uploads/2021/05/XCPMarcaRegistrada.png.webp',
          desc: 'Desarrollé y mantuve sitios web corporativos y sistemas de información para clientes de la región, implementando soluciones en PHP y JavaScript.'
        },
        {
          role: 'Software Developer',
          org: 'Simultech SAS',
          period: '2016 - 2017',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tJq-MEFiNmXw-ynYPvetgqlDuCnv7jvC6Q&s',
          desc: 'Desarrollé plataformas web y simuladores interactivos para proyectos educativos y empresariales en Villavicencio, usando tecnologías full-stack.'
        },
        {
          name: 'Gobierno Enlinea',
          desc: 'Implementation of public sector web portals focused on accessibility and compliance with the Colombian government regulatory matrix for government websites.',
          tags: ['Government', 'Accessibility', 'Public Web', 'Colombia', 'Regulation'],
          img: 'https://www.funcionpublica.gov.co/documents/418537/0/gobierno-en-linea-logo.png',
          link: '#'
        },
      ]
    },
    proj: {
      title: 'Proyectos',
      btn: 'Ver proyecto →',
      categories: [
        { id: 'all', label: 'Todos' },
        { id: 'software', label: 'Software' },
        { id: 'hardware', label: 'Hardware' },
        { id: 'blockchain', label: 'Blockchain' },
        { id: 'ai', label: 'IA' },
        { id: 'bots', label: 'Bots' }
      ],
      items: [
        {
          name: 'Customs LLM',
          desc: 'Desarrollo de un modelo de lenguaje grande (LLM) personalizado para procesos aduaneros y regulatorios.',
          tags: ['AI', 'LLM', 'NLP', 'Custom'],
          category: 'ai',
          img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
          link: '#'
        },
        {
          name: 'Blockchain EVM L1',
          desc: 'Implementación de una blockchain compatible con EVM desde cero, con contratos inteligentes y puente cross-chain.',
          tags: ['Blockchain', 'EVM', 'Smart Contracts', 'Cross-chain'],
          category: 'blockchain',
          img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
          link: '#'
        },
        {
          name: 'Sorteazo',
          desc: 'Plataforma de sorteos automatizados con bots y panel de administración.',
          tags: ['Bots', 'Automatización', 'Panel'],
          category: 'bots',
          img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
          link: '#'
        },
        {
          name: 'Lynklytics',
          desc: 'Acortador de URLs con analítica avanzada, panel de usuario y API pública.',
          tags: ['Software', 'Web', 'Analytics'],
          category: 'software',
          img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
          link: '#'
        },
        {
          name: 'Binance Bot Trading',
          desc: 'Bot de trading automatizado para Binance (spot y futuros), con backtesting y panel de control.',
          tags: ['Bots', 'Trading', 'Binance'],
          category: 'bots',
          img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
          link: '#'
        },
        {
          name: 'Gobierno Enlinea',
          desc: 'Implementación de portales web públicos y módulos de gobierno en línea para entidades estatales.',
          tags: ['Software', 'Gobierno', 'Web Pública'],
          category: 'software',
          img: 'https://www.funcionpublica.gov.co/documents/418537/0/gobierno-en-linea-logo.png',
          link: '#'
        }
      ]
    },
    contact: {
      title: 'Contacto',
      desc: '¿Interesado en trabajar juntos? ¡Hablemos!',
      btn: 'Enviar mensaje'
    },
    footer: 'Hecho con ❤️ por Diego Asencio y la IA · 2024'
  },
  en: {
    hero: {
      title: 'Diego Asencio',
      sub: 'Systems Engineer │ Software Engineering Specialist │ Sr Full-Stack Engineer',
      cta: 'Learn more'
    },
    about: {
      title: 'About me',
      description:
        'Software Engineer with experience in the logistics sector in high-performance environments. I have also worked with blockchain projects and Web3 architecture. ' +
        'I have led optimization projects at giants like MercadoLibre and startups like Rappi, applying algorithms and data analysis to solve complex logistical challenges. ' +
        'In parallel, I have designed and built decentralized ecosystems, from NFT marketplaces and RWA tokenization to EVM development. ' +
        'My experience in Startups allows me to deliver robust solutions in highly demanding environments.',
      stack: [
        '👨‍💻 Ingeniero de Software',
        '⛓️ Web3',
        '📈 Optimización Logística',
        '🖼️ Frontend',
        '⚙️ Backend',
        '🪙 NFTs & RWA',
        '🤖 Algoritmos',
        '🌉 EVM & Bridges',
        '📊 Data Science'
      ]
    },
    edu: {
      title: 'Education',
      items: [
        {
          deg: 'Systems Engineering',
          org: 'Universidad de los Llanos',
          period: '2013-2020',
          logo: 'https://www.unillanos.edu.co/images/institucional/logo-unillanos-vertical.png'
        },
        {
          deg: 'Software Engineering Specialization',
          org: 'Universidad de los Llanos',
          period: '2021-2022',
          logo: 'https://www.unillanos.edu.co/images/institucional/logo-unillanos-vertical.png'
        }
      ]
    },
    cert: {
      title: 'Certifications',
      items: [
        {
          name: 'Scrum Master',
          org: 'CertiProf',
          year: '2023',
          logo: 'https://certiprof.com/cdn/shop/files/Certiprof_Scrum_Master_badge480x480_1440x1440.webp?v=1742418498'
        },
        {
          name: 'Google Cloud Skills Boost: Baseline Data, ML, AI',
          org: 'Google Cloud',
          year: '2021',
          logo: 'https://cdn.qwiklabs.com/5Qw8QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1.png'
        },
        {
          name: 'Google Cloud Skills Boost: Build and Secure Networks',
          org: 'Google Cloud',
          year: '2021',
          logo: 'https://cdn.qwiklabs.com/5Qw8QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1.png'
        },
        {
          name: 'Google Cloud Skills Boost: Configura un entorno de desarrollo de apps',
          org: 'Google Cloud',
          year: '2021',
          logo: 'https://cdn.qwiklabs.com/5Qw8QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1.png'
        },
        {
          name: 'Google Cloud Skills Boost: Implementa el balanceo de cargas en Compute Engine',
          org: 'Google Cloud',
          year: '2021',
          logo: 'https://cdn.qwiklabs.com/5Qw8QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1QwK1.png'
        }
      ]
    },
    skills: {
      title: 'Technical Skills',
      categories: [
        {
          name: 'Frontend',
          items: [
            { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'VueJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' }
          ]
        },
        {
          name: 'Backend',
          items: [
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
            { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
            { name: 'Nest.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
            { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' }
          ]
        },
        {
          name: 'Web3 & Blockchain',
          items: [
            { name: 'Solidity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
            { name: 'Ethers.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/ethers/ethers-original.svg' }
          ]
        },
        {
          name: 'Databases, Cloud & DevOps',
          items: [
            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Digital Ocean', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'SonarQube', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg' },
            { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' }
          ]
        }
      ]
    },
    exp: {
      title: 'Experience',
      items: [
        {
          role: 'Sr Software Engineer',
          org: 'MercadoLibre',
          period: '2024 - Present',
          logo: 'https://logospng.org/download/mercado-libre/logo-mercado-libre-icon-2048.png',
          desc: 'Leading the design and development of high-availability microservices for the Mercado Envíos ecosystem, supporting over 50 million users.'
        },
        {
          role: 'Software Technical Leader',
          org: 'Binkio',
          period: '2024 - 2025',
          logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEFODodj8o0mw/company-logo_100_100/company-logo_100_100/0/1706795077220?e=1754524800&v=beta&t=4QuCQBD7CXVpKp7DU5MRRXa6tiUI9cLXUedjxnqQwf8',
          desc: 'As Technical Leader, I directed the architecture and development of an RWA (Real World Assets) platform on the blockchain, implementing smart contracts and tokenization protocols.'
        },
        {
          role: 'Sr Backend Engineer / Blockchain Engineer',
          org: 'Splendor Labs',
          period: '2023 - Present',
          logo: 'https://www.splendor.org/static/favicon.png',
          desc: 'Developed and maintained software for validator nodes on blockchain networks, creating monitoring systems and ensuring large-scale operations in a Web3 environment.'
        },
        {
          role: 'Sr Fullstack Developer',
          org: 'Rurall',
          period: '2023 - 2024',
          logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGj1P-7BmspBg/company-logo_100_100/company-logo_100_100/0/1662469714224?e=1754524800&v=beta&t=CnLZ_9nD-CRDhWWRi_cE8crzIBJKg20FMn2YMpHrFRk',
          desc: 'Designed and implemented a full-stack logistics platform to optimize the supply chain for rural producers, using modern web technologies.'
        },
        {
          role: 'Ssr Software Engineer',
          org: 'MercadoLibre',
          period: '2021 - 2023',
          logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGBWvG8qkeDWA/company-logo_100_100/B4DZUUsRzCGcAU-/0/1739808906936/mercadolibre_logo?e=1754524800&v=beta&t=DBFVzM-dHjuicRPOnsV_mhcGvB0tKaAemVeFGLVGSUc',
          desc: 'Member of the User Accounts team, where I led the development of the account cancellation feature for millions of users. Responsible for business logic, security, and performance of the involved microservices.'
        },
        {
          role: 'Backend Developer',
          org: 'Rappi',
          period: '2019 - 2021',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIa7grF6DG3PEtibFiRs2VIagg22hSlz0fhg&s',
          desc: 'Implemented and optimized order and courier assignment algorithms for the super-app, improving logistical efficiency and reducing delivery times.'
        },
        {
          role: 'Ssr Backend Developer',
          org: 'Grupo CATO',
          period: '2018 - 2019',
          logo: 'https://fueradelmolde-blog.gumlet.io/tools/logos/CATO_Logo_2017_Negativo.png?w=200',
          desc: 'Developed APIs and internal systems for inventory management and electronic invoicing in the retail sector, using Python and relational databases.'
        },
        {
          role: 'Web Developer',
          org: 'XCP SAS',
          period: '2017 - 2018',
          logo: 'https://www.xcp.com.co/wp-content/uploads/2021/05/XCPMarcaRegistrada.png.webp',
          desc: 'Developed and maintained corporate websites and information systems for regional clients, implementing solutions in PHP and JavaScript.'
        },
        {
          role: 'FullStack Software Developer',
          org: 'Simultech SAS',
          period: '2016 - 2017',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tJq-MEFiNmXw-ynYPvetgqlDuCnv7jvC6Q&s',
          desc: 'Developed web platforms and interactive simulators for educational and business projects in Villavicencio, using full-stack technologies.'
        },
        {
          name: 'Gobierno Enlinea',
          desc: 'Implementation of public sector web portals focused on accessibility and compliance with the Colombian government regulatory matrix for government websites.',
          tags: ['Government', 'Accessibility', 'Public Web', 'Colombia', 'Regulation'],
          img: 'https://www.funcionpublica.gov.co/documents/418537/0/gobierno-en-linea-logo.png',
          link: '#'
        },
        {
          role: 'Desarrollador e Investigador',
          org: 'Universidad de los Llanos (Observatorio de Salud)',
          period: '2018 - 2020',
          logo: 'https://www.unillanos.edu.co/images/institucional/logo-unillanos-vertical.png',
          desc: 'Desarrollo de sistemas de información y análisis de datos para el Observatorio de Salud, apoyando proyectos de investigación y visualización de datos en salud pública.'
        },
        {
          role: 'Desarrollador TIC',
          org: 'Alcaldía Municipal de Villavicencio',
          period: '2017 - 2018',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Escudo_de_Villavicencio.png',
          desc: 'Desarrollo de software para el Observatorio de Salud, sistemas de hojas de vida de equipos tecnológicos, módulos de Gobierno en Línea y otros proyectos TIC públicos.'
        }
      ]
    },
    proj: {
      title: 'Projects',
      btn: 'View project →',
      categories: [
        { id: 'all', label: 'All' },
        { id: 'software', label: 'Software' },
        { id: 'hardware', label: 'Hardware' },
        { id: 'blockchain', label: 'Blockchain' },
        { id: 'ai', label: 'AI' },
        { id: 'bots', label: 'Bots' }
      ],
      items: [
        {
          name: 'Customs LLM',
          desc: 'Development of a custom large language model (LLM) for customs and regulatory processes.',
          tags: ['AI', 'LLM', 'NLP', 'Custom'],
          category: 'ai',
          img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
          link: '#'
        },
        {
          name: 'Blockchain EVM L1',
          desc: 'Implementation of an EVM-compatible blockchain from scratch, with smart contracts and cross-chain bridge.',
          tags: ['Blockchain', 'EVM', 'Smart Contracts', 'Cross-chain'],
          category: 'blockchain',
          img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
          link: '#'
        },
        {
          name: 'Sorteazo',
          desc: 'Automated raffle platform with bots and admin panel.',
          tags: ['Bots', 'Automation', 'Panel'],
          category: 'bots',
          img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
          link: '#'
        },
        {
          name: 'Lynklytics',
          desc: 'URL shortener with advanced analytics, user dashboard and public API.',
          tags: ['Software', 'Web', 'Analytics'],
          category: 'software',
          img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
          link: '#'
        },
        {
          name: 'Binance Bot Trading',
          desc: 'Automated trading bot for Binance (spot and futures), with backtesting and control panel.',
          tags: ['Bots', 'Trading', 'Binance'],
          category: 'bots',
          img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
          link: '#'
        },
        {
          name: 'Gobierno Enlinea',
          desc: 'Implementation of public web portals and government online modules for state entities.',
          tags: ['Software', 'Government', 'Public Web'],
          category: 'software',
          img: 'https://www.funcionpublica.gov.co/documents/418537/0/gobierno-en-linea-logo.png',
          link: '#'
        }
      ]
    },
    contact: {
      title: 'Contact',
      desc: 'Interested in working together? Let\'s talk!',
      btn: 'Send message'
    },
    footer: 'Made with ❤️ by Diego Asencio & AI · 2024'
  }
};

/* ---------- State ---------- */
let currentLang = 'es';
let currentTheme = 'light';
let currentFontSize = 16;

/* ---------- DOM Elements ---------- */
const langSwitch = document.getElementById('lang-switch');
const themeSwitch = document.getElementById('theme-switch');
const fontDecrease = document.getElementById('font-decrease');
const fontIncrease = document.getElementById('font-increase');

/* ---------- Functions ---------- */
function typeWriterEffect(element, text, speed = 18) {
  element.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function updateFooterYear() {
  const year = new Date().getFullYear();
  const yearSpan = document.getElementById('footer-year');
  if (yearSpan) yearSpan.textContent = year;
}

function updateContent() {
  const lang = data[currentLang];
  
  // Hero
  document.getElementById('hero-title').textContent = lang.hero.title;
  document.getElementById('hero-sub').textContent = lang.hero.sub;
  document.getElementById('hero-cta').textContent = lang.hero.cta;
  
  // About
  document.getElementById('about-title').textContent = lang.about.title;
  const aboutText = document.getElementById('about-text');
  typeWriterEffect(aboutText, lang.about.description, 14);

  const aboutStack = document.querySelector('.about-stack');
  aboutStack.innerHTML = lang.about.stack
    .map(item => `<span class="stack-item">${item}</span>`)
    .join('');
  
  // Skills
  document.getElementById('skills-title').textContent = lang.skills.title;
  const skillsContent = document.getElementById('skills-content');
  const allSkills = lang.skills.categories.flatMap(category => category.items);
  skillsContent.innerHTML = allSkills
    .map(
      skill => `
        <div class="skill">
          <div class="skill-icon">
            <img src="${skill.icon}" alt="${skill.name}" width="32" height="32">
          </div>
          <p>${skill.name}</p>
        </div>
      `
    )
    .join('');
  
  // Certifications
  document.getElementById('cert-title').textContent = lang.cert.title;
  const certContent = document.getElementById('cert-content');
  certContent.innerHTML = lang.cert.items.map(cert => `
    <div class="badge">
      <img src="${cert.logo}" alt="${cert.name}">
      <div class="cert-info">
        <h3>${cert.name}</h3>
        <p>${cert.org}</p>
        <span class="year">${cert.year}</span>
      </div>
    </div>
  `).join('');
  
  // Education
  document.getElementById('edu-title').textContent = lang.edu.title;
  const eduContent = document.getElementById('edu-content');
  eduContent.innerHTML = lang.edu.items.map(edu => `
    <div class="entry-card">
      <div class="logo-container">
        <img src="${edu.logo}" alt="${edu.org}">
      </div>
      <div class="info">
        <h3>${edu.deg}</h3>
        <span>${edu.org} | ${edu.period}</span>
      </div>
    </div>
  `).join('');
  
  // Experience
  document.getElementById('exp-title').textContent = lang.exp.title;
  const expContent = document.getElementById('exp-content');
  const validExpItems = lang.exp.items.filter(exp => exp && exp.role && exp.org);
  expContent.innerHTML = validExpItems.map(exp => `
    <div class="entry-card">
      <div class="logo-container">
        <img src="${exp.logo}" alt="${exp.org}">
      </div>
      <div class="info">
        <h3>${exp.role}</h3>
        <span>${exp.org} | ${exp.period}</span>
        <p>${exp.desc}</p>
      </div>
    </div>
  `).join('');
  
  // Projects
  document.getElementById('proj-title').textContent = lang.proj.title;
  renderProjectFilters();
  renderProjectsByCategory('all');
  setupProjectFilterEvents();
  
  // Contact
  document.getElementById('contact-title').textContent = lang.contact.title;
  document.getElementById('contact-desc').textContent = lang.contact.desc;
  document.getElementById('contact-btn').textContent = lang.contact.btn;
  
  // Footer
  updateFooterYear();
}

function updateTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeSwitch.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

function updateFontSize() {
  document.documentElement.style.fontSize = `${currentFontSize}px`;
}

/* ---------- Event Listeners ---------- */
langSwitch.addEventListener('change', (e) => {
  currentLang = e.target.value;
  localStorage.setItem('lang', currentLang);
  updateContent();
  updateFooterYear();
});

themeSwitch.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  updateTheme();
});

fontDecrease.addEventListener('click', () => {
  if (currentFontSize > 12) {
    currentFontSize -= 2;
    updateFontSize();
  }
});

fontIncrease.addEventListener('click', () => {
  if (currentFontSize < 24) {
    currentFontSize += 2;
    updateFontSize();
  }
});

/* ---------- Initialize ---------- */
updateContent();
updateTheme();
updateFontSize();

document.addEventListener('DOMContentLoaded', function() {
    // Código para el efecto de escritura
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    const textArray = ["Programador", "Desarrollador Web", "Freelancer", "Soporte TI"];
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, 1300);
        }
    }

    if (textArray.length) setTimeout(type, 2250);

    // Manejar el envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí puedes añadir la lógica para enviar el formulario
            console.log('Formulario enviado');
            // Por ejemplo, usando Fetch API o AJAX para enviar los datos a un backend
        });
    }

    // Funcionalidad para los botones de filtro del portafolio
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase activa de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase activa al botón clickeado
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                item.style.display = 'none'; // Ocultar todos los items
                if (item.classList.contains(filter) || filter === 'all') {
                    item.style.display = 'block'; // Mostrar solo los items filtrados
                }
            });
        });
    });

    // Código para el desplazamiento suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Código para resaltar el enlace de navegación activo al desplazarse
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function changeLinkState() {
        let index = sections.length;
    
        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
        navLinks.forEach((link) => link.classList.remove('active'));
        // Asegurarse de que el índice es válido antes de añadir la clase
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }
    
    // Ejecutar al cargar y al desplazarse
    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});

// Idioma por defecto español
if (!localStorage.getItem('lang')) {
  currentLang = 'es';
  localStorage.setItem('lang', 'es');
} else {
  currentLang = localStorage.getItem('lang');
}

document.getElementById('lang-switch').value = currentLang;
document.getElementById('lang-switch').addEventListener('change', function() {
  currentLang = this.value;
  localStorage.setItem('lang', currentLang);
  updateContent();
  updateFooterYear();
});

function renderProjectFilters() {
  const filtersContainer = document.getElementById('project-filters');
  const lang = data[currentLang];
  filtersContainer.innerHTML = lang.proj.categories.map(cat => `
    <button class="filter-pill${cat.id === 'all' ? ' active' : ''}" data-category="${cat.id}">${cat.label}</button>
  `).join('');
}

function renderProjectsByCategory(categoryId) {
  const lang = data[currentLang];
  let filtered = lang.proj.items;
  if (categoryId && categoryId !== 'all') {
    filtered = lang.proj.items.filter(proj => proj.category === categoryId);
  }
  const projContent = document.getElementById('proj-content');
  projContent.innerHTML = filtered.map(proj => `
    <div class="project-card" data-category="${proj.category}">
      <img src="${proj.img}" alt="${proj.name}">
      <div class="project-content">
        <h3>${proj.name}</h3>
        <div class="project-tags">
          ${proj.tags.map(tag => `<span class='tag'>${tag}</span>`).join('')}
        </div>
        <p>${proj.desc}</p>
        <div class="project-footer">
          <a href="${proj.link}" target="_blank">${lang.proj.btn || 'Ver proyecto →'}</a>
        </div>
      </div>
    </div>
  `).join('');
}

function setupProjectFilterEvents() {
  const filtersContainer = document.getElementById('project-filters');
  filtersContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-pill')) {
      document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      const catId = e.target.getAttribute('data-category');
      renderProjectsByCategory(catId);
    }
  });
} 