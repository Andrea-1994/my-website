import CardImageText from "../components/CardImageText";
import CardIntro from "../components/CardIntro";
import CardInfo from "../components/CardInfo";
import ScrollUp from "../components/ScrollUp";
import "./Bio.scss";
import { useState, useRef, useEffect } from "react";
import { track } from "@vercel/analytics";

import { useQuery } from "@tanstack/react-query";
import { getIntro, getBio, getInfo } from "../api/bio.api";

export default function Bio() {
  //get intro
  const { data: intro } = useQuery({
    queryKey: ["intro"],
    queryFn: getIntro,
  });

  //get bio
  const { data: bio } = useQuery({
    queryKey: ["bio"],
    queryFn: getBio,
  });

  //get info
  const { data: info } = useQuery({
    queryKey: ["info"],
    queryFn: getInfo,
  });

  const [show, setShow] = useState(false);
  const bioRef = useRef(null);

  useEffect(() => {
    if (show) {
      bioRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [show]);

  function showBio() {
    setShow(true);
    track("showBio");
  }

  return (
    <div>
      <CardIntro intro={intro} />
      <CardInfo info={info} />
      <h2>Bio</h2>
      <div className="bio-content">
        <div>
          <div className="sure-container">
            <CardImageText
              text={bio?.teaser}
              image={bio?.teaserPhoto}
              revert={true}
            />
            <p>
              Anyway, if you’re still here reading this, maybe you want to know
              more… maybe we should start from the beginning
            </p>
            <button className={`${show ? "hide" : ""}`} onClick={showBio}>
              Tell me everything ▼
            </button>
          </div>
          <div className={`bio-hide ${show ? "" : "hide"}`} ref={bioRef}>
            <div className="text-container">
              <p>
                <b>Ok, fine.</b>
              </p>
              <p>
                <b>get comfortable...</b>
              </p>
            </div>
            <div>
              {bio?.story?.map((item, index) => (
                <CardImageText
                  key={index}
                  text={item.text}
                  image={item.photo}
                  revert={index % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ScrollUp />
    </div>
  );
}
