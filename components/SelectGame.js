import { useState } from "react";
import Link from "./Link";
import Search from "./Search";

const SelectGame = ({ className }) => {
  const [games, setGames] = useState([]);
  return (
    <div className={className} css={{ position: "sticky", top: 0 }}>
      <div css={{ position: "relative" }}>
        <Search
          onSearch={(searchValue) =>
            fetch(
              `https://api.rawg.io/api/games?${process.env.NEXT_PUBLIC_API_KEY}&search=${searchValue}&page_size=5`
            )
              .then((res) => res.json())
              .then((searchData) => setGames(searchData.results))
          }
          onClear={() => setGames([])}
        />
        {games.length > 0 && (
          <div
            css={{
              position: "absolute",
              left: 0,
              right: 0,
              background: "#000000",
              padding: 20,
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              boxShadow: "0 10px 10px 10px #000000",
            }}
          >
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/${game.id}`}
                onClick={() => setGames([])}
                css={{ width: "100%", maxWidth: 300 }}
              >
                <div
                  css={{
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    background: `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%), url(${game.background_image}) center/cover no-repeat`,
                    height: 150,
                  }}
                >
                  <p css={{ margin: "0 10px" }}>{game.name}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectGame;
