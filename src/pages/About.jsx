import React, { useEffect, useState } from 'react';
import HighlightedText from '../components/core/HomePage/HighlightedText';
import Footer from '../components/common/Footer';
import FoundingStory from '../assets/Images/FoundingStory.png';
import BannerImage1 from '../assets/Images/aboutus1.webp';
import BannerImage2 from '../assets/Images/aboutus2.webp';
import BannerImage3 from '../assets/Images/aboutus3.webp';
import GSAcademiaStats from '../components/core/AboutPage.js/GSAcademiaStats.jsx';
import LearningGrid from '../components/core/AboutPage.js/LearningGrid';
import ContactUsForm from '../components/core/ContactPage/ContactUsForm';
import { getAllReviews } from '../services/operations/otherServices';
import ReviewsSlider from '../components/common/ReviewsSlider';
import Spinner from '../components/common/Spinner';

const About = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="relative bg-base-200 py-20">
        <div className="w-11/12 mx-auto max-w-maxContent text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Driving Innovation in Online Education for a <HighlightedText text={'Brighter Future'} />
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg">
            GS Academia is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
          </p>
          <div className="relative mt-12 w-full max-w-5xl mx-auto h-auto">
            <div className="grid grid-cols-3 gap-4">
              <img src={BannerImage1} alt="Students learning" className="rounded-lg shadow-lg" />
              <img src={BannerImage2} alt="Online class" className="rounded-lg shadow-lg mt-8" />
              <img src={BannerImage3} alt="Happy student" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Founding Story Section */}
      <div className="py-20">
        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">Our Founding Story</h2>
            <p className="mb-4">
              Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
            </p>
            <p>
              As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
            </p>
          </div>
          <div className="lg:w-1/2 relative p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-lg blur-2xl"></div>
            <img src={FoundingStory} alt="Founding story" className="relative z-10 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="bg-base-200 py-20">
        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
            <p>
              With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
            </p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p>
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <GSAcademiaStats />
      </div>

      {/* Learning Grid Section */}
      <div className="bg-base-200 py-20">
        <div className="w-11/12 mx-auto max-w-maxContent">
          <LearningGrid />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20">
        <div className="w-11/12 mx-auto max-w-maxContent">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Get in Touch</h2>
          <p className="text-center mb-10">We'd love to hear from you. Please fill out this form.</p>
          <ContactUsForm />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-20">
        <div className="w-11/12 mx-auto max-w-maxContent">
          <h2 className="text-4xl font-bold text-white text-center mb-10">Reviews from Other Learners</h2>
          {loading ? <Spinner /> : <ReviewsSlider reviews={reviews} />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
