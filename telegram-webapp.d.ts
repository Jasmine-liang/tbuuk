interface TelegramWebApp {
    sendData: (data: string) => void;
    ready: () => void;
    // Add other properties and methods as needed
  }
  
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
  