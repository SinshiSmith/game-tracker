import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
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
          css={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {data.results.map((game) => (
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
