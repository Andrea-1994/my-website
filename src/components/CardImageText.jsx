import "./CardImageText.scss";

export default function CardImageText({ image, text, revert = false }) {
  return (
    <div className={`card-image-text ${revert ? "revert" : ""}`}>
      <div className="content">
        {image && (
          <div className="image-frame">
            <img src={image}></img>
          </div>
        )}

        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </div>
  );
}
