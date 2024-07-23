import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';


interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
  }


const SendToChatButton: React.FC = () => {
    const [user, setUser] = useState<TelegramUser | null>(null);


    useEffect(() => {
        if (typeof window !== "undefined") {
                if (WebApp.initDataUnsafe.user) {
                  setUser(WebApp.initDataUnsafe.user);
                  alert(WebApp.initDataUnsafe.user.id)
                }       
    }
      }, []);

    const handleInvite = () => {
        if (typeof window !== "undefined") 
    // {

    //    const message = `
    //     Hi friend, get your 5 scratch cards🎉💅
        
    //     Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints
        
    //     https://t.me/tbook_incentive_bot?start=50636747698965
    //   `.trim()


    //     const inviteMessage = "https://t.me/JazzyDali_bot/testwallet?start=50636747698965"
    //     WebApp.switchInlineQuery(message, ['users', 'groups', 'channels']);
    //     WebApp.close();
    
    // }
    console.log(user)
    };

    return (
        <div>
         { typeof window !== "undefined" &&
          <>
           <button onClick={handleInvite}>Share to Chat</button>
            {
                user && <div>user: {user.id}</div>
            }
        </>
        }
        </div>
      );
  };
  
export default SendToChatButton;
