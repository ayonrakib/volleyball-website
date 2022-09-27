import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TeamComponent from '../Components/TeamComponents';

export default function Teams() {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <TeamComponent  
            teamName = "ATX Hitters" 
            playersName={["Abu Sohel", "Mehedi Khan", "Saymon", "Ibrahim Ahmed", "Fahim Abdullah", "Reza"]}
            playersImageLocations = {["/images/players-2022/1.jpg", 
                                      "/images/players-2022/92.jpg",
                                      "/images/players-2022/93.jpg",
                                      "/images/players-2022/25.jpg",
                                      "/images/players-2022/26.jpg",
                                      "/images/players-2022/18.jpg"]}
          />
      </Col>

      <Col>
        <TeamComponent  
            teamName = "ATX Dynamites" 
            playersName={["Sami", "Oli", "Saiful Islam", "Istiaque Hasan", "Jalal Jahir", "HT Sohel", "Iqbal hussain"]}
            playersImageLocations = {["/images/players-2022/49.jpg", 
                                      "/images/players-2022/80.jpg",
                                      "/images/players-2022/96.jpg",
                                      "/images/players-2022/99.jpg",
                                      "/images/players-2022/89.jpg",
                                      "/images/players-2022/64.jpg",
                                      "/images/players-2022/76.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Blasters" 
            playersName={["Rupom (Mostaqur)", "Shahnewaz", "Jamshed Jalal", "Hasan Chowdhury", "Ezaz Rana", "Mukul"]}
            playersImageLocations = {["/images/players-2022/28.jpg", 
                                      "/images/players-2022/101.jpg",
                                      "/images/players-2022/79.jpg",
                                      "/images/players-2022/99.jpg",
                                      "/images/players-2022/100.jpg",
                                      "/images/players-2022/70.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Challengers" 
            playersName={["Moinul", "Rajib", "Mamun", "Kollol Arefin", "Shaju", "Limon", "Zaayan Islam"]}
            playersImageLocations = {["/images/players-2022/31.jpg", 
                                      "/images/players-2022/32.jpg",
                                      "/images/players-2022/50.jpg",
                                      "/images/players-2022/105.jpg",
                                      "/images/players-2022/63.jpg",
                                      "/images/players-2022/67.jpg",
                                      "/images/players-2022/69.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Spikers" 
            playersName={["Rezwan", "Arbab", "Mehedi Hasan", "Sabbir Ahmed", "Zarif", "TREX", "Mahmood Hossain"]}
            playersImageLocations = {["/images/players-2022/52.jpg", 
                                      "/images/players-2022/47.jpg",
                                      "/images/players-2022/41.jpg",
                                      "/images/players-2022/43.jpg",
                                      "/images/players-2022/38.jpg",
                                      "/images/players-2022/59.jpg",
                                      "/images/players-2022/65.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Wildcats" 
            playersName={["Shaheen", "Liton", "Zayed", "Ruhul Amin", "Obayed", "Golam Morshed"]}
            playersImageLocations = {["/images/players-2022/34.jpg", 
                                      "/images/players-2022/5.jpg",
                                      "/images/players-2022/35.jpg",
                                      "/images/players-2022/20.jpg",
                                      "/images/players-2022/30.jpg",
                                      "/images/players-2022/59.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Twisters" 
            playersName={["Shajal", "Baad den", "Jahirul Polash", "Kibriya", "Aman", "Neon", "Hasnat"]}
            playersImageLocations = {["/images/players-2022/24.jpg", 
                                      "/images/players-2022/17.jpg",
                                      "/images/players-2022/66.jpg",
                                      "/images/players-2022/15.jpg",
                                      "/images/players-2022/62.jpg",
                                      "/images/players-2022/68.jpg",
                                      "/images/players-2022/42.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Raiders" 
            playersName={["Munna", "Raihan", "Shwqat", "Faisal Rashid", "Shahid Zaman", "Shafiul Azm", "Pantho"]}
            playersImageLocations = {["/images/players-2022/12.jpg", 
                                      "/images/players-2022/17.jpg",
                                      "/images/players-2022/47.jpg",
                                      "/images/players-2022/48.jpg",
                                      "/images/players-2022/53.jpg",
                                      "/images/players-2022/73.jpg",
                                      "/images/players-2022/203.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Falcons" 
            playersName={["Zahedul", "Dip", "Kamrul Russel", "Wasim", "Rumi", "Zahed Aziz", "Shafin"]}
            playersImageLocations = {["/images/players-2022/150.jpg", 
                                      "/images/players-2022/7.jpg",
                                      "/images/players-2022/74.jpg",
                                      "/images/players-2022/39.jpg",
                                      "/images/players-2022/44.jpg",
                                      "/images/players-2022/98.jpg",
                                      "/images/players-2022/45.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Blockers" 
            playersName={["Rashed", "Samin Ahmed", "Reazul", "Enam Huq", "Mahabub", "Samiul Islam", "Ahsan Islam"]}
            playersImageLocations = {["/images/players-2022/2.jpg", 
                                      "/images/players-2022/7.jpg",
                                      "/images/players-2022/8.jpg",
                                      "/images/players-2022/27.jpg",
                                      "/images/players-2022/506.jpg",
                                      "/images/players-2022/110.jpg",
                                      "/images/players-2022/109.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Eagles" 
            playersName={["Mona(Enam Haque)", "Mridul", "Sohel Rahman", "Afsar Zaman Kochi", "Iqbal Mahmud", "Abu Alam", "Sazal Islam"]}
            playersImageLocations = {["/images/players-2022/32.jpg", 
                                      "/images/players-2022/4.jpg",
                                      "/images/players-2022/82.jpg",
                                      "/images/players-2022/71.jpg",
                                      "/images/players-2022/60.jpg",
                                      "/images/players-2022/13.jpg",
                                      "/images/players-2022/107.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Jaguars" 
            playersName={["Manar", "Maher", "Shams", "Mukim Khan", "Anal Saha", "Faisal Mahmood", "Zuberi Ashraf"]}
            playersImageLocations = {["/images/players-2022/9.jpg", 
                                      "/images/players-2022/11.jpg",
                                      "/images/players-2022/83.jpg",
                                      "/images/players-2022/369.jpg",
                                      "/images/players-2022/91.jpg",
                                      "/images/players-2022/94.jpg",
                                      "/images/players-2022/55.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Tornadoes" 
            playersName={["Nafis", "Ayon", "Sumon", "Ehteshum Hoq Liton", "Samin Hossain", "Khan Tarik", "Ali Erteza Khan Tulu"]}
            playersImageLocations = {["/images/players-2022/36.jpg", 
                                      "/images/players-2022/51.jpg",
                                      "/images/players-2022/6.jpg",
                                      "/images/players-2022/97.jpg",
                                      "/images/players-2022/29.jpg",
                                      "/images/players-2022/0.jpg",
                                      "/images/players-2022/72.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Crushers" 
            playersName={["Polin(Badrudduza)", "Ahnaf", "Jashim", "Sabbir Chowdhury", "Khwaja", "Bahar", "Sharif Ahsan"]}
            playersImageLocations = {["/images/players-2022/85.jpg", 
                                      "/images/players-2022/90.jpg",
                                      "/images/players-2022/77.jpg",
                                      "/images/players-2022/108.jpg",
                                      "/images/players-2022/112.jpg",
                                      "/images/players-2022/106.jpg",
                                      "/images/players-2022/111.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Hawks" 
            playersName={["Mashu", "Nomaan", "Zulfiqar Ali", "Arshad", "Shadman", "Shammel"]}
            playersImageLocations = {["/images/players-2022/3.jpg", 
                                      "/images/players-2022/103.jpg",
                                      "/images/players-2022/95.jpg",
                                      "/images/players-2022/10.jpg",
                                      "/images/players-2022/693.jpg",
                                      "/images/players-2022/58.jpg"]}
          />
      </Col>
      <Col>
        <TeamComponent  
            teamName = "ATX Typhoons" 
            playersName={["Omar", "Noor E Alam", "Zahid Hasan", "Munir Faisal", "Tanjib Rizwan", "Asab"]}
            playersImageLocations = {["/images/players-2022/23.jpg", 
                                      "/images/players-2022/102.jpg",
                                      "/images/players-2022/104.jpg",
                                      "/images/players-2022/56.jpg",
                                      "/images/players-2022/354.jpg",
                                      "/images/players-2022/21.jpg"]}
          />
      </Col>

    </Row>
  );
}