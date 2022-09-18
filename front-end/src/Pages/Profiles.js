import Card from 'react-bootstrap/Card';

export default function Profiles() {
  let playersCardBlock = [];
  let playersImagesToNames = {
    "0"	:	"Tarik Khan"	,
    "1"	:	"Abu Sohel"	,
    "2"	:	"Rashed Sultan"	,
    "3"	:	"Masu"	,
    "4"	:	"Khademul Haque"	,
    "5"	:	"Tanjib Rizwan"	,
    "6"	:	"Sharif Ahmed"	,
    "7"	:	"Tanzir Musabbir"	,
    "8"	:	"Reazul Hoque"	,
    "9"	:	"Manar Hasan"	,
    "10"	:	"Arshad Khandaker"	,
    "11"	:	"Maher Hasan"	,
    "12"	:	"Munna Ahaduzzaman"	,
    "13"	:	"Abu Alam"	,
    "14"	:	"Nadim Islam"	,
    "15"	:	"Golam Kibria"	,
    "16"	:	"Md Zahedul khan"	,
    "17"	:	"Fayez Shantanu"	,
    "18"	:	"Md. Rezaul Haque (Reza)"	,
    "19"	:	"Mohammad Khan"	,
    "20"	:	"Sabbir Ahmed"	,
    "21"	:	"Asab Uddin"	,
    "22"	:	"Ahmed Pantho"	,
    "23"	:	"Omar Faruque"	,
    "24"	:	"Tareq zaman"	,
    "25"	:	"Ibrahim Ahmed"	,
    "26"	:	"Golam Morshed Chowdhury"	,
    "27"	:	"Enam Haq"	,
    "28"	:	"Mostaqur Sarker"	,
    "29"	:	"Samin Hossain"	,
    "30"	:	"AKM Shoaib"	,
    "31"	:	"Rajib Khan"	,
    "32"	:	"Enam Haque"	,
    "33"	:	"Md Moinul Islam"	,
    "34"	:	"ZahiruI Islam Shaheen"	,
    "35"	:	"Zayed Islam"	,
    "36"	:	"Nafis Khan"	,
    "37"	:	"Faiyez Ahmed"	,
    "38"	:	"Zarif Aziz"	,
    "39"	:	"Wasim Quddus"	,
    "40"	:	"Soinik Rahman"	,
    "41"	:	"Shafin"	,
    "42"	:	"Shamel"	,
    "43"	:	"Samiul Haq"	,
    "44"	:	"Abdullah Fahim"	,
    "45"	:	"Obaid Rahman"	,
    "46"	:	"Shwqat"	,
    "47"	:	"Ruhul Amin Chowdhury"	,
    "48"	:	"Faisal Rashid"	,
    "49"	:	"Md Mahmudur Chowdhury"	,
    "50"	:	"Arshad Hussain Mamun"	,
    "51"	:	"Rakib Hasan Ayon"	,
    "52"	:	"Rezwan Rahman"	,
    "53"	:	"Shahid Zaman"	,
    "54"	:	"Md Mahabub Hossain"	,
    "55"	:	"A H M Zuberi Ashraf"	,
    "56"	:	"Munir Faisal Chowdhury"	,
    "57"	:	"Samin Ahmed"	,
    "58"	:	"Mohammad Karim"	,
    "59"	:	"MD Zulficar Ali"	,
    "60"	:	"Iqbal Mahmud"	,
    "61"	:	"Shams Deen Arif"	,
    "62"	:	"Aktaruzzaman Aman"	,
    "63"	:	"MOHAMMAD SIRAJ"	,
    "64"	:	"Hasan Taufique"	,
    "65"	:	"Mahmood Hossain"	,
    "66"	:	"Jahirul Bhuiyan"	,
    "67"	:	"Raihan Kabir"	,
    "68"	:	"Mushfiqur Rahman Neon"	,
    "69"	:	"Sabbir Chowdhury"	,
    "70"	:	"Hasan Uz Zaman (Mukul)"	,
    "71"	:	"Afsar Zaman"	,
    "72"	:	"Mukim Khan"	,
    "73"	:	"Md Shafiul Azam"	,
    "74"	:	"Kamrul Russel"	,
    "75"	:	"Zaayan Islam"	,
    "76"	:	"MD M KHAN LIMON"	,
    "77"	:	"Jashim Chowdhury"	,
    "78"	:	"Ali Erteza Khan"	,
    "79"	:	"Jamshed Jalal"	,
    "80"	:	"Oli Bhuiyan"	,
    "81"	:	"Sharif Ahsan"	,
    "82"	:	"SoheL Rahaman"	,
    "83"	:	"Farhan Ab"	,
    "84"	:	"Shadman Chowdhury"	,
    "85"	:	"Sayeed Ahmed Badrudduza"	,
    "86"	:	"Shanewaz Ahmed"	,
    "87"	:	"Mehedi Hasan"	,
    "88"	:	"Arbab Ahmed"	,
    "89"	:	"Jalal"	,
    "90"	:	"Ahnaf Ahsan"	,
    "91"	:	"Anol Saha"	,
    "92"	:	"Mehedi Khan"	,
    "93"	:	"Saymon"	,
    "94"	:	"Faisal Mahmood"	,
    "95"	:	"Masbha Uddin Ahmed"	,
    "96"	:	"Saiful Islam (Niton)"	,
    "97"	:	"Ehtesham Hoq"	,
    "98"	:	"Syed Zahed Aziz"	,
    "99"	:	"Mohammad Samad"	,
    "100"	:	"Ezaz (Rana)"	,
    "101"	:	"M.M. Hasnat"	,
    "102"	:	"Md Noor E Alam"	,
    "103"	:	"Hasan Chowdhury"	,
    "104"	:	"Zahid Hasan"	,
    "105"	:	"Kollol Arefin"	,
    "106"	:	"Bahar"	,
    "107"	:	"Sazal Islam"	,
    "108"	:	"Mohammad Rumi",
    "109" : "Ahsan Islam",
    "110" : "Sheik Mohammad Nomaan"    
  }
  for(var index = 0; index < 111; index++){
    console.log(`index is ${index}`)
    playersCardBlock.push(
                            <div style={{"justifyContent":"space-between", "marginBottom":"30px"}}>
                              <Card style={{ width: '18rem' }} key={Math.random()}>
                                <Card.Img variant="top" src= {process.env.PUBLIC_URL+ `/images/${index}.jpg` } style={{"height":"250px"}}/>
                                <Card.Body>
                                  <Card.Title style={{"display":"flex","justifyContent":"center"}}>{playersImagesToNames[index]}</Card.Title>
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

