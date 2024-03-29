import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1 className="text-danger">Skills</h1>
                            <p> lorem Ipsum  is simply dummy text of the printing and typesetting industry.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="items">
                                    <img src="" alt="Image"/>
                                    <h5> Web Development</h5>
                                </div>
                                <div className="items">
                                    <img src="" alt="Image"/>
                                    <h5> Web Development</h5>
                                </div>
                                <div className="items">
                                    <img src="" alt="Image"/>
                                    <h5> Web Development</h5>
                                </div>
                                <div className="items">
                                    <img src="" alt="Image"/>
                                    <h5> Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Skills;

