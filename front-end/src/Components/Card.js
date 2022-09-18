import Card from 'react-bootstrap/Card';

export default function PlayerCard(props) {
  return (
            <div style={{"justifyContent":"space-between", "marginBottom":"30px"}}>
                <Card 
                    style={{ width: '18rem' }} 
                    key={Math.random()}
                >
                    <Card.Img 
                        variant="top" 
                        src= {process.env.PUBLIC_URL+ `${props.imageLocation}.jpg` } 
                        style={{"height":"250px"}}
                    />
                    <Card.Body>
                        <Card.Title style={{"display":"flex","justifyContent":"center"}}>
                            {props.playersImage}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
  );
}