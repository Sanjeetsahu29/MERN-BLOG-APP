import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashbaord from "./pages/Dashbaord"
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from './components/Header'
function App() {
  return (
    //Declarative Routing (UI-Based Routing)
    <BrowserRouter>
      <Header/>
      <Routes>
        < Route path="/" element={<Home/>}/>
        < Route path="/about" element={<About/>}/>
        < Route path="/sign-in" element={<SignIn/>}/>
        < Route path="/sign-up" element={<SignUp/>}/>
        < Route path="/dashboard" element={<Dashbaord/>}/>
        < Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
// Data-based routing
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/signin",
//     element: <SignIn />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/projects",
//     element: <Projects />,
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }
