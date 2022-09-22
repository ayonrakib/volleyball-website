import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';

export default function WelcomePage() {
  const sponsorsImageNames = ["tavares", "wasi", "selina", "ruvati", "nizam", "nizam", "ibrahim", "hvj", "dash", "zia", "kochi"];
  var sponsorsJSXBlock = [];

  for(var index=0; index < sponsorsImageNames.length; index++){
    sponsorsJSXBlock.push(<Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={process.env.PUBLIC_URL + `/images/sponsors-2022/${sponsorsImageNames[index]}.jpg`}
                              alt="Tavares Pharmacy"
                            />
                          </Carousel.Item>
                          )    
  }
  return (
    <div style={{"display":"flex", "flexDirection":"column", "justifyContent":"center", "alignContent":"center", "maxWidth":"50%", "maxHeight":"60%"}}>
          <Table responsive="sm">
      <thead>
        <tr>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
      <Carousel>
        {sponsorsJSXBlock}
      </Carousel>
    </div> 
  );
}