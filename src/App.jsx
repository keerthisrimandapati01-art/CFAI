import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import About from "./pages/About"
import Features from "./pages/Features"
import Faculty from "./pages/Faculty"
import Subjects from "./pages/Subjects"
import Rooms from "./pages/Rooms"
import Timetable from "./pages/Timetable"
import Contact from "./pages/Contact"

function Layout() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App