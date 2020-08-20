import { useState, useEffect } from 'react'

export function useToggle(init = false): [ boolean, () => void ] {
  const [ state, setState ] = useState(init)
  const toggle = () => setState(prev => !prev)
  return [ state, toggle ]
}

//@ts-ignore
function findInvalid(input, validators) {
  const validatorsArray = Array.isArray(validators) ? validators : [validators];
  return validatorsArray.find(validate => !validate(input));
}

//@ts-ignore
function hasError(input, validators, needText) {
  const hasInvalid = findInvalid(input, validators);
  return needText
    ? hasInvalid
      ? hasInvalid.errorText || 'Input is not valid' : ''
    : !!hasInvalid;
}

export const useInput = (props = {}) => {
  let {
    value: initValue,
    label,
    onChange,
    onFocus,
    type = 'text',
    validation = () => '',
    errorText,
    placeholder = '',
    helperText,
    options,
    translation = (input: any) => input,
    ...rest
  } = props
  const [error, setError] = useState(translation(errorText))
  const [input, setInput] = useState(initValue)
  
  useEffect(() => {
    setInput(initValue)
  }, [initValue])
  
  const _validate = (value: any) => {
    const validationArray = Array.isArray(validation) ? validation : [validation]
    const error = translation(hasError(value, validationArray, true))
    setError(error)
    return error
  }
  
  if (typeof onChange !== 'function') onChange = e => setInput(e.target.value)
  if (typeof onFocus !== 'function') onFocus = () => setError('')
  
  return {
    value: input,
    type: type,
    label: label,
    placeholder: placeholder,
    error: !!error,
    helperText: error || helperText,
    onChange: onChange,
    onFocus: onFocus,
    validate: () => _validate(input),
    options,
    ...rest
  }
}

export const inputsHasError = (...inputs: any[]) => {
  return [...inputs]
    .map(input => input.validate())
    .findIndex(input => input) !== -1
}

export const inputs = (...inputsArgs: any[]) => {
  return {
    get hasError() {
      return inputsHasError(...inputsArgs)
    }
  }
}
