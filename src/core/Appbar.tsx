import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import { Face } from '@material-ui/icons'
import { Menu, MenuItem, Button, ListItem } from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'

import useStore from '@src/store'
import { Space } from '@src/ui'

const StyledAppBar = styled(AppBar)`
  direction: ltr;
  box-shadow: none;
  background-color: transparent;
  color: ${p => p.theme.color.text};
`
const StyledTopbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

interface Props {}

const Appbar: FC<Props> = () => {
  const { user: { credentials, logout, name } } = useStore()
  
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event: any) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  
  return (
    <StyledAppBar id='app-bar' position='static'>
      <StyledTopbar>
        <Space grow />
        <Button onClick={handleClick} startIcon={<Face />}>{`Hi, ${name}!`}</Button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>Noting here</MenuItem>
          <MenuItem>Noting here</MenuItem>
          <MenuItem onClick={() => logout()}><ExitToApp /><Space width={0.75} />Logout</MenuItem>
        </Menu>
      </StyledTopbar>
    </StyledAppBar>
  )
}

export default observer(Appbar)
