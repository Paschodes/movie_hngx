import React from 'react'
import { FallingLines } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='spin'>
        <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel='falling-lines-loading'
        />
        
    </div>
  )
}

export default Spinner