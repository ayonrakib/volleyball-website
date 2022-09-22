import Table from 'react-bootstrap/Table';

export default function Fixture() {
  return (
    <div>
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
                    <td>T1 v T2</td>
                    <td>9 am - 9:25 am</td>
                    <td>T1 v T3</td>
                    <td>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold"}}>Break from 10 am - 10:30 am</td>
                    <td>T1 v T4</td>
                    <td>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td>T3 v T4</td>
                    <td>9 am - 9:25 am</td>
                    <td>T2 v T4</td>
                    <td>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold"}}>Break from 10 am - 10:30 am</td>
                    <td>T2 v T3</td>
                    <td>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td>T5 v T6</td>
                    <td>9 am - 9:25 am</td>
                    <td>T5 v T7</td>
                    <td>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold"}}>Break from 10 am - 10:30 am</td>
                    <td>T5 v T8</td>
                    <td>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td>T7 v T8</td>
                    <td>9 am - 9:25 am</td>
                    <td>T6 v T8</td>
                    <td>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold"}}>Break from 10 am - 10:30 am</td>
                    <td>T6 v T7</td>
                    <td>10:30 am - 11 am</td>
                </tr>
            </tbody>
        </Table>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                League Day 2: Round Rock Sports Center, ,  <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a>
        </div>
        <div className='border border-dark' style={{"display":"flex", "justifyContent":"center", "backgroundColor":"yellow","fontWeight":"bolder"}}>
                Reporting time: 8:30 am  
        </div>
        <Table striped bordered hover variant='dark' className='tableStyle'>
            <tbody>
                <tr>
                    <td>T9 v T10</td>
                    <td>9 am - 9:25 am</td>
                    <td>T9 v T11</td>
                    <td>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold"}}>Break from 10 am - 10:30 am</td>
                    <td>T9 v T12</td>
                    <td>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td>T11 v T12</td>
                    <td>9 am - 9:25 am</td>
                    <td>T10 v T12</td>
                    <td>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold"}}>Break from 10 am - 10:30 am</td>
                    <td>T10 v T11</td>
                    <td>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td>T13 v T14</td>
                    <td>9 am - 9:25 am</td>
                    <td>T13 v T15</td>
                    <td>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold"}}>Break from 10 am - 10:30 am</td>
                    <td>T13 v T16</td>
                    <td>10:30 am - 11 am</td>
                </tr>
                <tr>
                    <td>T15 v T16</td>
                    <td>9 am - 9:25 am</td>
                    <td>T14 v T16</td>
                    <td>9:30 am - 10 am</td>
                    <td style={{"fontWeight":"bold"}}>Break from 10 am - 10:30 am</td>
                    <td>T14 v T15</td>
                    <td>10:30 am - 11 am</td>
                </tr>
            </tbody>
        </Table>
    </div>
  );
}