import { useEffect, useState } from "react";
import "./styles.css";
import apiClient from "../../clients/apiClient";
import Codelab from "../../types/Codelab";
import GameNavigation from "../../components/GameNavigation";
import User from "../../types/User";

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
      <img
        alt="Codelab"
        className="logo"
        src="https://i.imgur.com/LhdQTvl.png"
      />
      {loading ? (
        <div className="loading-div">
          <h2>Carregando</h2>
        </div>
      ) : null}

      {!loading ? (
        <div className="rankings">
          {users.map((user) => {
            return (
              <div key={user.id} className={`ranking-item`}>
                <h3>{user.name}</h3>
                <p>{user.collectedCodelabsNumber} Codelabs Coletados</p>
              </div>
            );
          })}
        </div>
      ) : null}
      <GameNavigation />
    </div>
  );
}

export default Ranking;
