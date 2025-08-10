import React, { useEffect, useState } from 'react';
import ContactDetails from '../components/core/ContactPage/ContactDetails.tsx';
import ContactUsForm from '../components/core/ContactPage/ContactUsForm.tsx';
import Footer from '../components/common/Footer.tsx';
import Spinner from '../components/common/Spinner.tsx';
import ReviewsSlider from '../components/common/ReviewsSlider.tsx';
import { getAllReviews } from '../services/operations/otherServices';

const Contact: React.FC = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllReviews = async () => {
      setLoading(true);
      const response = await getAllReviews();
      if (response) setReviews(response);
      setLoading(false);
    };
    fetchAllReviews();
  }, []);

  return (
    <div className="bg-base-100 text-base-content font-inter">
      {/* Hero Section */}
      <div className="bg-base-200 py-20">
        <div className="w-11/12 mx-auto max-w-maxContent text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            We'd love to hear from you. Please fill out this form, and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form and Details Section */}
      <div className="py-20">
        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col lg:flex-row justify-between gap-12">
          <div className="lg:w-[40%] bg-base-300 bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg">
            <ContactDetails />
          </div>
          <div className="lg:w-[55%] bg-base-300 bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Got an Idea? We've Got the Skills. Let's Team Up.</h2>
            <p className="mb-8">Tell us more about yourself and what you've got in mind.</p>
            <ContactUsForm />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-20 bg-base-200">
        <div className="w-11/12 mx-auto max-w-maxContent">
          <h2 className="text-4xl font-bold text-white text-center mb-10">Reviews from Other Learners</h2>
          {loading ? <Spinner /> : <ReviewsSlider reviews={reviews} />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
