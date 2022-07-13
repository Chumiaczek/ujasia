import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: black;
  color: white !important;
  z-index: ${({ isOpen }) => (isOpen ? "0" : "100")};
`;
const Wrapper = styled.div`
  padding: 6px 60px 6px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px){
    padding: 6px 25px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.h1`
    font-family: 'Russo One', sans-serif;
    font-weight: bold;
    font-size: 40px;
`;
const LogoColor = styled.span`
    color: greenyellow;
    font-family: 'Russo One', sans-serif;
    font-weight: bold;
    font-size: 40px;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px){
    display: none;
  }
`;
const Mobile = styled.div`
  flex: 1;
  display: none;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px){
    display: flex;
  }
`
const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  text-transform: uppercase;
  font-weight: 400;
  transition: 0.2s all ease-in-out;

  &:hover{
    color: yellowgreen;
  }
`;

const Navbar = ({ isOpen, toggle }) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Quady<LogoColor>Olecko</LogoColor></Logo>
                </Left>
                <Right>
                    <MenuItem>Strona Główna</MenuItem>
                    <MenuItem>Oferta</MenuItem>
                    <MenuItem>O Nas</MenuItem>
                    <MenuItem>Kontakt</MenuItem>
                </Right>
                <Mobile>
                    <FaBars fontSize="24px" cursor="pointer" z-index="999" onClick={toggle} />
                </Mobile>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
