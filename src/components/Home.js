import React from 'react'
import styled from 'styled-components';
import Section from './Section';
function Home() {
    return (
     <Container>
         <Section title='Model S'
                  description='Order Online for Touchles Delivery'
                  backgroundImg='model-s.jpg'
                  leftbtntxt='Custom Order'
                  rightbtntxt='Existing inventory'
                   />
           <Section title='Model Y'
                  description='Order Online for Touchles Delivery'
                  backgroundImg='model-y.jpg'
                  leftbtntxt='Custom Order'
                  rightbtntxt='Existing inventory'
                   />
          <Section title='Model 3'
                  description='Order Online for Touchles Delivery'
                  backgroundImg='model-3.jpg'
                  leftbtntxt='Custom Order'
                  rightbtntxt='Existing inventory'
                   />
          <Section title='Model X'
                  description='Order Online for Touchles Delivery'
                  backgroundImg='model-x.jpg'
                  leftbtntxt='Custom Order'
                  rightbtntxt='Existing inventory'
                   />
          <Section title='Lowext Cost Solar Panels in America'
                  description='Money-back guarantee'
                  backgroundImg='solar-panel.jpg'
                  leftbtntxt='Order now'
                  rightbtntxt='Learn more'
                   />
          <Section title='Solar for New Roofs'
                  description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                  backgroundImg='solar-roof.jpg'
                  leftbtntxt='Order now'
                  rightbtntxt='Learn more'
                   />
          <Section title='Accessories'
          description=''
          backgroundImg='accessories.jpg'
          leftbtntxt='Shop Now'
          
              />
         
     </Container>
    )
}

export default Home

const Container = styled.div`
height : 100vh;
`