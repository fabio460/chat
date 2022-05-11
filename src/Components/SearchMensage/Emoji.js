import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import './SearchMenssagem.css'
const Emoji = ({getEmoji}) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  

  getEmoji(chosenEmoji)
  return (
    <div className='emoji'>
      {chosenEmoji ? (
        <span> {chosenEmoji.emoji}</span>
      ) : (
        <span></span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};
export default Emoji