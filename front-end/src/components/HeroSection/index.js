import React, { useState } from "react";
import Video from "../../videos/hero.video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

import { Button } from "../UI/Button/ButtonElements";

function HeroSection() {
  const [isHover, setIsHover] = useState(false);

  const hoverHandle = () => {
    setIsHover(!isHover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="vide/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for new account today and receive $250 in creadit towards your
          next payment
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={hoverHandle}
            onMouseLeave={hoverHandle}
            primary="true"
            dark="dark"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            Get started {isHover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
