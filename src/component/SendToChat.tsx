import React, { useEffect } from 'react';

const SendToChatButton: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);


  //The sendData method in the Telegram Web Apps SDK is designed to send data to the bot that opened the web app. 
  //The method itself does not return any value directly; instead, it sends the data to the parent chat or bot, 
  //which can then handle the data appropriately.

//Here’s a brief overview of what happens when you call sendData:

//Data Transmission: The data is sent to the Telegram servers.
//Bot Handling: The bot receives the data through an update of type web_app_data.


  const handleSendToChat = () => {
    const message = `
    Hi friend, get your 5 scratch cards🎉💅
    
    Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints
    
    https://t.me/tbook_incentive_bot?start=50636747698965
  `.trim();
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData(message);
    } else {
      alert('Telegram WebApp is not available.');
    }
  };

  return (
    <button onClick={handleSendToChat}>
      Send to Chat
    </button>
  );
};

export default SendToChatButton;
