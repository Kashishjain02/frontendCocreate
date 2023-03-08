import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const CompanyLogoSlider = ({logos}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  }

  return (
    <Container style={{ marginTop: "50px" }}>
      <Slider {...settings}>
        {logos.map(logo => (
          <Container
            key={logo.id}
          >
            <img src={logo.url} style={{ maxwidth: "50px", maxHeight: "50px"}} ></img>
          </Container>
        ))}
      </Slider>
    </Container>
  )
}

export default CompanyLogoSlider;