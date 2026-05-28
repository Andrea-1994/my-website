import { useEffect, useState } from "react";

import "./Projects.scss";
import ProjectCard from "../components/ProjectCard";
import ScrollUp from "../components/ScrollUp";

import { isMobile } from "../utils";

import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../api/projects.api";

export default function Contacts() {
  //get projects
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const [highlighted, setHighlighted] = useState(null);
  const [projectsList, setProjectsList] = useState(projects?.list);
  const [popup, setPopup] = useState(false);
  const [light, setLight] = useState(
    () => !document.body.classList.contains("buio"),
  );

  useEffect(() => {
    setProjectsList(projects?.list);
  }, [projects?.list]);

  useEffect(() => {
    if (projectsList && !isMobile()) {
      var prevList = projectsList;
      if (highlighted != null) {
        var item = prevList.find((x) => x.id === highlighted);

        if (item) {
          var rest = prevList
            .filter((x) => x.id !== highlighted)
            .sort((a, b) => a.id - b.id);
          var newList = [item, ...rest];
          setProjectsList(newList);
        }
      } else {
        setProjectsList(projects.list);
      }
    }
  }, [highlighted]);

  useEffect(() => {
    if (!light) {
      const seen = sessionStorage.getItem("seenSecretPopup");

      if (!seen) {
        sessionStorage.setItem("seenSecretPopup", "true");
        setPopup(true);
        setTimeout(() => setPopup(false), 2000);
      }
    }
  }, [light]);

  return (
    <div>
      <div className={`popup-general buio ${popup ? "show" : ""}`}>
        ● ● <br />
        You found a little secret
      </div>
      <h2 className="page-title">Check out my projects</h2>
      <p className="page-subtitle">
        These are solo projects I’ve built myself, made mostly for fun and
        learning. I’ve worked on more, but these are the only ones I have
        material to show.
      </p>
      <div className="projects">
        {projectsList?.map((item) => (
          <ProjectCard
            key={item.id}
            setHighlighted={setHighlighted}
            setLight={setLight}
            highlighted={highlighted}
            light={light}
            project={item}
          />
        ))}
      </div>
      <ScrollUp />
    </div>
  );
}
