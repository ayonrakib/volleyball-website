import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Profiles() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <div style={{"display": "flex", "justifyContent":"center"}}>
                <Card.Img style={{"height":"400px", "width": "500px"}} variant="top" src={process.env.PUBLIC_URL+"./images/ayon.jpg"} />
            </div>
            
            <Card.Body>
              <Card.Title>Rakib Hasan Ayon</Card.Title>
              <Card.Text>
                Rakib plays setter.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}