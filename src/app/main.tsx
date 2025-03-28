import App from "@/app/routes/App.tsx";
import "@/app/styles/main.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "../i18n.ts";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
