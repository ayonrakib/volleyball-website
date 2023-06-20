import React = require('react');
import PlayerCard from '../Components/Card';
import playersIndicesToNames from '../Players/Players-2022';

export default function Players() {
  let playersCardBlock = [];
  for (var index = 0; index < 107; index++) {
    console.log(`index is ${index}`)
    playersCardBlock.push(
      <PlayerCard
        imageLocation={`/images/players-2022/${index}`}
        playersImage={playersIndicesToNames[index]}
      />
    )
  }
  return (
    <div style={{ "display": "flex", "flexGrow": "1", "justifyContent": "space-around", "flexFlow": "wrap" }}>
      {playersCardBlock}
    </div>
  );
}

