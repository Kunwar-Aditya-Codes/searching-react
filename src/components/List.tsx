import useSWR from 'swr';
import { getSearchResults } from '../api/wikiApi';
import Skeleton from './Skeleton';

const List = ({ searchText }: { searchText: string }) => {
  const { error, data } = useSWR(
    searchText ? searchText : null,
    getSearchResults,
    { suspense: true }
  );

  const results = data?.query?.pages;

  return (
    <div className='overflow-y-scroll  h-[40rem] border-b p-4'>
      {error && <p>error...</p>}
      {data?.query?.pages && (
        <ul className=''>
          {Object.values(results).map((result: any) => {
            console.log(result);
            return (
              <div key={result.pageid} className='text-white my-4 space-y-2'>
                <div className='flex items-center space-x-4'>
                  <img src={result.thumbnail?.source} alt='' />
                  <h1 className='text-2xl underline underline-offset-4 '>
                    {result.title}
                  </h1>
                </div>
                <p className='text-sm font-light'>{result.extract}</p>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default List;
