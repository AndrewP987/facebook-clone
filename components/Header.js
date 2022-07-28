import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon
} from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/client';
import HeaderIcon from './HeaderIcon';

function Header() {
  const [session] = useSession();

  return (
    <div className="sticky top-0 z-50 flex items-center p-2 bg-white shadow-md lg:px-5">
      {/* Left */}
      <div className="flex items-center">
        <Image src="/images/logo.png" width={40} height={40} layout="fixed" />
        <div className="flex items-center p-2 ml-2 bg-gray-100 rounded-full">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="flex items-center flex-shrink placeholder-gray-500 bg-transparent outline-none l-2 md:inline-flex"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />  
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center justify-end shadow rounded-3xl sm:space-x-2">
        {/* Profile Pic */}
        <Image
          className="rounded-full"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="pr-3 font-semibold whitespace-nowrap">{session.user.name}</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
