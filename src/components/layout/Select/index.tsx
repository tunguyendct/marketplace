import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import * as RadixSelect from '@radix-ui/react-select'

const Select = () => {
  return <RadixSelect.Root>
    <RadixSelect.Trigger
      className="inline-flex items-center justify-between rounded px-4 border border-solid border-neutral h-11 gap-[5px] text-neutral shadow-[0_2px_10px] shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-neutral outline-none"
      aria-label="Food"
    >
      <RadixSelect.Value placeholder="Select a fruit…" />
      <RadixSelect.Icon>
        <ChevronDownIcon className="w-5 h-5" />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
    <RadixSelect.Portal>
      <RadixSelect.Content className="overflow-hidden bg-black rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <RadixSelect.ScrollUpButton className="flex items-center justify-center h-6 bg-black cursor-default">
          <ChevronUpIcon />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className="px-4 shadow-[0_2px_10px]">
          <RadixSelect.Group>
          <RadixSelect.Item
      className="text-sm leading-none rounded flex items-center h-11 relative select-none cursor-pointer data-[disabled] text-neutral hover:text-white :pointer-events-none data-[state=checked]:text-white data-[highlighted]:outline-none"
      value='Apple'
    >
      <RadixSelect.ItemText>Apple</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute right-0 w-5 inline-flex items-center justify-center">
        <CheckIcon className="w-5 h-5" />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
          </RadixSelect.Group>
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-black cursor-default">
          <ChevronDownIcon className="w-5 h-5" />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
}



export default Select
