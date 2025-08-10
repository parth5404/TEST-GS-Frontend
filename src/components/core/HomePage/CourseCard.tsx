import React from 'react';
import { HiUsers } from 'react-icons/hi';
import { ImTree } from 'react-icons/im';

const CourseCard = ({ course, currentCard, setCurrentCard }) => {
  return (
    <div
      onClick={() => setCurrentCard(course.heading)}
      className={`w-[360px] lg:w-full h-[300px] cursor-pointer rounded-xl transition-all duration-300
      ${
        course.heading === currentCard
          ? 'bg-primary text-white shadow-[12px_12px_0_0] shadow-secondary'
          : 'bg-base-300 text-base-content'
      }
      hover:scale-105 hover:bg-primary hover:text-white hover:shadow-lg`}
    >
      <div className="flex flex-col gap-3 h-[80%] p-6 border-b-2 border-dashed border-base-content">
        <h2 className="font-semibold text-xl">{course.heading}</h2>
        <p>{course.description}</p>
      </div>
      <div className="flex justify-between px-6 py-3 font-medium">
        <div className="flex items-center gap-2 text-base">
          <HiUsers />
          {course.level}
        </div>
        <div className="flex items-center gap-2 text-base">
          <ImTree />
          {course.lessionNumber} Lessons
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
