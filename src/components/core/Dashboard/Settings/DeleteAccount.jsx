import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../common/ConfirmationModal';
import { deleteCurrentUser } from '../../../../services/operations/settingsServices';

const DeleteAccount = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalData = {
    text1: 'Are you sure?',
    text2: 'Your Account will be deleted permanently and all data will be lost.',
    btn1Text: 'Delete',
    btn2Text: 'Cancel',
    btn1Handler: () => deleteCurrentUser(token, dispatch, navigate),
    btn2Handler: () => setIsModalOpen(false),
  };

  return (
    <div className="bg-error bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg flex items-start gap-x-5">
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-error bg-opacity-30 flex items-center justify-center">
        <FiTrash2 className="text-3xl text-error" />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Delete Account</h2>
        <div className="text-base-content space-y-2">
          <p>Would you like to delete your account?</p>
          <p className="tracking-wide">
            This account may contain Paid Courses. Deleting your account is permanent and will remove all content associated with it.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="mt-4 tracking-wider cursor-pointer italic text-error hover:underline"
        >
          I want to delete my account
        </button>
      </div>
      {isModalOpen && <ConfirmationModal modalData={modalData} />}
    </div>
  );
};

export default DeleteAccount;
