import { Col, Container, Row, Button } from "react-bootstrap";

const Banner = () => {

    return (
        <section className="banner" id="banner">
            <Container fluid className="justify-content-between">
                <Row>
                    <Col xs={12} md={12} xl={8}>
                        <span className="tagline"><h1>Welcome to my Portfolio! </h1></span>
                        <h3 className="title">I'm <strong className="wrap">Elam Muniafu</strong>, a Full Stack Web <italic> Developer.</italic></h3>
                        <p> Welcome to my world of coding and creativity! I am a passionate software developer, constantly exploring new 
                        technologies and pushing the boundaries of what is possible in the digital realm. From front-end design to back-end development, 
                        I love diving deep into the code to create innovative solutions and user-friendly interfaces. </p>
                        <Button variant="outline-light text-danger" size="lg"> Learn More </Button>
                    </Col>
                    <Col xs={12} md={6} xl={4} >
                        <img src="images/profile.jpg" alt="Profile Picture"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
