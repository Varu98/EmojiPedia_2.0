import dict from "./dict";

function createCard(card) {
  return (
    <div className="cards">
      <h1 className="card-name">{card.name}</h1>
      <p className="card-desc">{card.desc}</p>
    </div>
  );
}
function Card(props) {
  return <div className="card">{dict.map(createCard)}</div>;
}
export default Card;
