/* eslint-disable max-statements */
import { useCallback, useEffect, useRef, useState } from 'react'

const useWidgetsNavigationHandler = widgetConfig => {
  const widgetComponent = useRef(null)
  const [widgetComponentUpdateFlag, setWidgetComponentUpdateFlag] = useState(false)
  
  // Manual widget load
  const loadWidget = useCallback(() => {
    window[widgetConfig.globalVariable]?.load?.()
  }, [widgetConfig.globalVariable])


  // Setting widget element to ref
  const setWidgetElement = useCallback(() => {
    const widgetElement = window[widgetConfig.globalVariable]?.loaded?.()
    if (widgetElement) {
      widgetComponent.current = widgetElement
      setWidgetComponentUpdateFlag(_flag => !_flag)
    }
  }, [widgetConfig])

  // First load and set widget element
  useEffect(() => {
    loadWidget()
    setWidgetElement()
  }, [setWidgetElement, loadWidget])

  return [widgetComponent.current, widgetComponentUpdateFlag]
}

export default useWidgetsNavigationHandler
