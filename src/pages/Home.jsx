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
import Banner from '../assets/Images/4200440-uhd_3840_2160_25fps.mp4';
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
    <div className="bg-gray-100 flex flex-col font-sans min-h-screen w-screen text-gray-800">
      {/* Section 1 */}
      <div className="bg-white py-12">
        <div className="relative mx-auto flex flex-col items-center justify-between w-11/12 max-w-6xl text-gray-800 gap-8">
          <div className="rounded-full bg-blue-600 text-white mt-16 p-1 mx-auto w-fit drop-shadow-md transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <Link to="/signup">
              <div className="flex flex-row items-center gap-2 font-bold rounded-full px-10 py-2 transition-all duration-200 group-hover:bg-blue-700">
                Start Learning
                <FaArrowRight />
              </div>
            </Link>
          </div>

          <div className="text-4xl text-center font-semibold">
            Empower Your Future with
            <HighlightedText text="Engineering Skills" />
          </div>

          <div className="mt-3 w-11/12 text-center text-lg italic">
            <p>
              With our online courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </p>
          </div>

          <div className="mt-5 flex flex-row gap-4">
            <CTAButton active={true} linkto="/signup">
              Learn More
            </CTAButton>
             <CTAButton active={true} linkto={'/signup'} >
              Become an Instructor
            </CTAButton> 
          </div>

          <div className="mx-3 my-7 transition-all duration-200 shadow-lg">
            <video className="drop-shadow-lg rounded-md" muted loop autoPlay src={Banner} />
          </div>

          {/* Code Section 1 */}
          <div>
            <CodeBlocks
              flexDir="lg:flex-row"
              heading={
                <div className="text-4xl font-semibold text-gray-800">
                  Unlock Your
                  <HighlightedText text="engineering potential" />
                  with our online courses.
                </div>
              }
              subHeading="Our courses are designed and taught by industry experts who have years of experience in various engineering fields and are passionate about sharing their knowledge with you."
              ctaBtn1={{
                btnText: "Try it Yourself",
                linkto: '/signup',
                active: true
              }}
              ctaBtn2={{
                btnText: "Learn More",
                linkto: '/login',
                active: false
              }}
              codeText={`<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<title>Engineering Course</title>\n\t</head>\n\t<body>\n\t\t<h1>Welcome to Our Courses</h1>\n\t\t<nav>\n\t\t\t<a href="/mechanical">Mechanical Engineering</a>\n\t\t\t<a href="/civil">Civil Engineering</a>\n\t\t\t<a href="/electrical">Electrical Engineering</a>\n\t\t\t<a href="/coding">Coding Courses</a>\n\t\t</nav>\n\t</body>\n</html>`}
              codeColor='text-gray-700'
              noOfLines={15}
              codeBlockId="codeblock1"
            />
          </div>

          {/* Code Section 2 */}
          <div>
            <CodeBlocks
              flexDir="lg:flex-row-reverse"
              heading={
                <div className="text-4xl w-full md:w-[60%] font-semibold text-gray-800">
                  Start
                  <HighlightedText text="learning in seconds" />
                </div>
              }
              subHeading="Go ahead, give it a try. Our hands-on learning environment means you'll be engaging with real projects from your very first lesson."
              ctaBtn1={{
                btnText: "Continue Lesson",
                linkto: '/signup',
                active: true
              }}
              ctaBtn2={{
                btnText: "Learn More",
                linkto: '/login',
                active: false
              }}
              codeText={`import CTAButton from './CTAButton';\nimport { FaArrowRight } from 'react-icons/fa';\n\nconst Home = () => {\n\treturn (\n\t\t<div>Home</div>\n\t)\n}\n\nexport default Home`}
              codeColor='text-gray-700'
              noOfLines={13}
              codeBlockId="codeblock2"
            />
          </div>

          {/* Explore More */}
          <ExploreMore />
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-gray-50 text-gray-800">
        <div className="homepage_bg h-[150px] md:h-[320px]">
          <div className="w-11/12 pt-[50px] md:pt-[200px] max-w-6xl mx-auto flex justify-center">
            <div className="flex flex-row gap-7">
              <CTAButton active={true} linkto="/signup">
                <div className="flex flex-row items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto="/login">
                <div className="text-gray-600">Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-6xl w-11/12 mt-5 md:mt-10 lg:mt-16 mx-auto gap-8 items-center justify-between">
          <div className="flex flex-row mb-10 justify-between gap-10">
            <div className="text-4xl font-semibold w-[45%] text-white">
              Get the skills you need for a
              <HighlightedText text="job that is in demand." />
            </div>
            <div className="flex flex-col gap-10 w-[40%] items-start text-white">
              <p>
                The modern engineering landscape dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
              </p>
              <CTAButton active={true} linkto="/signup">
                Learn More
              </CTAButton>
            </div>
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-gray-800 text-white">
        <div className="w-11/12 mt-20 flex flex-col mx-auto max-w-6xl items-center justify-between gap-8">
          {/* Instructor section */}
          <InstructorSection />

          {/* Review section */}
          <div>
            <h2 className="text-center text-3xl md:text-4xl font-semibold mt-8">
              Reviews from other learners
            </h2>

            {/* Review slider */}
            <div>
              {loading ? (
                <div className="min-h-[150px] grid place-items-center">
                  <Spinner />
                </div>
              ) : (
                <div>
                  <ReviewsSlider reviews={reviews} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <Footer />
    </div>
  );
};

export default Home;
