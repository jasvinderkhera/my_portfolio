import React from "react";
import music from "./images/music-player.png";

function Projects() {
  return (
    <div>
      <div className="row">
        <div className="col-3 d-flex align-items-center project_div">
          <div className="box border border-2">
            <img src={music} alt="" className="img-fluid project_img" />
            <a href="https://musicplayer-ri2xbx4j6-jasvinderkheras-projects.vercel.app/" target="blank" className="nav-link">
              Music Player
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
