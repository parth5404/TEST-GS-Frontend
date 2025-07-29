import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaLaptopCode, FaUsers } from 'react-icons/fa';
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

  const stats = [
    { icon: <FaUsers className="text-4xl" />, number: "10K+", label: "Students" },
    { icon: <FaLaptopCode className="text-4xl" />, number: "100+", label: "Courses" },
    { icon: <FaGraduationCap className="text-4xl" />, number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col font-sans min-h-screen w-screen text-white">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-x"></div>
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Master The Future of
            <HighlightedText text=" Engineering" />
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join our cutting-edge platform to learn from industry experts and build 
            the skills that shape tomorrow's technology.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <CTAButton active={true} linkto="/signup">
              <span className="flex items-center gap-2">
                Start Learning Free <FaArrowRight />
              </span>
            </CTAButton>
            <CTAButton active={false} linkto="/login">
             Continue Learning
            </CTAButton>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center gap-4">
                  {stat.icon}
                  <h3 className="text-4xl font-bold">{stat.number}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <HighlightedText text="Our Platform?" />
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine cutting-edge technology with expert instruction to deliver
              an unmatched learning experience.
            </p>
          </div>

          {/* Code Blocks with enhanced styling */}
          <CodeBlocks
            flexDir="lg:flex-row"
            heading={
              <div className="text-4xl font-bold">
                Learn from
                <HighlightedText text=" Industry Experts" />
              </div>
            }
            subHeading="Get hands-on experience with real-world projects and cutting-edge technologies."
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
            codeColor="text-blue-400"
            codeText={`class Engineer {
  constructor() {
    this.skills = [];
    this.projects = [];
  }

  learnNewSkill(skill) {
    this.skills.push(skill);
    console.log("Learned: " + skill);
  }

  buildProject(project) {
    this.projects.push(project);
    return "Project completed!";
  }
}`}
          />
        </div>
      </div>

      {/* Learning Path Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our <HighlightedText text="Students Say" />
          </h2>
          {loading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            <ReviewsSlider reviews={reviews} />
          )}
        </div>
      </div>

      {/* Instructor Section with enhanced styling */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <InstructorSection />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;