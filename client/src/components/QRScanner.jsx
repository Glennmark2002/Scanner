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

      {/* Scanner Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className=" w-60 h-60 relative">
          {/* Top Left Corner */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4  border-white"></div>
          {/* Top Right Corner */}
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white"></div>
          {/* Bottom Left Corner */}
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white"></div>
          {/* Bottom Right Corner */}
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
