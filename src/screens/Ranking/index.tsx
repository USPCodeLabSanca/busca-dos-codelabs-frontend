import { useEffect, useState } from "react";
import "./styles.css";
import apiClient from "../../clients/apiClient";
import GameNavigation from "../../components/GameNavigation";
import User from "../../types/User";
import generateStringDateTime from "../../utils/generateStringDateTime";

function Ranking() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const getRanking = async () => {
    try {
      const users = await apiClient.getRanking();
      console.log(users);
      setUsers(users);
      setLoading(false);
    } catch (error) {
      alert("Erro ao tentar buscar ranking :(");
    }
  };

  useEffect(() => {
    getRanking();
  }, []);

  return (
    <div className="ranking">
      <div className="ranking-container">
        <img
          alt="Codelab"
          className="logo"
          src="https://i.imgur.com/NdcqCcB.png"
        />
        {loading ? (
          <div className="loading-div">
            <h2>Carregando</h2>
          </div>
        ) : null}

        {!loading ? (
          <div className="rankings">
            {users.map((user, index) => {
              return (
                <div
                  key={user.id}
                  style={{
                    backgroundColor:
                      index < 3 && user.collectedCodelabsNumber === 12
                        ? "#418935"
                        : "#474747",
                  }}
                  className={`ranking-item`}
                >
                  <h3>{user.name}</h3>
                  <p>{user.collectedCodelabsNumber} Codelabs Coletados</p>
                  {user.lastCollectedCodelabDate && (
                    <p>
                      {generateStringDateTime(user.lastCollectedCodelabDate)}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <GameNavigation />
    </div>
  );
}

export default Ranking;
