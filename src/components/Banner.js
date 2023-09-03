import React from "react";
import { Carousel, Image, Container } from "react-bootstrap";
import tintLevelImg from '../img/shadeLevels.png';
import tintingImg from '../img/tintingBanner.png';
import chamaleonTintImg from '../img/chamaleonTint.png';
import smTintLvlImg from '../img/smShadeLevels.png';
import smTintingImg from '../img/smTintingBanner.png';
import smChameleonImg from '../img/smChamaleonTint.png';


const Banner = () => {
    return (
        <div>
            <div className="d-none d-md-block">
                <Carousel fade className="full-width-carousel">
                    <Carousel.Item style={{ background: 'radial-gradient(white, black, DarkBlue)' }}>
                        <Container>
                            <Image src={tintingImg} text="First slide" />
                        </Container>
                    </Carousel.Item >
                    <Carousel.Item style={{ background: 'radial-gradient(white, black)' }}>
                        <Container>
                            <Image src={tintLevelImg} text="Second slide" />
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item style={{ background: 'radial-gradient(orange, blue)' }}>
                        <Container>
                            <Image src={chamaleonTintImg} text="Third slide" />
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <div className="d-md-none">
                    <Carousel fade className="small-full-width-carousel">
                        <Carousel.Item>
                            <Image
                                src={smTintingImg}
                                alt="First slide"
                                className="d-block w-100"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src={smTintLvlImg}
                                alt="Second slide"
                                className="d-block w-100"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src={smChameleonImg}
                                alt="Third slide"
                                className="d-block w-100"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
};

export default Banner;