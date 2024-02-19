import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radio-group'
type formRadioGroup<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'onValueChange' | 'value'>
export const FormRadioGroup = <T extends FieldValues>(props: formRadioGroup<T>) => {
  const { control, defaultValue, name, shouldUnregister, ...restProps } = props
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
    shouldUnregister,
  })

  return <RadioGroup name={name} onValueChange={onChange} value={value} {...restProps} />
}
