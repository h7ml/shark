import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface QueryClientWrapperProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()

const QueryClientWrapper: React.FC<QueryClientWrapperProps> = ({
  children,
}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default QueryClientWrapper
