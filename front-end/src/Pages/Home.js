import NavBar from '../Components/Navbar';
import { useReducer } from 'react';
import WelcomeMessage from './WelcomeMessage';
import Schedule from './Schedule';

function reducer(stateDictionary, action){
    switch(action.name){
        case "showSchedule":
            return {...stateDictionary, componentToLoad:action.data.scheduleComponent}
        case "showWelcomeMessage":
            return {...stateDictionary, componentToLoad:action.data.showWelcomeMessage}
        default:
            return;
    }
}

export default function Home(){
    const [stateDictionary, dispatch] = useReducer(reducer, {componentToLoad: <WelcomeMessage/>} );

    function assignSchedulePage(){
        console.log("came inside assignSchedulePage method!")
        dispatch({ name : "showSchedule", data : {scheduleComponent:<Schedule/>}})
    }

    function showWelcomeMessage(){
        console.log("came inside showWelcomeMessage method!")
        dispatch({ name : "showWelcomeMessage", data : {showWelcomeMessage:<WelcomeMessage/>}})
    }

    return(
        <div className='pageContainer'>
            <div>
                <NavBar assignSchedulePage={assignSchedulePage} showWelcomeMessage={showWelcomeMessage}/>
            </div>

            <div className='componentToShowBlock container'>
                {stateDictionary.componentToLoad}
            </div>
        </div>
    )
}