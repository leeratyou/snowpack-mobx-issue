import React, { FC } from 'react'
import styled from 'styled-components'

import { Table, TableBody, TableCell, TableRow, TableHead, Checkbox, IconButton } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'

const Content = styled.div`
  padding: 2rem;
`

const Actions = styled(TableCell)`
  white-space: nowrap;
`

const DataRow = props => (
  <TableRow>
    <TableCell padding='checkbox'><Checkbox /></TableCell>
    {Object.values(props).map(prop => <TableCell key={prop}>{prop}</TableCell>)}
    <Actions>
      <IconButton><Edit /></IconButton>
      <IconButton><Delete /></IconButton>
    </Actions>
  </TableRow>
)

const Head = ({ data }) => (
  <TableHead>
    <TableRow>
      <TableCell></TableCell>
      <TableCell>ID</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Phone</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Info</TableCell>
      <TableCell>Role</TableCell>
      <TableCell align="center">Actions</TableCell>
    </TableRow>
  </TableHead>
)

const Body = ({ data }) => (
  <TableBody>
    {data.map(row => <DataRow key={row.id} {...row} />)}
  </TableBody>
)

const MembersTable: FC = ({ data }) => (
  <Content>
    <Table>
      <Head data={data} />
      <Body data={data} />
    </Table>
  </Content>
)

export default MembersTable
