import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../common/Spinner';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Template = ({ heading, desc1, desc2, image, formType }) => {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="bg-base-100 min-h-screen flex items-center justify-center p-4">
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">{heading}</h1>
            <p className="text-lg text-base-content">
              {desc1} <span className="font-bold text-primary">{desc2}</span>
            </p>
            <div className="mt-8">
              {formType === 'login' ? <LoginForm /> : <SignUpForm />}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-lg blur-2xl"></div>
            <img src={image} alt="Students" className="relative z-10 rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Template;
