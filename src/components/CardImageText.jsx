import "./CardImageText.scss";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

export default function CardImageText({ image, text, revert = false }) {
  const options = {
    //replace links with <Link> for correct routing
    replace: (domNode) => {
      if (domNode.name === "a") {
        const href = domNode.attribs?.href;

        if (href?.startsWith("/")) {
          return <Link to={href}>{domNode.children[0].data}</Link>;
        }
      }
    },
  };

  return (
    <div className={`card-image-text ${revert ? "revert" : ""}`}>
      <div className="content">
        {image && (
          <div className="image-frame">
            <img src={image}></img>
          </div>
        )}

        {text && <p>{parse(text, options)}</p>}
      </div>
    </div>
  );
}
