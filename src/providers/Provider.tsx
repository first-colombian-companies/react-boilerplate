import type { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export default function Provider({ children }: ProvidersProps) {
  return (
    <>
      {children}
    </>
  )
}
