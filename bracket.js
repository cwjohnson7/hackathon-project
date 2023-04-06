
import React, { useState } from 'react';


const participants = [
  'Adam', 'Matt', 'Evan', 'Abby', 'Heather', 'Christina', 'Ryan', 'Tyler',
  'Steve', 'Steph', 'Jenna', 'Derek', 'Mike', 'Sam', 'Justin', 'Talia'
];

function Bracket() {
  const [winners, setWinners] = useState([]);

  // Recursive function to generate nested brackets
  const buildBracket = (depth) => {
    if (depth === 4) {
      return null;
    }

    const bracket = (
      <ul className="bracket" key={depth}>
        <li onClick={() => handleWinnerSelection(depth, 0)}>
          {winners[depth]?.[0] || <button disabled>Winner 1</button>}
        </li>
        <li onClick={() => handleWinnerSelection(depth, 1)}>
          {winners[depth]?.[1] || <button disabled>Winner 2</button>}
        </li>
      </ul>
    );

    return (
      <li key={depth}>
        {buildBracket(depth + 1)}
        {bracket}
      </li>
    );
  };

  // Callback function when a winner is selected
  const handleWinnerSelection = (depth, index) => {
    if (!winners[depth]) {
      setWinners([...winners, []]);
    }

    setWinners(prevWinners => {
      const newWinners = [...prevWinners];
      newWinners[depth][index] = participants[depth * 2 + index];
      return newWinners;
    });
  };

  // Render the tournament with all the nested brackets and participants
  return (
    <div className="tournament">
      <ul className="hidden-bracket">
        <li><button disabled>Winner</button></li>
        <li><button disabled>Winner</button></li>
      </ul>
      <ul className="bracket">
        <li onClick={() => handleWinnerSelection(0, 0)}>
          {winners[0]?.[0] || <button>{participants[0]}</button>}
        </li>
        <li onClick={() => handleWinnerSelection(0, 1)}>
          {winners[0]?.[1] || <button>{participants[1]}</button>}
        </li>
      </ul>
      {buildBracket(1)}
    </div>
  );
}

export default Bracket;


