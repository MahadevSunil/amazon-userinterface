import React from "react";
import { useStateValue } from "../StateProvider";
import styled from "styled-components";
import Navbar from "./Navbar";

function Checkout(){

    const [{basket}] = useStateValue();


    console.log("Checkout >>>>>", basket);
    return <Container><Navbar/>
    <Main>
        <ShoppingCart><h2> Shopping Cart</h2></ShoppingCart>
        
        
        <Product>
            <Image>
                
            </Image>
            <Description>
                
            </Description>
        </Product>

        <Subtotal>

        </Subtotal>
    </Main>
    </Container>
}

const Container = styled.div`
  width: 100%;
  
  height: fit-content;
  margin: auto;
  background-color: rgb(234, 237, 237);
 
  position: relative;
`;
const Main = styled.div`
  display: flex;
  padding: 15px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ShoppingCart = styled.div`
  padding: 15px;
  
  flex: 0.7;

  @media only screen and (max-width: 1200px) {
    flex: none;
  }

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }
  p {
    font-size: 20px;
  }

  small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      margin-left: 10px;
    }
  }

  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #ffd814;
    border: none;
    outline: none;

    border-radius: 8px;
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  flex: 0.3;
  img {
    width: 100%;
  }
`;
const Description = styled.div`
  flex: 0.7;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 600;
    margin-top: 10px;
  }

  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Checkout;