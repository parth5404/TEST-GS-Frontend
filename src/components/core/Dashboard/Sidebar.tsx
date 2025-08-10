import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { VscSignOut } from 'react-icons/vsc';
import sidebarLinks from '../../../data/sidebarLinks';
import { logout } from '../../../services/operations/authServices';
import ConfirmationModal from '../../common/ConfirmationModal';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const modalData = {
    text1: 'Are you sure?',
    text2: 'You will be logged out of your account.',
    btn1Text: 'Logout',
    btn2Text: 'Cancel',
    btn1Handler: () => logout(token, dispatch, navigate),
    btn2Handler: () => setIsModalOpen(false),
  };

  return (
    <div className="bg-base-300 bg-opacity-30 backdrop-blur-md min-h-screen">
      <div className="flex flex-col w-full md:min-w-[220px] border-r border-base-200 py-10">
        <div className="flex flex-col">
          {sidebarLinks.map((link) => {
            if (link.type && link.type !== user?.role) return null;
            return <SidebarLink key={link.id} data={link} />;
          })}
        </div>
        <div className="mx-auto my-6 h-[1px] w-10/12 bg-base-200"></div>
        <SidebarLink data={{ name: 'Settings', path: '/dashboard/settings', icon: 'VscSettingsGear' }} />
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-x-2 text-sm font-medium px-8 py-2 text-base-content hover:text-primary transition-all duration-200"
        >
          <VscSignOut className="text-lg" />
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
      {isModalOpen && <ConfirmationModal modalData={modalData} />}
    </div>
  );
};

export default Sidebar;
