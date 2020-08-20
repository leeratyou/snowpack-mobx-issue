import React, { FC } from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router'

import { Path } from '@src/core/Routes'

import Login from './Login'
import Code from './Code'

const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Auth: FC = () => (
  <AuthContainer>
    <Switch>
      <Route path={Path.LOGIN} component={Login} />
      <Route path={Path.CODE} component={Code} />
      <Redirect to={Path.LOGIN} />
    </Switch>
  </AuthContainer>
)

export default Auth
