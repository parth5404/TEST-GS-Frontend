import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import { MdNavigateNext } from 'react-icons/md';
import IconBtn from '../../../../common/IconBtn';
import { setCourse, setStep } from '../../../../../redux/slices/addCourseSlice';
import { addCourse, editCourseDetails, fetchCourseCategories } from '../../../../../services/operations/courseServices';
import ChipInput from './ChipInput';
import UploadFile from '../UploadFile';
import RequirementsField from './RequirementsField';
import toast from 'react-hot-toast';

const CourseInformationForm = () => {
  const { register, setValue, getValues, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { editCourse, course } = useSelector((state) => state.addCourse);
  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      setCourseCategories(categories);
      setLoading(false);
    };
    getCategories();
  }, []);

  useEffect(() => {
    if (editCourse && courseCategories) {
      setValue('courseTitle', course.title);
      setValue('courseDesc', course.description);
      setValue('coursePrice', course.price);
      setValue('courseCategory', course.category._id);
      setValue('courseBenefits', course.whatYouWillLearn);
    }
  }, [editCourse, course, setValue, courseCategories]);

  const isFormUpdated = () => {
    const currentValues = getValues();
    return !(
      currentValues.courseTitle === course.title &&
      currentValues.courseDesc === course.description &&
      currentValues.coursePrice === course.price &&
      currentValues.courseCategory === course.category._id &&
      currentValues.courseBenefits === course.whatYouWillLearn &&
      currentValues.courseTags.toString() === course.tags.toString() &&
      currentValues.courseThumbnail === course.thumbnail &&
      currentValues.courseRequirements.toString() === course.instructions.toString()
    );
  };

  const handleCourseEdit = async (data) => {
    const formData = new FormData();
    formData.append('courseId', course._id);
    if (data.courseTitle !== course.title) formData.append('title', data.courseTitle);
    if (data.courseDesc !== course.description) formData.append('description', data.courseDesc);
    if (data.coursePrice !== course.price) formData.append('price', data.coursePrice);
    if (data.courseCategory !== course.category._id) formData.append('category', data.courseCategory);
    if (data.courseBenefits !== course.whatYouWillLearn) formData.append('whatYouWillLearn', data.courseBenefits);
    if (data.courseTags.toString() !== course.tags.toString()) formData.append('tags', JSON.stringify(data.courseTags));
    if (data.courseThumbnail !== course.thumbnail) formData.append('thumbnail', data.courseThumbnail);
    if (data.courseRequirements.toString() !== course.instructions.toString()) formData.append('instructions', JSON.stringify(data.courseRequirements));
    
    setLoading(true);
    const result = await editCourseDetails(formData, token, dispatch, navigate);
    if (result) {
      dispatch(setCourse(result));
      dispatch(setStep(2));
    }
    setLoading(false);
  };

  const handleFormSubmit = async (data) => {
    if (editCourse) {
      if (!isFormUpdated()) {
        toast.error('No changes made to the form');
        return;
      }
      handleCourseEdit(data);
      return;
    }

    const formData = new FormData();
    formData.append('title', data.courseTitle);
    formData.append('description', data.courseDesc);
    formData.append('price', data.coursePrice);
    formData.append('category', data.courseCategory);
    formData.append('whatYouWillLearn', data.courseBenefits);
    formData.append('tags', JSON.stringify(data.courseTags));
    formData.append('thumbnail', data.courseThumbnail);
    formData.append('instructions', JSON.stringify(data.courseRequirements));

    setLoading(true);
    const result = await addCourse(formData, token, dispatch, navigate);
    if (result) {
      dispatch(setCourse(result));
      dispatch(setStep(2));
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      {/* Course Title */}
      <div>
        <label className="text-sm text-base-content block mb-2">Course Title <sup className="text-error">*</sup></label>
        <input
          type="text"
          id="courseTitle"
          placeholder="Enter Course Title"
          className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
          {...register('courseTitle', { required: true })}
        />
        {errors.courseTitle && <p className="mt-1 text-xs text-error">Course Title is required</p>}
      </div>

      {/* Course Short Description */}
      <div>
        <label htmlFor="courseDesc" className="text-sm text-base-content block mb-2">Course Short Description <sup className="text-error">*</sup></label>
        <textarea
          id="courseDesc"
          placeholder="Enter Short Description"
          className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary min-h-[130px] resize-none"
          {...register('courseDesc', { required: true })}
        />
        {errors.courseDesc && <p className="mt-1 text-xs text-error">Course Description is required</p>}
      </div>

      {/* Course Price */}
      <div className="relative">
        <label htmlFor="coursePrice" className="text-sm text-base-content block mb-2">Course Price <sup className="text-error">*</sup></label>
        <input
          type="number"
          id="coursePrice"
          min={0}
          placeholder="Enter Course Price"
          className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary pl-12"
          {...register('coursePrice', { required: true, valueAsNumber: true, pattern: { value: /^(0|[1-9]\d*)(\.\d+)?$/ } })}
        />
        <HiOutlineCurrencyRupee className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl text-base-content" />
        {errors.coursePrice && <p className="mt-1 text-xs text-error">Course Price is required</p>}
      </div>

      {/* Course Categories */}
      <div>
        <label htmlFor="courseCategory" className="text-sm text-base-content block mb-2">Course Category <sup className="text-error">*</sup></label>
        <select
          id="courseCategory"
          defaultValue=""
          className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
          {...register('courseCategory', { required: true })}
        >
          <option value="" disabled>Choose a Category</option>
          {!loading && courseCategories?.map((category, ind) => <option key={ind} value={category._id}>{category?.name}</option>)}
        </select>
        {errors.courseCategory && <p className="mt-1 text-xs text-error">Course Category is required</p>}
      </div>

      <ChipInput label="Tags" name="courseTags" placeholder="Enter tags and press Enter" register={register} errors={errors} setValue={setValue} getValues={getValues} />
      <UploadFile label="Course Thumbnail" name="courseThumbnail" register={register} errors={errors} setValue={setValue} getValues={getValues} editData={editCourse ? course?.thumbnail : null} />
      
      <div>
        <label htmlFor="courseBenefits" className="text-sm text-base-content block mb-2">Benefits of the course <sup className="text-error">*</sup></label>
        <textarea
          id="courseBenefits"
          placeholder="Enter benefits of the course"
          className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary min-h-[130px] resize-none"
          {...register('courseBenefits', { required: true })}
        />
        {errors.courseBenefits && <p className="mt-1 text-xs text-error">Benefits of the course is required</p>}
      </div>

      <RequirementsField label="Requirements/Instructions" name="courseRequirements" placeholder="Add Course Requirements/Instructions" register={register} errors={errors} setValue={setValue} getValues={getValues} />
      
      <div className="flex justify-end gap-2">
        {editCourse && (
          <button type="button" disabled={loading} onClick={() => dispatch(setStep(2))} className="bg-base-200 py-2 px-5 rounded-md font-semibold text-white disabled:cursor-not-allowed">
            Continue Without Saving
          </button>
        )}
        <IconBtn type="submit" text={editCourse ? 'Save Changes' : 'Next'} disabled={loading}>
          <MdNavigateNext />
        </IconBtn>
      </div>
    </form>
  );
};

export default CourseInformationForm;
