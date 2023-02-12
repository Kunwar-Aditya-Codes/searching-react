import { useState, Suspense } from 'react';
import useDebounce from '../hooks/useDebounce';
import List from './List';
import Skeleton from './Skeleton';

const Search = () => {
  const [searchText, setSearchText] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchText, 750);

  return (
    <div className='flex flex-col items-center p-4 space-y-8 '>
      <input
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder='Enter text to search'
        className='outline-none bg-transparent border-2 rounded-md p-2 text-white border-zinc-700 focus:border-zinc-200'
      />

      <Suspense fallback={<Skeleton />}>
        <List searchText={debouncedSearchValue} />
      </Suspense>
    </div>
  );
};
export default Search;
