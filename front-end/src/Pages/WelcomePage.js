import Carousel from 'react-bootstrap/Carousel';

export default function WelcomePage() {
  return (
    <div style={{"display":"flex", "justifyContent":"center", "alignContent":"center", "maxWidth":"50%", "maxHeight":"60%"}}>
      <Carousel>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/sponsors-2022/tavares.png"}
              
              alt="First slide"
            />

          <Carousel.Caption>
            {/* <h3 style={{"color":"black"}}>Tavares Pharmacy</h3> */}
            {/* <p style={{"color":"black"}}>Our honorable sponsor for 2022 tournament!</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/sponsors-2022/wasi.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3 style={{"color":"black"}}>Wasi Ahmed</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/sponsors-2022/selina.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    
  );
}