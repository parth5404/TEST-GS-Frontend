import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../../common/IconBtn';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { changePassword } from '../../../../services/operations/settingsServices';

export const UpdatePassword = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitChangePassForm = async (passwordData) => {
    await changePassword(token, passwordData, setLoading, dispatch, navigate);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitChangePassForm)}>
      <div className="bg-base-300 bg-opacity-30 backdrop-blur-md rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-6">Password</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="relative">
            <p className="mb-2 text-sm text-base-content">Current Password <span className="text-error">*</span></p>
            <input
              name="oldPassword"
              placeholder="Enter Current Password"
              type={showOldPassword ? 'text' : 'password'}
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              {...register('oldPassword', {
                required: { value: true, message: 'Please enter your Current Password' },
                minLength: { value: 6, message: 'Invalid password' },
              })}
            />
            <span
              onClick={() => setShowOldPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer mt-3"
            >
              {showOldPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
            {errors.oldPassword && <p className="mt-1 text-xs text-error">{errors.oldPassword?.message}</p>}
          </label>
          <label className="relative">
            <p className="mb-2 text-sm text-base-content">New Password <span className="text-error">*</span></p>
            <input
              name="newPassword"
              placeholder="Enter New Password"
              type={showNewPassword ? 'text' : 'password'}
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              {...register('newPassword', {
                required: { value: true, message: 'Please enter your New Password' },
                minLength: { value: 6, message: 'Password length must be at least 6' },
              })}
            />
            <span
              onClick={() => setShowNewPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer mt-3"
            >
              {showNewPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
            {errors.newPassword && <p className="mt-1 text-xs text-error">{errors.newPassword?.message}</p>}
          </label>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={() => navigate('/dashboard/my-profile')}
            className={`rounded-md bg-base-200 py-2 px-5 font-semibold text-white ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            Cancel
          </button>
          <IconBtn type="submit" disabled={loading} text={loading ? 'Updating...' : 'Update'} />
        </div>
      </div>
    </form>
  );
};
