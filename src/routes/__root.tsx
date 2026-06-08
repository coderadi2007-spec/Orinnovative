import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4 text-white">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-display font-bold text-coral">404</h1>
        <h2 className="mt-4 text-2xl font-display">Page not found</h2>
        <p className="mt-2 text-white/60">The page you're looking for doesn't exist.</p>
        <Link to="/" className="pill-btn pill-solid mt-8">Back home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4 text-white">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-display">Something went wrong</h1>
        <p className="mt-2 text-white/60 text-sm">Please try again.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="pill-btn pill-solid">Try again</button>
          <a href="/" className="pill-btn pill-outline">Home</a>
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
      { title: "Orinnovative — Innovating The Technology" },
      { name: "description", content: "Orinnovative builds modern websites, mobile apps, custom software, blockchain solutions, UI/UX and digital marketing that grow your business." },
      { name: "author", content: "Orinnovative" },
      { property: "og:title", content: "Orinnovative — Innovating The Technology" },
      { property: "og:description", content: "Modern digital solutions: web, mobile, software, blockchain, branding." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
        <Toaster position="top-right" />
      </div>
    </QueryClientProvider>
  );
}
