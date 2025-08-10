import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../services/operations/authServices';
import { useDispatch } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    login(email, password, dispatch, navigate);
  };

  return (
    <form className="flex w-full flex-col gap-y-4" onSubmit={handleOnSubmit}>
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
      <label className="w-full relative">
        <p className="mb-2 text-sm text-base-content">Password <sup className="text-error">*</sup></p>
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
        <Link to="/forgot-password">
          <p className="ml-auto mt-2 max-w-max text-primary text-xs">Forgot Password</p>
        </Link>
      </label>
      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-gradient-to-r from-primary to-secondary py-3 px-4 font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
      >
        <span>Sign In</span>
        <FaArrowRight className="text-sm" />
      </button>
    </form>
  );
};

export default LoginForm;
