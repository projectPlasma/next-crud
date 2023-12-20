import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-8 py-3 rounded-full shadow-xl shadow-green-900/30 border border-green-200 bg-slate-800/30 backdrop-blur-sm'>
      <Link className='text-slate-200 font-bold' href={'/'}>
        LIVE THICK
      </Link>
      <Link
        className='bg-green-200 p-2 shadow-lg shadow-green-800/60 rounded-full text-green-600 font-semibold hover:bg-green-300 hover:text-green-50'
        href={'/addTopic'}
      >
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
