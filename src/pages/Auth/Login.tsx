import React, { FC } from 'react'
import styled from 'styled-components'
//@ts-ignore
import { useHistory } from 'react-router-dom'

import { Button, TextField, InputAdornment } from '@material-ui/core'
import { Phone } from '@material-ui/icons'

import Page from '@src/core/Page'
import { Space, Input, theme } from '@src/ui'
import useStore from '@src/store'
import { useInput } from '@src/utils/hooks'
import { Path } from '@src/core/Routes'

const Form = styled.div`
  width: 33vw;
  display: flex;
  flex-direction: column;
`

const Login: FC = () => {
  const { user: { setPhone }} = useStore()
  const h = useHistory()
  
  const phoneNumber = useInput({
    label: 'Phone number',
    placeholder: 'e.g. +972 53-555-55-55'
  })
  
  const handleOk = () => {
    if (phoneNumber.value) {
      setPhone(phoneNumber.value)
      h.push(Path.CODE)
    }
  }
  
  return (
    <Page flex={false}>
      <Form>
        <Input
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Phone style={{ color: theme.color.darkGray }} />
              </InputAdornment>
            ),
          }}
          {...phoneNumber}
        />
        <Space height={2} />
        <Button variant='contained' onClick={handleOk}>Ok</Button>
      </Form>
    </Page>
  )
}

export default Login
