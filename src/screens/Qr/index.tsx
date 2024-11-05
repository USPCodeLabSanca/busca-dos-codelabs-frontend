import "./styles.css";
import GameNavigation from "../../components/GameNavigation";
import { QrReader } from "react-qr-reader";
import { useState } from "react";
import apiClient from "../../clients/apiClient";

function Qr() {
  const [loading, setLoading] = useState(false);
  const [isCollected, setIsCollected] = useState(false);
  const [lastCollectedCodelab, setLastCollectedCodelab] = useState("");

  const collectCodelab = async (qrCode: string) => {
    if (loading) return;
    setLoading(true);
    console.log(loading);
    try {
      await apiClient.collectCodelab(qrCode);
      setLastCollectedCodelab(qrCode);
      setLoading(false);
      setIsCollected(true);
      setTimeout(() => {
        setIsCollected(false);
      }, 2000);
    } catch (error) {
      // @ts-ignore
      alert(error!.error);
      console.error("Erro ao tentar coletar codelab", error);
      setLoading(false);
    }
  };

  return (
    <div className="qr">
      <div className="qr-container">
        <QrReader
          onResult={(result, error) => {
            // @ts-ignore
            if (result && !loading && lastCollectedCodelab !== result.text) {
              // @ts-ignore
              console.log(result.text);
              // @ts-ignore
              collectCodelab(result.text);
            }
          }}
          constraints={{ facingMode: "environment" }}
          containerStyle={{ flex: 1, display: "flex", width: "100%" }}
          videoContainerStyle={{ flex: 1 }}
          videoStyle={{ objectFit: "cover" }}
        />
        {loading && (
          <div className="qr-loading-div">
            <h2>Coletando..</h2>
          </div>
        )}
        {isCollected && (
          <div className="qr-collected-div">
            <h2>Codelab Coletado!</h2>
          </div>
        )}
      </div>
      <GameNavigation />
    </div>
  );
}

export default Qr;
