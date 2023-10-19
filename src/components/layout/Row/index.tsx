import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

const Row = ({ children, className }: Props) => {
  return <div className={`flex flex-wrap ${className || ''}`.trim()}>{children}</div>
}

export default Row
