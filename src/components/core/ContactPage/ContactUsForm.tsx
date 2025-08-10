import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import countryCodes from '../../../data/countryCodes.json';
import { contactUs } from '../../../services/operations/contactServices';

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (contactData) => {
    await contactUs(contactData, setLoading, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
      <div className="flex flex-col md:flex-row gap-5">
        <label className="w-full">
          <p className="mb-2 text-sm text-base-content">First Name <sup className="text-error">*</sup></p>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && <p className="mt-1 text-xs text-error">Please enter your first name</p>}
        </label>
        <label className="w-full">
          <p className="mb-2 text-sm text-base-content">Last Name <sup className="text-error">*</sup></p>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
            {...register('lastName', { required: true })}
          />
          {errors.lastName && <p className="mt-1 text-xs text-error">Please enter your last name</p>}
        </label>
      </div>

      <div>
        <label>
          <p className="mb-2 text-sm text-base-content">Email Address <sup className="text-error">*</sup></p>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
            {...register('email', { required: true })}
          />
          {errors.email && <p className="mt-1 text-xs text-error">Please enter your email address</p>}
        </label>
      </div>

      <div>
        <label htmlFor="phoneNo">
          <p className="mb-2 text-sm text-base-content">Phone Number <sup className="text-error">*</sup></p>
        </label>
        <div className="flex items-center gap-x-4">
          <div className="w-[85px]">
            <select
              name="countryCode"
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue={'+91'}
              {...register('countryCode', { required: true })}
            >
              {countryCodes.map((code, index) => (
                <option value={code.code} key={index}>
                  {code.code} - {code.country}
                </option>
              ))}
            </select>
          </div>
          <div className="w-[calc(100%-90px)]">
            <input
              type="number"
              name="phoneNo"
              id="phoneNo"
              placeholder="12345 67890"
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              {...register('phoneNo', {
                required: { value: true, message: 'Please enter your Phone Number' },
                minLength: { value: 10, message: 'Invalid Phone Number' },
                maxLength: { value: 12, message: 'Invalid Phone Number' },
              })}
            />
            {errors.phoneNo && <p className="mt-1 text-xs text-error">{errors.phoneNo.message}</p>}
          </div>
        </div>
      </div>

      <div>
        <label>
          <p className="mb-2 text-sm text-base-content">Message <sup className="text-error">*</sup></p>
          <textarea
            name="message"
            cols={30}
            rows={5}
            placeholder="Enter your message here"
            className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
            {...register('message', { required: true })}
          />
          {errors.message && <p className="mt-1 text-xs text-error">Please enter your message</p>}
        </label>
      </div>

      <button
        disabled={loading}
        type="submit"
        className="mt-4 w-full text-center text-lg px-6 py-3 rounded-md font-bold bg-gradient-to-r from-primary to-secondary text-white shadow-lg disabled:bg-base-300 disabled:cursor-not-allowed transition-all duration-200 hover:scale-95 hover:shadow-none"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;
