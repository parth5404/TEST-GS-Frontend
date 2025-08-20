import React from 'react'
import Template from '../components/core/Auth/Template'
import signupImage from '../assets/Images/signup.webp'

const SignUp = () => {
  return (
    <div className="bg-black min-h-screen">
      <Template
        heading={'Join the millions learning to code with GS Academia for free'}
        desc1={'Build skills for today, tomorrow, and beyond.'}
        desc2={'Education to future-proof your career.'}
        image={signupImage}
        formType={'signup'}
      />
    </div>
  )
}

export default SignUp
