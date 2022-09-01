import { WIDGETS_GLOBALS } from '../../constants/widgets'

export const getWidgetConfig = name => WIDGETS_GLOBALS[name] ?? {}
