import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Fixture() {
    // const name:string = "Ayon";
    return (
        <div style={{ "minWidth": "0", "marginTop" : "30px" }}>
            <div>
                <Table responsive="sm" striped bordered hover variant='dark' className='tableStyle'>
                    <tbody>
                        <tr>
                            <td style={{ "width": "25%", "textAlign": "center" }}>Sohel</td>
                            <td style={{ "width": "25%", "textAlign": "center" }}>Sabbir</td>
                            <td style={{ "width": "25%", "textAlign": "center" }}>Sami</td>
                            <td style={{ "width": "25%", "textAlign": "center" }}>Samin</td>
                        </tr>
                    </tbody>
                </Table>
                <div>
                    <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Polin</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Rupom</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Rashed</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Maher</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Manar</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Rezwan</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Ahnaf</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Mashu</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Rajib</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Moinul</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Mona</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Shaheen</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Baad den</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Shams</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Ayon</td>
                                <td style={{ "width": "25%", "textAlign": "center" }}>Munir</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div style={{ "display": "flex", "justifyContent": "center" }}>
                <h1>League Day 1: 10/29/2023</h1>
            </div>
            <Table responsive striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center" }} colSpan={7}>
                            League Day 1: Round Rock Sports Center,
                            <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a> (Reporting time: 8 am)
                        </th>
                    </tr>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >8:30 am - 8:55 am</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >9:05 am - 9:30 am</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >9:40 am - 10:05 am</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} rowSpan={5}>30 minutes break</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >10:35 am - 11 am</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >11:10 am - 11:35 am</th>
                    </tr>
                </thead>
                <tbody style={{"verticalAlign":"middle"}}>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Polin v Rezwan <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Polin v Ahnaf <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Polin v Mashu <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "white", "textAlign": "center", "verticalAlign":"middle" }} rowSpan={5}>30 minutes break</td>
                        <td style={{ "textAlign": "center" }}>Polin v Shaheen <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "textAlign": "center" }}>Polin v Moinul <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Fayez v Shaheen <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Rezwan v Shaheen <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Rezwan v Fayez <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}>Rezwan v Rupom <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Rezwan v Rashed <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Moinul v Rupom <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "textAlign": "center" }}>Fayez v Rashed <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}>Shaheen v Ahnaf <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}>Fayez v Ahnaf <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Fayez v Mashu <span style={{"fontWeight":"bold"}}>(5B)</span></td>

                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Rashed v Ayon <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}>Moinul v Ayon <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "textAlign": "center" }}>Rupom v Rashed <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Moinul v Rashed <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}>Shaheen v Rupom <span style={{"fontWeight":"bold"}}>(5A)</span></td>

                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Ahnaf v Mashu <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Rupom v Mashu <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}></td>
                        <td style={{ "textAlign": "center" }}>Mashu v Ayon <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Ahnaf v Ayon <span style={{"fontWeight":"bold"}}>(4B)</span></td>

                    </tr>
                </tbody>
            </Table>
            <Table responsive striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center" }} colSpan={7}>
                            League Day 1: Round Rock Sports Center,
                            <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a> (Reporting time: 11:30 am)
                        </th>
                    </tr>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >12 pm - 12:25 pm</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >12:35 pm - 1 pm</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >1:10 pm - 1:35 pm</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} rowSpan={5}>25 minutes break</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >2 pm - 2:25 pm</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >2:30 pm - 2:55 pm</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >3 pm - 3:25 pm</th>
                    </tr>
                </thead>
                <tbody style={{"verticalAlign":"middle"}}>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Mona v Maher <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Mona v Shams <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Mona v Samin <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "white", "textAlign": "center", "verticalAlign":"middle" }} rowSpan={5}>25 minutes break</td>
                        <td style={{ "textAlign": "center" }}>Mona v Sami <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "textAlign": "center" }}>Mona v Sabbir <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center"}}>Maher v Sohel <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Munir v Sami <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Maher v Sami <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Maher v Munir <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}>Munir v Shams <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Maher v Manar <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center"}}>Munir v Samin <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Sabbir v Sohel <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "textAlign": "center" }}>Munir v Manar <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}>Sami v Shams <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}>Sabbir v Manar <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Sami v Sohel <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center"}}></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Manar v Rajib <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}>Sabbir v Rajib <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "textAlign": "center" }}>Sohel v Manar <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Rajib v Samin <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}>Rajib v Shams <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "textAlign": "center"}}></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Shams v Samin <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Sohel v Samin <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}></td>
                        <td style={{ "textAlign": "center" }}></td>
                        <td style={{ "textAlign": "center" }}></td>
                        <td style={{ "textAlign": "center"}}></td>
                    </tr>
                </tbody>
            </Table>

            <div style={{ "display": "flex", "justifyContent": "center" }}>
                <h1>League Day 2: 11/4/2023</h1>
            </div>
            <Table responsive striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center" }} colSpan={7}>
                            League Day 2: Round Rock Sports Center,
                            <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a> (Reporting time: 8 am)
                        </th>
                    </tr>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >8:30 am - 8:55 am</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >9:05 am - 9:30 am</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >9:40 am - 10:05 am</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} rowSpan={5}>30 minutes break</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >10:35 am - 11 am</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >11:10 am - 11:35 am</th>
                    </tr>
                </thead>
                <tbody style={{"verticalAlign":"middle"}}>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Mona v Munir <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Mona v Sohel <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Mona v Manar <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "white", "textAlign": "center", "verticalAlign":"middle" }} rowSpan={5}>30 minutes break</td>
                        <td style={{ "textAlign": "center" }}> <span style={{"fontWeight":"bold"}}></span></td>
                        <td style={{ "textAlign": "center" }}>Mona v Rajib <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Maher vs Shams <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}>Maher v Rajib <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Maher v Samin <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}> Sami vs Rajib <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Maher v Sabbir <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}> Sabbir vs Samin <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Munir v Sabbir <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "textAlign": "center" }}>Munir v Rajib <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}> Munir v Sohel <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}> <span style={{"fontWeight":"bold"}}></span></td>

                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Sami v Manar <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "textAlign": "center" }}>Sami v Samin <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}>Sami v Sabbir <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Sabbir v Shams <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}>Sohel v Shams <span style={{"fontWeight":"bold"}}>(5A)</span></td>

                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Sohel v Rajib <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Manar v Shams <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}></td>
                        <td style={{ "textAlign": "center" }}>Manar v Shams <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}> <span style={{"fontWeight":"bold"}}></span></td>

                    </tr>
                </tbody>
            </Table>
            <Table responsive striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center" }} colSpan={7}>
                            League Day 2: Round Rock Sports Center,
                            <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a> (Reporting time: 11:30 am)
                        </th>
                    </tr>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >12 pm - 12:25 pm</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >12:35 pm - 1 pm</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >1:10 pm - 1:35 pm</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} rowSpan={5}>30 minutes break</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >2:05 pm - 2:30 pm</th>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center", "verticalAlign":"middle" }} >2:40 pm - 3:05 pm</th>
                    </tr>
                </thead>
                <tbody style={{"verticalAlign":"middle"}}>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Polin v Shantanu <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Polin v Rupom <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Polin v Rashed <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "white", "textAlign": "center", "verticalAlign":"middle" }} rowSpan={5}>25 minutes break</td>
                        <td style={{ "textAlign": "center" }}> Shantanu vs Rupom <span style={{"fontWeight":"bold"}}></span></td>
                        <td style={{ "textAlign": "center" }}>Polin v Ayon <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Rezwan v Ahnaf <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Rezwan v Ayon <span style={{"fontWeight":"bold"}}>(4A)</span></td>
                        <td style={{ "textAlign": "center" }}>Rezwan v Mashu <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}> Shaheen vs Ayon <span style={{"fontWeight":"bold"}}></span></td>
                        <td style={{ "textAlign": "center" }}>Rezwan v Moinul <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Shaheen vs Rashed <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "textAlign": "center" }}>Shantanu v Moinul <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}>Shantanu v Ayon <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}>Moinul v Ahnaf <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Rupom v Ahnaf <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Moinul v Mashu <span style={{"fontWeight":"bold"}}>(6A)</span></td>
                        <td style={{ "textAlign": "center" }}>Shaheen v Mashu <span style={{"fontWeight":"bold"}}>(5A)</span></td>
                        <td style={{ "textAlign": "center" }}>Shaheen v Moinul <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Rashed v Mashu <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}></td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}> Rupom v Ayon <span style={{"fontWeight":"bold"}}>(4B)</span></td>
                        <td style={{ "textAlign": "center" }}>Rashed v Ahnaf <span style={{"fontWeight":"bold"}}>(5B)</span></td>
                        <td style={{ "textAlign": "center" }}></td>
                        <td style={{ "textAlign": "center" }}></td>
                        <td style={{ "textAlign": "center" }}></td>
                    </tr>
                </tbody>
            </Table>

            {/* <div style={{ "display": "flex", "justifyContent": "center" }}>
                <h1>Second Round: 11/5/2022</h1>
            </div>

            <div style={{ "display": "flex", "justifyContent": "space-evenly", "margin": "30px" }}>
                <div>
                    <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td>Rupom</td>
                                <td>Mona</td>
                                <td>Shajal</td>
                                <td>Manar</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td>Rezwan</td>
                                <td>Shaheen</td>
                                <td>Polin</td>
                                <td>Sami</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                <thead>
                    <tr>
                        <th
                            style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center" }}
                            colSpan={11}
                        >
                            Quarter Finals: Round Rock Sports Center,
                            <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a>
                        </th>
                    </tr>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center" }} colSpan={11}>Reporting time: 2:30 pm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Rupom v Rezwan</td>
                        <td style={{ "textAlign": "center" }}>3:00 pm - 3:25 pm</td>
                        <td style={{ "textAlign": "center" }}>Rupom v Polin</td>
                        <td style={{ "textAlign": "center" }}>3:30 pm - 3:55 pm</td>
                        <td style={{ "fontWeight": "bold" }}>Break from 3:55 pm - 4:10 pm</td>
                        <td style={{ "textAlign": "center" }}>Rupom v Shaheen</td>
                        <td style={{ "textAlign": "center" }}>4:15 pm - 4:40pm</td>
                        <td style={{ "textAlign": "center" }}>Rupom v Sami</td>
                        <td style={{ "textAlign": "center" }}>4:45 pm - 5:10pm</td>
                        <td style={{ "textAlign": "center" }}>Tie breaker (if required)</td>
                        <td style={{ "textAlign": "center" }}>5:15 pm - 5:45 pm</td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Mona v Shaheen</td>
                        <td style={{ "textAlign": "center" }}>3:00 pm - 3:25 pm</td>
                        <td style={{ "textAlign": "center" }}>Mona v Sami</td>
                        <td style={{ "textAlign": "center" }}>3:30 pm - 3:55 pm</td>
                        <td style={{ "fontWeight": "bold" }}>Break from 3:55 pm - 4:10 pm</td>
                        <td style={{ "textAlign": "center" }}>Mona v Rezwan</td>
                        <td style={{ "textAlign": "center" }}>4:15 pm - 4:40pm</td>
                        <td style={{ "textAlign": "center" }}>Mona v Polin</td>
                        <td style={{ "textAlign": "center" }}>4:45 pm - 5:10pm</td>
                        <td style={{ "textAlign": "center" }}>Tie breaker (if required)</td>
                        <td style={{ "textAlign": "center" }}>5:15 pm - 5:45 pm</td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Shajal v Polin</td>
                        <td style={{ "textAlign": "center" }}>3:00 pm - 3:25 pm</td>
                        <td style={{ "textAlign": "center" }}>Shajal v Rezwan</td>
                        <td style={{ "textAlign": "center" }}>3:30 pm - 3:55 pm</td>
                        <td style={{ "fontWeight": "bold" }}>Break from 3:55 pm - 4:10 pm</td>
                        <td style={{ "textAlign": "center" }}>Shajal v Sami</td>
                        <td style={{ "textAlign": "center" }}>4:15 pm - 4:40pm</td>
                        <td style={{ "textAlign": "center" }}>Shajal v Shaheen</td>
                        <td style={{ "textAlign": "center" }}>4:45 pm - 5:10pm</td>
                        <td style={{ "textAlign": "center" }}>Tie breaker (if required)</td>
                        <td style={{ "textAlign": "center" }}>5:15 pm - 5:45 pm</td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Manar v Sami</td>
                        <td style={{ "textAlign": "center" }}>3:00 pm - 3:25 pm</td>
                        <td style={{ "textAlign": "center" }}>Manar v Shaheen</td>
                        <td style={{ "textAlign": "center" }}>3:30 pm - 3:55 pm</td>
                        <td style={{ "fontWeight": "bold" }}>Break from 3:55 pm - 4:10 pm</td>
                        <td style={{ "textAlign": "center" }}>Manar v Polin</td>
                        <td style={{ "textAlign": "center" }}>4:15 pm - 4:40pm</td>
                        <td style={{ "textAlign": "center" }}>Manar v Rezwan</td>
                        <td style={{ "textAlign": "center" }}>4:45 pm - 5:10pm</td>
                        <td style={{ "textAlign": "center" }}>Tie breaker (if required)</td>
                        <td style={{ "textAlign": "center" }}>5:15 pm - 5:45 pm</td>
                    </tr>
                </tbody>
            </Table>
            <div style={{ "display": "flex", "justifyContent": "center" }}>
                <h1>Semi Finals: 11/6/2022</h1>
            </div>

            <div style={{ "display": "flex", "justifyContent": "space-evenly", "margin": "30px" }}>
                <div>
                    <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td>Rezwan</td>
                                <td>Sami</td>

                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td>Polin</td>
                                <td>Manar</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                <thead>
                    <tr>
                        <th
                            style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center" }}
                            colSpan={10}
                        >
                            Semi Finals: Round Rock Sports Center,
                            <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a>
                        </th>
                    </tr>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center" }} colSpan={10}>Reporting time: 8:30 am</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Game 1</td>
                        <td style={{ "textAlign": "center" }}>Rezwan v Manar</td>
                        <td style={{ "textAlign": "center" }}>9:00am-9:25am</td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Game 2</td>
                        <td style={{ "textAlign": "center" }}>Rezwan v Manar</td>
                        <td style={{ "textAlign": "center" }}>9:30am-9:55am</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <div style={{ "display": "flex", "justifyContent": "center", "fontWeight": "bold" }}>
                                Break from 9:55am - 10:30 am
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Game 3</td>
                        <td style={{ "textAlign": "center" }}>Rezwan v Manar</td>
                        <td style={{ "textAlign": "center" }}>10:30am-10:55am</td>
                    </tr>
                </tbody>
            </Table>
            <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                <tbody>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Game 1</td>
                        <td style={{ "textAlign": "center" }}>Sami v Polin</td>
                        <td style={{ "textAlign": "center" }}>9:00am-9:25am</td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Game 2</td>
                        <td style={{ "textAlign": "center" }}>Sami v Polin</td>
                        <td style={{ "textAlign": "center" }}>9:30am-9:55am</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <div style={{ "display": "flex", "justifyContent": "center", "fontWeight": "bold" }}>
                                Break from 9:55am - 10:30 am
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Game 3</td>
                        <td style={{ "textAlign": "center" }}>Sami v Polin</td>
                        <td style={{ "textAlign": "center" }}>10:30am-10:55am</td>
                    </tr>
                </tbody>
            </Table>
            <div style={{ "display": "flex", "justifyContent": "center" }}>
                <h1> Finals: 11/13/2022</h1>
            </div>
            <div style={{ "display": "flex", "justifyContent": "space-evenly", "margin": "30px" }}>
                <div>
                    <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td>Polin</td>
                                <td>Sami</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td>Manar</td>
                                <td>Rezwan</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <Table responsive striped bordered hover variant='dark' className='tableStyle'>
                <thead>
                    <tr>
                        <th
                            style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center" }}
                            colSpan={10}
                        >
                            Finals and 3rd/4th place: Round Rock Sports Center,
                            <a href='https://g.page/rrsportscenter?share'> 2400 Chisholm Trail Rd</a>
                        </th>
                    </tr>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center" }} colSpan={10}>Reporting time: 1:30 pm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ "textAlign": "center" }}>3rd/4th Place Game 1</td>
                        <td style={{ "textAlign": "center" }}>Sami</td>
                        <td style={{ "display": "flex", "justifyContent": "center" }}>VS</td>
                        <td style={{ "textAlign": "center" }}>Rezwan</td>
                        <td style={{ "textAlign": "center" }}>2:00pm - 2:25 pm</td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>3rd/4th Place Game 2</td>
                        <td style={{ "textAlign": "center" }}>Sami</td>
                        <td style={{ "display": "flex", "justifyContent": "center" }}>VS</td>
                        <td style={{ "textAlign": "center" }}>Rezwan</td>
                        <td style={{ "textAlign": "center" }}>2:30pm - 2:55 pm</td>
                    </tr>
                    <tr>
                        <td colSpan={5}>
                            <div style={{ "display": "flex", "justifyContent": "center", "fontWeight": "bold" }}>
                                Break from 3:00 pm-3:25 pm
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <div style={{ "display": "flex", "justifyContent": "space-evenly", "margin": "30px" }}>
                <div>
                    <Table striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td>Polin</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Table striped bordered hover variant='dark' className='tableStyle'>
                        <tbody>
                            <tr>
                                <td>Manar</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <Table striped bordered hover variant='dark' className='tableStyle'>
                <thead>
                    <tr>
                        <th style={{ "backgroundColor": "yellow", "justifyContent": "center", "color": "black", "textAlign": "center" }} colSpan={10}>Final games</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ "display": "flex", "justifyContent": "center" }}>Final game 1</td>
                        <td style={{ "textAlign": "center" }}>Polin</td>
                        <td style={{ "display": "flex", "justifyContent": "center" }}>VS</td>
                        <td style={{ "textAlign": "center" }}>Manar</td>
                        <td style={{ "textAlign": "center" }}>3:30pm - 3:55 pm</td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Final game 1</td>
                        <td style={{ "textAlign": "center" }}>Polin</td>
                        <td style={{ "display": "flex", "justifyContent": "center" }}>VS</td>
                        <td style={{ "textAlign": "center" }}>Manar</td>
                        <td style={{ "textAlign": "center" }}>4:00pm - 4:25 pm</td>
                    </tr>
                    <tr>
                        <td colSpan={5}>
                            <div style={{ "display": "flex", "justifyContent": "center", "fontWeight": "bold" }}>
                                Break from 4:30pm - 4:55 pm
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ "textAlign": "center" }}>Final game 3</td>
                        <td style={{ "textAlign": "center" }}>Polin</td>
                        <td style={{ "display": "flex", "justifyContent": "center" }}>VS</td>
                        <td style={{ "textAlign": "center" }}>Manar</td>
                        <td style={{ "textAlign": "center" }}>5:00pm - 5:25 pm</td>
                    </tr>
                </tbody>
            </Table> */}
            {/* <h1 style={{ "display": "flex", "justifyContent": "center" }}>
                Prize distribution: 6:30pm - 9 pm
            </h1>
        <div className={`${name}`}>
            123
        </div> */}
        </div>
    );
}