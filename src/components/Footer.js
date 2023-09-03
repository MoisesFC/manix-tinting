import { Container, Row, Col } from "react-bootstrap";
import { BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="mt-5" style={{ backgroundColor: 'black', minHeight: '100px' }}>
            <Container >
                <Row style={{ textAlign: 'center' }}>
                    <Col md={3} className="pt-4">
                        <p style={{ color: 'white' }}>&copy; Manix Tinting</p>
                    </Col>
                    <Col md={6} >
                        <Row className="pt-4">
                            <Col></Col>
                            <Col>
                                <a href="https://www.instagram.com/manixtinting/" target="_blank" style={{ color: 'white', marginLeft: '10px', textDecoration: 'none'}}>
                                    <BsInstagram /> Instagram
                                </a>
                            </Col>
                            <Col>
                                <a href="https://www.facebook.com/profile.php?id=100071066764316" target="_blank" style={{ color: 'white', marginLeft: '10px', textDecoration: 'none'}}>
                                    <BsFacebook style={{}}/> Facebook
                                </a>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col md={3} style={{ color: 'white' }} className="pt-4 pb-4">
                        Website Created by <a href="http://www.figueroamoises.com" target="_blank" rel="noopener noreferrer">Moises Figueroa</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;