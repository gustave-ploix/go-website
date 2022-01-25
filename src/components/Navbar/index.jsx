import "./title.scss";

export default function Title({
  isClicked,
  transitionIsDone,
}) {
  return (
    <div className={isClicked ? "titleBox visible" : "titleBox"}>
      <div className={transitionIsDone ? "line deployed" : "line"}></div>
      <h1 className="titleInHeader">GO</h1>
      <div className={transitionIsDone ? "line deployed" : "line"}></div>
    </div>
  );
}
