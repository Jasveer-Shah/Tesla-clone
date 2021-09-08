import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from "../features/car/carSlice"
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
   console.log(cars)
    return (
       <Container>
           <a>
               <img src='/images/logo.svg' alt='tesla-logo'/>
           </a>
           <Menu>
                {cars && cars.map((car, index) => (
                    <button key={index} href='#'>{car}</button>
                ))}
{/* 
                <a href='#'>Model S</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
                <a href='#'>Model Y</a> */}
           </Menu>
           <RightMenu>
               <button href="#">Shop</button>
               <button href="#">Account</button>
               <CustomMenu onClick={() => setBurgerStatus(true)}/>
           </RightMenu>

           <BurgerNav show={burgerStatus}>
               <CloseWrapper>
                 <CustomClose onClick={() => setBurgerStatus(false)}/>
               </CloseWrapper>
               {cars && cars.map((car, index) => (
                    <a key={index} href='#'>{car}</a>
                ))}
               <li><button href='#'>Existing Inventory</button></li>
               <li><button href='#'>Used Inventory</button></li>
               <li><button href='#'>Trade-in</button></li>
               <li><button href='#'>Cybertruck</button></li>
               <li><button href='#'>Roadster</button></li>
               
            </BurgerNav>
       </Container>
    )
}

export default Header

const Container = styled.div`
     min-height: 60px;
     position:fixed;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 20px;
     top: 0;
     left:0;
     right:0;
     z-index: 1;
`

const Menu = styled.div`
    display : flex;
    align-items: center;
    margin-left: 20px;
    flex:1;
    justify-content: center;

   button {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        background: none;
        border: none;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
       display: flex;
        align-items: center;
       button {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        /* padding: 0 10px; */
        flex-wrap: nowrap;
        background: none;
        border: none;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
     position: fixed;
     top:0;
     right: 0;
     bottom: 0;
     background-color:white;
     width: 300px;
     z-index: 100;
     list-style: none;
     padding: 20px;
     text-align:left;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     text-align: start;
     transform: ${props => props.show ? 'translateX(0)' : "translateX(100%)"}; 
     transition: transform 0.3s;
     li {
         padding: 15px 0px;
         border-bottom: 1px solid rgba(0, 0, 0, 0.2);
     }

    button{
         font-weight: 400;
         border-radius: 20px;
         outline:none;
         border:none;
         color:#696969;
         font-weight: 600;
         cursor: pointer;
         border-bottom: none;
         background: none;
     }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
     cursor: pointer;
`