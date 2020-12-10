const Home = ({ games }) => (
  <main css={{ padding: 10 }}>
    <div css={{ textAlign: "center" }}>
      <h1 css={{ margin: 0, fontWeight: 700, fontSize: 70 }}>Game Tracker</h1>
      <p css={{ marginTop: 0 }}>a website to keep track of my games</p>
    </div>
    <div css={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {games.results.map((game) => (
        <div
          css={{
            margin: 10,
            textAlign: "center",
            width: "45vw",
            maxWidth: 420,
            height: 200,
            background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 100%), url(${game.background_image}) top/cover no-repeat`,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
          key={game.id}
        >
          <p css={{ color: "#E2E2E2" }}>{game.name}</p>
        </div>
      ))}
    </div>
  </main>
);

Home.getInitialProps = async () => {
  const response = await fetch(
    `https://api.rawg.io/api/games?${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const games = await response.json();
  return { games };
};

export default Home;
