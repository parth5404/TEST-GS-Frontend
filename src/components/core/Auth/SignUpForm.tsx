import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSignUpData } from '../../../redux/slices/authSlice';
import { sendOtp } from '../../../services/operations/authServices';
import { FaArrowRight } from 'react-icons/fa';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Student',
  });

  const { firstName, lastName, email, password, confirmPassword, role } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    dispatch(setSignUpData(formData));
    sendOtp(email, dispatch, navigate);
  };

  return (
    <form className="flex w-full flex-col gap-y-4" onSubmit={handleOnSubmit}>
      <div className="flex gap-x-1 bg-base-300 p-1 my-1 rounded-full max-w-max">
        <label
          className={`py-2 px-5 rounded-full cursor-pointer transition-all duration-200 ${
            role === 'Student' ? 'bg-primary text-white' : 'bg-transparent text-base-content hover:bg-base-200'
          }`}
        >
          <input type="radio" name="role" value="Student" checked={role === 'Student'} onChange={handleOnChange} className="appearance-none" />
          Student
        </label>
        <label
          className={`py-2 px-5 rounded-full cursor-pointer transition-all duration-200 ${
            role === 'Instructor' ? 'bg-primary text-white' : 'bg-transparent text-base-content hover:bg-base-200'
          }`}
        >
          <input type="radio" name="role" value="Instructor" checked={role === 'Instructor'} onChange={handleOnChange} className="appearance-none" />
          Instructor
        </label>
      </div>
      <div className="flex gap-x-4">
        <label className="w-full">
          <p className="mb-2 text-sm text-base-content">First Name <sup className="text-error">*</sup></p>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={firstName}
            onChange={handleOnChange}
            required
            className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
        <label className="w-full">
          <p className="mb-2 text-sm text-base-content">Last Name <sup className="text-error">*</sup></p>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={lastName}
            onChange={handleOnChange}
            required
            className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
      </div>
      <label className="w-full">
        <p className="mb-2 text-sm text-base-content">Email Address <sup className="text-error">*</sup></p>
        <input
          type="email"
          placeholder="Enter Email Address"
          name="email"
          value={email}
          onChange={handleOnChange}
          required
          className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </label>
      <div className="flex gap-x-4">
        <label className="relative w-full">
          <p className="mb-2 text-sm text-base-content">Create Password <sup className="text-error">*</sup></p>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={handleOnChange}
            required
            className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
          </span>
        </label>
        <label className="relative w-full">
          <p className="mb-2 text-sm text-base-content">Confirm Password <sup className="text-error">*</sup></p>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
            required
            className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-gradient-to-r from-primary to-secondary py-3 px-4 font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
      >
        <span>Create Account</span>
        <FaArrowRight className="text-sm" />
      </button>
    </form>
  );
};

export default SignUpForm;
