import Android from "../components/svg/Android";
import Apple from "../components/svg/Apple";
import Ios from "../components/svg/Ios";
import Linux from "../components/svg/Linux";
import NintendoSwitch from "../components/svg/NintendoSwitch";
import PlayStation from "../components/svg/Playstation";
import Windows from "../components/svg/Windows";
import Xbox from "../components/svg/Xbox";

const platforms = {
  pc: {
    icon: <Windows />,
    color: "#0078D6",
  },
  playstation: {
    icon: <PlayStation />,
    color: "#003791",
  },
  xbox: {
    icon: <Xbox />,
    color: "#107C10",
  },
  nintendo: {
    icon: <NintendoSwitch />,
    color: "#E60012",
  },
  ios: {
    icon: <Ios />,
    color: "#000000",
  },
  android: {
    icon: <Android />,
    color: "#3DDC84",
  },
  linux: {
    icon: <Linux />,
    color: "#FCC624",
  },
  mac: {
    icon: <Apple />,
    color: "#000000",
  },
};

export default platforms;
