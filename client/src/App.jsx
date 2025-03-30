import { useState } from "react";
import QRScanner from "./components/QRScanner";

const App = () => {
  const [scannedData, setScannedData] = useState(null);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-col justify-center items-center">
        <QRScanner onScan={(data) => setScannedData(data)} />
          
        {scannedData && <p>Scanned Data: {scannedData}</p>}

      </div>
    </div>
  );
};

export default App;
