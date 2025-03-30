import { useState } from "react";
import QRScanner from "./components/QRScanner";

const App = () => {
  const [scannedData, setScannedData] = useState(null);

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QRScanner onScan={(data) => setScannedData(data)} />
      {scannedData && <p>Scanned Data: {scannedData}</p>}
    </div>
  );
};

export default App;
