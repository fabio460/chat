import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import { useDispatch } from 'react-redux';

const App = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const dispath = useDispatch()
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const enviarFiguraReducer = (emoji)=> {
      dispath({
        type:"emoji",
        payload:{figura:emoji}
      })
  }
  return (
    <div className=''>
      <Picker
        onEmojiClick={onEmojiClick}
        disableAutoFocus={true}
      />
      {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} enviarFiguraReducer={enviarFiguraReducer} />}
    </div>
  );
};

const EmojiData = ({ chosenEmoji,enviarFiguraReducer }) => (
  enviarFiguraReducer(chosenEmoji.emoji)
);

export default App
