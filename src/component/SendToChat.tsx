import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';



const SendToChatButton: React.FC = () => {
    const [webApp, setWebApp] = useState<typeof WebApp | null>(null);
    const [message, setMessage] = useState<string>('');
  
    useEffect(() => {
      // Initialize Telegram WebApp
      const app = WebApp.init();
      setWebApp(app);
    }, []);
  
    const sendToChat = () => {
      if (webApp && message) {
        webApp.sendData(message);
        setMessage('');
      }
    };
  
    //   const sendToChat = () => {
    //       WebApp.sendData("Send data!!!");
    //       WebApp.showAlert('Hey there!');
        
    //   };

    return (
        <div>
          <button onClick={sendToChat}>Send to Chat</button>
        </div>
      );
  
  };
  
export default SendToChatButton;
