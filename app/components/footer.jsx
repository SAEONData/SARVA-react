import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <div>
            <Footer color="grey" className="font-med pt-4 mt-4 page-footer" style={{maxWidth: '100%'}}>
                <Container className="text-left">
                    <Row>
                        <Col sm="3">
                            <h5 className="title" style={{fontSize:24}}>Technology</h5>
                            <p>The DST funds the SAEON Open Data Platform (ODP) and associated dissemination portals. Developed by SAEON on behalf of DST, DEA, and other stakeholders.</p>
                        </Col>
                        <Col sm="3">
                            <h5 className="title" style={{fontSize:24}}>Legal</h5>
                            <ul>
                                <li className="list-unstyled"><a href="#!">Disclaimer</a></li>
                                <li className="list-unstyled"><a href="#!">Using Sarva</a></li>
                                <li className="list-unstyled"><a href="#!">Terms and Conditions</a></li>
                                <li className="list-unstyled"><a href="#!">Data Licences</a></li>
                                <li className="list-unstyled"><a href="#!">Privacy</a></li>
                            </ul>
                        </Col>
                        <Col sm="3">
                                <h5 className="title" style={{fontSize:24}}>SAEON ODP</h5>
                                <ul>
                                    <li className="list-unstyled"><a href="#!">Open Data Platform</a></li>
                                    <li className="list-unstyled"><a href="#!">For Stakeholders</a></li>
                                    <li className="list-unstyled"><a href="#!">For Developers</a></li>
                                    <li className="list-unstyled"><a href="#!">Contact Us</a></li>
                                </ul>
                        </Col>
                        <Col sm="3">
                            <div>
                                <h5 className="title" style={{fontSize:24}}>Funding</h5>
                                <img src={'app/image/logo_dst.png'}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center" >
                    <Container className="container-fluid">
                        Created by <a className="blue-text" href={"http://www.saeon.ac.za"}> SAEON </a> using <a className="brown-text" href={"https://mdbootstrap.com"}> MDBootstrap </a> and SAEON Open Data Platform APIs.
                    </Container>
                </div>
            </Footer>
                </div>
        );
    }
}

export default FooterPage;
