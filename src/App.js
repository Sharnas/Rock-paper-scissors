import './App.css';
import Box from './component/Box.js';
import { useState } from 'react';

function App() {



  const choice = {
    rock:{
      name: 'rock',
      img: 'http://isweb.joongbu.ac.kr/~jgm/photo/rock.jpeg'
    },
    paper:{
      name: 'paper',
      img: 'http://isweb.joongbu.ac.kr/~jgm/photo/paper.png'
    },
    scissors:{
      name: 'scissors',
      img: 'https://icons.iconarchive.com/icons/fa-team/fontawesome-emoji/256/FontAwesome-Emoji-Hand-Scissors-icon.png'
    }
  }

  const [userSelect, setUserSelect] = useState(choice.scissors);

  const handleUserSelect = (userChoice) => {
    setUserSelect(choice[userChoice]);
  } 


  return (
    <div >
      <Box item={userSelect}/>
      <button onClick={() => handleUserSelect('rock')}>Rock</button>
      <button onClick={() => handleUserSelect('paper')}>Paper</button>
      <button onClick={() => handleUserSelect('scissors')}>Scissors</button>
    </div>
  );
}

export default App;
