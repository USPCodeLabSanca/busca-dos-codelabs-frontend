import { useState } from "react";
import Button from "../../components/Button";
import MadeBy from "../../components/MadeBy";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const step1 = (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <p>
      Temos 10 codelabs espalhados no campus com um QR Code do lado. As três
      primeiras pessoas que fecharem sua pokedex de codelabs ganharão um
      presente misterioso do Codelab!
    </p>
    <img
      alt="Codelab"
      style={{ borderRadius: 18, margin: 12 }}
      src="https://images.squarespace-cdn.com/content/5edb32112cb3cc498e15a24d/1592278746395-AEX09Z0GJDHC3AFLV7AL/Squareprint+93+Logo+final-01.png?content-type=image%2Fpng"
      width={200}
      height={200}
    />
  </div>
);

const step2 = (
  <div>
    <p>
      Para deixar vocês atualizados, postaremos 1 dica por semana no super
      família do ICMC e no nosso{" "}
      <a
        target="_blank"
        href="https://www.instagram.com/uspcodelabsanca/"
        rel="noreferrer"
      >
        Instagram
      </a>{" "}
      dos lugares que estão os codelabs.
    </p>
  </div>
);

const step3 = (
  <div>
    <p>
      Além disso, temos um ranking para você saber quem tá vencendo a procura
      dos codelabs!
    </p>
  </div>
);

const steps = [step1, step2, step3];

function Tutorial() {
  const [step, setStep] = useState(0);

  const navigate = useNavigate();

  const continueGo = () => {
    if (step === 2) return navigate("/game");
    setStep(step + 1);
  };

  return (
    <div className="tutorial">
      <img
        alt="Codelab"
        className="logo"
        src="https://i.imgur.com/NdcqCcB.png"
      />
      <h1>Como funciona?</h1>
      {steps[step]}
      <Button
        width="80%"
        text={step !== 2 ? "Continuar" : "COMEÇAR!!!"}
        onClick={continueGo}
      />
      <MadeBy />
    </div>
  );
}

export default Tutorial;
