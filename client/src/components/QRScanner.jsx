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

  return <video ref={videoRef} className='w-full h-80'  />;
};

export default QRScanner;
