import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import IconBtn from '../../../../common/IconBtn';
import { MdNavigateBefore } from 'react-icons/md';
import { resetCourseState, setStep } from '../../../../../redux/slices/addCourseSlice';
import { COURSE_STATUS } from '../../../../../utils/constants';
import { editCourseDetails } from '../../../../../services/operations/courseServices';

const PublishCourse = () => {
  const { register, setValue, getValues, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { course } = useSelector((state) => state.addCourse);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (course?.status === COURSE_STATUS.PUBLISHED) {
      setValue('makePublic', true);
    }
  }, [course, setValue]);

  const handleGoBack = () => {
    dispatch(setStep(2));
  };

  const goToMyCourses = () => {
    dispatch(resetCourseState());
    navigate('/dashboard/my-courses');
  };

  const handleSaveChanges = async () => {
    const courseStatus = getValues('makePublic') ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
    if (course?.status === courseStatus) {
      goToMyCourses();
      return;
    }

    const formData = new FormData();
    formData.append('courseId', course._id);
    formData.append('status', courseStatus);

    setLoading(true);
    const result = await editCourseDetails(formData, token);
    setLoading(false);
    if (result) {
      goToMyCourses();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">Publish Settings</h2>
      <form onSubmit={handleSubmit(handleSaveChanges)}>
        <div className="flex items-center mb-8 gap-x-3">
          <input
            type="checkbox"
            id="makePublic"
            disabled={loading}
            className="h-5 w-5 rounded bg-base-300 text-primary focus:ring-2 focus:ring-primary"
            {...register('makePublic')}
          />
          <label className="text-lg text-base-content" htmlFor="makePublic">Make this course public</label>
        </div>
        <div className="flex justify-end gap-x-4">
          <button
            type="button"
            onClick={handleGoBack}
            disabled={loading}
            className="flex items-center gap-x-2 py-2 px-5 rounded-md bg-base-300 text-white font-semibold hover:bg-base-200 transition-all duration-200"
          >
            <MdNavigateBefore />
            Back
          </button>
          <IconBtn type="submit" text="Save Changes" disabled={loading} />
        </div>
      </form>
    </div>
  );
};

export default PublishCourse;
