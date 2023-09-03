import React from "react";
import { Carousel, Image, Container } from "react-bootstrap";
import tintLevelImg from '../img/shadeLevels.png';
import tintingImg from '../img/tintingBanner.png';
import chamaleonTintImg from '../img/chamaleonTint.png';


const Banner = () => {
    return(
        <div>
        <Carousel fade className="full-width-carousel">
          <Carousel.Item style={{ background: 'radial-gradient(white, black, DarkBlue)' }}>
            <Container>
              <Image src={tintingImg} text="First slide" />
              <Carousel.Caption className="carousel-caption">
                <h3>Professional Tinting</h3>
                <p>Experience the pinnacle of precision and expertise with our Professional Tinting Services </p>
              </Carousel.Caption>
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
              <Carousel.Caption className="carousel-caption">
                <h3>Chameleon Tint</h3>
                <p>Acutting-edge technology that seamlessly adapts to different lighting conditions, adding a touch of sophistication and uniqueness to your windows.</p>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    )
};

export default Banner;