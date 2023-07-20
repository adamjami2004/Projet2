import './aboutstyle.css'
import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './footer';
import Help from './top';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function About() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const swapLanguage = () => {
    if (i18n.language === 'en') {
      changeLanguage('fr');
    } else {
      changeLanguage('en');
    }
  };

  const redirectToVideoAsia = () => {
    window.location.href = 'https://www.youtube.com/watch?v=xQ_3aW0Hn5w';
  };

  const redirectToVideoAf = () => {
      window.location.href = 'https://www.youtube.com/watch?v=1dF-gBlP3TE';
    };

    const redirectToVideoeu = () => {
      window.location.href = 'https://www.youtube.com/watch?v=he-aCCA2ONI';
    };




  return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
          <h2>{t('title')}</h2>
      <Container className="d-flex align-items-center justify-content-center h-100" id="destinations">
        <Row>
          <Col>
            <Card className="flex-fill">
            <Card.Img variant="top" src="https://wallpapercave.com/w/wp12048362.jpg" />
              <Card.Body>
                <Card.Title> {t('eu')}</Card.Title>
                <Card.Text>Get to know the old continent better</Card.Text>
                <Button onClick={redirectToVideoeu} id="video_europe"variant="outline-danger">{t('vid')}</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="flex-fill">
            <Card.Img variant="top" src="https://wallpapercave.com/w/wp5229572.jpg" />
              <Card.Body>
                <Card.Title> {t('na')}</Card.Title>
                <Card.Text>Learn about beautiful cultures</Card.Text>
                <Button  onClick={redirectToVideoAf}   id="video_africa"variant="outline-danger">{t('vid')}</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="flex-fill">
            <Card.Img variant="top" src="https://wallpapercave.com/w/wp12040446.jpg" />
              <Card.Body>
                <Card.Title> {t('asia')}</Card.Title>
                <Card.Text>Discover the nature in a new way</Card.Text>
                <Button  onClick={redirectToVideoAsia} id="video_asia"variant="outline-danger">{t('vid')}</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>    
      </Container>

      <Container className="d-flex align-items-center justify-content-center ">
      <Col>
            <Card className="flex-fill" id="photo">
              <Card.Img variant="top" id="photo2" src="https://wallpapercave.com/w/wp12399217.jpg" />
              <Card.Body>
                <Card.Title> Discover new destinations</Card.Title>  
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="flex-fill" >
            
              <Card.Body>
                <Card.Title>Stay Stress-Free</Card.Title>
                <Card.Text>We do offer pre-organized trips that include:
                  <br />
                  -All the types of activities you'll need to enjoy your trip
                  <br />
                  -Transport from the airport to the hotel
                  <br />
                  -Visa application fees (if applicable)
                  <br />
                  -Accomodation
                  <br />
                  -Plane trip
                  
                  

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

      </Container >


      <Container className="d-flex align-items-center justify-content-center h-100">
          
          <Col>
            <Card className="flex-fill" id="photo3" >
            
              <Card.Body>
                <Card.Title>Get to know new cultures</Card.Title>
                <Card.Text>
                  All of our trips are adjustable. That means that you can choose the date of your departure and of your coming back. 
                  <br />
                  The pricing policy may change from a destination to another. You can check and estimate the cost of your trip with our new fee simulator.
                  <br />
                  <br />
                  <Button id="book" as={Link} to="/pricing" variant="success">Estimate</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="flex-fill" id="photo3">
            <Card.Img variant="top" id="photo2" src="https://wallpapercave.com/w/wp12034371.jpg" />
              <Card.Body>
                <Card.Title>Enjoy alone or with your family !</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>

      </Container >
      <Help/>
      
      <Footer/>
      
      
    </div>
  );
}

export default About;
