import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './app/routes/App.tsx'
import { Suspense } from 'react'
import './app/styles/main.scss'
import './i18n'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	// <StrictMode>
	<QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>ГОООООООООЛ!</div>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
	</QueryClientProvider>
	// </StrictMode>
)
