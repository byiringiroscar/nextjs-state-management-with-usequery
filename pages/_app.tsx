import '@/styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState, useMemo } from 'react';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
    </QueryClientProvider>
  )
}
