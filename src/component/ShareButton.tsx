import React from 'react';
import { useTelegram, useSendMessage } from '@telegram-apps/sdk-react';

const ShareToChatButton: React.FC = () => {
  const { showPopup } = useTelegram();
  const sendMessage = useSendMessage();

  const handleShare = () => {
    // Show the chat selection popup
    showPopup({
      title: 'Select Chat',
      description: 'Choose a chat to share this content with.',
      onSelectChat: (chatId) => {
        // Send a message to the selected chat
        sendMessage(chatId, 'Your custom message');
      },
    });
  };

  return (
    <button onClick={handleShare}>
      Share to Chat
    </button>
  );
};

export default ShareToChatButton;
