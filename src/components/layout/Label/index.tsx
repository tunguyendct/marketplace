import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  htmlFor?: string
  className?: string
}

const Label = ({ children, className, htmlFor }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`font-semibold uppercase text-neutral active:text-white ${className}`.trim()}
    >
      {children}
    </label>
  )
}

export default Label
