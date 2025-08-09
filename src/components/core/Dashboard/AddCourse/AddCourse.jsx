import React from 'react';
import RenderSteps from './RenderSteps';
import CourseUploadTips from './CourseUploadTips';

const AddCourse = () => {
  return (
    <div className="p-4 md:p-8 text-white">
      <h1 className="text-4xl font-medium mb-8">Add New Course</h1>
      <div className="flex flex-col lg:flex-row items-start gap-12">
        <div className="flex-1">
          <RenderSteps />
        </div>
        <div className="hidden lg:block">
          <CourseUploadTips />
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
