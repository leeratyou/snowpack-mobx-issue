import React, { FC } from 'react'
import styled from 'styled-components'

import Appbar from './Appbar'
import Sidebar from './Sidebar'

const LayoutContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
`

const Main = styled.div`
  flex: 1;
`

const Layout: FC = ({ children }) => (
  <LayoutContainer>
    <Sidebar />
    <Main>
      <Appbar />
      {children}
    </Main>
  </LayoutContainer>
)

export default Layout
