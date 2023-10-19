type Props = {
  children: React.ReactNode
  className?: string
}

const Column = ({ children, className }: Props) => {
  return <div className={`grow-0 shrink-0 ${className || ''}`.trim()}>{children}</div>
}

export default Column
