import React, { useEffect } from 'react';
import Script from 'next/script';


const SendToChatButton: React.FC = () => {
  useEffect(() => {
    const initTelegramWebApp = () => {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready();
        alert('Telegram WebApp is ready');
      } else {
        alert('Telegram WebApp is not available.');
      }
    };

    initTelegramWebApp();
  }, []);

  const handleSendToChat = () => {
    const message = `
      Hi friend, get your 5 scratch cards🎉💅
      
      Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints
      
      https://t.me/tbook_incentive_bot?start=50636747698965
    `.trim();

    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.sendData(message);
      alert('Data sent to chat');
    } else {
      alert(' In function Telegram WebApp is not available.');
    }
  };

  return (
    <>
    <Script async
    defer src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" > </Script>
    <button onClick={handleSendToChat}>
      Send to Chat
    </button>
    </>
  );
};

export default SendToChatButton;
