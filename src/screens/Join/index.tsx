import { useState } from "react";
import Button from "../../components/Button";
import MadeBy from "../../components/MadeBy";
import "./styles.css";
import Input from "../../components/Input";
import apiClient from "../../clients/apiClient";
import { useNavigate } from "react-router-dom";

function Join() {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await apiClient.join(name, telegram);
      localStorage.setItem("telegram", telegram.replace("@", ""));
      navigate("/tutorial");
    } catch (error) {
      alert("Erro tristonho ao tentar entrar :( Tente novamente!");
      setLoading(false);
    }
  };

  return (
    <div className="join">
      <img alt="Codelab" src="https://i.imgur.com/NdcqCcB.png" />
      <h2>Entrar</h2>
      <p>
        Coloque seu nominho lindo e seu @ do telegra pra sabermos quem é você!
      </p>
      <form onSubmit={submit}>
        <Input
          placeholder="Nome"
          value={name}
          onChange={setName}
          required
          style={{ width: "90%" }}
        />
        <Input
          placeholder="Telegram"
          value={telegram}
          onChange={setTelegram}
          required
          style={{ width: "90%" }}
        />

        <Button
          disabled={loading}
          width="80%"
          text={loading ? "Iniciando.." : "Iniciar"}
          type="submit"
        />
      </form>
      <MadeBy />
    </div>
  );
}

export default Join;
