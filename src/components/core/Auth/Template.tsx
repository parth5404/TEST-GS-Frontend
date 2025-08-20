import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../common/Spinner';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Template = ({ heading, desc1, desc2, image, formType }) => {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-20">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">{heading}</h1>
            <p className="text-lg text-gray-300">
              {desc1} <span className="font-bold text-blue-400">{desc2}</span>
            </p>
            <div className="mt-8">
              {formType === 'login' ? <LoginForm /> : <SignUpForm />}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 rounded-lg blur-2xl"></div>
            <img src={image} alt="Students" className="relative z-10 rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Template;
