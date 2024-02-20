import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/common/components/ui/input'
type formCheckboxProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<InputProps, 'onChange' | 'value'>
export const FormInput = <T extends FieldValues>(props: formCheckboxProps<T>) => {
  const { control, disabled, name, shouldUnregister, ...restProps } = props
  const { field } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return <Input {...restProps} {...field} />
}
