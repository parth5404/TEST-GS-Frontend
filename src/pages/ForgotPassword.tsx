import React, { useState } from 'react'
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/common/Spinner';
import { forgotPassword } from '../services/operations/authServices';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const { loading } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    forgotPassword(email, setEmailSent, dispatch, navigate);
  }

  return (
    <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-900' >
      {
        loading ?
          (<Spinner />)
          :
          (
            <div className='max-w-[500px] p-4 lg:p-8' >
              <h2 className='text-3xl font-semibold leading-[2.375rem] text-richblack-5' >
                {
                  !emailSent ? 'Reset your password' : 'Check email'
                }
              </h2>


              <p className='my-4 text-lg leading-[1.625rem] text-richblack-100' >
                {
                  !emailSent
                    ? "Have no fear. We'll email you instructions to reset your password. If you don't have access to your email we can try account recovery."
                    : <>We have sent the reset email to your email account <span className='font-bold' >{email}</span></>
                }
              </p>

              <form onSubmit={handleOnSubmit}>

                {
                  !emailSent &&
                  (
                    <label className='w-full' >
                      <p className='mb-1 text-sm leading-[1.375rem] text-richblack-5' >Email Address <sup className='text-pink-200' >*</sup></p>
                      <input
                        type="email"
                        placeholder='Enter Email Address'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 placeholder:text-richblack-400 focus:outline-none focus:ring-2 focus:ring-yellow-50'
                        style={{
                          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                      />
                    </label>
                  )
                }


                <button type='submit' className='w-full mt-6 rounded-lg bg-yellow-50 p-3 font-medium text-richblack-900 transition-all duration-200 hover:bg-yellow-100 active:bg-yellow-200' >
                  {
                    !emailSent ? 'Send Reset Link' : 'Resend Reset Link'
                  }
                </button>
              </form>

              <Link to={'/login'} >
                <div className='mt-6 flex items-center gap-x-2 text-richblack-5 transition-all duration-200 hover:text-yellow-50'>
                  <BiArrowBack />
                  <p>Back To Login</p>
                </div>
              </Link>
            </div>
          )
      }
    </div>
  )
}

export default ForgotPassword
