import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home/Home"
import Layout from "./layouts/Layout"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
      <Route element={<Layout/>} path="/">
          <Route index element={<Home/>} />
          <Route element={<About/>} path="about" />
          <Route element={<Contact/>} path="contact" />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
