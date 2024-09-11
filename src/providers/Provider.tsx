import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PrimeReactProvider } from 'primereact/api'
import type { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const queryClient = new QueryClient()

export default function Provider({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        {children}
      </PrimeReactProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
