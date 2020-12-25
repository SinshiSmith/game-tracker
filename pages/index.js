import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import GameCard from "../components/GameCard";
import Loader from "../components/Loader";

const Home = ({ games = {} }) => {
  const [data, setData] = useState(games);
  return (
    <main css={{ padding: 10 }}>
      <div css={{ textAlign: "center" }}>
        <h1 css={{ margin: 0, fontWeight: 700, fontSize: 70 }}>Game Tracker</h1>
        <p css={{ marginTop: 0 }}>a website to keep track of my games</p>
      </div>
      <InfiniteScroll
        pageStart={0}
        hasMore={Boolean(games.next)}
        loadMore={() =>
          fetch(data.next)
            .then((res) => res.json())
            .then((newData) => {
              setData({
                ...newData,
                results: [...data.results, ...newData.results],
              });
            })
        }
        loader={<Loader key={data.results.length} />}
      >
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data.results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch(
    `https://api.rawg.io/api/games?${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const games = await response.json();
  return { games };
};

export default Home;
