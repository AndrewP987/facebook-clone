import { signOut, useSession } from 'next-auth/client';
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  LogoutIcon,
  UsersIcon
} from '@heroicons/react/solid';
import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
  const [session] = useSession();
  
  
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
      <div onClick={signOut}>
        <SidebarRow Icon={LogoutIcon} title="LogOut" />
      </div>
    </div>
  );
}

export default Sidebar;