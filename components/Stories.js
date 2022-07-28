import StoryCard from './StoryCard';

const stories = [
  {
    name: 'Andrew Photinakis',
    src: '/images/users/36.jpg',
    profile: '/images/users/36.jpg'
  },
  {
    name: 'Elon Musk',
    src: '/images/users/elon_musk.jpeg',
    profile: '/images/avatars/elon_musk.jpeg'
  },
  {
    name: 'Jeff Bezos',
    src: '/images/users/jeff-bezos-richest-man-2018.jpeg',
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

function Stories() {
  return (
    <div className="flex justify-center mx-auto space-x-3">
      {stories.map((story) => (
        <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
