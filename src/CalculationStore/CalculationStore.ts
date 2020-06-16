import {createContext} from 'react'
import {observable, action} from 'mobx'
import {Calculation} from './CalculationStore.d'
import {doMath, callWithLogging} from './math'


class CalculationStore { 
  // NOTE to use decoration, you need to set `"experimentalDecorators": true` in your tsconfig file
  @observable calculations: Calculation[] = [] //TODO not firing events check why

  @action addCalculation = (x: number, y: number) => {
    this.calculations.push({ 
      x, 
      y,
      result: callWithLogging(doMath, x, y)
    })
  }
}
  
export default createContext(new CalculationStore())