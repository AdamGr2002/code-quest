import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {shadesOfPurple} from '@clerk/themes'
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { ConvexProviderWithClerk } from 'convex/react-clerk' // Import ConvexProviderWithClerk
import { ConvexReactClient } from 'convex/react' // Import ConvexReactClient

// Import your publishable key and Convex URL from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const CONVEX_URL = import.meta.env.VITE_CONVEX_URL // Make sure this is set

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key")
}
if (!CONVEX_URL) {
  throw new Error("Missing Convex URL")
}

const convex = new ConvexReactClient(CONVEX_URL);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider appearance={{ baseTheme:shadesOfPurple }} // Add your theme here
    publishableKey={PUBLISHABLE_KEY}>
      {/* Wrap with ConvexProviderWithClerk */}
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <App />
      </ConvexProviderWithClerk>
    </ClerkProvider>
  </React.StrictMode>,
)