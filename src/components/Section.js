import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description, leftbtntxt, rightbtntxt, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
           <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
           </ItemText>
            </Fade>
           <Button>
            <Fade bottom>
           <ButtonGroup>
               <LeftButton>
                   {leftbtntxt}
               </LeftButton>
               {  rightbtntxt && 
                                   <RightButton>
                                   {rightbtntxt}
                                </RightButton>
               }
              
           </ButtonGroup>
           <DownArrow src='/images/down-arrow.svg' alt='down-arrow'/>
           </Fade>
           </Button>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image:url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom:30px;

@media (max-width: 768px){
    flex-direction: column;
}

     
`
const LeftButton = styled.div`
        background-color:rgba(23, 26, 32, 0.8);
        height: 40px;
        width:256px;
        color: white;
        display:flex;
        justify-content: center;
        opacity:0.85;
        text-transform:uppercase;
        border-radius: 100px;
        align-items: center;
        font-size: 12px;
        cursor:pointer;
        margin: 8px;

`
const RightButton = styled(LeftButton)`
   background-color: white;
   opacity:0.65;
   color: black;
`

const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
animation: animateDown infinite 1.5s;
`

const Button = styled.div``