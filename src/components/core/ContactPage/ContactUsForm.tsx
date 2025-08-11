import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import countryCodes from "../../../data/countryCodes.json";
import { contactUs } from "../../../services/operations/contactServices";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReactFlagsSelect from "react-flags-select";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (contactData) => {
    await contactUs(contactData, setLoading, reset);
  };

  // Helper: Label with required asterisk
  const Label = ({ htmlFor, children, required }) => (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-base-content mb-2"
    >
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName" required>
            First Name
          </Label>
          <Input
            id="firstName"
            placeholder="John"
            className={`${
              watch("firstName") ? "text-white" : "text-gray-400"
            } placeholder-gray-400`}
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-destructive">
              First name is required
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="lastName" required>
            Last Name
          </Label>
          <Input
            id="lastName"
            placeholder="Doe"
            className={`${
              watch("lastName") ? "text-white" : "text-gray-400"
            } placeholder-gray-400`}
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-destructive">
              Last name is required
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          className={`${
            watch("email") ? "text-white" : "text-gray-400"
          } placeholder-gray-400`}
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-destructive">Email is required</p>
        )}
      </div>

      <div>
        <Label htmlFor="phoneNo" required>
          Phone Number
        </Label>
        <div className="flex gap-4 items-center">
          <Controller
            name="countryCode"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (         
              <ReactFlagsSelect
                {...field}
                fullWidth={true}
                selected={field.value}
                onSelect={field.onChange}
                searchable
                className="rounded-lg bg-black bg-opacity-50 backdrop-blur-md p-3 
                   text-black placeholder-gray-400 focus:outline-none 
                   focus:ring-2 focus:ring-primary"
              />
            )}
          />
          <Input
            id="phoneNo"
            type="tel"
            placeholder="123-456-7890"
            className={`${
              watch("phoneNo") ? "text-white" : "text-gray-400"
            } placeholder-gray-400`}
            {...register("phoneNo", { required: true })}
          />
        </div>
        {(errors.countryCode || errors.phoneNo) && (
          <p className="mt-1 text-xs text-destructive">
            Phone number and country code are required
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" required>
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Your message..."
          className={`${
            watch("message") ? "text-white" : "text-gray-400"
          } placeholder-gray-400`}
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-destructive">Message is required</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-black font-bold"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactUsForm;
