import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../../common/ConfirmationModal';
import { BsListUl, BsFillCameraVideoFill } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillCaretRight, AiFillCaretDown } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import SubSectionModal from './SubSectionModal';
import { deleteSection, deleteSubSection } from '../../../../../services/operations/sectionSubsectionServices';
import { setCourse } from '../../../../../redux/slices/addCourseSlice';

const NestedView = ({ handleChangeEditSectionName }) => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.addCourse);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const [confirmationModalData, setConfirmationModalData] = useState(null);
  const [addSubSectionData, setAddSubSectionData] = useState(null);
  const [editSubSectionData, setEditSubSectionData] = useState(null);
  const [viewSubSectionData, setViewSubSectionData] = useState(null);
  const [listOfSectionOpen, setListOfSectionOpen] = useState([]);

  const handleToggleListOpen = (sectionOpen, sectionId) => {
    setListOfSectionOpen(
      sectionOpen ? [...listOfSectionOpen, sectionId] : listOfSectionOpen.filter((secId) => secId !== sectionId)
    );
  };

  const handleDeleteSection = async (sectionId) => {
    const result = await deleteSection({ sectionId }, token);
    if (result) dispatch(setCourse(result));
    setConfirmationModalData(null);
  };

  const handleOpenSectionDeleteModal = (sectionId) => {
    setConfirmationModalData({
      text1: 'Delete this Section?',
      text2: 'All the lectures in this section will be deleted.',
      btn1Text: 'Delete',
      btn2Text: 'Cancel',
      btn1Handler: () => handleDeleteSection(sectionId),
      btn2Handler: () => setConfirmationModalData(null),
    });
  };

  const handleDeleteSubSection = async (subSectionId, sectionId) => {
    setLoading(true);
    const result = await deleteSubSection({ subSectionId }, token);
    if (result) {
      const updatedCourseSections = course.sections.map((section) => (section._id === sectionId ? result : section));
      const updatedCourse = { ...course, sections: updatedCourseSections };
      dispatch(setCourse(updatedCourse));
    }
    setLoading(false);
    setConfirmationModalData(null);
  };

  const handleOpenSubSectionDeleteModal = (subSectionId, sectionId) => {
    setConfirmationModalData({
      text1: 'Delete this Sub-Section?',
      text2: 'This lecture will be deleted.',
      btn1Text: 'Delete',
      btn2Text: 'Cancel',
      btn1Handler: () => handleDeleteSubSection(subSectionId, sectionId),
      btn2Handler: () => setConfirmationModalData(null),
    });
  };

  return (
    <div className="bg-base-300 bg-opacity-30 backdrop-blur-md rounded-lg p-6 shadow-lg">
      {course?.sections?.map((section) => (
        <details key={section._id} open onToggle={(e) => handleToggleListOpen(e.target.open, section._id)}>
          <summary className="flex justify-between items-center cursor-pointer border-b-2 border-base-200 py-2">
            <div className="flex items-center gap-x-3">
              <BsListUl className="text-2xl text-base-content" />
              <p className="text-xl text-white">{section.title}</p>
            </div>
            <div className="flex items-center gap-x-3">
              <button type="button" onClick={() => handleChangeEditSectionName(section._id, section.title)}>
                <MdEdit className="text-xl text-base-content hover:text-primary" />
              </button>
              <button onClick={() => handleOpenSectionDeleteModal(section._id)}>
                <RiDeleteBin6Line className="text-xl text-base-content hover:text-error" />
              </button>
              <span className="text-base-content font-medium">|</span>
              {listOfSectionOpen.includes(section._id) ? (
                <AiFillCaretDown className="text-xl text-base-content" />
              ) : (
                <AiFillCaretRight className="text-xl text-base-content" />
              )}
            </div>
          </summary>
          <div className="px-6 pb-4">
            {section.subSections.map((subSection) => (
              <div
                key={subSection._id}
                onClick={() => setViewSubSectionData(subSection)}
                className="flex justify-between items-center cursor-pointer border-b-2 border-base-200 py-2"
              >
                <div className="flex items-center gap-x-3">
                  <BsFillCameraVideoFill className="text-2xl text-base-content" />
                  <p className="font-semibold text-white">{subSection.title}</p>
                </div>
                <div onClick={(e) => e.stopPropagation()} className="flex items-center gap-x-3">
                  <button type="button" onClick={() => setEditSubSectionData(subSection)}>
                    <MdEdit className="text-xl text-base-content hover:text-primary" />
                  </button>
                  <button onClick={() => handleOpenSubSectionDeleteModal(subSection._id, section._id)}>
                    <RiDeleteBin6Line className="text-xl text-base-content hover:text-error" />
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setAddSubSectionData({ sectionId: section._id })}
              className="mt-3 flex items-center gap-x-1 text-primary"
            >
              <FaPlus className="text-lg" />
              <p>Add Lecture</p>
            </button>
          </div>
        </details>
      ))}
      {addSubSectionData && <SubSectionModal modalData={addSubSectionData} setModalData={setAddSubSectionData} addMode />}
      {editSubSectionData && <SubSectionModal modalData={editSubSectionData} setModalData={setEditSubSectionData} editMode />}
      {viewSubSectionData && <SubSectionModal modalData={viewSubSectionData} setModalData={setViewSubSectionData} viewMode />}
      {confirmationModalData && <ConfirmationModal modalData={confirmationModalData} />}
    </div>
  );
};

export default NestedView;
