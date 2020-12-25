import Button from "../components/Button";
import useMoveToList from "../hooks/useMoveToList";
import useUser from "../hooks/useUser";

const GamePage = ({ game }) => {
  const [user] = useUser();
  const moveTo = useMoveToList();

  const userGame = user.games.find((savedGame) => savedGame.id === game.id);
  const currentGame = userGame || game;

  return (
    <main
      css={{
        display: "flex",
        padding: 10,
        paddingTop: 100,
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div css={{ width: "100%", maxWidth: 600 }}>
        <img
          src={currentGame.background_image}
          css={{
            display: "block",
            width: "100%",
          }}
          alt={`${currentGame.name}'s cover`}
        />
        <ul
          css={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: 0,
            margin: 0,
            marginTop: 10,
            listStyle: "none",
            li: { padding: 0, margin: 0 },
            button: { width: 120 },
          }}
        >
          <li>
            <Button
              css={{ background: currentGame.list === "playing" && "#FEDD1E" }}
              onClick={() =>
                moveTo({ targetGame: currentGame, list: "playing" })
              }
            >
              Playing
            </Button>
          </li>
          <li>
            <Button
              css={{ background: currentGame.list === "onHold" && "#FEDD1E" }}
              onClick={() =>
                moveTo({ targetGame: currentGame, list: "onHold" })
              }
            >
              On Hold
            </Button>
          </li>
          <li>
            <Button
              css={{ background: currentGame.list === "dropped" && "#FEDD1E" }}
              onClick={() =>
                moveTo({ targetGame: currentGame, list: "dropped" })
              }
            >
              Dropped
            </Button>
          </li>
          <li>
            <Button
              css={{ background: currentGame.list === "backlog" && "#FEDD1E" }}
              onClick={() =>
                moveTo({ targetGame: currentGame, list: "backlog" })
              }
            >
              Backlog
            </Button>
          </li>
        </ul>
      </div>

      <div css={{ margin: "0 10px" }}>
        <h1 css={{ marginTop: 0 }}>{currentGame.name}</h1>
        <div
          css={{ maxWidth: 600 }}
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{ __html: currentGame.description }}
        />
      </div>
    </main>
  );
};

GamePage.getInitialProps = async (context) => {
  const { gameID } = context.query;
  const response = await fetch(
    `https://api.rawg.io/api/games/${gameID}?${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const game = await response.json();
  return { game };
};

export default GamePage;
