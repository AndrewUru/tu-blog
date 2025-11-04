import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "@/components/nav";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Nav>
        <div className="space-y-2 text-xs text-slate-400">
          <p>Ya eres parte de la red de developers?</p>
          <Link
            href="/app"
            className="inline-flex text-blue-200 underline decoration-blue-500 underline-offset-4 transition hover:text-blue-100"
          >
            Ir al dashboard
          </Link>
        </div>
      </Nav>
      <div className="min-h-screen sm:pl-72">{children}</div>
    </div>
  );
}
