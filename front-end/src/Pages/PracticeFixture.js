import Table from 'react-bootstrap/Table';

export default function PracticeFixture() {
  return (
    <div>
        <Table responsive striped bordered hover variant='dark' className='tableStyle'>
            <thead>
                    <tr>
                        <th 
                            style={{"backgroundColor":"yellow", "justifyContent":"center","color":"black", "textAlign":"center"}} 
                            colSpan={4}>Practice Round 1: Round Rock Sports Center,  
                            <a 
                                href='https://g.page/rrsportscenter?share'
                            > 
                                2400 Chisholm Trail Rd
                            </a>
                        </th>
                    </tr>   
                    <tr>
                        <th style={{"backgroundColor":"yellow", "justifyContent":"center","color":"black", "textAlign":"center"}} colSpan={4}>Reporting time: 7:45 pm</th>
                    </tr>    
            </thead>
            <tbody>
                <tr>
                    <td style={{"textAlign":"center", "fontWeight":"bold"}}>Date</td>
                    <td style={{"textAlign":"center", "fontWeight":"bold"}}>Time</td>
                    <td style={{"textAlign":"center", "fontWeight":"bold"}}>Courts</td>
                    <td style={{"textAlign":"center", "fontWeight":"bold"}}>Captains</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>10/04/2022</td>
                    <td style={{"textAlign":"center"}}>8 pm - 10 pm</td>
                    <td style={{"textAlign":"center"}}>5A, 5B</td>
                    <td style={{"textAlign":"center"}}>Sami, Munna, Omar, Shaheen, Rezwan, Rupom</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>10/06/2022</td>
                    <td style={{"textAlign":"center"}}>8 pm - 10 pm</td>
                    <td style={{"textAlign":"center"}}>6A, 6B</td>
                    <td style={{"textAlign":"center"}}>Nafis, Rashed, Mashu, Mona, Shajal, Manar</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>10/11/2022</td>
                    <td style={{"textAlign":"center"}}>8 pm - 10 pm</td>
                    <td style={{"textAlign":"center"}}>4A, 4B</td>
                    <td style={{"textAlign":"center"}}>Shajal, Polin, Rezwan, Zahedul, Munna, Sami</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>10/04/2022</td>
                    <td style={{"textAlign":"center"}}>8 pm - 10 pm</td>
                    <td style={{"textAlign":"center"}}>5A, 5B</td>
                    <td style={{"textAlign":"center"}}>Abu Sohel, Rupom, Manar, Moinul, Rashed, Mashu</td>
                </tr>
            </tbody>
        </Table>
        <Table responsive striped bordered hover variant='dark' className='tableStyle'>
            <thead>
                    <tr>
                        <th 
                            style={{"backgroundColor":"yellow", "justifyContent":"center","color":"black", "textAlign":"center"}} 
                            colSpan={4}>Practice Round 2: Round Rock Sports Center,  
                            <a 
                                href='https://g.page/rrsportscenter?share'
                            > 
                                2400 Chisholm Trail Rd
                            </a>
                        </th>
                    </tr>   
                    <tr>
                        <th style={{"backgroundColor":"yellow", "justifyContent":"center","color":"black", "textAlign":"center"}} colSpan={4}>Reporting time: 7:45 pm</th>
                    </tr>    
            </thead>
            <tbody>
                <tr>
                    <td style={{"textAlign":"center", "fontWeight":"bold"}}>Date</td>
                    <td style={{"textAlign":"center", "fontWeight":"bold"}}>Time</td>
                    <td style={{"textAlign":"center", "fontWeight":"bold"}}>Courts</td>
                    <td style={{"textAlign":"center", "fontWeight":"bold"}}>Captains</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>10/24/2022</td>
                    <td style={{"textAlign":"center"}}>8 pm - 10 pm</td>
                    <td style={{"textAlign":"center"}}>6A, 6B</td>
                    <td style={{"textAlign":"center"}}>Nafis, Polin, Manar, Shaheen, Abu Sohel, Zahedul</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>10/06/2022</td>
                    <td style={{"textAlign":"center"}}>8 pm - 10 pm</td>
                    <td style={{"textAlign":"center"}}>4A, 4B</td>
                    <td style={{"textAlign":"center"}}>Sami, Rupom, Rezwan, Mona, Moinul, Omar</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>10/11/2022</td>
                    <td style={{"textAlign":"center"}}>8 pm - 10 pm</td>
                    <td style={{"textAlign":"center"}}>1A, 1B</td>
                    <td style={{"textAlign":"center"}}>Abu Sohel, Munna, Masu, Zahedul, Polin, Nafis</td>
                </tr>
                <tr>
                    <td style={{"textAlign":"center"}}>10/04/2022</td>
                    <td style={{"textAlign":"center"}}>8 pm - 10 pm</td>
                    <td style={{"textAlign":"center"}}>4A, 4B</td>
                    <td style={{"textAlign":"center"}}>Shajal, Mashu, Omar, Moinul, Shaheen, Mona</td>
                </tr>
            </tbody>
        </Table>
    </div>
  );
}