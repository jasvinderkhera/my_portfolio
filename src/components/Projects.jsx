import React from "react";
import music from "./images/music-player.png";
import eduford from "./images/eduford.png";
import udemy from "./images/udemy.png";
import zaydn from "./images/zaydn.png";
import flatmate from "./images/flatmate.png"

function Projects() {
  return (
    <div>
      <div className="row project_row">
        <a href="https://musicplayer-ri2xbx4j6-jasvinderkheras-projects.vercel.app/" target="blank" className="col-4 mb-4 project_div nav-link">
          <div className="box border border-2">
            <img src={music} alt="" className="img-fluid project_img" />
            <a href="https://musicplayer-ri2xbx4j6-jasvinderkheras-projects.vercel.app/" target="blank" className="nav-link bg-secondary text-white">
              Music Player
            </a>
          </div>
        </a>
        <a href="https://jasvinderkhera.github.io/eduford_university/" target="blank" className="col-4 mb-4 project_div nav-link">
        <div className="box border border-2">
            <img src={eduford} alt="" className="img-fluid project_img" />
            <a href="https://jasvinderkhera.github.io/eduford_university/" target="blank" className="nav-link bg-secondary text-white">
              EduFord University
            </a>
          </div>
        </a>
        <a href="https://jasvinderkhera.github.io/udemy_clone/" target="blank" className="col-4 mb-4 project_div nav-link">
        <div className="box border border-2">
            <img src={udemy} alt="" className="img-fluid project_img" />
            <a href="https://jasvinderkhera.github.io/udemy_clone/" target="blank" className="nav-link bg-secondary text-white">
              Udemy
            </a>
          </div>
        </a>
        <a href="https://jasvinderkhera.github.io/portfolio/zaydn/index.html" target="blank" className="col-4 mb-4 project_div nav-link">
        <div className="box border border-2">
            <img src={zaydn} alt="" className="img-fluid project_img text-center" />
            <a href="https://jasvinderkhera.github.io/portfolio/zaydn/index.html" target="blank" className="nav-link bg-secondary text-white">
              Zaydn
            </a>
          </div>
        </a>
        <a href="https://jasvinderkhera.github.io/flatmate/index.html" target="blank" className="col-4 mb-4 project_div nav-link">
        <div className="box border border-2">
            <img src={flatmate} alt="" className="img-fluid project_img text-center" />
            <a href="https://jasvinderkhera.github.io/flatmate/index.html" target="blank" className="nav-link bg-secondary text-white">
              FlatMate
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
