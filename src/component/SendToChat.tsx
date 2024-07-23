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
        WebApp.close();
    
    }
    };

    return (
        <div>
         { typeof window !== "undefined" &&
          <>
           <button onClick={handleInvite}>Share to Chat</button>
        </>
        }
        </div>
      );
  };
  
export default SendToChatButton;
