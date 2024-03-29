import React from 'react';
import Table from 'react-bootstrap/Table';
import ScoreComponent from "../Components/ScoreComponent";
import LinesMen from "../Components/LinesMen";
import NavBar from '../Components/Navbar';

export default function Score() {
    return (
        <>
            <NavBar/>
            <div style={{ "minWidth": "0", "marginTop": "30px" }}>
            <h1 style={{ "textAlign": "center" }}>League Games Day 1</h1>
            <ScoreComponent
                gameTitle="Group 1 Games"
                location="ASC Woodward"
                day="Saturday"
                date="10/29"
                teamOne="ATX Hitters"
                teamTwo="ATX Twisters"
                teamThree="ATX Dynamites"
                teamFour="ATX Tornadoes"
                captainOne="Sohel"
                captainTwo="Shajal"
                captainThree="Sami"
                captainFour="Nafis"
                firstGameTime="9:00 am"
                firstMatchFirstColor="orange"
                firstMatchSecondColor="orange"
                firstMatchThirdColor="cornflowerblue"
                firstMatchFourthColor="cornflowerblue"
                courtNameOne="CVB1"
                courtNameTwo="CVB1"
                courtNameThree="CVB3"
                courtNameFour="CVB3"
                scoreOne="23"
                scoreTwo="25"
                scoreThree="25"
                scoreFour="10"
                pointOne="0"
                pointTwo="1"
                pointThree="1"
                pointFour="0"
                secondGameTime="9:30 am"
                secondMatchFirstColor="yellow"
                secondMatchSecondColor="orange"
                secondMatchThirdColor="yellow"
                secondMatchFourthColor="orange"
                courtNameFive="CVB2"
                courtNameSix="CVB1"
                courtNameSeven="CVB2"
                courtNameEight="CVB1"
                scoreFive="25"
                scoreSix="25"
                scoreSeven="21"
                scoreEight="23"
                pointFive="1"
                pointSix="1"
                pointSeven="0"
                pointEight="0"
                thirdgameTime="10:30 am"
                thirdMatchFirstColor="orange"
                thirdMatchSecondColor="yellow"
                thirdMatchThirdColor="yellow"
                thirdMatchFourthColor="orange"
                courtNameNine="CVB1"
                courtNameTen="CVB2"
                courtNameEleven="CVB2"
                courtNameTwelve="CVB1"
                scoreNine="23"
                scoreTen="16"
                scoreEleven="25"
                scoreTwelve="25"
                pointNine="0"
                pointTen="0"
                pointEleven="1"
                pointTwelve="1"
                firstScore="1"
                secondScore="2"
                thirdScore="2"
                fourthScore="1"
            />

            <ScoreComponent
                gameTitle="Group 2 Games"
                location="ASC Woodward"
                day="Saturday"
                date="10/29"
                teamOne="ATX Crushers"
                teamTwo="ATX Blasters"
                teamThree="ATX Blockers"
                teamFour="ATX Raiders"
                captainOne="Polin"
                captainTwo="Rupom"
                captainThree="Rashed"
                captainFour="Munna"
                firstGameTime="9:00 am"
                firstMatchFirstColor="yellow"
                firstMatchSecondColor="yellow"
                firstMatchThirdColor="lightgray"
                firstMatchFourthColor="lightgray"
                courtNameOne="CVB2"
                courtNameTwo="CVB2"
                courtNameThree="CVB4"
                courtNameFour="CVB4"
                scoreOne="25"
                scoreTwo="21"
                scoreThree="25"
                scoreFour="18"
                pointOne="1"
                pointTwo="0"
                pointThree="1"
                pointFour="0"
                secondGameTime="9:30 am"
                secondMatchFirstColor="cornflowerblue"
                secondMatchSecondColor="lightgray"
                secondMatchThirdColor="cornflowerblue"
                secondMatchFourthColor="lightgray"
                courtNameFive="CVB3"
                courtNameSix="CVB4"
                courtNameSeven="CVB3"
                courtNameEight="CVB4"
                scoreFive="25"
                scoreSix="25"
                scoreSeven="13"
                scoreEight="15"
                pointFive="1"
                pointSix="1"
                pointSeven="0"
                pointEight="0"
                thirdgameTime="10:30 am"
                thirdMatchFirstColor="cornflowerblue"
                thirdMatchSecondColor="lightgray"
                thirdMatchThirdColor="lightgray"
                thirdMatchFourthColor="cornflowerblue"
                courtNameNine="CVB3"
                courtNameTen="CVB4"
                courtNameEleven="CVB4"
                courtNameTwelve="CVB3"
                scoreNine="25"
                scoreTen="25"
                scoreEleven="24"
                scoreTwelve="18"
                pointNine="1"
                pointTen="1"
                pointEleven="0"
                pointTwelve="0"
                firstScore="3"
                secondScore="2"
                thirdScore="1"
                fourthScore="0"
            />

            <LinesMen
                firstCourtBackGroundColor="orange"
                secondCourtBackGroundColor="yellow"
                thirdCourtBackGroundColor="cornflowerblue"
                fourthCourtBackGroundColor="lightgray"
                courtNumberOne="CVB1"
                firstCourtLinesMen="Manar and Rezwan"
                courtNumberTwo="CVB2"
                secondCourtLinesMen="Omar and Mashu"
                courtNumberThree="CVB3"
                thirdCourtLinesMen="Zahedul and Moinul"
                courtNumberFour="CVB4"
                fourthCourtLinesMen="Mona and Shaheen"
            />

            <h1 style={{ "textAlign": "center" }}>League Games Day 2</h1>
            <ScoreComponent
                gameTitle="Group 3 Games"
                location="RRSC"
                day="Sunday"
                date="10/30"
                teamOne="ATX Jaguars"
                teamTwo="ATX Spikers"
                teamThree="ATX Typhoons"
                teamFour="ATX Hawks"
                captainOne="Manar"
                captainTwo="Rezwan"
                captainThree="Omar"
                captainFour="Mashu"
                firstGameTime="9:00 am"
                firstMatchFirstColor="orange"
                firstMatchSecondColor="orange"
                firstMatchThirdColor="cornflowerblue"
                firstMatchFourthColor="cornflowerblue"
                courtNameOne="1A"
                courtNameTwo="1A"
                courtNameThree="2A"
                courtNameFour="2A"
                scoreOne="25"
                scoreTwo="11"
                scoreThree="24"
                scoreFour="25"
                pointOne="1"
                pointTwo="0"
                pointThree="0"
                pointFour="1"
                secondGameTime="9:30 am"
                secondMatchFirstColor="yellow"
                secondMatchSecondColor="orange"
                secondMatchThirdColor="yellow"
                secondMatchFourthColor="orange"
                courtNameFive="1B"
                courtNameSix="1A"
                courtNameSeven="1B"
                courtNameEight="1A"
                scoreFive="25"
                scoreSix="25"
                scoreSeven="16"
                scoreEight="24"
                pointFive="1"
                pointSix="1"
                pointSeven="0"
                pointEight="0"
                thirdgameTime="10:30 am"
                thirdMatchFirstColor="orange"
                thirdMatchSecondColor="yellow"
                thirdMatchThirdColor="yellow"
                thirdMatchFourthColor="orange"
                courtNameNine="1A"
                courtNameTen="1B"
                courtNameEleven="1B"
                courtNameTwelve="1A"
                scoreNine="25"
                scoreTen="25"
                scoreEleven="19"
                scoreTwelve="22"
                pointNine="1"
                pointTen="1"
                pointEleven="0"
                pointTwelve="0"
                firstScore="3"
                secondScore="2"
                thirdScore="0"
                fourthScore="1"
            />

            <ScoreComponent
                gameTitle="Group 4 Games"
                location="RRSC"
                day="Sunday"
                date="10/30"
                teamOne="ATX Falcons"
                teamTwo="ATX Challengers"
                teamThree="ATX Eagles"
                teamFour="ATX Wildcats"
                captainOne="Zahedul"
                captainTwo="Moinul"
                captainThree="Mona"
                captainFour="Shaheen"
                firstGameTime="9:00 am"
                firstMatchFirstColor="yellow"
                firstMatchSecondColor="yellow"
                firstMatchThirdColor="lightgray"
                firstMatchFourthColor="lightgray"
                courtNameOne="1B"
                courtNameTwo="1B"
                courtNameThree="2B"
                courtNameFour="2B"
                scoreOne="20"
                scoreTwo="25"
                scoreThree="21"
                scoreFour="25"
                pointOne="0"
                pointTwo="1"
                pointThree="0"
                pointFour="1"
                secondGameTime="9:30 am"
                secondMatchFirstColor="cornflowerblue"
                secondMatchSecondColor="lightgray"
                secondMatchThirdColor="cornflowerblue"
                secondMatchFourthColor="lightgray"
                courtNameFive="2A"
                courtNameSix="2B"
                courtNameSeven="2A"
                courtNameEight="2A"
                scoreFive="10"
                scoreSix="24"
                scoreSeven="25"
                scoreEight="25"
                pointFive="0"
                pointSix="0"
                pointSeven="1"
                pointEight="1"
                thirdgameTime="10:30 am"
                thirdMatchFirstColor="cornflowerblue"
                thirdMatchSecondColor="lightgray"
                thirdMatchThirdColor="lightgray"
                thirdMatchFourthColor="cornflowerblue"
                courtNameNine="2A"
                courtNameTen="2B"
                courtNameEleven="2B"
                courtNameTwelve="2A"
                scoreNine="19"
                scoreTen="16"
                scoreEleven="25"
                scoreTwelve="25"
                pointNine="0"
                pointTen="0"
                pointEleven="1"
                pointTwelve="1"
                firstScore="0"
                secondScore="1"
                thirdScore="2"
                fourthScore="3"
            />

            <LinesMen
                firstCourtBackGroundColor="orange"
                secondCourtBackGroundColor="yellow"
                thirdCourtBackGroundColor="cornflowerblue"
                fourthCourtBackGroundColor="lightgray"
                courtNumberOne="Court 1A"
                firstCourtLinesMen="Sohel and Shajal"
                courtNumberTwo="Court 1B"
                secondCourtLinesMen="Ishtiaque and Ayon"
                courtNumberThree="Court 2A"
                thirdCourtLinesMen="Ahnaf and Khwaja"
                courtNumberFour="Court 2B"
                fourthCourtLinesMen="Rashed and Munna"
            />

            <h1 style={{ "textAlign": "center" }}>Results</h1>
            <Table striped bordered hover variant="dark" style={{ "fontWeight": "bold", "textAlign": "center" }}>
                <tbody>
                    <tr>
                        <td>League Day 1</td>
                        <td>Sami</td>
                        <td>Shajal</td>
                        <td>Polin</td>
                        <td>Rupom</td>
                    </tr>
                    <tr>
                        <td>League Day 2</td>
                        <td>Shaheen</td>
                        <td>Rezwan</td>
                        <td>Mona</td>
                        <td>Manar</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        </>



    )
}