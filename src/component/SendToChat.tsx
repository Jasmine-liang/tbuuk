import { PopupParams } from '@telegram-apps/sdk-react';
import React, { useEffect, useState } from 'react';


interface MainButton {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    setText: (text: string) => void;
    onClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
  }
  
  interface TelegramWebApp {
    ready: () => void;
    sendData: (data: string) => void;
    showPopup: (params: PopupParams, callback?: (button_id: string) => void) => void;
    MainButton: MainButton;
    // Add other methods and properties as needed
  }



export const useTelegramWebApp = () => {
    const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);
  
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-web-app.js';
        script.async = true;
        script.onload = () => {
          if (window.Telegram && window.Telegram.WebApp) {
            setWebApp(window.Telegram.WebApp as TelegramWebApp);
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
    const [isReady, setIsReady] = useState(false);
  
    useEffect(() => {
      if (webApp) {
        webApp.ready();
        setIsReady(true);
  
        // Set up the MainButton
        webApp.MainButton.setText('Send to Chat');
        webApp.MainButton.color = '#2cab37';
        webApp.MainButton.textColor = '#ffffff';
        webApp.MainButton.show();
        webApp.MainButton.onClick(handleSendToChat);
      }
  
      // Clean up
      return () => {
        if (webApp) {
          webApp.MainButton.hide();
          webApp.MainButton.onClick(handleSendToChat);
        }
      };
    }, [webApp]);
  
    const handleSendToChat = () => {
      if (!webApp || !isReady) return;
  
      const message = `
        Hi friend, get your 5 scratch cards🎉💅
        
        Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints
        
        https://t.me/tbook_incentive_bot?start=50636747698965
      `.trim();
  
      const popupParams: PopupParams = {
        title: 'Send Message',
        message: 'Are you sure you want to send this message to the chat?',
        buttons: [
          { id: 'cancel', type: 'cancel' },
          { id: 'send', type: 'default', text: 'Send' }
        ]
      };
  
      webApp.showPopup(popupParams, (button_id) => {
        if (button_id === 'send') {
          webApp.sendData(message);
          
          webApp.showPopup({
            title: 'Success',
            message: 'Message sent successfully!',
            buttons: [{ id: 'ok', type: 'ok' }]
          });
        }
      });
    };
  
    // We don't need to render a button anymore, as we're using the MainButton
    return null;
  };
  
export default SendToChatButton;
