import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { PlaylistAdd, Search } from '@material-ui/icons'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@material-ui/core'

import MessagesTable from '@src/components/Messages/MessagesTable'
import MessagesDialog from '@src/components/Messages/MessagesDialog'
import Page from '@src/core/Page'
import { Row, Space } from '@src/ui'
import useStore from '@src/store'

const Content = styled.div`
  padding: 1rem 0;
  flex: 1;
`

const Add = styled(Button)`
  padding-top: 7px;
  padding-bottom: 7px;
`

const Messages: FC = () => {
  const { groups: { currentGroupId }, messages: { add } } = useStore()
  return (
    <Page key={currentGroupId}>
      <Content>
        <Row>
          <Add variant='outlined' startIcon={<PlaylistAdd />} onClick={add}>Add message</Add>
          <TextField
            size='small'
            label='Search'
            variant="outlined"
            InputProps={{
              endAdornment: <Search />
            }}
          />
        </Row>
        <Space height={1} />
        <MessagesTable />
        <MessagesDialog />
      </Content>
    </Page>
  )
}

export default observer(Messages)
