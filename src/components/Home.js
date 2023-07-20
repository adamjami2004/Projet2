import "./Homestyle.css"
import React from 'react';
import Button from 'react-bootstrap/Button';
import Footer from "./footer";
import { Link } from 'react-router-dom';
import { useTranslation} from 'react-i18next';


function Home({ imageUrl }){
    const containerStyle = {
        backgroundImage: `url(${imageUrl})`,
      };
    
    const { t } = useTranslation();
    return(
        <div>
            <div className="background-image-container" style={containerStyle}>
                <h1 id="title">{t('titre')}</h1>
                <Button id="booke" as={Link} to="/about" variant="success">{t('a')}</Button>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;