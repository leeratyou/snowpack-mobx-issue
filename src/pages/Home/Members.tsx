import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import Page from '@src/core/Page'
import { PlaylistAdd } from '@material-ui/icons'
import { Row, Space } from '@src/ui'
import { Button } from '@material-ui/core'
import MembersTable from '@src/components/Members/MembersTable'
import MemberDialog from '@src/components/Members/MemberDialog'
import MembersInGroupDialog from '@src/components/Members/MembersInGroupDialog'
import useStore from '@src/store'
import Search from '@src/components/Search'

const Content = styled.div`
  padding: 1rem 0;
  flex: 1;
`

const TallButton = styled(Button)`
  padding-top: 7px;
  padding-bottom: 7px;
`

const Members: FC = () => {
  const { members: { add }, groups: { manage, currentGroupId } } = useStore()
  const onChange = v => console.log('--- Members.tsx -> onChange -> v', v)
  
  return (
    <Page key={currentGroupId}>
      <Content>
        <Row>
          {currentGroupId
            ? <TallButton variant='outlined' startIcon={<PlaylistAdd />} onClick={manage}>Manage members in group</TallButton>
            : <TallButton variant='outlined' startIcon={<PlaylistAdd />} onClick={add}>Add members to community</TallButton>}
          <Search onChange={onChange} />
        </Row>
        <Space />
        <MembersTable />
        <MemberDialog />
        <MembersInGroupDialog />
      </Content>
    </Page>
  )
}

export default observer(Members)
