import NavBar from '../Components/Navbar';
import { useReducer } from 'react';

function reducer(stateDictionary, action){
    return true;
}

export default function Home(){
    const [stateDictionary, dispatch] = useReducer(reducer, {componentToLoad: <></>} )
    return(
        <div>
            <NavBar/>
            <div className='homePageAnnouncement'>
                Welcome to Austin BD Volleyball! You will find all sorts of information here!
            </div>
        </div>
    )
}