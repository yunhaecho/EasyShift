import UserPageProvider from './UserPageProvider';
import UserProfileCard from './UserProfileCard';
import UserShiftCalendar from './UserShiftCalendar';

const UserInfoContent = () => {
  return (
    <UserPageProvider>
      <UserProfileCard />
      <UserShiftCalendar />
    </UserPageProvider>
  );
};

export default UserInfoContent;
