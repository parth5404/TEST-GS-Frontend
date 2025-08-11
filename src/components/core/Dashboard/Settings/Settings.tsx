import React from 'react';
import ChangeProfilePicture from './ChangeProfilePicture';
import EditProfile from './EditProfile';
import { UpdatePassword } from './UpdatePassword';
import DeleteAccount from './DeleteAccount';

const Settings = () => {
  return (
    <div className="p-4 md:p-8 text-white">
      <h1 className="font-medium text-4xl mb-8">Edit Profile</h1>
      <div className="flex flex-col gap-8">
        <ChangeProfilePicture />
        <EditProfile />
        <UpdatePassword />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Settings;
