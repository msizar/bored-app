import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';

const RESET_TITLE = 'Reset';
type ChipProps = {
  title: string;
};

const Chips: FC<ChipProps> = ({ title }) => {
  const params = useSearchParams();
  const filterType = params.get('type');
  const activeStyle = filterType === title ? 'bg-sky-500' : '';
  const resetColor = title === RESET_TITLE ? 'bg-white text-gray-900 ' : '';

  return (
    <Link
      href={{
        pathname: '',
        query: { type: title === RESET_TITLE ? '' : title },
      }}
    >
      <div
        className={`cursor-pointer ${resetColor}  ${activeStyle} hover:bg-sky-700 h-10 px-5 py-2 rounded border-solid border-2 border-sky-500 `}
      >
        {title}
      </div>
    </Link>
  );
};

type FilterChipsProps = {
  types: string[];
};

const FilterChips: FC<FilterChipsProps> = ({ types }) => {
  return (
    <div className="flex gap-3">
      <p className="m-2">Filter:</p>

      <div className="flex gap-3 mx-auto overflow-x-scroll scroll-container max-w-screen-lg">
        <Chips key="clearAll" title={RESET_TITLE} />
        {types &&
          types.map((type, index) => (
            <Chips key={`${type}+${index}`} title={type} />
          ))}
      </div>
    </div>
  );
};

export default FilterChips;
