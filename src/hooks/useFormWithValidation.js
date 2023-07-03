//хук управления формой и валидации формы
import { useCallback, useState } from 'react'
import isEmail from 'validator/es/lib/isEmail'

export function useFormWithValidation() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)
  const handleChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value
    if (name === 'email') {
      !isEmail(value)
        ? event.target.setCustomValidity('Проверьте правильность ввода электронной почты.')
        : event.target.setCustomValidity('')
    }
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: target.validationMessage })
    const isValid = event.target.closest('form').checkValidity()
    setIsValid(isValid)
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid]
  )

  return { values, handleChange, errors, isValid, setIsValid, resetForm }
}