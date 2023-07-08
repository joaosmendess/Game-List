import styled from "styled-components";


export const Container = styled.div `
height: 100%;

display: flex;
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: #1B1F38;

`;




export const Logo = styled.div `
display: flex;
align-items: center;
margin-bottom: 30px;

>h2 {
    background-color: #1B1F38;
    margin-left: 7px;
}
>img {
    width: 40px;
    height: 40px;
}
`;
export const Form = styled.form `
width: 300px;
height: 300px;


padding: 30px;

border-radius: 10px;
background-color: #313862
;

`;

export const FormTitle  = styled.h1 `

margin-bottom: 40px;

color: #FFFF;

&::after {
    content: '';
        display: block ; 
        width: 55px;
        margin: 0 auto ;
        border-bottom: 10px solid #E44C4E;

}

`;



export const Button = styled.button `
width: 100%;

margin: 7px 0;
padding: 10px;

border: 5px;

font-weight: bold;
color: #FFFF;
background-color: #E44C4E;


transition: opacity .3s;

&:hover {
    opacity: .7;
}

`