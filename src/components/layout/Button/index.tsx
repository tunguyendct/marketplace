import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Button = ({ children, className }: Props) => {
  return <a className={`inline-flex cursor-pointer items-center gap-x-3 h-11 px-4 rounded font-semibold ${className || ''}`.trim()}>{children}</a>
}

export default Button
