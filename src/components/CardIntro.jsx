import "./CardIntro.scss";

export default function CardIntro({ intro }) {
  return (
    <div className="card-intro">
      <div className="content">
        <div className="image-frame">
          <img
            src={
              !document.body.classList.contains("buio")
                ? "/photos/intro-photo6.jpg"
                : "/photos/buio_photo.png"
            }
            alt=""
          ></img>
        </div>
        <div className="card-text">
          <p>
            <b>{intro?.greetings}</b>
          </p>

          {intro?.about?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
