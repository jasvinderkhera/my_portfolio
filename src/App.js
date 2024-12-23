import { NavLink, Route, Routes, Navigate, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Qualifications from './components/Qualifications'
import Skills from './components/Skills'
import dp from './images/sqdp.jpg'
import menubtn from '../src/components/images/menu.png'
import './App.css';
import Projects from "./components/Projects";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [menu, setMenu] = useState('hide')
  const [modalVisible, setModalVisible] = useState(false);




  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <BrowserRouter>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3 menu">
            <div className="border p-md-2 p-0 rounded">
              <div className="p-md-4 px-3 py-2 text-center d-md-block  d-flex gap-2 flex-row-reverse justify-content-between align-items-center">
                <img src={dp} className="img-fluid rounded-circle mb-2" alt="" />
                
                <div className="">
                <h4 className="mb-0">Jasvinder Khera</h4>
                <h6 className="fw-light">Frontend Developer/UI/UX Designer</h6>
                </div>
                <div className="mob-menu-btn d-block d-md-none" onClick={()=> {handleOpenModal()}}>
                  <img src={menubtn} alt="" className="img-fluid" style={{height:'24px', width:"24px"}}/>
                </div>

                
              </div>

              <div className="list-group d-none d-md-block px-2 mb-2">
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
                    Contact/Resume
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
        <div>
               <Modal show={modalVisible} onHide={handleCloseModal} >
                <Modal.Body>
                <div className="inner-mob-menu d-flex align-items-start flex-column pt-5">
                <p className="nav-link px-4 py-3 fs-3 mb-0" onClick={()=>{handleCloseModal()}}>X</p>
                <Link to={'/about'} className="nav-link px-3 py-3 fs-5" onClick={()=>{handleCloseModal()}}>About</Link>
                <Link to={'/skills'} className="nav-link px-3 py-3 fs-5" onClick={()=>{handleCloseModal()}}>Skills</Link>
                <Link to={'/qualifications'} className="nav-link px-3 py-3 fs-5" onClick={()=>{handleCloseModal()}}>Qualification</Link>
                <Link to={'/experience'} className="nav-link px-3 py-3 fs-5" onClick={()=>{handleCloseModal()}}>Work Experience</Link>
                <Link to={'/contact'} className="nav-link px-3 py-3 fs-5" onClick={()=>{handleCloseModal()}}>Contact/Resume</Link>
                <Link to={'/projects'} className="nav-link px-3 py-3 fs-5" onClick={()=>{handleCloseModal()}}>Projects</Link>
                </div>
                </Modal.Body>
               </Modal>
                </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
