/* eslint-disable @typescript-eslint/no-unused-vars */

import styled, {css} from 'styled-components'
import { Color, StyledButtonProps, ThemeMap } from './Button.style.d'

// NOTE: In practice, the theme colors would instead be set at a higher level, 
// but I don't want to go in to too much detail about styles-components in this session
const themeMap: ThemeMap = {
  light: { background: Color.light },
  dark: { background: Color.dark, color: Color.light },
}

// NOTE: Optional chaining
// as you may well know, es2020 is bringing in optional chaining, which is available in the latest create-react app
const darkColorMaybe = themeMap.dark?.color
// what you may not know is that typescript has a Non-null assertion operator to do along with this, as seen below
// using this as opposed to ?. tells typescript you are absolutely sure that there is a value there
const darkColor = themeMap.dark!.color
// if you check the types of these two consts, you'll see one may be undefined, and the other wont be

export const Button = styled.button<StyledButtonProps>`
  padding: 5px 10px;
  margin-right: 10px;
  color: ${props => themeMap[props.themeName]?.color};
  background-color: ${props => themeMap[props.themeName]?.background};
  border: 1px solid #333;
  border-radius: 4px;
`

// export const StyledButtonAlternative = styled.button((props: StyledButtonProps) => css`
//   padding: 5px 10px;
//   font-size: 16px;
//   color: ${themeMap[props.themeName]?.color}
//   background-color: ${themeMap[props.themeName]?.background}
//   border: 1px solid #333;
//   border-radius: 4px;
// `)
