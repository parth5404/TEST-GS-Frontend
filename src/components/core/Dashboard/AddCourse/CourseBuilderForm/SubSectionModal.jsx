import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import IconBtn from '../../../../common/IconBtn';
import { setCourse } from '../../../../../redux/slices/addCourseSlice';
import { createSubSection, updateSubSection } from '../../../../../services/operations/sectionSubsectionServices';
import { RxCross2 } from 'react-icons/rx';
import UploadFile from '../UploadFile';
import useOnClickOutside from '../../../../../hooks/useOnClickOutside';

const SubSectionModal = ({ modalData, setModalData, addMode = false, editMode = false, viewMode = false }) => {
  const { register, setValue, getValues, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.addCourse);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const modalDiv = useRef(null);

  useOnClickOutside(modalDiv, () => setModalData(null));

  useEffect(() => {
    if (viewMode || editMode) {
      setValue('lectureTitle', modalData.title);
      setValue('lectureDesc', modalData.description);
      setValue('lectureVideo', modalData.videoUrl);
    }
  }, [viewMode, editMode, modalData, setValue]);

  const isFormUpdated = () => {
    const currentValues = getValues();
    return !(
      currentValues.lectureTitle === modalData.title &&
      currentValues.lectureDesc === modalData.description &&
      currentValues.lectureVideo === modalData.video
    );
  };

  const handleEditSubSection = async () => {
    const currentValues = getValues();
    const formData = new FormData();
    formData.append('sectionId', modalData.sectionId);
    formData.append('courseId', course?._id);
    formData.append('subSectionId', modalData._id);

    if (currentValues.lectureTitle !== modalData.title) formData.append('title', currentValues.lectureTitle);
    if (currentValues.lectureDesc !== modalData.description) formData.append('description', currentValues.lectureDesc);
    if (currentValues.lectureVideo !== modalData.video) {
      formData.append('video', currentValues.lectureVideo);
      formData.append('timeDuration', currentValues.lectureDuration);
    }

    setLoading(true);
    const result = await updateSubSection(formData, token);
    if (result) {
      const updatedCourseSections = course.sections.map((section) =>
        section._id === modalData.section ? result : section
      );
      const updatedCourse = { ...course, sections: updatedCourseSections };
      dispatch(setCourse(updatedCourse));
    }
    setLoading(false);
    setModalData(null);
  };

  const handleSave = async (data) => {
    if (viewMode) return;

    if (editMode) {
      if (!isFormUpdated()) {
        toast.error('No changes made to the lecture');
      } else {
        handleEditSubSection();
      }
      return;
    }

    const formData = new FormData();
    formData.append('sectionId', modalData.sectionId);
    formData.append('courseId', course?._id);
    formData.append('title', data.lectureTitle);
    formData.append('description', data.lectureDesc);
    formData.append('video', data.lectureVideo);
    formData.append('timeDuration', data.lectureDuration);

    setLoading(true);
    const result = await createSubSection(formData, token);
    if (result) {
      const updatedCourseSections = course.sections.map((section) => {
        if (section._id === modalData.sectionId) {
          const updatedSection = { ...section };
          updatedSection.subSections = [...updatedSection.subSections, result];
          return updatedSection;
        }
        return section;
      });
      const updatedCourse = { ...course, sections: updatedCourseSections };
      dispatch(setCourse(updatedCourse));
    }
    setLoading(false);
    setModalData(null);
  };

  return (
    <div className="fixed inset-0 grid overflow-auto place-items-center bg-base-100 bg-opacity-50 backdrop-blur-sm z-50">
      <div ref={modalDiv} className="my-10 w-11/12 max-w-3xl rounded-lg bg-base-300 border border-base-200 shadow-lg">
        <div className="flex justify-between items-center bg-base-200 p-4 rounded-t-lg">
          <p className="text-xl font-semibold text-white">
            {addMode && 'Adding'} {editMode && 'Editing'} {viewMode && 'Viewing'} Lecture
          </p>
          <button onClick={() => setModalData(null)}>
            <RxCross2 className="text-2xl text-white hover:text-error" />
          </button>
        </div>
        <form onSubmit={handleSubmit(handleSave)} className="p-8 space-y-6">
          <UploadFile
            label="Lecture Video"
            name="lectureVideo"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
            video
            durationName="lectureDuration"
            editData={editMode ? modalData.videoUrl : null}
            viewData={viewMode ? modalData.videoUrl : null}
          />
          <div>
            <label htmlFor="lectureTitle" className="text-sm text-base-content block mb-2">Lecture Title <span className="text-error">*</span></label>
            <input
              id="lectureTitle"
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={viewMode || loading}
              placeholder="Enter Lecture Title"
              {...register('lectureTitle', { required: true })}
            />
            {errors.lectureTitle && <p className="mt-1 text-xs text-error">Lecture Title is required</p>}
          </div>
          <div>
            <label htmlFor="lectureDesc" className="text-sm text-base-content block mb-2">Lecture Description <sup className="text-error">*</sup></label>
            <textarea
              id="lectureDesc"
              disabled={viewMode || loading}
              placeholder="Enter Lecture Description"
              className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary min-h-[130px] resize-none"
              {...register('lectureDesc', { required: true })}
            />
            {errors.lectureDesc && <p className="mt-1 text-xs text-error">Lecture Description is required</p>}
          </div>
          {!viewMode && (
            <div className="flex justify-end">
              <IconBtn type="submit" disabled={loading} text={loading ? 'Loading...' : editMode ? 'Save Changes' : 'Save'} />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SubSectionModal;
