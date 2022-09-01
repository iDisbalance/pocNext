import * as React from 'react'
import { useWidgetsNavigationHandler } from '../../useWidgetsNavigationHandler'
import { getWidgetConfig } from './Widget.utils'

const Widget = ({ name, onSetReference }) => {
  const widgetConfig = getWidgetConfig(name)

  return (
    <div id={widgetConfig.id}/>
  ) 
}

export default Widget
