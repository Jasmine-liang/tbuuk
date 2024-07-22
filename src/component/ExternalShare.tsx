import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';



const ExternalShareButton: React.FC = () => {

    const isWebShareSupported = () => {
        return navigator.share !== undefined;
      };
    


    const handleExternalShare = async () => {
        if (typeof window !== "undefined") {
        if (isWebShareSupported()) {
          try {
            await navigator.share({
              title: 'Check this out!',
              text: 'This is something you might like.',
              url: 'https://example.com', // Replace with your URL
            });
            alert('Share successful');
          } catch (error) {
            console.error('Error sharing:', error);
            alert("Error sharing:")
          }
        } else {
          console.error('Web Share API not supported in this browser.');
        }
      }}


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
