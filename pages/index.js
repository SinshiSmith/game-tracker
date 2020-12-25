import List from "../components/List";
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
      <List id="playing" title="Currently Playing" games={games.playing} />
      <List id="onHold" title="Games On Hold" games={games.onHold} />
      <List id="backlog" title="Up Next" games={games.backlog} />
      <List id="finished" title="Finished Games" games={games.finished} />
      <List id="dropped" title="Dropped" games={games.dropped} />
    </main>
  );
};

export default Home;
