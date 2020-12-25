import GameCard from "./GameCard";
import Link from "./Link";

const List = ({ id, title, games }) => (
  <section id={id}>
    <h2>{title}</h2>
    {games ? (
      <div
        css={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {games.map((game) => (
          <Link key={game.id} css={{ marginRight: 10 }} href={`/${game.id}`}>
            <GameCard game={game} />
          </Link>
        ))}
      </div>
    ) : (
      <p css={{ textAlign: "center", marginBottom: 50 }}>Such Emptiness</p>
    )}
  </section>
);

export default List;
