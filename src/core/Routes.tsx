import React, { FC } from 'react'
import { Switch, Redirect, Route, RouteProps } from 'react-router-dom'
import { observer } from 'mobx-react'

import Layout from './Layout'

import Home from '@src/pages/Home'
import Auth from '@src/pages/Auth'

import useStore from '../store'

export enum Path {
  AUTH = '/auth',
  LOGIN = '/auth/login',
  CODE = '/auth/code',
  
  HOME = '/home',
  MEMBERS = '/home/members',
  MESSAGES = '/home/messages',
  
  NOT_FOUND = '/404'
}

export const PrivateRoute: FC<RouteProps> = observer(props => {
  const { user: { isAuth } } = useStore()
  return (
    isAuth
      ? <Layout><Route {...props} /></Layout>
      : <Redirect to={Path.AUTH} />
  )
})

export const AuthedRoute: FC<RouteProps> = observer(props => {
  const { user: { isAuth } } = useStore()
  return (
    isAuth
      ? <Redirect to={Path.HOME} />
      : <Route {...props} />
  )
})

function Routes() {
  return (
    <Switch>
      <AuthedRoute path={Path.AUTH} component={Auth} />
      <PrivateRoute path={Path.HOME} component={Home} />
      <Redirect exact from='/' to={Path.HOME} />
      <Redirect to={Path.NOT_FOUND} />
    </Switch>
  )
}

export default observer(Routes)
