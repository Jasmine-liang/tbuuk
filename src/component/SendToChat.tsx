import React, { useEffect, useState } from 'react';
import Script from 'next/script';

// Define the shape of the WebApp object
interface TelegramWebApp {
    ready: () => void;
    // Add other methods and properties as needed
    sendData: (msg: string) => void
  }

  
const useTelegramWebApp = () => {
    const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);
  
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-web-app.js';
      script.async = true;
      script.onload = () => {
        if (window.Telegram && window.Telegram.WebApp) {
          setWebApp(window.Telegram.WebApp);
        }
      };
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return webApp;
  };

const SendToChatButton: React.FC = () => {

    const webApp = useTelegramWebApp();


  const handleSendToChat = () => {
    const message = `
      Hi friend, get your 5 scratch cards🎉💅
      
      Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints
      
      https://t.me/tbook_incentive_bot?start=50636747698965
    `.trim();
    useEffect(() => {
        if (webApp) {
          webApp.ready();
          webApp.sendData(message)
          // Use other webApp methods as needed
        }
      }, [webApp]);
    // if (window.Telegram?.WebApp) {
    //   window.Telegram.WebApp.sendData(message);
    //   alert('Data sent to chat');
    // } else {
    //   alert(' In function Telegram WebApp is not available.');
    // }
  };

  return (
    <button onClick={handleSendToChat}>
      Send to Chat
    </button>

  );
};

export default SendToChatButton;
