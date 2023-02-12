const Skeleton = () => {
  return (
    <div className='bg-zinc-700 w-[40rem] rounded-md h-[7rem] animate-pulse p-2 space-y-2'>
      <div className='flex items-center space-x-4'>
        <div className='w-[3rem] h-[3rem]  bg-zinc-900 ' />
        <h1 className='bg-zinc-900 w-full h-[2rem]' />
      </div>

      <p className='bg-zinc-900 w-full h-[2rem]' />
    </div>
  );
};
export default Skeleton;
