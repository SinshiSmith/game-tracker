import platforms from "../data/platforms";

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
        margin: 0,
        marginTop: 5,
      }}
    >
      {game.name}
    </p>
    <div css={{ display: "flex", flexWrap: "wrap" }}>
      {game.parent_platforms.map(({ platform }) => (
        <div
          css={{ width: 14, fill: "#FFFFFF", marginRight: 5 }}
          key={platform.id}
        >
          {platforms[platform.slug]?.icon}
        </div>
      ))}
    </div>
  </div>
);

export default GameCard;
