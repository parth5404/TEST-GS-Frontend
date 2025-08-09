import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import HighlightedText from '../components/core/HomePage/HighlightedText';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import CTAButton from '../components/core/HomePage/CTAButton';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Footer from '../components/common/Footer';
import ReviewsSlider from '../components/common/ReviewsSlider';
import Spinner from '../components/common/Spinner';
import { getAllReviews } from '../services/operations/otherServices';

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllReviews = async () => {
      setLoading(true);
      const response = await getAllReviews();
      if (response) {
        setReviews(response);
      }
      setLoading(false);
    };
    fetchAllReviews();
  }, []);

  return (
    <div className="bg-base-100 text-base-content font-inter">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent z-10"></div>
        <video
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
          muted
          loop
          autoPlay
          src="https://videos.pexels.com/video-files/4200440/4200440-uhd_3840_2160_25fps.mp4"
        />
        <div className="relative z-20 flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Welcome to <HighlightedText text="GS Academia" />
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-base-content">
            Empower Your Future with Modern Skills. Learn at your own pace from anywhere in the world.
          </p>
          <div className="flex gap-6 mt-4">
            <CTAButton active={true} linkto="/signup">
              Start Learning
            </CTAButton>
            <CTAButton active={false} linkto="/login">
              Become an Instructor
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Code Sections */}
      <div className="py-20 px-4">
        <div className="max-w-maxContent mx-auto">
          <CodeBlocks
            flexDir="lg:flex-row"
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighlightedText text="Coding Potential" />
              </div>
            }
            subHeading="Our courses are designed by industry experts to give you the practical skills you need to succeed."
            ctaBtn1={{ btnText: 'Try it Yourself', linkto: '/signup', active: true }}
            ctaBtn2={{ btnText: 'Learn More', linkto: '/login', active: false }}
            codeText={`<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to the future of coding.</p>
</body>
</html>`}
            codeColor="text-primary"
          />
          <div className="mt-20">
            <CodeBlocks
              flexDir="lg:flex-row-reverse"
              heading={
                <div className="text-4xl font-semibold">
                  Start <HighlightedText text="Learning in Seconds" />
                </div>
              }
              subHeading="Our interactive platform makes it easy to get started with hands-on projects from day one."
              ctaBtn1={{ btnText: 'Continue Lesson', linkto: '/signup', active: true }}
              ctaBtn2={{ btnText: 'Learn More', linkto: '/login', active: false }}
              codeText={`import React from 'react';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;`}
              codeColor="text-secondary"
            />
          </div>
        </div>
      </div>

      <ExploreMore />

      {/* Timeline and Learning Sections */}
      <div className="bg-base-200 py-20 px-4">
        <div className="max-w-maxContent mx-auto">
          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Instructor and Reviews Section */}
      <div className="py-20 px-4">
        <div className="max-w-maxContent mx-auto">
          <InstructorSection />
          <div className="mt-20">
            <h2 className="text-center text-4xl font-semibold mb-10">
              Reviews from Other Learners
            </h2>
            {loading ? (
              <div className="min-h-[150px] grid place-items-center">
                <Spinner />
              </div>
            ) : (
              <ReviewsSlider reviews={reviews} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
