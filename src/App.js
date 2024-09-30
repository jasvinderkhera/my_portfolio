import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Qualifications from './components/Qualifications'
import Skills from './components/Skills'
import dp from './images/sqdp.jpg'
import './App.css';
import Projects from "./components/Projects";

function App() {

  return (
    <BrowserRouter>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <div className="border p-2 rounded">
              <div className="p-4 text-center">
                <img src={dp} className="img-fluid rounded-circle mb-2" alt="" />
                <h4 className="mb-0">Jasvinder Khera</h4>
                <h6 className="fw-light">Frontend Developer/UI/UX Designer</h6>
              </div>

              <div className="list-group px-2 mb-2">
                <div className="list-group-item">
                  <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="active"
                  >
                    About Me
                  </NavLink>
                </div>
                <div className="list-group-item">
                  <NavLink
                    to="/skills"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Skills
                  </NavLink>
                </div>
                <div className="list-group-item">
                  <NavLink
                    to="/qualifications"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Qualifications
                  </NavLink>
                </div>
                <div className="list-group-item">
                  <NavLink
                    to="/experience"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Work Experience
                  </NavLink>
                </div>
                <div className="list-group-item">
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Contact
                  </NavLink>
                </div>
                <div className="list-group-item">
                  <NavLink
                    to="/projects"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Projects
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="p-4 rounded border">
              <Routes>
                <Route path="/" element={<Navigate to="/about" />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/qualifications" element={<Qualifications />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
