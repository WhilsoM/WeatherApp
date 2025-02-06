import "@/app/styles/main.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app/routes/App.tsx";
import "./i18n.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>ГОООООООООЛ!</div>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </QueryClientProvider>
  // </StrictMode>
);
