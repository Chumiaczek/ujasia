import React from 'react'
import styled from 'styled-components'
import background from "../assets/hangar.webp"
import { NewItems } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Container = styled.div`
    width: 100%;
    height: 80vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    color: white;
`
const Overlay = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #111111b2;
    justify-content: center;
    align-items: space-around;
    position: relative;
`
const Image = styled.img`
    width: 70% !important;
`
const SlideBackground = styled.div`
    margin-top: 30px;
    border-radius: 10px;
    background-color: #111111ca;
    height: 700px;
    width: 500px;
    margin-left: 50px;
`
const SlideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    
`
const Price = styled.h2`
    color: greenyellow;
`
const NewOffer = () => {
    return (
        <Container>
            <Overlay>
                <Swiper slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper">

                    {NewItems.map((item) => (
                        <SwiperSlide>
                            <SlideBackground>
                                <SlideWrapper>
                                    <Image src={item.img} />
                                    <Title>{item.title}</Title>
                                    <Price>{item.price} zł</Price>
                                </SlideWrapper>
                            </SlideBackground>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Overlay>
        </Container>
    )
}

export default NewOffer