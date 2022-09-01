import { SCREEN_NAMES } from '@sportingsolutions/routing'
import { FIXED_ODDS_SCREEN_TYPES } from './useWidgetsNavigationHandler.constants'

export const getFixedOddsScreenType = url => {
  const pathArray = url.split('/')

  const id = pathArray[pathArray.length - 1]
  const type = pathArray[pathArray.length - 2]
  const screenParams = {}
  
  const screenTypeKey = Object.keys(FIXED_ODDS_SCREEN_TYPES)
    .find(screenType => {
      const { matcher } = FIXED_ODDS_SCREEN_TYPES[screenType]
      return matcher === type
    })
    
  const screenType = FIXED_ODDS_SCREEN_TYPES[screenTypeKey]

  if (screenType?.paramType) {
    screenParams[screenType.paramType] = id
  }

  return {
    screenName: screenTypeKey ?? SCREEN_NAMES.ODDS_HOME,
    params: screenParams,
  }
}
