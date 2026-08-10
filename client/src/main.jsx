
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'


//Clerk React SDK
 //gives you access to prebuilt components, hooks, and helpers to make user authentication easier.

 const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
 if(!PUBLISHABLE_KEY){
  throw new Error('Add your publishable key to .env file')
 }

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ClerkProvider>,
)
