import PlayerCard from "../Components/Card";
import captainsImagesToNames from "../Players/Captains-2022";

export default function Captains(){
    let captainsCardBlock = [];
    for(var index = 0; index < 16; index++){
      captainsCardBlock.push(
                              <PlayerCard 
                                imageLocation={`/images/captains-2022/${index}`} 
                                playersImage={captainsImagesToNames[index]}
                              />
                           )          
    }
    return (
            <div style={{"display":"flex", "flexGrow":"1", "justifyContent": "space-around", "flexFlow":"wrap"}}>
              {captainsCardBlock}
            </div>
          );
}