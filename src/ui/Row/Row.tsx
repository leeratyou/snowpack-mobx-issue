import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  flex?: number
  justify?: Justify
  align?: Align
  grow?: boolean
}

type Justify = 'start' | 'end' | 'stretch' | 'between' | 'center'
type Align = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

const j = {
  'start': 'flex-start',
  'end': 'flex-end',
  'stretch': 'stretch',
  'between': 'space-between',
  'center': 'center'
}

const ai = {
  'start': 'flex-start',
  'end': 'flex-end',
  'stretch': 'stretch',
  'baseline': 'baseline',
  'center': 'center'
}

function f(justify: Justify) {
  return j[justify]
}

function a(align: Align) {
  return ai[align]
}

const StyledRow = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: ${p => p.align ? a(p.align) : 'center'};
  justify-content: ${p => p.justify ? f(p.justify) : 'space-between'};
  ${p => p.grow && 'width: 100%'};
`

const Row: FC<Props> = ({ flex, ...props }) => <StyledRow {...props} />
export default Row
