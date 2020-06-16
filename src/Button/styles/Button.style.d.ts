
type ThemeName = 'default' | 'light' | 'dark' | 'primary' | 'secondary'

// enums are key value pairs, unlike types and interfaces, enums exist at runtime
export enum Color  {
  light = '#f3f3f3',
  dark = '#212121',
}

interface Theme {
  background: Color
  color?: Color
}

export type ThemeMap = {[K in ThemeName]?: Theme}

export interface StyledButtonProps {
  themeName: ThemeName
} 
