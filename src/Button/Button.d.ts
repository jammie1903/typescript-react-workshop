import {MouseEvent} from 'react'
import {StyledButtonProps} from './styles/Button.style.d'

export interface ButtonProps {
  text: string,

  onClick?: (event: MouseEvent) => void 

  theme?: StyledButtonProps['themeName']
}