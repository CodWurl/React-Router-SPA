import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Home() {
    return (
        <div className="homepage">
            <Container>
                <div className="jumbotron" style={{backgroundColor:'rgba(255, 255, 255, 0.3)' }}>
                    <h1>Visit our resort and change your life!</h1>
                    <h1>Grand opening in Charlotte, NC</h1>
                    <h1>Check out our wide array of packages and offers!</h1>
                </div>
            </Container>
        </div>
    );
}
