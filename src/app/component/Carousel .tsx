'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <Image
                src="/images/caurosel.png"
                priority={true}
                width={1920}
                height={500}
                alt="Picture of the author"
                className="image-slider"
            />
          </div>
          <div>
          <Image
                src="/images/caurosel.png"
                priority={true}
                width={100}
                height={50}
                alt="Picture of the author"
            />
          </div>
          <div>
          <Image
                src="/images/caurosel.png"
                priority={true}
                width={100}
                height={50}
                alt="Picture of the author"
            />
          </div>
          <div>
          <Image
                src="/images/caurosel.png"
                priority={true}
                width={100}
                height={50}
                alt="Picture of the author"
            />
          </div>
          <div>
          <Image
                src="/images/caurosel.png"
                priority={true}
                width={100}
                height={50}
                alt="Picture of the author"
            />
          </div>
          <div>
          <Image
                src="/images/caurosel.png"
                priority={true}
                width={100}
                height={50}
                alt="Picture of the author"
            />
          </div>
        </Slider>
      </div>
    );
  }
}