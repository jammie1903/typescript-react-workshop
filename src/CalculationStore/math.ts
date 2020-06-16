
export function doMath(x: number, y: number): number {
  let i = 0
  while (i < 1000000) i += Math.random()
  return x + y
}

// NOTE this an example of using 2 more of the Types available with TypeScript, Parameters and ReturnType
// which can be used, as you might expect, to get the parameters and return type of a function
export function callWithLogging<T extends (...args: any) => any>(fn: T, ...params: Parameters<T>): ReturnType<T> {
  console.log(`calling ${doMath.name} with params ${params}`)
  const start = Date.now()
  const returnValue = fn(...params)
  console.log(`call ${doMath.name} took ${Date.now() - start}ms and returned ${returnValue}`)
  return returnValue
}