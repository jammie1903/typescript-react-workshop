import React, { PureComponent, ReactNode } from 'react'

import * as Styled from './styles/Button.style'
import {ButtonProps} from './Button.d'

class Button extends PureComponent<ButtonProps> {

  public static defaultProps: Partial<ButtonProps> = {
    theme: 'default',
  }

  public render(): ReactNode {
    return (
      <Styled.Button
        themeName={this.props.theme!}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </Styled.Button>
    )
  }
}

export default Button