import { useEffect } from "react";
import Button from "../../components/Button";
import MadeBy from "../../components/MadeBy";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  const goToJoin = () => {
    navigate("/join");
  };

  const goToGame = () => {
    navigate("/game");
  };

  const verifyIfUserIsLogged = () => {
    const user = localStorage.getItem("telegram");
    if (user) goToGame();
  };

  useEffect(() => {
    verifyIfUserIsLogged();
  });

  return (
    <div className="start">
      <img alt="Codelab" src="https://i.imgur.com/LhdQTvl.png" />
      <h1>Caça aos Codelabs!</h1>
      <p>Seja o primeiro a encontrar todos os Codelabs e ganhe um agradinho!</p>
      <Button width="80%" text="Iniciar" onClick={goToJoin} />
      <MadeBy />
    </div>
  );
}

export default Start;
