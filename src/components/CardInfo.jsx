import "./CardInfo.scss";

export default function CardInfo({ info }) {
  return (
    <div className="card-info">
      <h2>{info?.title}</h2>
      <div className="content">
        {info?.list?.map((item, index) => (
          <p key={index}>
            <b>{item.field}</b> {item.value}
          </p>
        ))}
      </div>
    </div>
  );
}
