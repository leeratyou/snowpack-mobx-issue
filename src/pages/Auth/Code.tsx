import React, { FC } from 'react'
import styled from 'styled-components'

import { Button, InputAdornment } from '@material-ui/core'
import Page from '@src/core/Page'
import { Space, Input, theme } from '@src/ui'
import useStore from '@src/store'
import { useInput } from '@src/utils/hooks'
import { Fingerprint } from '@material-ui/icons'
import { Redirect } from 'react-router-dom'
import { Path } from '@src/core/Routes'

const Form = styled.div`
  width: 33vw;
  display: flex;
  flex-direction: column;
`

const Code: FC = () => {
  const { user: { credentials, setCode }} = useStore()
  
  const code = useInput({
    label: 'Code',
  })
  
  const handleOk = () => {
    if (code.value) setCode(code.value)
  }
  
  if (!credentials.phone) return <Redirect to={Path.LOGIN} />
  
  return (
    <Page flex={false}>
      <Form>
        <Input
          {...code}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Fingerprint style={{ color: theme.color.darkGray }} />
              </InputAdornment>
            ),
          }}
        />
        <Space height={2} />
        <Button variant='contained' onClick={handleOk}>Ok</Button>
      </Form>
    </Page>
  )
}

export default Code
