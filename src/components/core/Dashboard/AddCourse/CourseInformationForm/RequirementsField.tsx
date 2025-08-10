import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';

const RequirementsField = ({ label, name, placeholder, register, errors, setValue, getValues }) => {
  const [courseRequirements, setCourseRequirements] = useState([]);
  const { editCourse, course } = useSelector((state) => state.addCourse);

  useEffect(() => {
    if (editCourse) setCourseRequirements(course?.instructions);
    register(name, { required: true, validate: (value) => value.length > 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValue(name, courseRequirements);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseRequirements]);

  const handleRequirementAdd = () => {
    const requirementValue = getValues('requirement');
    if (requirementValue && !courseRequirements.includes(requirementValue)) {
      setCourseRequirements([...courseRequirements, requirementValue]);
      setValue('requirement', '');
    }
  };

  const handleRequirementDelete = (reqInd) => {
    const updatedReqs = courseRequirements.filter((_, ind) => ind !== reqInd);
    setCourseRequirements(updatedReqs);
  };

  return (
    <div>
      <label className="text-sm text-base-content block mb-2" htmlFor="requirement">{label} <sup className="text-error">*</sup></label>
      <div className="flex items-center gap-x-2">
        <input
          type="text"
          id="requirement"
          placeholder={placeholder}
          className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
          {...register('requirement')}
        />
        <button
          type="button"
          onClick={handleRequirementAdd}
          className="font-semibold text-primary"
        >
          Add
        </button>
      </div>
      {errors[name] && <p className="mt-1 text-xs text-error">{label} is required</p>}
      {courseRequirements.length > 0 && (
        <ul className="mt-4 list-inside list-disc">
          {courseRequirements.map((req, ind) => (
            <li key={ind} className="flex items-center gap-x-2 text-white">
              {req}
              <button
                type="button"
                className="text-base-content hover:text-error"
                onClick={() => handleRequirementDelete(ind)}
              >
                <MdClose />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequirementsField;
