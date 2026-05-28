/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, useRef } from "react";
import "./Experiences.scss";
import { isMobile } from "../utils";

import { useQuery } from "@tanstack/react-query";
import { getExperiences } from "../api/exp.api";
import CardExp from "../components/CardExp";
import ScrollUp from "../components/ScrollUp";

export default function Experiences() {
  //get experiences
  const { data: exps } = useQuery({
    queryKey: ["exps"],
    queryFn: getExperiences,
  });

  const [years, setYears] = useState([]);
  const currentYear = new Date().getFullYear();

  const range = (start, end) =>
    Array.from({ length: start - end + 1 }, (_, i) => start - i);

  //set years list
  useEffect(() => {
    var yearArr = [];

    //loop all years from now to 1994 and assign experiences
    for (let year = currentYear; year >= 1994; year--) {
      var yearObj = { year: year, exp: null };

      if (exps) {
        var expKey = Object.keys(exps).find((k) => {
          return year >= exps[k].yearStart && year < exps[k].yearEnd;
        });

        yearObj = { year: year, exp: expKey };
      }

      yearArr.push(yearObj);
    }

    setYears(yearArr);
  }, [exps]);

  //hilight years on scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".year-marker");

    let active = null;
    let activeNext = null;
    let activePrev = null;

    const handleScroll = () => {
      const isBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 1;

      const offset = isBottom ? 1 : 0.6;

      elements.forEach((el, index) => {
        if (active === el) return;
        const prev = elements[index - 1];
        const next = elements[index + 1];
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight * offset && rect.bottom > 0) {
          //reset actives
          active?.classList.remove("highlight");
          activeNext?.classList.remove("highlight-closest");
          activePrev?.classList.remove("highlight-closest");

          //set new actives
          el.classList.add("highlight");
          next?.classList.add("highlight-closest");
          prev?.classList.add("highlight-closest");
          active = el;
          activeNext = next;
          activePrev = prev;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [years]);

  return (
    <div>
      <h2 className="page-title">Scroll to explore my timeline</h2>
      <p className="page-subtitle">
        My professional experience and studies through time.
      </p>
      <div className="timeline-container">
        {years?.map((item, index) => {
          //year born print diffrently
          if (item.year == 1994) {
            return (
              <div key={index} className="period-box exp">
                <div
                  key={`year-${item.year}`}
                  id={`year-${item.year}`}
                  className="year-box"
                >
                  <div className="year-marker">
                    <div className="dot">
                      <span></span>
                    </div>

                    <small>{item.year}</small>
                  </div>
                </div>
                <div className="card-exp born">
                  <div className="content">
                    <b>I was born</b>
                  </div>
                </div>
              </div>
            );
          }

          //year without expriences
          if (!item.exp) {
            return (
              <div key={index} className="period-box">
                <div
                  key={`year-${item.year}`}
                  id={`year-${item.year}`}
                  className="year-box"
                >
                  <div className="year-marker">
                    <div className="dot">
                      <span></span>
                    </div>
                    <small>{item.year}</small>
                  </div>
                </div>
              </div>
            );
          }

          //year with experience
          if (item.year == exps[item.exp].yearEnd - 1) {
            var yEnd = exps[item.exp].yearEnd - 1;
            var yStart = exps[item.exp].yearStart;
            return (
              <div key={index} className="period-box exp">
                <div className="exp-years">
                  {range(yEnd, yStart).map((y, index) => (
                    <div
                      key={`year-${y}`}
                      id={`year-${y}`}
                      className={`year-box ${index == 0 ? "first" : ""}`}
                    >
                      <div className="year-marker">
                        <div className="dot">
                          <span></span>
                        </div>
                        <small>{y}</small>
                      </div>
                    </div>
                  ))}
                </div>
                <CardExp exp={exps[item.exp]} id={item.exp} />
              </div>
            );
          }

          return null;
        })}
      </div>
      <ScrollUp />
    </div>
  );
}
