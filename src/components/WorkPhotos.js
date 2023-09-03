import { Col, Row, Image, Container } from "react-bootstrap";
import workPhoto1 from '../img/WorkPhoto1.png';
import workPhoto2 from '../img/WorkPhoto2.png';
import workPhoto3 from '../img/WorkPhoto3.png';
import workPhoto4 from '../img/WorkPhoto4.png';

const WorkPhotos = () => {
    return (
        <>
            <Container className="mt-5" style={{ textAlign: 'center' }}>
                <Row>
                    <h3 style={{ color: 'white', textAlign: 'center' }}>Work Photos</h3>
                    <Col className="mt-5" md={6}><Image width={'100%'} src={workPhoto1} /></Col>
                    <Col className="mt-5" md={6}><Image width={'100%'} src={workPhoto2} /></Col>
                    <Col className="mt-5" md={6}><Image width={'100%'} src={workPhoto3} /></Col>
                    <Col className="mt-5" md={6}><Image width={'100%'} src={workPhoto4} /></Col>
                </Row>
            </Container>
        </>
    )
};

export default WorkPhotos;