import Table from "react-bootstrap/Table";

export default function ScoreComponent(props){
    return(
        <div>
            <Table responsive striped bordered hover className='tableStyle' style={{"textAlign":"center", "fontWeight":"bold"}}>
                <thead>
                    <tr>
                        <th 
                            colSpan={5} 
                            style={{"textAlign":"center"}}
                        >
                            {props.gameTitle}
                        </th>
                    </tr>
                    <tr>
                        <th 
                            colSpan={5} 
                            style={{"textAlign":"center"}}
                        >
                            {props.location}, {props.day}, {props.date}: Winning Game Point: 1, Losing Game Point: 0
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Team</td>
                        <td>{props.teamOne}</td>
                        <td>{props.teamTwo}</td>
                        <td>{props.teamThree}</td>
                        <td>{props.teamFour}</td>
                    </tr>
                    <tr>
                        <td>Time/Score</td>
                        <td>{props.captainOne}</td>
                        <td>{props.captainTwo}</td>
                        <td>{props.captainThree}</td>
                        <td>{props.captainFour}</td>
                    </tr>
                    <tr>
                        <td>{props.firstGameTime}</td>
                        <td style={{"backgroundColor":`${props.firstMatchFirstColor}`}}>Court {props.courtNameOne}</td>
                        <td style={{"backgroundColor":`${props.firstMatchSecondColor}`}}>Court {props.courtNameTwo}</td>
                        <td style={{"backgroundColor":`${props.firstMatchThirdColor}`}}>Court {props.courtNameThree}</td>
                        <td style={{"backgroundColor":`${props.firstMatchFourthColor}`}}>Court {props.courtNameFour}</td>
                    </tr>
                    <tr>
                        <td>Score</td>
                        <td style={{"backgroundColor":`${props.firstMatchFirstColor}`}}>{props.scoreOne}</td>
                        <td style={{"backgroundColor":`${props.firstMatchSecondColor}`}}>{props.scoreTwo}</td>
                        <td style={{"backgroundColor":`${props.firstMatchThirdColor}`}}>{props.scoreThree}</td>
                        <td style={{"backgroundColor":`${props.firstMatchFourthColor}`}}>{props.scoreFour}</td>
                    </tr>
                    <tr>
                        <td>Game Point</td>
                        <td style={{"backgroundColor":`${props.firstMatchFirstColor}`}}>{props.pointOne}</td>
                        <td style={{"backgroundColor":`${props.firstMatchSecondColor}`}}>{props.pointTwo}</td>
                        <td style={{"backgroundColor":`${props.firstMatchThirdColor}`}}>{props.pointThree}</td>
                        <td style={{"backgroundColor":`${props.firstMatchFourthColor}`}}>{props.pointFour}</td>
                    </tr>
                    <tr>
                        <td>{props.secondGameTime}</td>
                        <td style={{"backgroundColor":`${props.secondMatchFirstColor}`}}>Court {props.courtNameFive}</td>
                        <td style={{"backgroundColor":`${props.secondMatchSecondColor}`}}>Court {props.courtNameSix}</td>
                        <td style={{"backgroundColor":`${props.secondMatchThirdColor}`}}>Court {props.courtNameSeven}</td>
                        <td style={{"backgroundColor":`${props.secondMatchFourthColor}`}}>Court {props.courtNameEight}</td>
                    </tr>
                    <tr>
                        <td>Score</td>
                        <td style={{"backgroundColor":`${props.secondMatchFirstColor}`}}>{props.scoreFive}</td>
                        <td style={{"backgroundColor":`${props.secondMatchSecondColor}`}}>{props.scoreSix}</td>
                        <td style={{"backgroundColor":`${props.secondMatchThirdColor}`}}>{props.scoreSeven}</td>
                        <td style={{"backgroundColor":`${props.secondMatchFourthColor}`}}>{props.scoreEight}</td>
                    </tr>
                    <tr>
                        <td>Game Point</td>
                        <td style={{"backgroundColor":`${props.secondMatchFirstColor}`}}>{props.pointFive}</td>
                        <td style={{"backgroundColor":`${props.secondMatchSecondColor}`}}>{props.pointSix}</td>
                        <td style={{"backgroundColor":`${props.secondMatchThirdColor}`}}>{props.pointSeven}</td>
                        <td style={{"backgroundColor":`${props.secondMatchFourthColor}`}}>{props.pointEight}</td>
                    </tr>
                    <tr>
                        <td colSpan={5}>Break</td>
                    </tr>
                    <tr>
                        <td>{props.thirdgameTime}</td>
                        <td style={{"backgroundColor":`${props.thirdMatchFirstColor}`}}>Court {props.courtNameNine}</td>
                        <td style={{"backgroundColor":`${props.thirdMatchSecondColor}`}}>Court {props.courtNameTen}</td>
                        <td style={{"backgroundColor":`${props.thirdMatchThirdColor}`}}>Court {props.courtNameEleven}</td>
                        <td style={{"backgroundColor":`${props.thirdMatchFourthColor}`}}>Court {props.courtNameTwelve}</td>
                    </tr>
                    <tr>
                        <td>Score</td>
                        <td style={{"backgroundColor":`${props.thirdMatchFirstColor}`}}>{props.scoreNine}</td>
                        <td style={{"backgroundColor":`${props.thirdMatchSecondColor}`}}>{props.scoreTen}</td>
                        <td style={{"backgroundColor":`${props.thirdMatchThirdColor}`}}>{props.scoreEleven}</td>
                        <td style={{"backgroundColor":`${props.thirdMatchFourthColor}`}}>{props.scoreTwelve}</td>
                    </tr>
                    <tr>
                        <td>Game Point</td>
                        <td style={{"backgroundColor":`${props.thirdMatchFirstColor}`}}>{props.pointNine}</td>
                        <td style={{"backgroundColor":`${props.thirdMatchSecondColor}`}}>{props.pointTen}</td>
                        <td style={{"backgroundColor":`${props.thirdMatchThirdColor}`}}>{props.pointEleven}</td>
                        <td style={{"backgroundColor":`${props.thirdMatchFourthColor}`}}>{props.pointTwelve}</td>
                    </tr>
                    <tr>
                        <td colSpan={5}></td>
                    </tr>
                    <tr>
                        <td>Total Score</td>
                        <td>{props.firstScore}</td>
                        <td>{props.secondScore}</td>
                        <td>{props.thirdScore}</td>
                        <td>{props.fourthScore}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}