import { useEffect, useRef } from "react";
import QrScanner from "qr-scanner";

const QRScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  let scanner = null;

  useEffect(() => {
    if (videoRef.current) {
      scanner = new QrScanner(
        videoRef.current,
        (result) => {
          onScan(result.data);
        },
        {
          returnDetailedScanResult: true,
        }
      );
      scanner.start();
    }

    return () => {
      if (scanner) scanner.stop();
    };
  }, [onScan]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* QR Scanner Video */}
      <video ref={videoRef} className="w-full rounded-lg" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        {/* Scanner Frame */}
        <div className="relative w-40 h-40 border-4 border-blue-500 bg-transparent">
          {/* Cutout effect */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>

          {/* Corners */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
