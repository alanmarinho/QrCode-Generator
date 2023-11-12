import React from 'react';
import { QRCode, Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';

interface QrCodeProps {
  link: string,
}

const App: React.FC<QrCodeProps> = (props) => {
  const [download, setDownload] = React.useState<boolean>(false);

  const downloadQRCode = () => {
    const canvas = document.querySelector('canvas');

    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.download = 'QRCode.png';
      a.href = url;
      a.click();
    }
  };

  React.useEffect(() => {
    setDownload(!!props.link);
  }, [props.link]);

  return (
    <>
      <div className='flex items-center justify-center flex-col gap-3'>
        {props.link && <p className='text-white'>QrCode direcionando para a URL: {props.link}</p>}
        {props.link && <QRCode value={props.link} bgColor='#fff' />}
        {download && <Button onClick={downloadQRCode} icon={<ArrowDownOutlined />} className='bg-white'>Download QR Code</Button>}
      </div>
    </>
  );
};

export default App;