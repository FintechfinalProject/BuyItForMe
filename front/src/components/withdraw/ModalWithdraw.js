import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ModalCard from "./ModalCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalWithdrawBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #dfdfdf solid;
`;

const ModalWithdraw = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ModalWithdrawBlock>
      <Slider {...settings}>
        <ModalCard />
      </Slider>
    </ModalWithdrawBlock>
  );
};

export default ModalWithdraw;