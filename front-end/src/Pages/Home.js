import NavBar from '../Components/Navbar';
import { useReducer } from 'react';
import WelcomePage from './WelcomePage';
import Schedule from './Schedule';
import Rules from './Rules';
import Players from './Players';
import Captains from './Captains';
import Fixture from './Fixture';
import Teams from './Teams';

function reducer(stateDictionary, action){
    switch(action.name){
        case "showWelcomeMessage":
            return {...stateDictionary, componentToLoad : action.data.showWelcomeMessage}
        case "showSchedule":
            return {...stateDictionary, componentToLoad : action.data.scheduleComponent}
        case "showRules":
            console.log("came inside reducer showrules!")
            return {...stateDictionary, componentToLoad : action.data.rulesComponent}
        case "showPlayers":
            console.log("came inside reducer showPlayers!")
            return {...stateDictionary, componentToLoad : action.data.playersComponent}
        case "showCaptains":
            console.log("came inside reducer showCaptains!")
            return {...stateDictionary, componentToLoad : action.data.captainsComponent}
        case "showFixture":
            console.log("came inside reducer showFixture!")
            return {...stateDictionary, componentToLoad : action.data.fixtureComponent}
        case "showTeams":
            console.log("came inside reducer showTeams!")
            return {...stateDictionary, componentToLoad : action.data.teamsComponent}
        default:
            return;
    }
}

export default function Home(){
    const [stateDictionary, dispatch] = useReducer(reducer, {componentToLoad: <WelcomePage/>} );

    function assignSchedulePage(){
        console.log("came inside assignSchedulePage method!")
        dispatch({ name : "showSchedule", data : {scheduleComponent:<Schedule/>}})
    }

    function showRulesPage(){
        console.log("came inside showRulePage method!")
        dispatch({ name : "showRules", data : {rulesComponent:<Rules/>}})
    }

    function showPlayersPage(){
        console.log("came inside showRulePage method!")
        dispatch({ name : "showPlayers", data : {playersComponent:<Players/>}})
    }

    function showCaptainsPage(){
        console.log("came inside showCaptainsPage method!")
        dispatch({ name : "showCaptains", data : {captainsComponent:<Captains/>}})
    }

    function showFixturePage(){
        console.log("came inside showFixturePage method!")
        dispatch({ name : "showFixture", data : {fixtureComponent:<Fixture/>}})
    }

    function showTeamsPage(){
        console.log("came inside showTeamsPage method!")
        dispatch({ name : "showTeams", data : {teamsComponent:<Teams/>}})
    }

    function showWelcomePage(){
        console.log("came inside showWelcomeMessage method!")
        dispatch({ name : "showWelcomeMessage", data : {showWelcomeMessage:<WelcomePage/>}})
    }



    return(
        <div className='pageContainer'>
            <div>
                <NavBar 
                    assignSchedulePage={assignSchedulePage} 
                    showWelcomePage={showWelcomePage} 
                    showRulesPage={showRulesPage} 
                    showPlayersPage={showPlayersPage}
                    showCaptainsPage={showCaptainsPage}
                    showFixturePage={showFixturePage}
                    showTeamsPage={showTeamsPage}
                />
            </div>

            <div className='componentToShowBlock container'>
                {stateDictionary.componentToLoad}
            </div>
        </div>
    )
}