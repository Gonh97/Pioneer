import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Wireline from "./pages/services/Wireline";
import Environmental from "./pages/services/Environmental";
import Gas from "./pages/services/Gas";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "nosotros", Component: About },
      { path: "servicios/wireline", Component: Wireline },
      { path: "servicios/saneamiento-ambiental", Component: Environmental },
      { path: "servicios/proyectos-de-gas", Component: Gas },
      { path: "proyectos", Component: Projects },
      { path: "contacto", Component: Contact },
    ],
  },
]);