import React from 'react';
import NavBar from '../Components/Navbar';
import amIAdmin from '../service/adminService';
import WelcomePage from './WelcomePage';

export default function Home() {

    var isAdmin = amIAdmin();
    console.log("am i admin: ",isAdmin);

    return (
        <div className='pageContainer'>
            <NavBar/>
            <WelcomePage/>
        </div>
    )
}