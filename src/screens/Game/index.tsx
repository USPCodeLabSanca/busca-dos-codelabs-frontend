import { useEffect, useState } from "react";
import "./styles.css";
import apiClient from "../../clients/apiClient";
import Codelab from "../../types/Codelab";
import GameNavigation from "../../components/GameNavigation";

const BLACK_CODELAB_URL = "https://i.imgur.com/22Z55IQ.png";

function Game() {
  const [codelabs, setCodelabs] = useState<Codelab[]>([]);
  const [loading, setLoading] = useState(true);

  const getUserCodelabs = async () => {
    try {
      const codelabs = await apiClient.getCodelabs();
      console.log(codelabs);
      setCodelabs(codelabs);
      setLoading(false);
    } catch (error) {
      alert("Erro ao tentar buscar codelabs :(");
    }
  };

  useEffect(() => {
    getUserCodelabs();
  }, []);

  return (
    <div className="game">
      <img
        alt="Codelab"
        className="logo"
        src="https://i.imgur.com/LhdQTvl.png"
      />
      {loading ? (
        <div className="loading-div">
          <h2>Carregando</h2>
        </div>
      ) : (
        <h2>{codelabs.length} de 10 Codelabs Coletados</h2>
      )}

      {!loading ? (
        <div className="codelabs">
          {Array.from({ length: 10 }).map((_, index) => {
            const codelabCollected = codelabs.find(
              (codelab) => codelab.order === index + 1
            );

            return (
              <div
                key={index}
                className={`codelab ${
                  codelabCollected
                    ? `codelab-collected`
                    : `codelab-not-collected`
                }`}
              >
                <img
                  alt={codelabCollected?.name}
                  src={codelabCollected?.image || BLACK_CODELAB_URL}
                />
                <div className="codelab-infos">
                  <h3>{codelabCollected?.name || `Codelab ${index + 1}`}</h3>
                  <p>{codelabCollected?.description || "Não Encontrado"}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
      <GameNavigation />
    </div>
  );
}

export default Game;
