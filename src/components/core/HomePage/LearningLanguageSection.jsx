import React from 'react';
import HighlightedText from './HighlightedText';
import CTAButton from './CTAButton';
import Know_your_progress from '../../../assets/Images/Know_your_progress.svg';
import Compare_with_others from '../../../assets/Images/Compare_with_others.svg';
import Plan_your_lessons from '../../../assets/Images/Plan_your_lessons.svg';

const LearningLanguageSection = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <div className="text-4xl font-semibold text-center text-white">
        Your Swiss Knife for
        <HighlightedText text="learning any language" />
      </div>
      <div className="mt-4 lg:w-[75%] mx-auto text-center text-base-content text-base font-medium">
        Using spin making learning multiple languages easy. With 20+ languages realistic voice-over, progress tracking, custom schedule and more.
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-12 gap-8 lg:gap-0">
        <div className="relative transform -rotate-12 hover:rotate-0 transition-transform duration-300">
          <div className="absolute inset-0 bg-primary bg-opacity-10 backdrop-blur-md rounded-lg"></div>
          <img src={Know_your_progress} alt="Know your progress" className="relative z-10 p-4" />
        </div>
        <div className="relative z-10 hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-secondary bg-opacity-10 backdrop-blur-md rounded-lg"></div>
          <img src={Compare_with_others} alt="Compare with others" className="relative z-10 p-4" />
        </div>
        <div className="relative transform rotate-12 hover:rotate-0 transition-transform duration-300">
          <div className="absolute inset-0 bg-accent bg-opacity-10 backdrop-blur-md rounded-lg"></div>
          <img src={Plan_your_lessons} alt="Plan your lessons" className="relative z-10 p-4" />
        </div>
      </div>

      <div className="mt-12">
        <CTAButton active={true} linkto={'/signup'}>
          Learn More
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
