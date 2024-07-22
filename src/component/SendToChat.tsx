import React, { useEffect } from 'react';

const SendToChatButton: React.FC = () => {
  useEffect(() => {
    const initTelegramWebApp = () => {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready();
        console.log('Telegram WebApp is ready');
      } else {
        console.error('Telegram WebApp is not available.');
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
      console.log('Data sent to chat');
    } else {
      console.error('Telegram WebApp is not available.');
    }
  };

  return (
    <button onClick={handleSendToChat}>
      Send to Chat
    </button>
  );
};

export default SendToChatButton;
