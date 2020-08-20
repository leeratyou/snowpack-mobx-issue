import React, { FC } from 'react'
import { observer } from 'mobx-react'

import styled from 'styled-components'

interface Props {}

const StyledSidebar = styled.div`
  width: 20vw;
  height: 100vh;
  text-align: center;
  overflow: scroll;
`

const Sidebar: FC<Props> = () => {
  return (
    <StyledSidebar>
      Sidebar
    </StyledSidebar>
  )
}

export default observer(Sidebar)
