import ReactMarkdown from "react-markdown";

export default function CardExp({ exp, id }) {
  return (
    <div className={`card-exp ${id % 2 !== 0 ? "odd" : "even"}`}>
      <div className="content">
        <p className="type">
          <b>{exp?.type}</b>
        </p>
        <h2>{exp?.title}</h2>
        <p className="company">
          <small>At:</small>
          <b>{exp?.company}</b>
        </p>
        <p className="date">
          <small>From:</small> <b>{exp?.yearStart}</b> <small>To:</small>{" "}
          <b>{exp?.yearEnd}</b>
        </p>
        <div className="desc">
          <ReactMarkdown>{exp?.desc}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
