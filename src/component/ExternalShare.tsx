import React from 'react';
import WebApp from '@twa-dev/sdk';

const shareToWhatsApp = (text: string) => {
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};

const shareToMail = (subject:string, body: string) => {
  const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(url, '_blank');
};

const ShareButtons = () => {
  const shareText = 'Here is something interesting I found!';
  const mailSubject = 'Check this out!';
  const mailBody = shareText + '\n\nhttps://example.com';

  return (
    <div>
      <button onClick={() => shareToWhatsApp(shareText)}>Share to WhatsApp</button>
      <button onClick={() => shareToMail(mailSubject, mailBody)}>Share via Email</button>
    </div>
  );
};


const ExternalShareButton: React.FC = () => {

    const isWebShareSupported = () => {
      console.log("share", navigator.share )
        return navigator.share !== undefined;
      };
    


    const handleExternalShare = async () => {

 
        if (typeof window !== "undefined") {
          // const url = 'https://t.me/tbook_incentive_bot?start=50636747698965'; // Replace with your URL
          // const text = 'Check this out!';

          // if (navigator.share) {
          //   navigator.share({
          //     title: 'Check this out!',
          //     text: text,
          //     url: url,
          //   })
          //   .then(() => console.log('Share successful'))
          //   .catch((error) => console.error('Error sharing:', error));
          // } else {
          //   const isAndroid = /Android/i.test(navigator.userAgent);
          //   const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

          //   if (isAndroid || isIOS) {
          //     // Use WhatsApp share link as a fallback for both platforms
          //     const shareUrl = `whatsapp://send?text=${encodeURIComponent(text + ' ' + url)}`;
          //     window.location.href = shareUrl;
          //   } else {
          //     // Fallback for unsupported devices/browsers
          //     alert('Your device does not support sharing.');
          //   }
          // }

          if (isWebShareSupported()) {
            try {
              await navigator.share({
                title: 'Check this out!',
                text: 'Here is something interesting I found.',
                url: 'https://example.com'
              });
              console.log('Content shared successfully!');
            } catch (error) {
              console.error('Error sharing content:', error);
            }
          } else {
            console.warn('Web Share API is not supported in this browser.');
          }
        }
      }
    


    return (
        <div>
         { typeof window !== "undefined" &&
          <>
        <button onClick={handleExternalShare}>Share More 外链</button>
  
        </>
        }
        </div>
      );
  };
  
export default ExternalShareButton;
