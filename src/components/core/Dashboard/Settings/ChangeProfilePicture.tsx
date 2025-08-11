import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiUpload } from 'react-icons/fi';
import IconBtn from '../../../common/IconBtn';
import { changeAvatar } from '../../../../services/operations/settingsServices';

const ChangeProfilePicture = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      previewFile(file);
    }
  };

  const previewFile = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setPreviewSource(fileReader.result);
    };
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', imageFile);
    await changeAvatar(token, formData, setLoading, dispatch, navigate);
  };

  return (
    <div className="bg-base-300 bg-opacity-30 backdrop-blur-md rounded-lg p-6 shadow-lg flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <img
          src={previewSource || user?.avatar}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">Change Profile Picture</h2>
          <div className="flex gap-x-3">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/jpeg, image/gif, image/jpg, image/png"
            />
            <button
              onClick={handleClick}
              disabled={loading}
              className="bg-base-200 text-white py-2 px-5 font-semibold rounded-md transition-all duration-200 hover:bg-base-100"
            >
              Select
            </button>
            <IconBtn text={loading ? 'Uploading...' : 'Upload'} onClickHandler={handleFileUpload} disabled={loading}>
              {!loading && <FiUpload className="text-lg" />}
            </IconBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfilePicture;
