import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useRef, useState } from "react";

import HomeIcon from "../assets/icons/icon_home.svg?react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const spinningRef = useRef(true);
  const angle = useRef(0);
  const boxRef = useRef(null);

  //animate navbar gradient on mouse movement
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    let current = angle.current;
    let target = 10;
    let spinEnd = false;

    const handleMove = (e) => {
      const rect = box.getBoundingClientRect();

      ///const dx = e.clientX - (rect.left + rect.width / 2);
      // const dy = e.clientY - (rect.top + rect.height / 2);

      const cx = rect.left + rect.width / 2;

      const dx = e.clientX - cx;

      //force vertical to not matter
      const dy = 60;

      const raw = (Math.atan2(dy, dx) * 180) / Math.PI;

      target = raw;
    };

    const animate = () => {
      current = angle.current;
      if (!spinningRef.current) {
        spinEnd = false;
        /* //slower animation
        current += (target - current) * 0.03;

        box.style.setProperty("--grad-angle", `${current}deg`);*/
      } else {
        //do spin
        if (current > -169 && !spinEnd) {
          current += (-170 - current) * 0.1;
        } else {
          current += (170 - current) * 0.1;
          spinEnd = true;
          if (current > 169) {
            spinningRef.current = false;
          }
        }

        box.style.setProperty("--grad-angle", `${current}deg`);
      }

      angle.current = current;
      requestAnimationFrame(animate);
    };

    //window.addEventListener("mousemove", handleMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  //on change page
  const location = useLocation();
  useEffect(() => {
    //spin
    spinningRef.current = true;
    angle.current = 60;
  }, [location.pathname]);

  return (
    <nav className="navbar" ref={boxRef}>
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setOpen(false)}
        >
          <HomeIcon className="icon" />
        </NavLink>
        <NavLink
          to="/experiences"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Experiences Timeline
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Personal Projects
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Links & Contacts
        </NavLink>

        <div className="mobile-nav" onClick={() => setOpen((prev) => !prev)}>
          <button>
            <button className="menu-btn">
              <svg width="28" height="28" viewBox="0 0 24 24">
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="6"
                  y1="12"
                  x2="18"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="18"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </button>

          <div className={`mobile-links ${open ? "active" : ""}`}>
            <NavLink
              to="/experiences"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Experiences Timeline
            </NavLink>

            <hr></hr>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Personal Projects
            </NavLink>
            <hr></hr>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Links & Contacts
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
