import React from 'react'
interface ContainerProps{
    Children : React.ReactNode,
    className?: string;
}
export const Container = ({Children,className}:ContainerProps) => {
  return (
    <div className={cn("container mx-auto px-4 md:px-8 w-full",className)}>{Children}</div>
  )
}

export default container
