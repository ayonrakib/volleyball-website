import Card from 'react-bootstrap/Card';

export default function Profiles() {
  let playersCardBlock = [];
  let playersImagesToNames = {
    "0" : "Rakib Hasan Ayon",
    "1" : "Rakib Hasan Ayon",
    "2" : "Rakib Hasan Ayon", 
    "3" : "Rakib Hasan Ayon",
    "4" : "Rakib Hasan Ayon",
    "5" : "Rashed Jewel",
  }
  for(var index = 0; index < 6; index++){
    console.log(`index is ${index}`)
    playersCardBlock.push(
                            <div style={{"justifyContent":"space-between", "marginBottom":"30px"}}>
                              <Card style={{ width: '18rem' }} key={Math.random()}>
                                <Card.Img variant="top" src= {process.env.PUBLIC_URL+ `/images/${index}.jpg` } style={{"height":"250px"}}/>
                                <Card.Body>
                                  <Card.Title>{playersImagesToNames[index]}</Card.Title>
                                  <Card.Text>
                                  {playersImagesToNames[index]} is a setter
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </div>
                          )  
                            
                       
  }
  return (
    // <div style={{"display":"flex"}}>
    //   <div>
    //         <Card style={{ width: '18rem' }}>
    //           <Card.Img variant="top" src= {process.env.PUBLIC_URL+ `/images/0.jpg` } style={{"height":"250px"}}/>
    //           <Card.Body>
    //             <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //               Some quick example text to build on the card title and make up the
    //               bulk of the card's content.
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //   </div>

    //   <div >
    //         <Card style={{ width: '18rem' }}>
    //           <Card.Img variant="top" src= {process.env.PUBLIC_URL+ `/images/1.jpg` } style={{"height":"250px"}}/>
    //           <Card.Body>
    //             <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //               Some quick example text to build on the card title and make up the
    //               bulk of the card's content.
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //     </div>
    // </div>
//     [ <Card style={{ width: '18rem' }} key={Math.random()}>
//     <Card.Img variant="top" src= {process.env.PUBLIC_URL+ `/images/0.jpg` } style={{"height":"250px"}}/>
//     <Card.Body>
//       <Card.Title>Rakib Hasan Ayon</Card.Title>
//       <Card.Text>
//         Rakib is a setter
//       </Card.Text>
//     </Card.Body>
//   </Card>,
//    <Card style={{ width: '18rem' }} key={Math.random()}>
//    <Card.Img variant="top" src= {process.env.PUBLIC_URL+ `/images/1.jpg` } style={{"height":"250px"}}/>
//    <Card.Body>
//      <Card.Title>Rakib Hasan Ayon</Card.Title>
//      <Card.Text>
//        Rakib is a setter
//      </Card.Text>
//    </Card.Body>
//  </Card>
//     ]
<div style={{"display":"flex", "flexGrow":"1", "justifyContent": "space-around", "flexFlow":"wrap"}}>
{playersCardBlock}
</div>



  );
}