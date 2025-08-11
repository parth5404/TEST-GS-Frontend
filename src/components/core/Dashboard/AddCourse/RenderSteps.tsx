import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa';
import CourseInformationForm from './CourseInformationForm/CourseInformationForm';
import CourseBuilderForm from './CourseBuilderForm/CourseBuilderForm';
import PublishCourse from './PublishCourse/PublishCourse';

const RenderSteps = () => {
  const { step } = useSelector((state) => state.addCourse);
  const steps = [
    { id: 1, title: 'Course Information' },
    { id: 2, title: 'Course Builder' },
    { id: 3, title: 'Publish' },
  ];

  return (
    <div>
      <div className="flex w-full justify-center mb-4 relative">
        {steps.map((item) => (
          <Fragment key={item.id}>
            <div
              className={`grid place-items-center aspect-square rounded-full w-10 border transition-all duration-300 ${
                item.id < step ? 'bg-success text-white' : item.id === step ? 'border-primary bg-primary bg-opacity-20 text-primary' : 'border-base-300 bg-base-200 text-base-content'
              }`}
            >
              {item.id < step ? <FaCheck className="font-bold" /> : item.id}
            </div>
            {item.id !== steps.length && (
              <div
                className={`flex-1 h-1 bg-base-300 self-center ${
                  item.id < step ? 'bg-success' : ''
                }`}
              ></div>
            )}
          </Fragment>
        ))}
      </div>
      <div className="mb-10">
        <div className="flex justify-between select-none">
          {steps.map((item) => (
            <div key={item.id} className={`min-w-[130px] text-center text-sm font-semibold ${item.id <= step ? 'text-white' : 'text-base-content'}`}>
              {item.title}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-base-300 bg-opacity-30 backdrop-blur-md rounded-lg p-6 shadow-lg">
        {step === 1 && <CourseInformationForm />}
        {step === 2 && <CourseBuilderForm />}
        {step === 3 && <PublishCourse />}
      </div>
    </div>
  );
};

export default RenderSteps;
