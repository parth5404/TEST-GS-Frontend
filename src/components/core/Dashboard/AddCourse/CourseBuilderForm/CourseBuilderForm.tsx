import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { IoAddCircleOutline } from 'react-icons/io5';
import IconBtn from '../../../../common/IconBtn';
import { setCourse, setEditCourse, setStep } from '../../../../../redux/slices/addCourseSlice';
import toast from 'react-hot-toast';
import NestedView from './NestedView';
import { createSection, updateSection } from '../../../../../services/operations/sectionSubsectionServices';

const CourseBuilderForm = () => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.addCourse);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const [editSectionId, setEditSectionId] = useState(null);

  const handleCreateSection = async (data) => {
    setLoading(true);
    let result = null;
    const formData = new FormData();
    formData.append('title', data.sectionName);
    formData.append('courseId', course._id);

    if (editSectionId) {
      formData.append('sectionId', editSectionId);
      result = await updateSection(formData, token);
    } else {
      result = await createSection(formData, token);
    }
    if (result) {
      dispatch(setCourse(result));
      setEditSectionId(null);
      setValue('sectionName', '');
    }
    setLoading(false);
  };

  const handleCancelEditSection = () => {
    setEditSectionId(null);
    setValue('sectionName', '');
  };

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    if (sectionId === editSectionId) {
      handleCancelEditSection();
      return;
    }
    setEditSectionId(sectionId);
    setValue('sectionName', sectionName);
  };

  const handleGoBack = () => {
    dispatch(setEditCourse(true));
    dispatch(setStep(1));
  };

  const handleGoToNext = () => {
    if (course.sections.length === 0) {
      toast.error('Please add at least one section');
      return;
    }
    if (course.sections.some((section) => section.subSections.length === 0)) {
      toast.error('Please add at least one lecture in each section');
      return;
    }
    dispatch(setStep(3));
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-white">Course Builder</h2>
      <form onSubmit={handleSubmit(handleCreateSection)} className="space-y-4">
        <div>
          <label className="text-sm text-base-content block mb-2" htmlFor="sectionName">Section Name <sup className="text-error">*</sup></label>
          <input
            type="text"
            id="sectionName"
            disabled={loading}
            placeholder="Add a section to build your course"
            className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
            {...register('sectionName', { required: true })}
          />
          {errors.sectionName && <p className="mt-1 text-xs text-error">Section name is required</p>}
        </div>
        <div className="flex items-end gap-x-4">
          <IconBtn type="submit" text={editSectionId ? 'Edit Section Name' : 'Create Section'} outline disabled={loading}>
            <IoAddCircleOutline size={20} className="text-yellow-50" />
          </IconBtn>
          {editSectionId && (
            <button type="button" onClick={handleCancelEditSection} className="text-sm text-base-content underline">
              Cancel Edit
            </button>
          )}
        </div>
      </form>
      {course?.sections?.length > 0 && <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />}
      <div className="flex justify-end gap-x-3">
        <button
          type="button"
          onClick={handleGoBack}
          disabled={loading}
          className="flex items-center gap-x-2 py-2 px-5 rounded-md bg-base-300 text-white font-semibold hover:bg-base-200 transition-all duration-200"
        >
          <MdNavigateBefore />
          Back
        </button>
        <IconBtn type="button" text="Next" disabled={loading} onClickHandler={handleGoToNext}>
          <MdNavigateNext />
        </IconBtn>
      </div>
    </div>
  );
};

export default CourseBuilderForm;
