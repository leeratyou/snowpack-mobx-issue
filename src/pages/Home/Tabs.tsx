import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'
import styled, { keyframes } from 'styled-components'
import { useHistory } from 'react-router'

import { Tab, Tabs as MuiTabs } from '@material-ui/core'

import { Path } from '@src/core/Routes'
import useStore from '@src/store'

const appear = keyframes`
  0% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0px);
  }
`

const TabWithAppear = styled(Tab)`
  overflow: hidden;
  .MuiTab-wrapper {
    animation: ${appear} ease-in-out 300ms 1;
  }
`

const Tabs: FC = () => {
  const { groups: { currentGroupId } } = useStore()
  const [ tab, setTab ] = useState(0)
  const h = useHistory()
  const handleTab = (_: any, v: number) => {
    setTab(v)
    if (v === 0) h.push(Path.MEMBERS)
    if (v === 1) h.push(Path.MESSAGES)
  }
  return (
    <MuiTabs value={tab} onChange={handleTab}>
      <Tab label='Members' />
      {currentGroupId && <TabWithAppear label='Messages' />}
    </MuiTabs>
  )
}

export default observer(Tabs)
