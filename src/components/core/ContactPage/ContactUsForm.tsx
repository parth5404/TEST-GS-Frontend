import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import countryCodes from '../../../data/countryCodes.json';
import { contactUs } from '../../../services/operations/contactServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ReactFlagsSelect from 'react-flags-select';

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, reset, handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = async (contactData) => {
    await contactUs(contactData, setLoading, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-base-content mb-2">First Name</label>
          <Input id="firstName" placeholder="John" {...register('firstName', { required: true })} />
          {errors.firstName && <p className="mt-1 text-xs text-destructive">First name is required</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-base-content mb-2">Last Name</label>
          <Input id="lastName" placeholder="Doe" {...register('lastName', { required: true })} />
          {errors.lastName && <p className="mt-1 text-xs text-destructive">Last name is required</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-base-content mb-2">Email</label>
        <Input id="email" type="email" placeholder="john.doe@example.com" {...register('email', { required: true })} />
        {errors.email && <p className="mt-1 text-xs text-destructive">Email is required</p>}
      </div>
      <div>
        <label htmlFor="phoneNo" className="block text-sm font-medium text-base-content mb-2">Phone Number</label>
        <div className="flex gap-4 items-center">
          <Controller
            name="countryCode"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <ReactFlagsSelect
                {...field}
                selected={field.value}
                onSelect={field.onChange}
                searchable
                className="w-1/2 rounded-lg bg-black bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              />
            )}
          />
          <Input id="phoneNo" type="tel" placeholder="123-456-7890" {...register('phoneNo', { required: true })} />
        </div>
        {errors.phoneNo && <p className="mt-1 text-xs text-destructive">Phone number is required</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-base-content mb-2">Message</label>
        <Textarea id="message" placeholder="Your message..." {...register('message', { required: true })} />
        {errors.message && <p className="mt-1 text-xs text-destructive">Message is required</p>}
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactUsForm;
