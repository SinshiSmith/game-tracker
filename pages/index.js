import GameCard from "../components/GameCard";
import Link from "../components/Link";
import useUser from "../hooks/useUser";

const Home = () => {
  const [user] = useUser();
  const games =
    user.games?.reduce(
      (gamesObject, current) => ({
        ...gamesObject,
        [current.list]: [...(gamesObject[current.list] || []), current],
      }),
      {}
    ) || {};

  return (
    <main
      css={{
        padding: 10,
        section: {
          borderRadius: 5,
          marginBottom: 50,
          padding: "10px 30px",
          background: "#000000",
        },
      }}
    >
      <section id="playing">
        <h2>Currently Playing</h2>
        {games.playing ? (
          <div
            css={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {games.playing.map((game) => (
              <Link href={`/${game.id}`}>
                <GameCard key={game.id} game={game} />
              </Link>
            ))}
          </div>
        ) : (
          <p css={{ textAlign: "center", marginBottom: 50 }}>Such Emptiness</p>
        )}
      </section>
      <section id="onHold">
        <h2>Games On Hold</h2>
        {games.onHold ? (
          <div
            css={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {games.onHold.map((game) => (
              <Link href={`/${game.id}`}>
                <GameCard key={game.id} game={game} />
              </Link>
            ))}
          </div>
        ) : (
          <p css={{ textAlign: "center", marginBottom: 50 }}>Such Emptiness</p>
        )}
      </section>
      <section id="backlog">
        <h2>Up Next</h2>
        {games.backlog ? (
          <div
            css={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {games.backlog.map((game) => (
              <Link href={`/${game.id}`}>
                <GameCard key={game.id} game={game} />
              </Link>
            ))}
          </div>
        ) : (
          <p css={{ textAlign: "center", marginBottom: 50 }}>Such Emptiness</p>
        )}
      </section>
      <section id="dropped">
        <h2>Dropped</h2>
        {games.dropped ? (
          <div
            css={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {games.dropped.map((game) => (
              <Link href={`/${game.id}`}>
                <GameCard key={game.id} game={game} />
              </Link>
            ))}
          </div>
        ) : (
          <p css={{ textAlign: "center", marginBottom: 50 }}>Such Emptiness</p>
        )}
      </section>
    </main>
  );
};

export default Home;
