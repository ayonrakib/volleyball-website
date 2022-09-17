import NavBar from '../Components/Navbar';
import { useReducer } from 'react';
import WelcomeMessage from './WelcomeMessage';
import Schedule from './Schedule';
import Rules from './Rules';

function reducer(stateDictionary, action){
    switch(action.name){
        case "showWelcomeMessage":
            return {...stateDictionary, componentToLoad : action.data.showWelcomeMessage}
        case "showSchedule":
            return {...stateDictionary, componentToLoad : action.data.scheduleComponent}
        case "showRules":
            console.log("came inside reducer showrules!")
            return {...stateDictionary, componentToLoad : action.data.rulesComponent}
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

    function showRulesPage(){
        console.log("came inside showRulePage method!")
        dispatch({ name : "showRules", data : {rulesComponent:<Rules/>}})
    }

    function showWelcomeMessage(){
        console.log("came inside showWelcomeMessage method!")
        dispatch({ name : "showWelcomeMessage", data : {showWelcomeMessage:<WelcomeMessage/>}})
    }



    return(
        <div className='pageContainer'>
            <div>
                <NavBar assignSchedulePage={assignSchedulePage} showWelcomeMessage={showWelcomeMessage} showRulesPage={showRulesPage}/>
            </div>

            <div className='componentToShowBlock container'>
                {stateDictionary.componentToLoad}
            </div>
        </div>
    )
}