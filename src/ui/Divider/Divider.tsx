import React, { FC } from 'react'
import { Divider as MuiDivider } from '@material-ui/core'
import Space from '../Space'

interface Props {
  height?: number
}

const Divider: FC<Props> = ({ height = 1, ...props }) => (
  <>
    <Space height={height} />
    <MuiDivider {...props} />
    <Space height={height} />
  </>
)

export default Divider
