const GameCard = ({ game }) => (
  <div css={{ width: "100%", maxWidth: 200, margin: "10px 0" }}>
    <img
      css={{ display: "block", width: "100%", height: 320, objectFit: "cover" }}
      src={game.background_image}
      alt={`${game.name}'s cover`}
    />
    <p
      css={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "#E2E2E2",
        margin: "5px 0",
        marginRight: 5,
      }}
    >
      {game.name}
    </p>
    <div css={{ display: "flex", flexWrap: "wrap" }}>
      {game.parent_platforms.map(({ platform }) => (
        <p
          key={platform.id}
          css={{
            margin: 0,
            marginRight: 5,
            marginBottom: 5,
            padding: "2px 10px",
            background: "#E2E2E2",
            color: "#000000",
            fontSize: 14,
            borderRadius: 3,
          }}
        >
          {platform.name}
        </p>
      ))}
    </div>
  </div>
);

export default GameCard;
