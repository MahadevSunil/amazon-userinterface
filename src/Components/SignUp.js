import React from "react";
import styled from "styled-components";
function SignUp (){
    return(
        <Container>
            <Logo>
                <img src="./amazon_logo.png" alt="" ></img>
            </Logo>
            <FormContainer>
                <h3>Sign-Up</h3>
                <InputContainer>
                <p>FullName</p>
                <input type="text" placeholder="Mahadev Sunil"></input>
                </InputContainer>
                <InputContainer>
                <p>Email</p>
                <input type="email" placeholder="example@example.com"></input>
                </InputContainer>
                <InputContainer>
                <p>Password</p>
                <input type="password" placeholder="*******"></input>
                </InputContainer>
               
               <SignupButton>Create Account in Amazon</SignupButton>
               
                
                </FormContainer>

                <LoginButton>Back to Login</LoginButton>
        </Container>

    )
}

const Container = styled.div`
width: 40% ;
min-width: 450px;
height: fit-content;
padding: 15px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`;
const Logo = styled.div`
width: 120px;
margin-bottom: 20px;

img {
width: 100%;
}
`;

const FormContainer = styled.form`
border: 1px solid lightgray;
width: 55%;
height: 450px;
display: flex;
flex-direction: column;
align-items: center;
padding: 15px;

h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 10px;
}

`;
const InputContainer = styled.div`
width: 100%;
padding: 10px;

p {
    font-size: 14px;
    font-weight: 600;

}

input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
        border: 1px solid orange;
    }
}


`;
const SignupButton = styled.button`
width: 100%;
height: 35px;
font-size: 12px;
margin-top: 20px;

&:hover {
    backgroung-color: #dfdfdf;
    border: 1px solid gray;
}

`;
const LoginButton = styled.button`
width: 55%;
height: 35px;
background-color: #f3b414;
border: none;
outline: none;
border-radius: 10px;
margin-top: 30px;
`;


export default SignUp;