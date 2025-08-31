import React from 'react'
import { useSelector } from 'react-redux'
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import Spinner from '../components/common/Spinner.tsx';
import OtpInput from 'react-otp-input'
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendOtp, signUp } from '../services/operations/authServices';

const VerifyEmail = () => {
  const email = useSelector((state: any) => state.auth?.signUpData?.email) ?? '';
  const { loading, signUpData } = useSelector((state: any) => state.auth)
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVerifyAndSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp({ ...signUpData, otp }, dispatch, navigate);
  }

  if (!signUpData) {
    return <Navigate to={'/signup'} />
  }

  return (
    <div className='min-h-screen bg-black flex justify-center items-center'>
      {
        loading ?
          (
            <div><Spinner /></div>
          )
          :
          (
            <div className='max-w-[500px] p-4 lg:p-8 bg-gray-900 rounded-lg border border-gray-700' >
              <h2 className='text-3xl text-white font-semibold' >Verify Email</h2>
              <p className='text-lg text-gray-300 my-4' >A verification code has been sent to your email <span className='font-bold text-white' >{email}</span>. Enter the code below</p>

              <div>
                <form onSubmit={handleVerifyAndSignUp} >
                  <div className='text-white' >
                    <OtpInput
                      value={otp}
                      onChange={setOtp}

                      inputType='number'
                      numInputs={6}
                      renderInput={(props) => (
                        <input {...props} placeholder='-' className='w-[48px] lg:w-[60px] border border-gray-600 bg-gray-800 rounded-lg aspect-square text-white text-center focus:border-blue-500 focus:outline-none'

                          style={{}}
                        />
                      )}
                      containerStyle={{
                        justifyContent: 'space-between',
                        gap: '0 6px'
                      }}
                    />
                  </div>

                  <button type='submit' className='w-full bg-blue-600 p-3 rounded-lg mt-6 font-semibold text-white hover:bg-blue-700 transition-colors' >

                    Verify Email
                  </button>
                </form>
              </div>


              <div className='mt-6 flex items-center justify-between' >
                <Link to={'/signup'} >
                  <div className='flex items-center gap-x-2 text-white hover:text-blue-400 transition-colors'>
                    <BiArrowBack />
                    <p>Back to SignUp</p>
                  </div>
                </Link>

                <button className='flex items-center gap-x-2 text-blue-400 hover:text-blue-300 transition-colors'
                  onClick={() => sendOtp(signUpData.email, dispatch, navigate)} >
                  <RxCountdownTimer />
                  <p>Resend OTP</p>
                </button>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default VerifyEmail
