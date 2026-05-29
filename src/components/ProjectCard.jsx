/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { isMobile } from "../utils";
import { useSearchParams } from "react-router-dom";

export default function ProjectCard({
  setHighlighted,
  setLight,
  highlighted,
  light,
  project,
}) {
  const card = useRef(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (light) {
      document.body.classList.remove("buio");
    } else {
      document.body.classList.add("buio");
    }
  }, [light]);

  useEffect(() => {
    const id = searchParams.get("id");
    if (project.id == id) {
      highlightThis();
    }
  }, [searchParams]);

  function scrolltoCard() {
    if (isMobile()) {
      //scroll to card top

      setTimeout(
        () => card.current?.scrollIntoView({ behavior: "smooth" }),
        200,
      );
    } else {
      //scroll to top page
      setTimeout(
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        }),
        500,
      );
    }
  }

  function highlightThis() {
    setHighlighted((prev) => (prev === project.id ? null : project.id));
    scrolltoCard();
  }

  return (
    <div
      ref={card}
      id={project.id}
      className={`project-card ${highlighted == project.id ? "highlight" : ""}`}
    >
      <div className="content">
        <div className="imgs-list">
          <img
            className="project-cover"
            src={project?.cover}
            onClick={highlightThis}
          ></img>
          <img
            src={`${project.name == "Buio" ? (light ? project?.img_1 : "/projects/buio/img_buio_off.png") : project?.img_1}`}
            onClick={
              project.name == "Buio"
                ? () => setLight((prev) => !prev)
                : undefined
            }
          ></img>
          <img src={project?.img_2}></img>
          <img src={project?.img_3}></img>
        </div>
        <div className="info-container">
          <div className="main-info">
            <div>
              <p className="title">{project?.name}</p>
              <p>{project?.shortDesc}</p>
            </div>
            {(highlighted != project.id || !isMobile()) && (
              <div>
                <span>Made with:</span>
                <p>
                  <b>{project?.madeWith}</b>
                </p>
              </div>
            )}
          </div>
          <div className="desc">
            <div>
              <span>Description:</span>
              <p>{project?.desc}</p>
            </div>
            <div>
              <span>Year:</span>

              <p>
                <b>{project?.year}</b>
              </p>
            </div>

            {highlighted == project.id && isMobile() && (
              <div>
                <span>Made with:</span>
                <p>
                  <b>{project?.madeWith}</b>
                </p>
              </div>
            )}
          </div>

          <div className="btns">
            <button className="show-more" onClick={highlightThis}>
              {!isMobile() &&
                (highlighted == project.id ? "◄ Show Less" : "Show More ►")}

              {isMobile() &&
                (highlighted == project.id ? "▲ Show Less" : "▼ Show More")}
            </button>
            <a href={project?.link} target="_blank" className="btn">
              {project?.linkLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
