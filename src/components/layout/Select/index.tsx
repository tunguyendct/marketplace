import { ReactNode } from 'react'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import * as RadixSelect from '@radix-ui/react-select'

export type Option = {
  text: ReactNode
  value: string
  isDisabled?: boolean
}

type SelectProps = {
  placeholder?: string
  options: Option[]
  value?: string
  defaultValue?: string
  handleValueChange: (value: string) => void
}

const Select = ({
  placeholder,
  defaultValue,
  value,
  options,
  handleValueChange,
}: SelectProps) => {
  return (
    <RadixSelect.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={handleValueChange}
    >
      <RadixSelect.Trigger
        className="inline-flex items-center justify-between rounded px-4 border border-solid border-neutral h-11 gap-[5px] text-neutral shadow-[0_2px_10px] shadow-black/10 data-[placeholder]:text-neutral outline-none"
        aria-label="Food"
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDownIcon className="w-5 h-5" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Content className="overflow-hidden bg-white rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <RadixSelect.ScrollUpButton className="flex items-center justify-center h-6 bg-white cursor-default">
          <ChevronUpIcon className="text-slate w-5 h-5" />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className="px-4 shadow-[0_2px_10px]">
          <RadixSelect.Group>
            {options.map((option) => (
              <SelectItem key={option.value} {...option} />
            ))}
          </RadixSelect.Group>
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white cursor-default">
          <ChevronDownIcon className="text-slate w-5 h-5" />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Root>
  )
}

const SelectItem = (option: Option) => {
  return (
    <RadixSelect.Item
      disabled={option.isDisabled}
      className="text-sm leading-none rounded flex items-center h-11 relative select-none cursor-pointer data-[disabled] text-neutral hover:text-black :pointer-events-none data-[state=checked]:text-black data-[highlighted]:outline-none"
      value={option.value}
    >
      <RadixSelect.ItemText>{option.text}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute right-0 w-5 inline-flex items-center justify-center">
        <CheckIcon className="w-5 h-5" />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
}

export default Select
