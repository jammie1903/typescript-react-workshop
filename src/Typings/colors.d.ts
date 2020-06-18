interface Color {
  r: number
  g: number
  b: number
  a?: number
}

type PartialColor = Partial<Color>
type RequiredColor = Required<Color>

type Alpha = Pick<Coordinates, 'a'>
type OpaqueColor = Omit<Coordinates, 'a'>

type ColorProps = keyof Color
type ManuallyDefinedColorProps = 'r' | 'g' | 'b' | 'a'

type ColorMap = Record<string, Color>
type SpecificColorMap = Record<'myRed' | 'myBlue' | 'myYellow', Color>

type BigIntColor = {
  [k in keyof Color]: BigInt
}

type BigIntOrDefaultColor = {
  [k in keyof Color]: BigInt | Color[k]
}

type ReferencingColor = {
  textR: Color['r']
  textG: Color['g']
  textB: Color['b']
  text: string
}

type BigIntColorOptional = {
  [k in keyof Color]?: BigInt
}
type BigIntColorOptionalRecord = Partial<Record<keyof Color, BigInt>>


type BigIntColorMandatory = {
  [k in keyof Color]-?: BigInt
}
type BigIntColorMandatoryRecord = Record<keyof Color, BigInt>

// generics and intersections
type Named<T> = T & {name: string}

type NamedColor = Named<Color>
