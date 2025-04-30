import { useState } from "react";
import { Search, X } from "lucide-react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Image from 'next/image';

const FilterSection = ({ categories, activeCategory, handleCategoryClick }: any) => {
  const [searchMode, setSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container lg:px-[212px] md:px-4xl px-md mt-8">
    <div className="overflow-x-auto scrollbar-hide hidden md:block w-full">
    
    {!searchMode ? (
      <ScrollMenu wrapperClassName="no-scrollbar overflow-x-auto w-full">
         {categories.map((cat: string) => (
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
      )) as any}
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
              <button onClick={() => setSearchMode(false)} className="text-neutral-dark-blue-600">
                <X size={18} />
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-neutral-dark-blue-600 placeholder:text-neutral-dark-blue-400"
                placeholder="Search articles..."
              />
              <button onClick={() => setSearchMode(false)} className="text-neutral-dark-blue-600">
                <Search size={16} />
              </button>
            </div>
    )}
    </div>
    <div className="flex md:hidden gap-2">
      
      <Image
        src={require("@/assets/images/Button.svg")}
        alt="Alt Icon"
        width={52}
        height={52}
        className=''
      />
       

      <div className="flex items-center w-full border border-neutral-dark-blue-600 rounded-full px-4 py-2 gap-2">
              
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-neutral-dark-blue-600 placeholder:text-neutral-dark-blue-400"
                placeholder="Search articles..."
              />
              <button onClick={() => setSearchMode(false)} className="text-neutral-dark-blue-600">
                <Search size={16} />
              </button>
            </div>
    </div>
  </div>
  );
};

export default FilterSection;
