import Table from 'react-bootstrap/Table';

export default function Fixture() {
  return (
    <div>
        <div style={{"display":"flex", "justifyContent":"center"}}>
            <h1>League Day 1: 10/29/2022</h1>
        </div>
        <div style={{"display":"flex", "justifyContent":"space-between", "margin":"30px"}}>
            <div>

                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                            <td>T1</td>
                            <td>T2</td>
                            <td>T3</td>
                            <td>T4</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                        <td>T5</td>
                        <td>T6</td>
                        <td>T7</td>
                        <td>T8</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                        <td>T9</td>
                        <td>T10</td>
                        <td>T11</td>
                        <td>T12</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                        <td>T13</td>
                        <td>T14</td>
                        <td>T15</td>
                        <td>T16</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                League Day 1: Austin Sports Center,  <a href='https://goo.gl/maps/qN29YFPAnXLf5zh69'> 425 Woodward St</a>
        </div>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                Reporting time: 8:30 am  
        </div>
        <Table striped bordered hover variant='dark' className='tableStyle'>
            <tbody>
                <tr>
                    <td style={{"textAlign":"center"}}>T1 v T2</td>
                    <td style={{"textAlign":"center"}}>9 am - 9:25 am</td>
                    <td style={{"textAlign":"center"}}>T1 v T3</td>
                    <td style={{"textAlign":"center"}}>9:30 am - 10 am</td>
                    <td style={{"textAlign":"center", "fontWeight":"bold"}}>Break from 10 am - 10:30 am</td>
                    <td style={{"textAlign":"center"}}>T1 v T4</td>
                    <td style={{"textAlign":"center"}}>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>T3 v T4</td>
                    <td style={{"textAlign":"center"}}>9 am - 9:25 am</td>
                    <td style={{"textAlign":"center"}}>T2 v T4</td>
                    <td style={{"textAlign":"center"}}>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold", "textAlign":"center", }}>Break from 10 am - 10:30 am</td>
                    <td style={{"textAlign":"center"}}>T2 v T3</td>
                    <td style={{"textAlign":"center"}}>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>T5 v T6</td>
                    <td style={{"textAlign":"center"}}>9 am - 9:25 am</td>
                    <td style={{"textAlign":"center"}}>T5 v T7</td>
                    <td style={{"textAlign":"center"}}>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold", "textAlign":"center", }}>Break from 10 am - 10:30 am</td>
                    <td style={{"textAlign":"center"}}>T5 v T8</td>
                    <td style={{"textAlign":"center"}}>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>T7 v T8</td>
                    <td style={{"textAlign":"center"}}>9 am - 9:25 am</td>
                    <td style={{"textAlign":"center"}}>T6 v T8</td>
                    <td style={{"textAlign":"center"}}>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold", "textAlign":"center", }}>Break from 10 am - 10:30 am</td>
                    <td style={{"textAlign":"center"}}>T6 v T7</td>
                    <td style={{"textAlign":"center"}}>10:30 am - 11 am</td>
                </tr>
            </tbody>
        </Table>
        <div style={{"display":"flex", "justifyContent":"center"}}>
            <h1>League Day 2: 10/30/2022</h1>
        </div>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                League Day 2: Round Rock Sports Center, <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a>
        </div>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                Reporting time: 8:30 am  
        </div>
        <Table striped bordered hover variant='dark' className='tableStyle'>
            <tbody>
                <tr>
                    <td style={{"textAlign":"center"}}>T9 v T10</td>
                    <td style={{"textAlign":"center"}}>9 am - 9:25 am</td>
                    <td style={{"textAlign":"center"}}>T9 v T11</td>
                    <td style={{"textAlign":"center"}}>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold", "textAlign":"center", }}>Break from 10 am - 10:30 am</td>
                    <td style={{"textAlign":"center"}}>T9 v T12</td>
                    <td style={{"textAlign":"center"}}>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>T11 v T12</td>
                    <td style={{"textAlign":"center"}}>9 am - 9:25 am</td>
                    <td style={{"textAlign":"center"}}>T10 v T12</td>
                    <td style={{"textAlign":"center"}}>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold", "textAlign":"center", }}>Break from 10 am - 10:30 am</td>
                    <td style={{"textAlign":"center"}}>T10 v T11</td>
                    <td style={{"textAlign":"center"}}>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>T13 v T14</td>
                    <td style={{"textAlign":"center"}}>9 am - 9:25 am</td>
                    <td style={{"textAlign":"center"}}>T13 v T15</td>
                    <td style={{"textAlign":"center"}}>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold", "textAlign":"center", }}>Break from 10 am - 10:30 am</td>
                    <td style={{"textAlign":"center"}}>T13 v T16</td>
                    <td style={{"textAlign":"center"}}>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>T15 v T16</td>
                    <td style={{"textAlign":"center"}}>9 am - 9:25 am</td>
                    <td style={{"textAlign":"center"}}>T14 v T16</td>
                    <td style={{"textAlign":"center"}}>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold", "textAlign":"center"}}>Break from 10 am - 10:30 am</td>
                    <td style={{"textAlign":"center"}}>T14 v T15</td>
                    <td style={{"textAlign":"center"}}>10:30 am - 11 am</td>
                </tr>
            </tbody>
        </Table>
        <div style={{"display":"flex", "justifyContent":"center"}}>
            <h1>Quarter Finals: 11/5/2022</h1>
        </div>
        
        <div style={{"display":"flex", "justifyContent":"space-evenly", "margin":"30px"}}>
            <div>
                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                            <td>X1</td>
                            <td>X2</td>
                            <td>X3</td>
                            <td>X4</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                            <td>X5</td>
                            <td>X6</td>
                            <td>X7</td>
                            <td>X8</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                Quarter Finals: Round Rock Sports Center, <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a>
        </div>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                Reporting time: 3 pm
        </div>
        <Table striped bordered hover variant='dark' className='tableStyle'>
            <tbody>
            <tr>
                    <td style={{"textAlign":"center"}}>X1 v Y1</td>
                    <td style={{"textAlign":"center"}}>3pm - 3:55 pm</td>
                    <td style={{"textAlign":"center"}}>X1 v Y2</td>
                    <td style={{"textAlign":"center"}}>4pm - 4:25 pm</td>
                    <td style={{"fontWeight":"bold"}}>Break from 4:25pm - 5 pm</td>
                    <td style={{"textAlign":"center"}}>X1 v Y3</td>
                    <td style={{"textAlign":"center"}}>5pm - 5:25pm</td>
                    <td style={{"textAlign":"center"}}>X1 v Y4</td>
                    <td style={{"textAlign":"center"}}>5:30pm - 6pm</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>X2 v Y2</td>
                    <td style={{"textAlign":"center"}}>3pm - 3:55 pm</td>
                    <td style={{"textAlign":"center"}}>X2 v Y1</td>
                    <td style={{"textAlign":"center"}}>4pm - 4:25 pm</td>
                    <td style={{"fontWeight":"bold"}}>Break from 4:25pm - 5 pm</td>
                    <td style={{"textAlign":"center"}}>X2 v Y4</td>
                    <td style={{"textAlign":"center"}}>5pm - 5:25pm</td>
                    <td style={{"textAlign":"center"}}>X2 v Y3</td>
                    <td style={{"textAlign":"center"}}>5:30pm - 6pm</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>X3 v Y3</td>
                    <td style={{"textAlign":"center"}}>3pm - 3:55 pm</td>
                    <td style={{"textAlign":"center"}}>X3 v Y4</td>
                    <td style={{"textAlign":"center"}}>4pm - 4:25 pm</td>
                    <td style={{"fontWeight":"bold"}}>Break from 4:25pm - 5 pm</td>
                    <td style={{"textAlign":"center"}}>X3 v Y1</td>
                    <td style={{"textAlign":"center"}}>5pm - 5:25pm</td>
                    <td style={{"textAlign":"center"}}>X3 v Y2</td>
                    <td style={{"textAlign":"center"}}>5:30pm - 6pm</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>X4 v Y4</td>
                    <td style={{"textAlign":"center"}}>3pm - 3:55 pm</td>
                    <td style={{"textAlign":"center"}}>X4 v Y3</td>
                    <td style={{"textAlign":"center"}}>4pm - 4:25 pm</td>
                    <td style={{"fontWeight":"bold"}}>Break from 4:25pm - 5 pm</td>
                    <td style={{"textAlign":"center"}}>X4 v Y2</td>
                    <td style={{"textAlign":"center"}}>5pm - 5:25pm</td>
                    <td style={{"textAlign":"center"}}>X4 v Y1</td>
                    <td style={{"textAlign":"center"}}> 5:30pm - 6pm</td>
                </tr>
            </tbody>
        </Table>
        <div style={{"display":"flex", "justifyContent":"center"}}>
            <h1>Semi Finals: 11/6/2022</h1>
        </div>
        
        <div style={{"display":"flex", "justifyContent":"space-evenly", "margin":"30px"}}>
            <div>
                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                            <td>P1</td>
                            <td>P2</td>
   
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>Q2</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                Semi Finals: Round Rock Sports Center, <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a>
        </div>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                Reporting time: 8:30 am
        </div>
        <Table striped bordered hover variant='dark' className='tableStyle'>
            <tbody>
                <tr>
                    <td style={{"textAlign":"center"}}>Game 1</td>
                    <td style={{"textAlign":"center"}}>P1 v Q2</td>
                    <td style={{"textAlign":"center"}}>9:00am-9:25am</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>Game 2</td>
                    <td style={{"textAlign":"center"}}>P1 v Q2</td>
                    <td style={{"textAlign":"center"}}>9:30am-9:55am</td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <div style={{"display":"flex", "justifyContent":"center","fontWeight":"bold"}}>
                            Break from 9:55am - 10:30 am
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>Game 3</td>
                    <td style={{"textAlign":"center"}}>P1 v Q2</td>
                    <td style={{"textAlign":"center"}}>10:30am-10:55am</td>
                </tr>
            </tbody>
        </Table>
        <Table striped bordered hover variant='dark' className='tableStyle'>
            <tbody>
                <tr>
                    <td style={{"textAlign":"center"}}>Game 1</td>
                    <td style={{"textAlign":"center"}}>P2 v Q1</td>
                    <td style={{"textAlign":"center"}}>9:00am-9:25am</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>Game 2</td>
                    <td style={{"textAlign":"center"}}>P2 v Q1</td>
                    <td style={{"textAlign":"center"}}>9:30am-9:55am</td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <div style={{"display":"flex", "justifyContent":"center","fontWeight":"bold"}}>
                            Break from 9:55am - 10:30 am
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>Game 3</td>
                    <td style={{"textAlign":"center"}}>P2 v Q1</td>
                    <td style={{"textAlign":"center"}}>10:30am-10:55am</td>
                </tr>
            </tbody>
        </Table>
        <div style={{"display":"flex", "justifyContent":"center"}}>
            <h1> Finals: 11/13/2022</h1>
        </div>
        <div style={{"display":"flex", "justifyContent":"space-evenly", "margin":"30px"}}>
            <div>
                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                            <td>First Semi Finals Champion</td>
                            <td>First Semi Finals Runners Up</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                            <td>Second Semi Finals Champion</td>
                            <td>Second Semi Finals Runners Up</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                Finals and 3rd/4th place: Round Rock Sports Center, <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a>
        </div>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                Reporting time: 2 pm
        </div>
        <Table striped bordered hover variant='dark' className='tableStyle'>
            <tbody>
                <tr>
                    <td style={{"textAlign":"center"}}>3rd/4th Place Game 1</td>
                    <td style={{"textAlign":"center"}}>First Semi Runner Up</td>
                    <td style={{"display":"flex","justifyContent":"center"}}>VS</td>
                    <td style={{"textAlign":"center"}}>Second Semi Runner Up</td>
                    <td style={{"textAlign":"center"}}>2:30pm - 2:55 pm</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>3rd/4th Place Game 2</td>
                    <td style={{"textAlign":"center"}}>First Semi Runner Up</td>
                    <td style={{"display":"flex","justifyContent":"center"}}>VS</td>
                    <td style={{"textAlign":"center"}}>Second Semi Runner Up</td>
                    <td style={{"textAlign":"center"}}>3pm - 3:25 pm</td>
                </tr>
                <tr>
                    <td colSpan={5}>
                        <div style={{"display":"flex", "justifyContent":"center","fontWeight":"bold"}}>
                            Break from 3 pm-4:30 pm
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table>

        <div style={{"display":"flex", "justifyContent":"space-evenly", "margin":"30px"}}>
            <div>
                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                            <td>First Semi Finals Champion</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <Table striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                            <td>Second Semi Finals Champion</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        <div className='border border-dark' style={{"display":"flex","backgroundColor":"yellow","justifyContent":"center","fontWeight":"bold"}}>
            Final games
        </div>
        <Table striped bordered hover variant='dark' className='tableStyle'>
            <tbody>
                <tr>
                    <td style={{"display":"flex","justifyContent":"center"}}>Final game 1</td>
                    <td style={{"textAlign":"center"}}>First Semi Champion</td>
                    <td style={{"display":"flex","justifyContent":"center"}}>VS</td>
                    <td style={{"textAlign":"center"}}>Second Semi Champion</td>
                    <td style={{"textAlign":"center"}}>4:30pm - 4:55 pm</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>Final game 1</td>
                    <td style={{"textAlign":"center"}}>First Semi Champion</td>
                    <td style={{"display":"flex","justifyContent":"center"}}>VS</td>
                    <td style={{"textAlign":"center"}}>Second Semi Champion</td>
                    <td style={{"textAlign":"center"}}>5:00pm - 5:25 pm</td>
                </tr>
                <tr>
                    <td colSpan={5}>
                        <div style={{"display":"flex", "justifyContent":"center","fontWeight":"bold"}}>
                            Break from 5:25pm - 6 pm
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>Final game 3</td>
                    <td style={{"textAlign":"center"}}>First Semi Champion</td>
                    <td style={{"display":"flex","justifyContent":"center"}}>VS</td>
                    <td style={{"textAlign":"center"}}>Second Semi Champion</td>
                    <td style={{"textAlign":"center"}}>6:00pm - 6:25 pm</td>
                </tr>
            </tbody>
        </Table>
        <h1 style={{"display":"flex","justifyContent":"center"}}>
            Prize distribution: 6:30pm - 9 pm
        </h1>
    </div>
  );
}