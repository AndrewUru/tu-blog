import Image from "next/image";
import Link from "next/link";

type Developer = {
  name: string;
  title: string;
  location: string;
  rate: string;
  availability: string;
  experience: string;
  skills: string[];
  projects: Array<{ name: string; result: string }>;
  profileLink: string;
};

type ServicePackage = {
  name: string;
  description: string;
  scope: string[];
};

type ProcessStep = {
  title: string;
  description: string;
  detail: string;
};

type Testimonial = {
  name: string;
  role: string;
  company: string;
  statement: string;
  project: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type Metric = {
  value: string;
  label: string;
  caption: string;
};

type ResourceLink = {
  label: string;
  href: string;
  description: string;
};

type DeveloperPerk = {
  title: string;
  description: string;
};

const metrics: Metric[] = [
  {
    value: "120+",
    label: "Desarrolladores verificados",
    caption: "Experiencia media superior a 6 anios",
  },
  {
    value: "340",
    label: "Proyectos completados",
    caption: "De comercio electronico, medios y startups",
  },
  {
    value: "48h",
    label: "Tiempo de respuesta",
    caption: "Propuesta inicial en menos de dos dias",
  },
];

const developers: Developer[] = [
  {
    name: "Ana Martinez",
    title: "Full-stack WordPress Engineer",
    location: "Madrid, Espana",
    rate: "EUR 85 por hora",
    availability: "Disponible para proyectos a partir de abril 2025",
    experience:
      "Especialista en plataformas de contenido multisitio y WordPress headless para empresas SaaS y medios.",
    skills: ["Headless WordPress", "Next.js", "WPGraphQL", "WooCommerce", "Performance"],
    projects: [
      { name: "Diario Global", result: "Aumento de trafico organico x3 en seis meses" },
      { name: "SaaS Control", result: "Migracion a arquitectura JAMstack sin interrupciones" },
    ],
    profileLink: "https://cal.com/ana-martinez/introduccion",
  },
  {
    name: "Diego Herrera",
    title: "Especialista WooCommerce",
    location: "Ciudad de Mexico, Mexico",
    rate: "USD 95 por hora",
    availability: "Agenda abierta para proyectos de corta duracion",
    experience:
      "Crea experiencias de compra personalizadas, optimiza conversion y automatiza operaciones con WooCommerce.",
    skills: ["WooCommerce", "PHP", "REST API", "Tailwind CSS", "Automatizaciones"],
    projects: [
      { name: "Mercado Verde", result: "Incremento del 42 por ciento en conversion movil" },
      { name: "Shopify to WP", result: "Migracion completa con integraciones ERP" },
    ],
    profileLink: "https://www.linkedin.com/in/diego-herrera-wordpress",
  },
  {
    name: "Valeria Costa",
    title: "UX Engineer para WordPress",
    location: "Buenos Aires, Argentina",
    rate: "USD 80 por hora",
    availability: "Puede iniciar en tres semanas",
    experience:
      "Combina diseno centrado en el usuario con bloques Gutenberg personalizados y sistemas de diseno escalables.",
    skills: ["Gutenberg", "Design Systems", "Accessibility", "TypeScript", "Figma to WP"],
    projects: [
      { name: "EduNext LMS", result: "Tasa de retencion de estudiantes +55 por ciento" },
      { name: "Fintech Insight", result: "Implementacion de biblioteca de bloques reutilizables" },
    ],
    profileLink: "https://valeriacosta.dev",
  },
  {
    name: "Lucas Mendez",
    title: "DevOps y arquitecto WordPress",
    location: "Barcelona, Espana",
    rate: "EUR 95 por hora",
    availability: "Compromisos parciales disponibles",
    experience:
      "Automatiza despliegues, observabilidad y seguridad para instalaciones complejas y multiregion.",
    skills: ["DevOps", "Observabilidad", "Caching", "AWS", "Kubernetes"],
    projects: [
      { name: "Global Academy", result: "Reduccion del tiempo de despliegue a 5 minutos" },
      { name: "Retail Plus", result: "Alta disponibilidad con failover automatizado" },
    ],
    profileLink: "https://github.com/lucasmendezwp",
  },
];

const servicePackages: ServicePackage[] = [
  {
    name: "Lanzamiento rapido",
    description:
      "Ideal para pymes y startups que necesitan un sitio corporativo o landing page en menos de cuatro semanas.",
    scope: [
      "Auditoria inicial",
      "Diseno basado en bloques",
      "Integracion de formularios y CRM",
      "Capacitacion editorial",
    ],
  },
  {
    name: "Comercio escalable",
    description:
      "WooCommerce con integraciones a ERP, medios de pago regionales y optimizaciones de conversion.",
    scope: [
      "Arquitectura de catalogos",
      "Checkout personalizado",
      "Automatizacion de inventario",
      "Flows de remarketing",
    ],
  },
  {
    name: "Headless y JAMstack",
    description:
      "WordPress como CMS con front-end en Next.js, GraphQL y despliegues en la nube para equipos de producto.",
    scope: [
      "Diseno de esquemas de contenido",
      "Implementacion de APIs",
      "Pipelines CI/CD",
      "Observabilidad y monitoreo",
    ],
  },
  {
    name: "Soporte continuo",
    description:
      "Squad fractional para mantener, evolucionar y medir tu plataforma WordPress mes a mes.",
    scope: ["Roadmap trimestral", "Mantenimiento preventivo", "Sprint reviews", "Reportes de rendimiento"],
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Definicion del proyecto",
    description: "Agenda una llamada de descubrimiento con nuestro equipo de scouting.",
    detail: "Revisamos objetivos, integraciones necesarias, presupuesto y plazo esperado.",
  },
  {
    title: "Match con talento",
    description: "Seleccionamos hasta tres perfiles verificados que encajan con tu reto.",
    detail: "Incluimos portafolio reciente, resultados medibles y referencias comprobadas.",
  },
  {
    title: "Kick-off en 48 horas",
    description: "Firmamos acuerdo, definimos horarios y herramientas de colaboracion.",
    detail: "Nos alineamos con tu equipo de producto o marketing antes de empezar desarrollo.",
  },
  {
    title: "Entrega y seguimiento",
    description: "Medimos resultados, documentamos aprendizajes y planificamos mejoras.",
    detail: "Puedes extender el equipo o cerrar el proyecto segun tus objetivos.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Laura Campos",
    role: "Head of Marketing",
    company: "Brio Health",
    statement:
      "Colaborar con la red de desarrolladores WordPress nos permitio lanzar un portal multilingue en seis semanas y reducir el costo de adquisicion en 28 por ciento.",
    project: "Rediseno D2C internacional",
  },
  {
    name: "Ruben Tavares",
    role: "CTO",
    company: "Latam Retail",
    statement:
      "El equipo asignado optimizo WooCommerce para eventos de gran trafico y ahora mantenemos un SLA de 99.99 por ciento sin sobresaltos.",
    project: "Ecommerce de alto volumen",
  },
  {
    name: "Marcela Duarte",
    role: "Directora de Producto",
    company: "EduNext",
    statement:
      "Valeria configuro un sistema de bloques reutilizables que acelero el desarrollo de lecciones en un 70 por ciento y mejoro la accesibilidad.",
    project: "Plataforma educativa",
  },
];

const faqs: FAQ[] = [
  {
    question: "Como seleccionan a los desarrolladores?",
    answer:
      "Validamos experiencia con proyectos empresariales, referencias contrastadas, evaluaciones tecnicas y pruebas practicas enfocadas en WordPress.",
  },
  {
    question: "Puedo contratar a un equipo completo?",
    answer:
      "Si. Podemos combinar perfiles de desarrollo, diseno, contenido y DevOps para cubrir proyectos integrales.",
  },
  {
    question: "Trabajan en mi zona horaria?",
    answer:
      "El 80 por ciento de la red esta en Latam y Europa, por lo que cubrimos GMT-6 a GMT+2. Ajustamos horarios segun el proyecto.",
  },
  {
    question: "Ofrecen contratos a largo plazo?",
    answer:
      "Puedes firmar paquetes mensuales recurrentes, contratos por hitos o contratar por horas segun tus necesidades.",
  },
  {
    question: "Que sucede despues de enviar el formulario?",
    answer:
      "Enviamos un correo con la informacion recopilada, programamos una llamada dentro de las 48 horas y compartimos propuestas de talento y estimaciones.",
  },
];

const resourceLinks: ResourceLink[] = [
  {
    label: "Guia de bloques Gutenberg",
    href: "https://developer.wordpress.org/block-editor/",
    description: "Buenas practicas y APIs para bloques personalizados.",
  },
  {
    label: "Documentacion REST API",
    href: "https://developer.wordpress.org/rest-api/",
    description: "Extiende WordPress como backend sin cabezal.",
  },
  {
    label: "WPGraphQL",
    href: "https://www.wpgraphql.com/",
    description: "Implementa esquemas GraphQL para headless WordPress.",
  },
  {
    label: "Playbook de rendimiento",
    href: "https://developer.wordpress.org/apis/performance/",
    description: "Optimizaciones de cache, medias y Core Web Vitals.",
  },
];

const developerPerks: DeveloperPerk[] = [
  {
    title: "Proyectos calificados",
    description: "Recibe oportunidades con briefing claro, presupuesto aprobado y stakeholders definidos.",
  },
  {
    title: "Pagos puntuales",
    description: "Facturacion quincenal con escrow y pagos en USD o EUR a traves de Stripe o transferencia bancaria.",
  },
  {
    title: "Soporte de comunidad",
    description: "Acceso a sesiones tecnicas, mentorias y libreria de componentes reutilizables.",
  },
  {
    title: "Flexibilidad total",
    description: "Elige entre proyectos part-time o squads dedicados segun tu disponibilidad.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 sm:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Portal de desarrolladores WordPress
            </div>
            <Link
              href="#join"
              className="rounded-full border border-blue-500/60 bg-transparent px-5 py-2 text-xs font-semibold text-blue-200 transition hover:border-blue-400 hover:text-white"
            >
              Soy desarrollador y quiero aplicar
            </Link>
          </div>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Conecta con especialistas WordPress verificados para lanzar y escalar tus productos digitales
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                Unimos empresas con talento WordPress enfocado en resultados. Desde lanzamientos rapidos hasta plataformas
                empresariales headless, construimos equipos a medida en cuestion de dias.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#request"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-400"
                >
                  Solicitar talento
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
                >
                  Ver servicios disponibles
                </Link>
              </div>
            </div>
            <div className="mx-auto">
              <Image
                src="/logo.png"
                alt="Marca del portal WordPress"
                width={280}
                height={280}
                className="w-40 drop-shadow-[0_0_35px_rgba(56,189,248,0.45)] sm:w-48"
                priority
              />
            </div>
          </div>
          <dl className="grid gap-6 border-t border-slate-800 pt-8 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                <dt className="text-3xl font-semibold text-blue-300">{metric.value}</dt>
                <dd className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
                  {metric.label}
                </dd>
                <p className="mt-2 text-sm text-slate-400">{metric.caption}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="developers" className="mx-auto max-w-6xl space-y-8 px-6 py-16 sm:px-10 lg:px-16">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold">Perfiles destacados</h2>
          <p className="max-w-2xl text-slate-300">
            Todos los desarrolladores pasan por verificacion tecnica, entrevista de proyectos reales y revision de referencias.
            Programa una reunion para validar compatibilidad y disponibilidad.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {developers.map((developer) => (
            <article
              key={developer.name}
              className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-[0_0_35px_rgba(15,23,42,0.45)] transition hover:border-blue-500/60"
            >
              <div className="space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{developer.name}</h3>
                    <p className="text-sm uppercase tracking-wide text-blue-200">{developer.title}</p>
                  </div>
                  <span className="rounded-full border border-slate-700 px-4 py-1 text-xs font-semibold text-slate-300">
                    {developer.location}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{developer.experience}</p>
                <dl className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <dt className="text-xs uppercase tracking-wide text-slate-400">Tarifa</dt>
                    <dd className="mt-1 text-lg font-semibold text-blue-200">{developer.rate}</dd>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <dt className="text-xs uppercase tracking-wide text-slate-400">Disponibilidad</dt>
                    <dd className="mt-1 text-sm text-slate-200">{developer.availability}</dd>
                  </div>
                </dl>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Competencias</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {developer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Historias recientes</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {developer.projects.map((project) => (
                      <li key={project.name} className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3">
                        <span className="font-semibold text-slate-100">{project.name}</span>
                        <span className="block text-xs text-slate-400">{project.result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-800 pt-6">
                <Link
                  href="#request"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-blue-400"
                >
                  Solicitar disponibilidad
                </Link>
                <Link
                  href={developer.profileLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-blue-200 underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
                >
                  Ver perfil completo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:px-10 lg:px-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Servicios y paquetes</h2>
            <p className="max-w-2xl text-slate-300">
              Mezcla paquetes o adapta el alcance segun tu etapa. Cada engagement incluye PM tecnico, seguimiento en vivo y
              reportes semanales.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {servicePackages.map((service) => (
              <article key={service.name} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
                <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                <p className="mt-3 text-sm text-slate-300">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-200">
                  {service.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold">Como trabajamos</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Nuestro equipo de partnership se encarga de filtrar perfiles, coordinar entrevistas y asegurar que las metas
              de negocio se traduzcan en entregables tecnicos.
            </p>
            <ol className="mt-10 space-y-6">
              {processSteps.map((step, index) => (
                <li key={step.title} className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg font-semibold text-slate-950">
                      {index + 1}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <p className="text-sm text-slate-300">{step.description}</p>
                      <p className="text-xs text-slate-400">{step.detail}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div
            id="request"
            className="rounded-3xl border border-blue-500/40 bg-slate-950/70 p-8 shadow-[0_0_45px_rgba(59,130,246,0.25)]"
          >
            <h3 className="text-2xl font-semibold text-white">Cuentanos sobre tu proyecto</h3>
            <p className="mt-2 text-sm text-slate-300">
              Completa el formulario y recibe tres perfiles a medida en menos de 48 horas.
            </p>
            <form action="#" method="post" className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ana Lopez"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ana@empresa.com"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>
              <div>
                <label
                  htmlFor="organization"
                  className="block text-xs font-semibold uppercase tracking-wide text-slate-400"
                >
                  Empresa u organizacion
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>
              <div>
                <label
                  htmlFor="project-type"
                  className="block text-xs font-semibold uppercase tracking-wide text-slate-400"
                >
                  Tipo de proyecto
                </label>
                <select
                  id="project-type"
                  name="projectType"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Selecciona una opcion
                  </option>
                  <option value="corporate">Sitio corporativo</option>
                  <option value="commerce">Comercio electronico</option>
                  <option value="headless">Headless con Next.js</option>
                  <option value="maintenance">Soporte continuo</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Presupuesto estimado
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Selecciona un rango
                    </option>
                    <option value="10-25">USD 10k - 25k</option>
                    <option value="25-50">USD 25k - 50k</option>
                    <option value="50-100">USD 50k - 100k</option>
                    <option value="100+">Mas de USD 100k</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-400"
                  >
                    Tiempo objetivo
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Selecciona un plazo
                    </option>
                    <option value="2-4">2 a 4 semanas</option>
                    <option value="4-8">1 a 2 meses</option>
                    <option value="8-12">2 a 3 meses</option>
                    <option value="12+">Mas de 3 meses</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Contexto adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Cuentanos sobre objetivos, integraciones y entregables clave."
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-400"
              >
                Enviar resumen del proyecto
              </button>
              <p className="text-xs text-slate-500">
                Al enviar aceptas recibir comunicacion sobre propuestas de talento y recomendaciones relacionadas.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:px-10 lg:px-16">
          <h2 className="text-3xl font-semibold">Historias de clientes</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
              >
                <div className="flex-1 space-y-4">
                  <p className="text-sm text-slate-300">{testimonial.statement}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                    {testimonial.project}
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-800 pt-4 text-sm text-slate-400">
                  {testimonial.name} - {testimonial.role}, {testimonial.company}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Recursos para tu equipo</h2>
            <p className="mt-3 max-w-xl text-slate-300">
              Explora guias, extensiones y buenas practicas para aprovechar al maximo la plataforma WordPress.
            </p>
            <ul className="mt-6 space-y-4">
              {resourceLinks.map((resource) => (
                <li key={resource.label} className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
                  <Link
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold text-blue-200 underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
                  >
                    {resource.label}
                  </Link>
                  <p className="mt-2 text-sm text-slate-300">{resource.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Preguntas frecuentes</h2>
            <div className="mt-4 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
                  <p className="text-sm font-semibold text-slate-200">{faq.question}</p>
                  <p className="mt-2 text-sm text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="border-y border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:px-16">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold text-white">Forma parte de la red de especialistas</h2>
            <p className="max-w-xl text-slate-300">
              Buscamos especialistas WordPress con enfoque en resultados medibles. Comparte tus casos de exito y te enviaremos
              proyectos alineados con tu experiencia.
            </p>
            <Link
              href="https://airtable.com/shrDeveloperWP"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Postularse como desarrollador
            </Link>
          </div>
          <div className="flex-1 space-y-4">
            {developerPerks.map((perk) => (
              <div key={perk.title} className="rounded-3xl border border-blue-500/40 bg-slate-950/70 p-6">
                <p className="text-lg font-semibold text-white">{perk.title}</p>
                <p className="mt-2 text-sm text-slate-300">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <div>
            <p className="font-semibold text-slate-200">WordPress Partner Network</p>
            <p className="text-xs text-slate-500">
              Acompanamos tu estrategia digital con talento especializado, procesos claros y entregables medibles.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="mailto:hola@wp-partners.dev"
              className="text-sm font-semibold text-blue-200 underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
            >
              hola@wp-partners.dev
            </Link>
            <Link
              href="https://cal.com/wp-partners/discovery"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
            >
              Agenda una llamada
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
