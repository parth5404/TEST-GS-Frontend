import React from 'react';
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import TimelineImage from '../../../assets/Images/TimelineImage.png';

const timeline = [
  { logo: Logo1, heading: 'Leadership', description: 'Fully committed to the success of our students.' },
  { logo: Logo2, heading: 'Responsibility', description: 'Students will always be our top priority.' },
  { logo: Logo3, heading: 'Flexibility', description: 'The ability to adapt is a key skill.' },
  { logo: Logo4, heading: 'Problem Solving', description: 'Engineer your way to a solution.' },
];

const TimelineSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 items-center my-20">
      <div className="lg:w-[45%] relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-base-300"></div>
        {timeline.map((element, index) => (
          <div key={index} className="flex items-center gap-6 my-8 relative">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-base-300 shadow-lg absolute left-1/2 -translate-x-1/2">
              <img src={element.logo} alt={element.heading} />
            </div>
            <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-right' : 'order-2 text-left'}`}>
              <div className="bg-base-300 bg-opacity-30 backdrop-blur-md p-4 rounded-lg shadow-lg">
                <h2 className="font-semibold text-lg text-white">{element.heading}</h2>
                <p className="text-base-content">{element.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full lg:w-[55%]">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          src={TimelineImage}
          alt="Timeline"
        />
        <div className="absolute bg-primary bg-opacity-80 backdrop-blur-md p-6 lg:p-10 flex flex-col lg:flex-row text-white justify-center items-center gap-6 rounded-lg lg:left-1/2 lg:-translate-x-1/2 lg:-bottom-10 shadow-lg">
          <div className="flex items-center gap-5 lg:border-r border-secondary px-6">
            <p className="text-3xl font-bold">10</p>
            <p className="text-secondary text-sm">Years of Experience</p>
          </div>
          <div className="flex items-center gap-5 px-6">
            <p className="text-3xl font-bold">250+</p>
            <p className="text-secondary text-sm">Types of Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
