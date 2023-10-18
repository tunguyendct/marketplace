type Props = {
  children: React.ReactNode
  className?: string
}

const Column = ({ children, className }: Props) => {
  return <div className={`${className || ''}`.trim()}>{children}</div>
}

export default Column
