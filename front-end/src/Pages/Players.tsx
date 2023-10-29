import React from 'react';
import PlayerCard from '../Components/Card';
import NavBar from '../Components/Navbar';
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
    <>
      <NavBar/>
      <div style={{ "display": "flex", "flexGrow": "1", "justifyContent": "space-around", "flexFlow": "wrap" }}>
        {playersCardBlock}
      </div>
    </>

  );
}

