import React from "react";
import music from "./images/music-player.png";
import eduford from "./images/eduford.png";
import udemy from "./images/udemy.png";
import zaydn from "./images/zaydn.png";
import flatmate from "./images/flatmate.png";
import legal from "./images/legal.png";
import crud_operations from "./images/crud_operations.png";
import etsy from "./images/etsy.png"

function Projects() {
  return (
    <div>
      <div className="row project_row">
        <a
          href="https://basic-crud-frontend-eight.vercel.app/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img
              src={crud_operations}
              alt=""
              className="img-fluid project_img text-center"
            />
            <a
              href="https://basic-crud-frontend-eight.vercel.app/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              CRUD Operations
            </a>
          </div>
        </a>
        <a
          href="https://legal-so.vercel.app/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img
              src={legal}
              alt=""
              className="img-fluid project_img text-center"
            />
            <a
              href="https://legal-so.vercel.app/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              Legal.So
            </a>
          </div>
        </a>
        <a
          href="https://jasvinderkhera.github.io/udemy_clone/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img src={udemy} alt="" className="img-fluid project_img" />
            <a
              href="https://jasvinderkhera.github.io/udemy_clone/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              Udemy
            </a>
          </div>
        </a>
        <a
          href="https://flatmatefrontend.vercel.app/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img
              src={flatmate}
              alt=""
              className="img-fluid project_img text-center"
            />
            <a
              href="https://flatmatefrontend.vercel.app/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              FlatMate
            </a>
          </div>
        </a>
        <a
          href="https://jasvinderkhera.github.io/eduford_university/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img src={eduford} alt="" className="img-fluid project_img" />
            <a
              href="https://jasvinderkhera.github.io/eduford_university/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              EduFord University
            </a>
          </div>
        </a>
        <a
          href="https://etsy-clone-mu.vercel.app/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img src={etsy} alt="" className="img-fluid project_img" />
            <a
              href="https://etsy-clone-mu.vercel.app/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              Etsy
            </a>
          </div>
        </a>

        <a
          href="https://musicplayer-xi-eight.vercel.app/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img src={music} alt="" className="img-fluid project_img" />
            <a
              href="https://musicplayer-xi-eight.vercel.app/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              Music Player
            </a>
          </div>
        </a>

        <a
          href="https://jasvinderkhera.github.io/portfolio/zaydn/index.html"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img
              src={zaydn}
              alt=""
              className="img-fluid project_img text-center"
            />
            <a
              href="https://jasvinderkhera.github.io/portfolio/zaydn/index.html"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              Zaydn
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
