import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

const Flex = styled.div`
  flex: 1;
`

function Home() {
  return (
    <Flex>
      Home111
    </Flex>
  )
}

export default observer(Home)
