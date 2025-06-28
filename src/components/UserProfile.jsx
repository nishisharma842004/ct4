import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { userProfileData } from '../data/dummy';
import avatar from '../data/pp.jpeg';

const UserProfile = () => {
  const { currentColor } = useStateContext();

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Nishi Sharma logged out');
  };

  return (
    <div className="nav-item absolute right-5 top-16 bg-white dark:bg-[#2d2d2d] p-6 rounded-xl w-96 shadow-lg z-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="font-semibold text-xl dark:text-gray-100">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="#999"
          bgHoverColor="#f5f5f5"
          size="2xl"
          borderRadius="50%"
          ariaLabel="Close profile"
        />
      </div>

      {/* User Info */}
      <div className="flex gap-4 items-center border-b border-color pb-6">
        <img className="rounded-full h-20 w-20 object-cover" src={avatar} alt="User Avatar" />
        <div>
          <p className="text-lg font-semibold dark:text-white">Nishi Sharma</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
          <p className="text-sm text-gray-500 font-semibold dark:text-gray-400">nishisharma842004@gmail.com</p>
        </div>
      </div>

      {/* Options List */}
      <div className="mt-4">
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 hover:bg-gray-100 dark:hover:bg-[#3a3a3a] rounded-lg cursor-pointer transition-all"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-xl p-3 rounded-lg shadow-sm"
              aria-label={item.title}
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="mt-6">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default UserProfile;
