import React from 'react'

const SignInComponent = ({ className }: { className?: string }) => {
  return (
    <div className="flex flex-col">
      
      <button className={`${className} bg-purple-500`}>
        Super
      </button>
      
      <button className='bg-red-500'>SignIn</button>
    </div>
  )
}

export default SignInComponent;