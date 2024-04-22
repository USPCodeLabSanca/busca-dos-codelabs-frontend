import "./styles.css";
import GameNavigation from "../../components/GameNavigation";
import { QrReader } from "react-qr-reader";
import { useState } from "react";
import apiClient from "../../clients/apiClient";

function Qr() {
  const [loading, setLoading] = useState(false);

  const collectCodelab = async (qrCode: string) => {
    if (loading) return;
    setLoading(true);
    console.log(loading);
    try {
      await apiClient.collectCodelab(qrCode);
      setLoading(false);
    } catch (error) {
      // @ts-ignore
      alert(error!.error);
      console.error("Erro ao tentar coletar codelab", error);
      setLoading(false);
    }
  };

  return (
    <div className="qr">
      <QrReader
        onResult={(result, error) => {
          if (result && !loading) {
            // @ts-ignore
            console.log(result.text);
            // @ts-ignore
            collectCodelab(result.text);
          }
        }}
        constraints={{ facingMode: "user" }}
        containerStyle={{ flex: 1, display: "flex", width: "100%" }}
        videoContainerStyle={{ flex: 1 }}
        videoStyle={{ objectFit: "cover" }}
      />
      {loading && (
        <div className="qr-loading-div">
          <h2>Coletando..</h2>
        </div>
      )}
      <GameNavigation />
    </div>
  );
}

export default Qr;
