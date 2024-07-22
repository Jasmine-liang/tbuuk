import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';



const SendToChatButton: React.FC = () => {

    const handleInvite = () => {
        if (typeof window !== "undefined") 
    {

       const message = `
        Hi friend, get your 5 scratch cards🎉💅
        
        Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints
        
        https://t.me/tbook_incentive_bot?start=50636747698965
      `.trim()


        const inviteMessage = "https://t.me/JazzyDali_bot/testwallet?start=50636747698965"
        WebApp.switchInlineQuery(message, ['users', 'groups', 'channels']);
        
    
    }
    };
  
    const handleInvoice = () => {
        if (typeof window !== "undefined") {
            WebApp.openInvoice("https://t.me/tbook_incentive_bot?start=50636747698965", ()=>{
                alert("close!")
            })
        }
    }


    return (
        <div>
          {/* <button onClick={sendToChat}>Send to Chat</button> */}
         { typeof window !== "undefined" &&
          <>
          <button onClick={() => WebApp.showAlert(`Hello World! Current count ii`)}>
            Show Alert
        </button>
        <p>--------------</p>
        <button onClick={handleInvite}>Send to chat</button>
        </>
        }
        </div>
      );
  };
  
export default SendToChatButton;
