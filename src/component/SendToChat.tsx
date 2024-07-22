import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';



const SendToChatButton: React.FC = () => {


      const sendToChat = () => {
          WebApp.sendData("Send data!!!");
          WebApp.showAlert('Hey there!');
        
      };

    return (
        <div>
          <button onClick={sendToChat}>Send to Chat</button>
        </div>
      );
  
  };
  
export default SendToChatButton;
