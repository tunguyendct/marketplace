import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  onClick?: () => void
}

const Button = ({ children, onClick, className }: Props) => {
  return <a onClick={onClick} className={`inline-flex cursor-pointer items-center gap-x-3 h-11 px-4 rounded font-semibold ${className || ''}`.trim()}>{children}</a>
}

export default Button
