import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeInLeft = keyframes`
  0% {
    opacity: 0.01;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledPage = styled.div<Props>`
  padding: 0;
  flex: ${p => p.flex === false ? 0 : 1};
  display: flex;
  transition: all 200ms ease-in-out;
  animation: ${fadeInLeft} 300ms ease-in-out 1;
`

interface Props {
  flex?: boolean
}

const Page: FC<Props> = ({ children, ...props }) => (
  <StyledPage {...props}>
    {children}
  </StyledPage>
)

export default Page
