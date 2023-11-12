import './App.css';
import QrCode from './components/qrCode';
import { useState } from 'react';
import { Space, Input, Button, message } from 'antd';
import { SettingOutlined, ClearOutlined } from '@ant-design/icons';
import Footer from './components/footer';

function App() {
  const [link, setLink] = useState<string>('');
  const [messageApi, contextHolder] = message.useMessage();
  const [qrCodeVisible, setQrCodeVisible] = useState<boolean>(false);

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Insira um link',
    });
  };

  const coletaLink = () => {
    setQrCodeVisible(true);
    const fileInput = document.getElementById('linkInput') as HTMLInputElement;
    let linkValue = fileInput.value;

    if (linkValue.startsWith('http://') || linkValue.startsWith('https://')) {
      setLink(linkValue);
    } else {
      if (linkValue === '') {
        error();
        setLink(linkValue);
        setQrCodeVisible(false)
        return;
      } else {
        linkValue = 'https://' + linkValue;
        setLink(linkValue);
        return;
      }
    }
  };

  return (

    <div className='flex flex-col h-screen w-screen '>
      {contextHolder}
      <Space direction="vertical" className='flex min-h-[90%] justify-start items-center gap-3 bg-purple-300 pt-5'>
        <h1 className='text-white text-2xl'>Simple QrCode Generator</h1>
        <div className=' flex flex-col gap-3'>
          <div className='flex gap-3'>
            <Input autoComplete="off" id="linkInput" onPressEnter={coletaLink} placeholder='Insira seu link' value={link} onChange={(e) => {setLink(e.target.value), setQrCodeVisible(false)}}/>
            <Button icon={<ClearOutlined />} onClick={() => {setLink(''), setQrCodeVisible(false)}} className='bg-white'>Limpar</Button>
          </div>

          <Button icon={<SettingOutlined />} onClick={coletaLink} className='bg-white'>Gerar QrCode</Button>
        </div>
        <div>
          {qrCodeVisible ? <QrCode link={link} />: null}
        </div>
      </Space>
      <Footer />
    </div>
  );
}

export default App;