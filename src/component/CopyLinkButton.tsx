import React from 'react';

const CopyLinkButton: React.FC = () => {

  const handleCopyLink = () => {
    const link = `https://t.me/tbook_incentive_bot?start=50636747698965`;
    navigator.clipboard.writeText(link).then(() => {
      console.log('Link copied to clipboard!');
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  };

  return (
    <button onClick={handleCopyLink}>
      Copy Link
    </button>
  );
};

export default CopyLinkButton;
