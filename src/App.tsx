import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home/Home"
import Layout from "./layouts/Layout"


// Dynamically determine the base path for React Router
const basePath = import.meta.env.VITE_REPO_NAME ? `/${import.meta.env.VITE_REPO_NAME}/` : '/';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
      <Route element={<Layout/>} path="/">
          <Route index element={<Home/>} />
          <Route element={<About/>} path="about" />
          <Route element={<Contact/>} path="contact" />
      </Route>
    ),    
    { basename: import.meta.env.BASE_URL || '/' } // Use import.meta.env.BASE_URL for Vite environment variables
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
