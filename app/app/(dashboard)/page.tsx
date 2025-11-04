import Link from "next/link";

type Metric = {
  label: string;
  value: string;
  delta: string;
  detail: string;
};

type Project = {
  name: string;
  client: string;
  status: "Discovery" | "En progreso" | "QA" | "Standby";
  budget: string;
  deadline: string;
  tags: string[];
};

type Meeting = {
  title: string;
  client: string;
  date: string;
  time: string;
  channel: string;
  agenda: string;
};

type Task = {
  title: string;
  type: "Desarrollo" | "Reunion" | "Documentacion" | "Entrega";
  due: string;
  status: "En curso" | "Pendiente" | "Bloqueado" | "Completado";
  project: string;
};

type Feedback = {
  client: string;
  summary: string;
  rating: string;
  updatedAt: string;
};

const metrics: Metric[] = [
  {
    label: "Horas disponibles esta semana",
    value: "18 h",
    delta: "-4 h vs semana anterior",
    detail: "Bloques libres Mar y Jue en la tarde",
  },
  {
    label: "Satisfaccion clientes",
    value: "4.9 / 5",
    delta: "+0.2 en 30 dias",
    detail: "Basado en 12 evaluaciones recientes",
  },
  {
    label: "Ingresos confirmados",
    value: "USD 11,800",
    delta: "+12% mes sobre mes",
    detail: "Contratos activos y pre aprobados",
  },
  {
    label: "Conversion de propuestas",
    value: "63%",
    delta: "2 propuestas firmadas esta semana",
    detail: "3 propuestas en seguimiento",
  },
];

const projects: Project[] = [
  {
    name: "EduNext LMS bloques premium",
    client: "EduNext",
    status: "En progreso",
    budget: "USD 32k",
    deadline: "10 Feb 2025",
    tags: ["Gutenberg", "Design system", "Accesibilidad"],
  },
  {
    name: "Migracion tienda Mercado Verde",
    client: "Mercado Verde",
    status: "QA",
    budget: "USD 21k",
    deadline: "24 Ene 2025",
    tags: ["WooCommerce", "Performance", "Integraciones"],
  },
  {
    name: "Headless marketing site",
    client: "SaaS Control",
    status: "Discovery",
    budget: "USD 18k",
    deadline: "15 Mar 2025",
    tags: ["Headless", "Next.js", "WPGraphQL"],
  },
  {
    name: "Mantenimiento mensual",
    client: "Diario Global",
    status: "Standby",
    budget: "USD 6k",
    deadline: "31 Ene 2025",
    tags: ["Observabilidad", "SEO tecnico"],
  },
];

const meetings: Meeting[] = [
  {
    title: "Sprint review S2 2025",
    client: "EduNext",
    date: "14 Ene 2025",
    time: "10:00 - 11:00 CET",
    channel: "Google Meet",
    agenda: "Demo bloques interactivos, roadmap accesibilidad",
  },
  {
    title: "Kickoff discovery headless",
    client: "SaaS Control",
    date: "15 Ene 2025",
    time: "16:30 - 17:30 CET",
    channel: "Zoom",
    agenda: "Revisar metas de marketing y definir backlog inicial",
  },
  {
    title: "QA cierre WooCommerce",
    client: "Mercado Verde",
    date: "17 Ene 2025",
    time: "09:00 - 09:45 CST",
    channel: "Slack huddle",
    agenda: "Validar flujo de compra y checklist de rendimiento",
  },
];

const tasks: Task[] = [
  {
    title: "Integrar tabla de precios responsiva",
    type: "Desarrollo",
    due: "13 Ene",
    status: "En curso",
    project: "EduNext LMS bloques premium",
  },
  {
    title: "Entregar propuesta tecnica headless",
    type: "Documentacion",
    due: "15 Ene",
    status: "Pendiente",
    project: "Headless marketing site",
  },
  {
    title: "Revisar alertas de uptime",
    type: "Entrega",
    due: "Hoy",
    status: "En curso",
    project: "Mantenimiento mensual",
  },
  {
    title: "Preparar preguntas discovery",
    type: "Reunion",
    due: "14 Ene",
    status: "Pendiente",
    project: "Headless marketing site",
  },
];

const feedback: Feedback[] = [
  {
    client: "Mercado Verde",
    summary: "Checkout mobile con 42 por ciento de mejora y sin bugs en QA.",
    rating: "5.0",
    updatedAt: "12 Ene 2025",
  },
  {
    client: "Diario Global",
    summary: "Reduccion de TTFB del 35 por ciento tras optimizar cache multi region.",
    rating: "4.8",
    updatedAt: "10 Ene 2025",
  },
  {
    client: "EduNext",
    summary: "Bloques accesibles listos para lanzamiento piloto UX.",
    rating: "4.9",
    updatedAt: "08 Ene 2025",
  },
];

export default function DashboardHome() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10">
      <header className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-950/60 p-8 shadow-[0_0_30px_rgba(15,23,42,0.35)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
              Tablero personal
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              Hola Ana, planifiquemos tu semana
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Repasa proyectos activos, disponibilidad, feedback y acciones
              rapidas para mantener tus entregables al dia.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/app/profile"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
            >
              Editar perfil
            </Link>
            <Link
              href="/app/proposals/new"
              className="rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-blue-400"
            >
              Crear propuesta
            </Link>
            <Link
              href="/app/availability"
              className="rounded-full border border-blue-500/50 px-4 py-2 text-xs font-semibold text-blue-200 transition hover:border-blue-400 hover:text-blue-100"
            >
              Actualizar disponibilidad
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
            >
              <p className="text-xs uppercase tracking-wide text-slate-400">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-blue-200">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-emerald-300">{metric.delta}</p>
              <p className="mt-3 text-xs text-slate-400">{metric.detail}</p>
            </div>
          ))}
        </div>
      </header>

      <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Proyectos</h2>
            <Link
              href="/app/projects"
              className="text-xs font-semibold text-blue-200 underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
            >
              Ver todos
            </Link>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-[640px] w-full table-fixed border-separate border-spacing-y-4 text-sm text-slate-300">
              <thead className="text-left text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-4">Proyecto</th>
                  <th className="px-4">Cliente</th>
                  <th className="px-4">Estado</th>
                  <th className="px-4">Presupuesto</th>
                  <th className="px-4">Entrega</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.name}
                    className="rounded-2xl border border-slate-800 bg-slate-950/80"
                  >
                    <td className="rounded-l-2xl px-4 py-4">
                      <p className="font-semibold text-white">{project.name}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] font-medium text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-slate-400">{project.client}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-200">
                        {project.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-slate-300">{project.budget}</td>
                    <td className="rounded-r-2xl px-4 py-4 text-slate-400">
                      {project.deadline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Agenda proxima
              </h2>
              <Link
                href="/app/calendar"
                className="text-xs font-semibold text-blue-200 underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
              >
                Abrir calendario
              </Link>
            </div>
            <ul className="mt-5 space-y-4">
              {meetings.map((meeting) => (
                <li
                  key={meeting.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {meeting.title}
                  </p>
                  <p className="text-xs text-slate-400">{meeting.client}</p>
                  <p className="mt-2 text-xs text-blue-200">
                    {meeting.date} — {meeting.time}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Canal: {meeting.channel}
                  </p>
                  <p className="mt-2 text-xs text-slate-300">{meeting.agenda}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Feedback</h2>
              <Link
                href="/app/feedback"
                className="text-xs font-semibold text-blue-200 underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
              >
                Ver historial
              </Link>
            </div>
            <ul className="mt-5 space-y-4">
              {feedback.map((item) => (
                <li
                  key={item.client}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{item.client}</span>
                    <span>{item.rating} ★</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-200">{item.summary}</p>
                  <p className="mt-2 text-[11px] text-slate-500">
                    Actualizado {item.updatedAt}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Tablero de tareas</h2>
            <Link
              href="/app/tasks"
              className="text-xs font-semibold text-blue-200 underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
            >
              Administrar tareas
            </Link>
          </div>
          <ul className="mt-5 space-y-4">
            {tasks.map((task) => (
              <li
                key={task.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">
                    {task.title}
                  </p>
                  <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-200">
                    {task.status}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span>{task.type}</span>
                  <span>•</span>
                  <span>Entrega: {task.due}</span>
                  <span>•</span>
                  <span>{task.project}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
            <h2 className="text-xl font-semibold text-white">
              Acciones rapidas
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-blue-200">
              <li>
                <Link
                  href="/app/invoices/new"
                  className="underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
                >
                  Generar factura para Mercado Verde
                </Link>
              </li>
              <li>
                <Link
                  href="/app/proposals"
                  className="underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
                >
                  Revisar propuesta enviada a StartUp Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/app/resources/library"
                  className="underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
                >
                  Explorar componentes Gutenberg reutilizables
                </Link>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
            <h2 className="text-xl font-semibold text-white">Notas rapidas</h2>
            <div className="mt-4 space-y-3 text-xs text-slate-300">
              <p>
                Agregar tablas de rendimiento a informe mensual de Diario Global.
              </p>
              <p>
                Preparar demo en vivo para EduNext con nuevos bloques accesibles.
              </p>
              <p>
                Confirmar disponibilidad para hackathon comunitario WordPress Summit.
              </p>
            </div>
            <Link
              href="/app/notes"
              className="mt-4 inline-flex text-xs font-semibold text-blue-200 underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
            >
              Abrir bloc de notas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
