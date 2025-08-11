import React from 'react';
import IconBtn from '../../common/IconBtn';
import { RiEditBoxLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dateFormatter from '../../../utils/dateFormatter';

const MyProfile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="p-4 md:p-8 text-white">
      <h1 className="font-medium text-4xl mb-8">My Profile</h1>

      <div className="flex items-center justify-between bg-base-300 bg-opacity-30 backdrop-blur-md rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-x-4">
          <img src={user?.avatar} alt={`profile-${user?.firstName}`} className="aspect-square w-20 rounded-full object-cover" />
          <div>
            <h2 className="text-xl font-semibold">{`${user?.firstName} ${user?.lastName}`}</h2>
            <p className="text-sm text-base-content">{user?.email}</p>
          </div>
        </div>
        <IconBtn customClasses="hidden md:flex" text="Edit" onClickHandler={() => navigate('/dashboard/settings')}>
          <RiEditBoxLine />
        </IconBtn>
      </div>

      <div className="md:hidden mt-4">
        <IconBtn text="Edit Profile" onClickHandler={() => navigate('/dashboard/settings')} customClasses="w-full justify-center">
          <RiEditBoxLine />
        </IconBtn>
      </div>

      <div className="my-8 bg-base-300 bg-opacity-30 backdrop-blur-md rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">About</h2>
          <IconBtn customClasses="hidden md:flex" text="Edit" onClickHandler={() => navigate('/dashboard/settings')}>
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p className={`text-sm font-medium ${user?.profile?.about ? 'text-base-content' : 'text-base-content/50'}`}>
          {user?.profile?.about || 'Write Something About Yourself'}
        </p>
      </div>

      <div className="bg-base-300 bg-opacity-30 backdrop-blur-md rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Personal Details</h2>
          <IconBtn customClasses="hidden md:flex" text="Edit" onClickHandler={() => navigate('/dashboard/settings')}>
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-2 text-sm text-base-content/50">First Name</p>
            <p className="text-sm font-medium">{user?.firstName}</p>
          </div>
          <div>
            <p className="mb-2 text-sm text-base-content/50">Last Name</p>
            <p className="text-sm font-medium">{user?.lastName}</p>
          </div>
          <div>
            <p className="mb-2 text-sm text-base-content/50">Email</p>
            <p className="text-sm font-medium">{user?.email}</p>
          </div>
          <div>
            <p className="mb-2 text-sm text-base-content/50">Phone Number</p>
            <p className={`text-sm font-medium ${user?.profile?.contactNumber ? 'text-base-content' : 'text-base-content/50'}`}>
              {user?.profile?.contactNumber ?? 'Add Contact Number'}
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm text-base-content/50">Gender</p>
            <p className={`text-sm font-medium ${user?.profile?.gender ? 'text-base-content' : 'text-base-content/50'}`}>
              {user?.profile?.gender ?? 'Add Gender'}
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm text-base-content/50">Date of Birth</p>
            <p className={`text-sm font-medium ${user?.profile?.dob ? 'text-base-content' : 'text-base-content/50'}`}>
              {user?.profile?.dob ? dateFormatter(user?.profile?.dob) : 'Add Date of Birth'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
