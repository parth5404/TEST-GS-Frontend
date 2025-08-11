import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import HighlightedText from './HighlightedText';
import CTAButton from './CTAButton';
import Instructor from '../../../assets/Images/Instructor.png';

const InstructorSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 items-center my-20">
      <div className="lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-lg blur-2xl"></div>
        <img src={Instructor} alt="Instructor" className="relative z-10 rounded-lg shadow-lg" />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-10">
        <div className="text-4xl font-semibold text-white">
          Become an <HighlightedText text="Instructor" />
        </div>
        <p className="font-medium text-base text-base-content w-[90%]">
          Instructors from around the world teach millions of students on GS Academia. We provide the tools and skills to teach what you love.
        </p>
        <div className="w-fit">
          <CTAButton active={true} linkto={'/signup'}>
            <div className="flex items-center gap-2">
              Start Teaching Today
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
