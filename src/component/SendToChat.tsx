import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';



const SendToChatButton: React.FC = () => {

  
  
    useEffect(() => {
        if (typeof window !== "undefined") {
               // Your browser-specific code here
             
        }
      }, []);
 
      const sendToChat = () => {
           
        WebApp.sendData("hhhhhhiiiii");
      
    };


    return (
        <div>
          {/* <button onClick={sendToChat}>Send to Chat</button> */}
         { typeof window !== "undefined" &&
          <><button onClick={() => WebApp.showAlert(`Hello World! Current count ii`)}>
            Show Alert
        </button>
        <p>--------------</p>
        <button onClick={sendToChat}>Send to chat</button>
        </>
        }

        </div>
      );
  
  };
  
export default SendToChatButton;
