"use client";

import {
  Briefcase,
  Calendar,
  ChevronRight,
  FileText,
  Home as HomeIcon,
  LayoutDashboard,
  Menu,
  Receipt,
  Settings,
  Users,
  X,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo, useState } from "react";

type NavLink = {
  name: string;
  href: string;
  icon: ReactNode;
  description?: string;
};

const primaryLinks: NavLink[] = [
  {
    name: "Inicio",
    href: "/home",
    icon: <HomeIcon width={18} />,
    description: "Explora el portal y descubre los servicios.",
  },
  {
    name: "Dashboard",
    href: "/app",
    icon: <LayoutDashboard width={18} />,
    description: "Resumen semanal y metricas personales.",
  },
  {
    name: "Proyectos",
    href: "/app/projects",
    icon: <Briefcase width={18} />,
    description: "Roadmap activo, entregables y estatus.",
  },
  {
    name: "Calendario",
    href: "/app/calendar",
    icon: <Calendar width={18} />,
    description: "Reuniones, bloqueos y recordatorios.",
  },
  {
    name: "Clientes",
    href: "/app/clients",
    icon: <Users width={18} />,
    description: "Contactos, notas y objetivos por cuenta.",
  },
  {
    name: "Facturacion",
    href: "/app/invoices",
    icon: <Receipt width={18} />,
    description: "Facturas, pagos y reportes recurrentes.",
  },
  {
    name: "Recursos",
    href: "/app/resources",
    icon: <BookOpen width={18} />,
    description: "Componentes Gutenberg, snippets y guias.",
  },
  {
    name: "Configuracion",
    href: "/app/settings",
    icon: <Settings width={18} />,
    description: "Perfil profesional, tarifas y preferencias.",
  },
];

const quickActions: NavLink[] = [
  {
    name: "Nueva propuesta",
    href: "/app/proposals/new",
    icon: <FileText width={16} />,
  },
  {
    name: "Actualizar disponibilidad",
    href: "/app/availability",
    icon: <Calendar width={16} />,
  },
  {
    name: "Registrar entregable",
    href: "/app/tasks/new",
    icon: <Briefcase width={16} />,
  },
];

export default function Nav({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const resolvedLinks = useMemo(
    () =>
      primaryLinks.map((link) => {
        let isActive = false;
        if (link.href === "/app") {
          isActive = pathname === "/app" || pathname === "/app/";
        } else if (link.href === "/home") {
          isActive = pathname === "/" || pathname.startsWith("/home");
        } else {
          isActive = pathname.startsWith(link.href);
        }
        return { ...link, isActive };
      }),
    [pathname],
  );

  const navContent = (
    <aside className="flex h-full flex-col justify-between border-slate-800 bg-slate-950/70 p-6">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Link href="/home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10">
              <Image
                src="/logo.png"
                alt="WordPress Partner Network"
                width={24}
                height={24}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                WordPress Partner Network
              </p>
              <p className="text-[11px] uppercase tracking-[0.25em] text-blue-200">
                Developers
              </p>
            </div>
          </Link>
        </div>

        <nav className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Navegacion
          </p>
          <div className="space-y-1">
            {resolvedLinks.map(({ name, href, icon, isActive, description }) => (
              <Link
                key={name}
                href={href}
                className={`group flex items-start gap-3 rounded-2xl border border-transparent px-3 py-3 transition ${
                  isActive
                    ? "border-blue-500/40 bg-blue-500/10 text-white"
                    : "text-slate-300 hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-white"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl border ${
                    isActive
                      ? "border-blue-500/60 bg-blue-500/20 text-blue-200"
                      : "border-slate-700 bg-slate-900 text-slate-400 group-hover:border-blue-500/40 group-hover:text-blue-200"
                  }`}
                >
                  {icon}
                </span>
                <span className="flex flex-col text-left">
                  <span className="text-sm font-semibold">{name}</span>
                  {description ? (
                    <span className="text-xs text-slate-500 group-hover:text-slate-300">
                      {description}
                    </span>
                  ) : null}
                </span>
                <ChevronRight
                  width={16}
                  className={`ml-auto mt-1 transition ${
                    isActive
                      ? "text-blue-200"
                      : "text-slate-600 group-hover:text-blue-200"
                  }`}
                />
              </Link>
            ))}
          </div>
        </nav>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Acciones rapidas
          </p>
          <div className="space-y-2">
            {quickActions.map(({ name, href, icon }) => (
              <Link
                key={name}
                href={href}
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-blue-200 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-100"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-500/40 bg-blue-500/10 text-blue-200">
                  {icon}
                </span>
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4">
          <p className="text-sm font-semibold text-white">
            Comparte un caso de exito
          </p>
          <p className="mt-1 text-xs text-blue-100">
            Documenta aprendizajes de tus proyectos WordPress y ayuda a otros
            especialistas.
          </p>
          <Link
            href="/app/resources/share"
            className="mt-3 inline-flex text-xs font-semibold text-blue-200 underline decoration-blue-500 underline-offset-4 hover:text-blue-100"
          >
            Enviar recurso
          </Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
          {children}
        </div>
      </div>
    </aside>
  );

  return (
    <>
      <button
        className="fixed left-4 top-5 z-30 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-200 shadow-lg transition hover:border-blue-500/40 hover:text-white sm:hidden"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Abrir navegacion"
      >
        {mobileOpen ? <X width={20} /> : <Menu width={20} />}
      </button>

      <div
        className={`fixed inset-y-0 left-0 z-20 w-72 transform border-r border-slate-800 bg-slate-950/90 backdrop-blur transition duration-300 sm:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
      >
        {navContent}
      </div>
    </>
  );
}
