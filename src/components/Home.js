import "./Homestyle.css"
import React from 'react';
import Button from 'react-bootstrap/Button';
import Footer from "./footer";
import { Link } from 'react-router-dom';


function Home({ imageUrl }){
    const containerStyle = {
        backgroundImage: `url(${imageUrl})`,
      };
    return(
        <div>
            <div className="background-image-container" style={containerStyle}>
                <h1 id="title">Travel like you never did before</h1>
                <Button id="booke" as={Link} to="/destination" variant="success">Our destinations</Button>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;