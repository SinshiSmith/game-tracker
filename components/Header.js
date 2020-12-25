import Link from "./Link";
import SelectGame from "./SelectGame";

const Header = () => (
  <div
    css={{
      marginBottom: 20,
      display: "flex",
      alignItems: "center",
      padding: 10,
    }}
  >
    <Link css={{ marginRight: 15 }} href="/">
      Game Tracker
    </Link>
    <SelectGame css={{ flex: "1 1 auto" }} />
  </div>
);

export default Header;
