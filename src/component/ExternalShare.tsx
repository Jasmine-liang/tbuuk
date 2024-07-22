import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';



const ExternalShareButton: React.FC = () => {

    const isWebShareSupported = () => {
      console.log("share", navigator.share )
        return navigator.share !== undefined;
      };
    


    const handleExternalShare = async () => {

        if (typeof window !== "undefined") {
          const url = 'https://t.me/tbook_incentive_bot?start=50636747698965'; // Replace with your URL
          const text = 'Check this out!';
      
          if (navigator.share) {
            navigator.share({
              title: 'Check this out!',
              text: text,
              url: url,
            })
            .then(() => console.log('Share successful'))
            .catch((error) => console.error('Error sharing:', error));
          } else {
            const isAndroid = /Android/i.test(navigator.userAgent);
            const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      
            if (isAndroid || isIOS) {
              // Use WhatsApp share link as a fallback for both platforms
              const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
              window.location.href = shareUrl;
            } else {
              // Fallback for unsupported devices/browsers
              alert('Your device does not support sharing.');
            }
          }


      }
    
    }


    return (
        <div>
         { typeof window !== "undefined" &&
          <>
        <button onClick={handleExternalShare}>Share this</button>
  
        </>
        }
        </div>
      );
  };
  
export default ExternalShareButton;
