import * as yup from 'yup'
import { latinSpecialSymbolRegExp, withoutCyrillicRegExp, withoutNumberRegExp, withoutUnderscoreRegExp } from './regexp'

export const latinNumberSymbolRule = field => yup.string()
  .trim()
  .matches(withoutCyrillicRegExp, ' ')
  .required(`${field} is required`)
  .matches(withoutUnderscoreRegExp, ' ')

export const optionalLatinNumberSymbolRule = () => yup.string()
  .trim()
  .matches(withoutCyrillicRegExp, ' ')
  .matches(withoutUnderscoreRegExp, ' ')

export const booleanRule = field => yup.boolean()
  .required(`${field} is required`)
  .oneOf([true, false])

export const requiredDropDownRule = field => yup.string()
  .required(`${field} is required`)

export const latinSpecialSymbolRule = field => yup.string()
  .trim()
  .matches(withoutCyrillicRegExp, ' ')
  .required(`${field} is required`)
  .matches(withoutNumberRegExp, ' ')
  .matches(withoutUnderscoreRegExp, ' ')
  .matches(latinSpecialSymbolRegExp, ' ')
