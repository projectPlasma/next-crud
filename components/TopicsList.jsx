import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';

const TopicsList = () => {
  return (
    <>
      <div className='flex justify-between gap-5 items-start w-auto p-4 my-3 shadow-lg shadow-green-950/40 border border-green-200 rounded-md backdrop-blur-lg bg-green-100/30'>
        <div>
          <h2 className='font-bold text-2xl'>Topic Title:</h2>
          <div>Topic Description</div>
        </div>

        <div className='flex gap-2'>
          <RemoveBtn />
          <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopicsList;
