import useUser from "./useUser";

const useMoveToList = () => {
  const [user, setUser] = useUser();

  const moveTo = ({ targetGame, list }) => {
    const existingGame = targetGame.list;

    if (existingGame) {
      const gamesList = user.games.slice(0);
      const newGamesList = gamesList.map((game) =>
        game.id === targetGame.id ? { ...game, list } : game
      );
      setUser({ ...user, games: newGamesList });
    } else {
      setUser({
        ...user,
        games: [...(user.games || []), { ...targetGame, list }],
      });
    }
  };

  return moveTo;
};

export default useMoveToList;
