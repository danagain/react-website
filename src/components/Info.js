import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './info.css';

class Info extends React.Component {

    
    
    render( ) { 



        const Title = () => {
            return (
                <Container>
                <div className="row" style={contentBoxCSS}> 
                <div className="col-sm-12"> 
                <h1 style={{marginTop: "5%", fontSize: "2rem", fontFamily: 'Oxanium'}}>This website has no need!</h1>
                <hr style={{maxWidth: "3.25rem", borderWidth: ".2rem", borderColor: "#fff"}}></hr>
                <p style={{paddingLeft: "10%", paddingRight: "10%", marginTop: "2.5rem", textAlign: "left", marginBottom: "5%"}}>"Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                <Button variant="secondary" size="lg" style={{color: "#0056b3", backgroundColor: "#db2763", marginBottom: "5%"}}>Do Nothing!</Button>
                </div>
                </div>
                </Container>
            );
        }

        const infoCSS = { 
            width: "100%",
            marginTop: "2%",
            backgroundColor: "#12eaea",
            justifyContent: "center",
            textAlign: "center"
        };

        const contentBoxCSS = {
            width: "100%",
            height: "100%",  
        }

        const centreCSS = {
            display: "flex",
            justifyContent: "center",
            paddingRight: "5%",
            paddingLeft: "5%"
        }


        return(
            <div style={centreCSS}> 
                <div style={infoCSS}>
                    <Title/>
                </div>
                </div>
        
        
        );
    }

}
export default Info