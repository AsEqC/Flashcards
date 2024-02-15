import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'
type formCheckboxProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<CheckboxProps, 'checked'>
export const FormCheckbox = <T extends FieldValues>(props: formCheckboxProps<T>) => {
  const { control, disabled, name, shouldUnregister, ...restProps } = props
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return (
    <Checkbox {...restProps} checked={value} onBlur={onBlur} onCheckedChange={onChange} ref={ref} />
  )
}
