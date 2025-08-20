import React, { useState } from 'react'
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import Spinner from '../components/common/Spinner';
import { resetPassword } from '../services/operations/authServices';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BsFillCheckCircleFill } from 'react-icons/bs'

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const { loading } = useSelector(state => state.auth)

  const { password, confirmPassword } = formData
  const resetToken = searchParams.get('reset-token');

  if (!resetToken) {
    return <Navigate to={'/login'} />
  }

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleOnResetPassword = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error(`Passwords don't match`)
      return;
    }
    resetPassword(resetToken, password, dispatch, navigate)
  }

  return (
    <div className='text-white bg-black min-h-screen flex place-items-center' >
      {
        loading
          ?
          (<div className='w-full'><Spinner /></div>)
          :
          (
            <div className='w-11/12 max-w-[500px] p-4 lg:p-8 mx-auto flex flex-col bg-gray-900 rounded-lg border border-gray-700' >
              <h2 className='text-3xl font-semibold leading-[2.375rem] text-white' >
                Choose new password
              </h2>


              <p className='text-gray-300 my-4 text-lg leading-[1.625rem]' >
                Almost done. Enter your new password and you're all set.
              </p>

              <form onSubmit={handleOnResetPassword}>
                <label className='block relative' >
                  <p className='mb-1 text-sm leading-[1.375rem] text-white' >New Password <sup className='text-red-400' >*</sup></p>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter Password'
                    name='password'
                    value={password}
                    onChange={handleOnChange}
                    required
                    className='w-full placeholder:text-gray-400 rounded-lg p-3 pr-12 bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none'
                  />

                  <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)} >
                    {
                      showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />
                    }
                  </span>
                </label>

                <label className='block relative' >
                  <p className='mb-1 mt-6 text-sm leading-[1.375rem] text-white' >Confirm New Password <sup className='text-red-400' >*</sup></p>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleOnChange}
                    required
                    className='w-full placeholder:text-gray-400 rounded-lg p-3 pr-12 bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none'
                  />

                  <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)} >
                    {
                      showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />
                    }
                  </span>
                </label>

                {/* Instruction about password */}
                <div className='mt-6 flex flex-row gap-x-3 text-xs leading-[20px] text-green-400' >
                  <div className='flex flex-col gap-y-1' >
                    <div className='flex gap-x-1 items-center' >
                      <BsFillCheckCircleFill />
                      One Lowercase Character
                    </div>
                    <div className='flex gap-x-1 items-center' >
                      <BsFillCheckCircleFill />
                      One Uppercase Character
                    </div>
                    <div className='flex gap-x-1 items-center' >
                      <BsFillCheckCircleFill />
                      One number
                    </div>
                  </div>

                  <div className='flex flex-col gap-y-1' >
                    <div className='flex gap-x-1 items-center' >
                      <BsFillCheckCircleFill />
                      One Special Character
                    </div>
                    <div className='flex gap-x-1 items-center' >
                      <BsFillCheckCircleFill />
                      8 Character Minimum
                    </div>
                  </div>
                </div>

                <button type='submit' className='w-full mt-6 rounded-lg bg-blue-600 p-3 font-medium text-white hover:bg-blue-700 transition-colors' >
                  Reset Password
                </button>
              </form>

              <Link to={'/login'} >
                <div className='mt-6 flex items-center gap-x-2 text-white hover:text-blue-400 transition-colors'>
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

export default ResetPassword
