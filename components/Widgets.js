import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
  {
    name: 'Andrew Photinakis',
    src: '/images/users/36.jpg',
    profile: '/images/avatars/36.jpg'
  },
  {
    name: 'Elon Musk',
    src: '/images/users/elon_musk.jpeg',
    profile: '/images/avatars/elon_musk.jpeg'
  },
  {
    name: 'Jeff Bezos',
    src: '/public/images/users/jeff-bezos-richest-man-2018.jpeg',
    profile: '/images/avatars/jeff-bezos.jpeg'
  },
  {
    name: 'Mark Zuckerberg',
    src: '/images/users/mark_zuckerberg.jpeg',
    profile: '/images/avatars/mark_zuckerberg.jpeg'
  },
  {
    name: 'Bill Gates',
    src: '/images/users/bill_gate.jpeg',
    profile: '/images/avatars/bill_gate.jpeg'
  }
];

function Widgets() {
  return (
    <div className="flex-col hidden p-2 mt-5 lg:flex w-60">
      <div className="flex items-center justify-between mb-5 text-gray-500">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.profile} src={contact.profile} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
