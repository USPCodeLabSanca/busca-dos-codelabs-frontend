import "./styles.css";

import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import QrCodeIcon from "@mui/icons-material/QrCode";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const GameNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="game-navigation">
      <div className="game-navigation-item" onClick={() => navigate("/game")}>
        <FormatListNumberedIcon />
      </div>
      <div className="game-navigation-item" onClick={() => navigate("/qr")}>
        <QrCodeIcon />
      </div>
      <div
        className="game-navigation-item"
        onClick={() => navigate("/ranking")}
      >
        <StarIcon />
      </div>
    </div>
  );
};

export default GameNavigation;
