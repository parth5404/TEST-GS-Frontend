import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../../common/IconBtn';
import { updateProfile } from '../../../../services/operations/settingsServices';

const EditProfile = () => {
  const genders = ['Male', 'Female', 'Non-Binary', 'Prefer not to say', 'Other'];
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitProfileForm = async (formData) => {
    await updateProfile(token, formData, setLoading, dispatch, navigate);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitProfileForm)}>
      <div className="bg-base-300 bg-opacity-30 backdrop-blur-md rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label>
            <p className="mb-2 text-sm text-base-content">First Name <span className="text-error">*</span></p>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              defaultValue={user?.firstName}
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && <p className="mt-1 text-xs text-error">Please enter your first name</p>}
          </label>
          <label>
            <p className="mb-2 text-sm text-base-content">Last Name <span className="text-error">*</span></p>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              defaultValue={user?.lastName}
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && <p className="mt-1 text-xs text-error">Please enter your last name</p>}
          </label>
          <label>
            <p className="mb-2 text-sm text-base-content">Date of Birth <span className="text-error">*</span></p>
            <input
              type="date"
              name="dob"
              max={new Date().toISOString().split('T')[0]}
              defaultValue={user?.profile?.dob?.split('T')[0]}
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              {...register('dob', {
                required: { value: true, message: 'Please enter your Date of Birth' },
                max: { value: new Date().toISOString().split('T')[0], message: 'Date of Birth cannot be in the future' },
              })}
            />
            {errors.dob && <p className="mt-1 text-xs text-error">{errors.dob.message}</p>}
          </label>
          <label>
            <p className="mb-2 text-sm text-base-content">Gender <span className="text-error">*</span></p>
            <select
              name="gender"
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue={user?.profile?.gender}
              {...register('gender', { required: true })}
            >
              {genders.map((gender, ind) => <option key={ind} value={gender}>{gender}</option>)}
            </select>
          </label>
          <label>
            <p className="mb-2 text-sm text-base-content">Contact Number <span className="text-error">*</span></p>
            <input
              type="tel"
              name="contactNumber"
              placeholder="Enter contact number"
              defaultValue={user?.profile?.contactNumber}
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              {...register('contactNumber', {
                required: { value: true, message: 'Please enter your Contact Number' },
                maxLength: { value: 12, message: 'Invalid Contact Number' },
                minLength: { value: 10, message: 'Invalid Contact Number' },
              })}
            />
            {errors.contactNumber && <p className="mt-1 text-xs text-error">{errors.contactNumber.message}</p>}
          </label>
          <label>
            <p className="mb-2 text-sm text-base-content">About <span className="text-error">*</span></p>
            <input
              type="text"
              name="about"
              placeholder="Enter Bio Details"
              defaultValue={user?.profile?.about}
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              {...register('about', { required: true })}
            />
            {errors.about && <p className="mt-1 text-xs text-error">Please enter your Bio Details</p>}
          </label>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => navigate('/dashboard/my-profile')} className={`rounded-md bg-base-200 py-2 px-5 font-semibold text-white ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
            Cancel
          </button>
          <IconBtn type="submit" disabled={loading} text={loading ? 'Saving...' : 'Save'} />
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
