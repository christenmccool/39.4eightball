import React, {useState} from 'react';
import './EightBall.css';
import defaultAnswers from './answers.js';

const EightBall = ({answers = defaultAnswers}) => {
  
  function getAnswer() {
    const ind = Math.floor(Math.random() * answers.length);
    const answer = answers[ind];
    const color = answer['color'];
    const newColorCount = colorCount;
    newColorCount[color] ++;
    setColorCount(newColorCount)
    return answer;
  }

  function reset() {
    setAnswer(startingAnswer);
    setColorCount({'red': 0, 'goldenrod': 0, 'green': 0});
  }

  const startingAnswer = {
    color: 'black',
    msg: 'Think of a Question'
  }

  const [answer, setAnswer] = useState(startingAnswer);
  const [colorCount, setColorCount] = useState({'red': 0, 'goldenrod': 0, 'green': 0});

  // const [color, setColor] = useState('black');
  // const [message, setMessage] = useState('Think of a Question');

  return (
    <div className="EightBall">
      <div className="EightBall-div">
        <div className="EightBall-ball" style={{backgroundColor:answer.color}} onClick={() => setAnswer(getAnswer())}>
          <div className="EightBall-message">{answer.msg}</div>
        </div>
      </div>
      <div>
        <h3>Red: {colorCount.red}</h3>
        <h3>Goldenrod: {colorCount.goldenrod}</h3>
        <h3>Green: {colorCount.green}</h3>
      </div>
      <button className="EightBall-resetbtn" onClick={reset}>Reset</button>
    </div>
  );
}

export default EightBall;