import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Image from 'next/image';

const FilterSection = ({
  categories,
  activeCategory,
  handleCategoryClick,
  searchQuery,
  setSearchQuery
}: {
  categories: string[];
  activeCategory: string;
  handleCategoryClick: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) => {
  const [searchMode, setSearchMode] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All')

  return (
    <div className="lg:px-[212px] md:px-4xl px-md mt-8">
      <div className="relative overflow-x-auto scrollbar-hide hidden md:block w-full">
        {!searchMode ? (
          <ScrollMenu wrapperClassName="no-scrollbar overflow-x-auto w-full">
            {categories.map((cat) => (
              <div key={cat} style={{ margin: '0 8px' }}>
                <button
                  onClick={() => handleCategoryClick(cat)}
                  className={
                    'px-6 py-4 whitespace-nowrap rounded-full border ' +
                    (cat === activeCategory
                      ? 'bg-neutral-dark-blue-600 text-white border-none'
                      : 'bg-transparent text-neutral-dark-blue-600 border-neutral-dark-blue-600')
                  }
                >
                  {cat}
                </button>
              </div>
            )) as any }
            <div style={{ margin: '0 8px' }}>
              <button
                onClick={() => setSearchMode(true)}
                className="px-6 py-4 whitespace-nowrap rounded-full border bg-transparent text-neutral-dark-blue-600 border-neutral-dark-blue-600 flex items-center gap-2"
              >
                Search <Search size={16} />
              </button>
            </div>
          </ScrollMenu>
        ) : (
          <div className="flex items-center w-full border border-neutral-dark-blue-600 rounded-full px-4 py-2 gap-2">
            <button
              onClick={() => {
                setSearchMode(false);
                setSearchQuery('');
              }}
              className="text-neutral-dark-blue-600"
            >
              <X size={18} />
            </button>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-neutral-dark-blue-600 placeholder:text-neutral-dark-blue-400"
              placeholder="Search articles..."
            />
            <button className="text-neutral-dark-blue-600">
              <Search size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="flex relative md:hidden gap-2 mt-4">
      <button
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="relative z-10"
        >
          <Image
            src={require('@/assets/images/Button.svg')}
            alt="Filter Icon"
            width={52}
            height={52}
          />
        </button>
        <div className="flex items-center w-full border border-neutral-dark-blue-600 rounded-full px-4 py-2 gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-neutral-dark-blue-600 placeholder:text-neutral-dark-blue-400"
            placeholder="Search articles..."
          />
          <button className="text-neutral-dark-blue-600">
            <Search size={16} />
          </button>
        </div>
        {isFilterOpen && (
        <div className="absolute left-0 top-[110%] bg-white border border-neutral-dark-blue-200 rounded-xl w-[200px] z-20 shadow-md">
          <ul className="flex flex-col">
            {categories.map((filter) => (
              <li
                key={filter}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-neutral-dark-blue-100 ${
                  selectedFilter === filter ? 'bg-neutral-dark-blue-100 font-semibold' : ''
                }`}
                onClick={() => {
                  handleCategoryClick(filter)
                  setIsFilterOpen(false)
                }}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default FilterSection;
