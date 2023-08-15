import React,{ FC} from 'react'

const Wraper:FC<{children:React.ReactNode}> = ({children}) =>  {
  return (
    <div className='max-w-7xl mx-auto px-4 md:px-10  mt-6'>
        {children}</div>
  )
}

export default Wraper