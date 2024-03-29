import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function WelcomePage() {
  const sponsorsImageNames = ["entry", "tavares", "wasi", "selina", "ruvati", "nizam", "shahi_back", "shahi_front", "hvj", "dash", "zia", "kochi", "eixsys", "utshob", "baga"];
  var sponsorsJSXBlock = [];

  for (var index = 0; index < sponsorsImageNames.length; index++) {
    sponsorsJSXBlock.push(
      <Carousel.Item style={{ "width": "300px", "height": "300px" }}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + `/images/sponsors-2022/${sponsorsImageNames[index]}.jpg`}
          alt="Tavares Pharmacy"
        />
      </Carousel.Item>
    )
  }
  return (
      <div style={{display:"flex", 'justifyContent':"center", "alignContent":"center"}}>
        <Carousel>
          {sponsorsJSXBlock}
        </Carousel>
    </div>

  );
}