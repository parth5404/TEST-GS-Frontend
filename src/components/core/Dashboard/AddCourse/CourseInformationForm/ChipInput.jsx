import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';

const ChipInput = ({ label, name, placeholder, register, errors, setValue, getValues }) => {
  const [chips, setChips] = useState([]);
  const { editCourse, course } = useSelector((state) => state.addCourse);

  useEffect(() => {
    if (editCourse) setChips(course?.tags);
    register(name, { required: true, validate: (value) => value.length > 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValue(name, chips);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chips]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const chipValue = e.target.value.trim();
      if (chipValue && !chips.includes(chipValue)) {
        setChips([...chips, chipValue]);
        e.target.value = '';
      }
    }
  };

  const handleDeleteChip = (chipInd) => {
    const updatedChips = chips.filter((_, ind) => ind !== chipInd);
    setChips(updatedChips);
  };

  return (
    <div>
      <label htmlFor={name} className="text-sm text-base-content block mb-2">{label} <sup className="text-error">*</sup></label>
      <div className="flex flex-wrap gap-2 mb-2">
        {chips.map((chip, ind) => (
          <div key={ind} className="flex items-center gap-x-2 bg-primary bg-opacity-30 rounded-full px-3 py-1 text-sm text-white">
            {chip}
            <button type="button" onClick={() => handleDeleteChip(ind)}>
              <MdClose className="text-sm" />
            </button>
          </div>
        ))}
      </div>
      <input
        id={name}
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg bg-base-300 bg-opacity-50 backdrop-blur-md p-3 text-white placeholder:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
        onKeyDown={handleKeyDown}
      />
      {errors[name] && <p className="mt-1 text-xs text-error">{label} is required</p>}
    </div>
  );
};

export default ChipInput;
