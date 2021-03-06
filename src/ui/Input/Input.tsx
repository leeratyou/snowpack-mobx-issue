import React, { FC } from 'react'
import { TextField, TextFieldProps } from '@material-ui/core'

const Input: FC<TextFieldProps> = props => <TextField variant='outlined' {...props} />
export default Input
