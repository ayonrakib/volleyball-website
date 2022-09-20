import Carousel from 'react-bootstrap/Carousel';

export default function WelcomePage() {
  return (
    <div style={{"display":"flex", "flexDirection":"column", "justifyContent":"center", "alignContent":"center", "maxWidth":"50%", "maxHeight":"60%"}}>
      <Carousel>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/sponsors-2022/tavares.png"}
              alt="Tavares Pharmacy"
            />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/sponsors-2022/wasi.jpg"}
            alt="Wasi Ahmed"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/sponsors-2022/selina.jpg"}
            alt="Selina Ahmed"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/sponsors-2022/ruvati.jpg"}
            alt="Selina Ahmed"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/sponsors-2022/nizam.jpg"}
            alt="Nizam uddin"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/sponsors-2022/ibrahim.jpg"}
            alt="Ibrahim Immigration"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/sponsors-2022/hvj.jpg"}
            alt="HVJ"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/sponsors-2022/dash.jpg"}
            alt="Dash Realty"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/sponsors-2022/zia.jpg"}
            alt="Zia Syed"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/sponsors-2022/kochi.jpg"}
            alt="Afsar Zaman Kochi"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    
  );
}