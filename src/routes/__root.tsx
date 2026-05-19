import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-brown">404</p>
        <h1 className="mt-4 serif text-4xl">Bu səhifə tapılmadı.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Axtardığınız xatirə başqa bir səhifədə ola bilər.
        </p>
        <Link to="/" className="inline-flex mt-8 items-center justify-center rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.18em] text-background hover:bg-brown transition-colors">
          Ana səhifəyə qayıt
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-brown">Bir an...</p>
        <h1 className="mt-4 serif text-3xl md:text-4xl leading-tight">
          Xatirələrinizi hazırlayarkən kiçik problem yarandı.
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Narahat olmayın, heç nə itməyib. Yenidən cəhd edək.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.18em] text-background hover:bg-brown transition-colors"
          >
            Yenidən cəhd et
          </button>
          <a href="/" className="rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.18em] hover:bg-cream/50 transition-colors">
            Ana səhifə
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nəfəs — Ailə xatirələrinizi memoir kitabına çevirin" },
      { name: "description", content: "Nəfəs ailə söhbətlərini süni intellekt vasitəsilə illustrasiyalı memoir kitabına çevirir." },
      { property: "og:title", content: "Nəfəs — Xatirələr yaşadıqca yaşayır." },
      { property: "og:description", content: "AI ilə ailə söhbətlərindən illustrasiyalı memoir kitabı." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
