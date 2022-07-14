import React from 'react'
import styled from 'styled-components'
import background from '../assets/Background.mp4'

const Container = styled.div`
    height: 90vh;
    width: 100%;
    background-color: black;
    color: white;
    position: relative;
`
const Overlay = styled.div`
    width: 100%;
    height: 90vh;
    background-color: #111111b7;
    position: absolute;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30vh;
    justify-content: center;
    align-items: center;
    
`
const Title = styled.h1`
    font-family: 'Russo One', sans-serif;
    font-weight: bold;
    font-size: 100px;
    text-align: center;
`
const TitleColor = styled.span`
    color: yellowgreen;
    font-family: 'Russo One', sans-serif;
    font-weight: bold;
    font-size: 100px;
`
const Description = styled.h2`
    font-size: 30px;
    margin-top: 10px;
    text-align: center;
`
const Button = styled.button`
    width: 150px;
    height: 50px;
    background: yellowgreen;
    color: white;
    border: none;
    font-size: 25px;
    margin-top: 80px;
    transition: 0.2s all ease-in-out;
    &:hover{
        background-color: #5d7c1f;
        cursor: pointer;
    }
`

const Hero = () => {
    return (
        <Container>
            <video autoPlay loop muted>
                <source src={background} type='video/mp4' />
            </video>
            <Overlay>
                <Wrapper>
                    <Title>Quady<TitleColor> Olecko</TitleColor></Title>
                    <Description>Nasz sprzęt sprawdza się w najtrudniejszych warunkach</Description>
                    <Button>Oferta</Button>
                </Wrapper>
            </Overlay>
        </Container>
    )
}

export default Hero
