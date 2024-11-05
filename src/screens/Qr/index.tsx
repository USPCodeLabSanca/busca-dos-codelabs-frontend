import "./styles.css";
import GameNavigation from "../../components/GameNavigation";
import { QrReader } from "react-qr-reader";
import { useEffect, useState } from "react";
import apiClient from "../../clients/apiClient";

function Qr() {
  const [loading, setLoading] = useState(false);
  const [isCollected, setIsCollected] = useState(false);

  const collectCodelab = async (qrCode: string) => {
    if (loading) return;
    setLoading(true);
    try {
      await apiClient.collectCodelab(qrCode);
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
          onResult={(result, _, codeReader) => {
            if (!(codeReader as any).processingScan && !!result) {
              (codeReader as any).processingScan = true;
              collectCodelab(result.getText());
              setTimeout(
                () => ((codeReader as any).processingScan = false),
                7000
              );
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
          <div className="qr-loading-div">
            <h2>Codelab Coletado!</h2>
          </div>
        )}
      </div>
      <GameNavigation />
    </div>
  );
}

export default Qr;
