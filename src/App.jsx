import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faculty from "./pages/Faculty";
import Subjects from "./pages/Subjects";
import Rooms from "./pages/Rooms";
import Timetable from "./pages/Timetable";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <div className="main-content">
          <Navbar />

          {/* Content */}
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/features" element={<Features />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Luxury Footer */}
          <footer className="footer">
            <div className="footer-container">
              <h2>AcademicFlow Enterprise</h2>

              <p>
                Intelligent University Scheduling Platform powered by
                Automation, Optimization and Advanced Resource Planning.
              </p>

              <div className="footer-stats">
                <div>
                  <h3>50K+</h3>
                  <span>Schedules Generated</span>
                </div>

                <div>
                  <h3>500+</h3>
                  <span>Faculty Managed</span>
                </div>

                <div>
                  <h3>99.9%</h3>
                  <span>Conflict Free</span>
                </div>
              </div>

              <div className="footer-bottom">
                © 2026 AcademicFlow Enterprise. All Rights Reserved.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}