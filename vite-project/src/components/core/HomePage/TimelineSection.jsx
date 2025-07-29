import React from 'react';
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import TimelineImage from '../../../assets/Images/pexels-photo-5212655.webp';

const timeline = [
  {
    logo: Logo1,
    heading: 'Leadership',
    description: 'Fully committed to the success of our students.'
  },
  {
    logo: Logo2,
    heading: 'Responsibility',
    description: 'Students will always be our top priority.'
  },
  {
    logo: Logo3,
    heading: 'Flexibility',
    description: 'The ability to adapt is a key skill.'
  },
  {
    logo: Logo4,
    heading: 'Problem Solving',
    description: 'Engineer your way to a solution.'
  },
];

const TimelineSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 items-center mb-20">
      <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
        {timeline.map((element, index) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex flex-row gap-6">
                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-200 shadow-md">
                  <img src={element.logo} alt={element.heading} />
                </div>
                <div className="bg-white bg-opacity-75 p-4 rounded-md">
                  <h2 className="font-semibold text-lg text-gray-800">{element.heading}</h2>
                  <p className="text-gray-600">{element.description}</p>
                </div>
              </div>
              {index !== timeline.length - 1 && (
                <div className="hidden lg:block w-[26px] h-14 border-r border-gray-300 border-dotted"></div>
              )}
            </div>
          );
        })}
      </div>
      {/* right section */}
      <div className="relative w-fit h-fit transition-all duration-200 shadow-lg">
        <img
          className="h-[400px] lg:h-fit object-cover rounded-md"
          src={TimelineImage}
          alt="Timeline"
        />
        <div className="absolute bg-blue-600 py-5 lg:py-10 flex flex-col lg:flex-row text-white justify-center lg:left-[50%] lg:translate-x-[-50%] top-0 lg:top-full lg:translate-y-[-50%] uppercase gap-4 lg:gap-0 rounded-md">
          <div className="flex gap-5 items-center lg:border-r border-blue-400 px-7 lg:px-14">
            <div className="text-3xl font-bold w-[75px]">10</div>
            <div className="text-blue-300 text-sm w-[75px]">Years Experience</div>
          </div>
          <div className="flex gap-5 items-center px-7 lg:px-14">
            <div className="text-3xl font-bold w-[75px]">250</div>
            <div className="text-blue-300 text-sm w-[75px]">Types of Courses</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
