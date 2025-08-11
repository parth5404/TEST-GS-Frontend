import React, { useState } from 'react';
import HighlightedText from './HighlightedText';
import CourseCard from './CourseCard';
import homePageExplore from '../../../data/homePageExplore';

const ExploreMore = () => {
  const courseTypes = ['Free', 'New to Engineering', 'Most Popular', 'Skills Paths', 'Career Paths'];
  const [currentTab, setCurrentTab] = useState(0);
  const [currentCourses, setCurrentCourses] = useState(homePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(homePageExplore[0].courses[0].heading);

  const setMyCards = (value) => {
    setCurrentTab(courseTypes.indexOf(value));
    const result = homePageExplore.filter((course) => course.tag === value);
    console.log(homePageExplore,result)
    setCurrentCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="flex flex-col items-center my-20">
      <div className="text-4xl text-center font-semibold text-white">
        Unlock the <HighlightedText text="Power of Education" />
      </div>
      <p className="text-lg mt-3 text-center text-base-content font-semibold">
        Learn to Build Anything You Can Imagine
      </p>

      <div className="flex gap-4 mx-auto w-max rounded-full mt-8 bg-base-300 text-base-content p-2 font-medium shadow-lg">
        {courseTypes.map((tab, ind) => (
          <div
            key={ind}
            onClick={() => setMyCards(tab)}
            className={`text-base cursor-pointer rounded-full px-6 py-2 transition-all duration-200 ${
              currentTab === ind ? 'bg-primary text-white font-medium' : 'hover:bg-base-200'
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {currentCourses.map((course, ind) => (
          <CourseCard
            key={ind}
            course={course}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
