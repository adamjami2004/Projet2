import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbarstyle.css"
import { useTranslation } from 'react-i18next';




function Navbar1() {
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


  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand href="" id="logo">
        <a href="/home"><svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" class="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" class="ccustom" fill="#17CF97"></path> </svg></a>
        <Button id="switch" variant="success" onClick={() => swapLanguage()}>{t('lang')}</Button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto align-items-start" id="liste">
          <Nav.Link as={Link} to="/">{t('home')}</Nav.Link>
          <Nav.Link as={Link} to="/about">{t('about')}</Nav.Link>
          <Nav.Link as={Link} to="/destination">{t('destinations')}</Nav.Link>
          <Nav.Link as={Link} to="/pricing">{t('price')}</Nav.Link>
          <Nav.Link as={Link} to="/bot">{t('help')}</Nav.Link>
          <Button id="book" as={Link} to="/booking" variant="success">{t('book')}</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;