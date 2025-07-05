import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import  { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import {routeTree} from "./routing/routeTree.js"


const queryClient = new QueryClient()
const router = createRouter({ routeTree })

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  
)
