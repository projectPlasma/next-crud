const AddTopic = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <form className='flex flex-col gap-3 px-9 py-11 rounded-lg border border-green-300 shadow-lg shadow-green-900/20 bg-green-200/25'>
        <input
          type='text'
          placeholder='Topic Title'
          className='rounded-full px-8 py-2 bg-green-50 text-green-950 border border-green-300 shadow-lg shadow-green-800/30'
        />
        <input
          type='text'
          placeholder='Topic Description'
          className='rounded-full px-8 py-2 bg-green-50 text-green-950 border border-green-300 shadow-lg shadow-green-800/30'
        />

        <button className='bg-green-200 w-fit p-2 shadow-lg shadow-green-800/60 rounded-full text-green-600 font-semibold hover:bg-green-300 hover:text-green-50'>
          Add Topic
        </button>
      </form>
    </main>
  );
};

export default AddTopic;
