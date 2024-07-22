import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';



const SendToChatButton: React.FC = () => {
    const [webApp, setWebApp] = useState<typeof WebApp | null>(null);
    const [message, setMessage] = useState<string>('');
  
  
  
    if (typeof window !== "undefined") {
        // Your browser-specific code here
        const sendToChat = () => {
            if (webApp && message) {
              webApp.sendData(message);
              setMessage('');
            }
          };
      }
 
  
    //   const sendToChat = () => {
    //       WebApp.sendData("Send data!!!");
    //       WebApp.showAlert('Hey there!');
        
    //   };

    return (
        <div>
          {/* <button onClick={sendToChat}>Send to Chat</button> */}
         { typeof window !== "undefined" &&
          <button onClick={() => WebApp.showAlert(`Hello World! Current count ii`)}>
            Show Alert
        </button>}
        </div>
      );
  
  };
  
export default SendToChatButton;
