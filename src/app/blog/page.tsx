"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import Image from 'next/image';
import { ArrowDown, ArrowRight, ChevronDown, Search } from 'lucide-react';
import { Button } from '../components/ui/buttons';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import FilterSection from '../components/ui/articles-filter';
import { CtaSection } from '../app/components/cta-section';
import { ArticlesCta } from '../app/components/articles-cta';

// Sample data
const categories = [
  'All Posts',
  'Bitcoin Staking',
  'DeFi & xBTC',
  'How-To Guides',
  'Industry Insights',
  'Rewards'
];

const articles = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  date: '2024-10-28',
  title: 'xBTC now integrated with DeFi Protocol XYZ for enhanced yield.',
  image: require("@/assets/images/blog-image.svg"), // placeholder path
  category: "All Posts"
}));

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All Posts');

  const [searchQuery, setSearchQuery] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    setSearchQuery(''); // Clear search on category change
    setCurrentPage(1);
  };

  const filteredArticles = articles.filter((a) => {
    const matchCategory =
      activeCategory === 'All Posts' || a.category === activeCategory;
    const matchSearch = a.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="w-full relative">
      <div className="absolute left-[70%] hidden lg:block top-[10%]  pointer-events-none">
          <Image
            src={require("@/assets/images/articles-masthead-right.svg")}
            alt="decorative chain"
            width={756}
            height={610}
            className='w-full'
          />
        </div>
      {/* Hero Section */}
     <div className="relative">
        <div className="absolute lg:right-[70%] md:left-0 hidden md:block top-[40%] lg:top-0 z-10 pointer-events-none">
          <Image
            src={require("@/assets/images/masthead-blog-grad.svg")}
            alt="decorative chain"
            width={756}
            height={610}
            className='w-full'
          />
        </div>
     <section className="relative overflow-hidden py-16 lg:px-[108px] px-md">
        <div className="flex flex-col lg:flex-row items-center relative z-20 justify-between gap-8">
          {/* Text block */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
              Our Blog
            </h2>
            <p className="mt-2 text-gray-600">
              Stay in the loop and keep up with all our news and updates!
            </p>
            <Button onClick={() => null} className="mt-4 bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800">
              Read More
              <ArrowDown size={16} />
            </Button>
          </div>
          <div className="relative w-full lg:w-1/2">
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="custom-bullet mt-6 ${className}"></span>`
                },
              }}
              spaceBetween={24}
              slidesPerView={1}
              className="bg-primary-cool-50 w-full rounded-4xl p-6 shadow-lg overflow-hidden"
            >
              {articles.slice(0, 4).map((article, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-primary-cool-50 lg:w-fit w-full rounded-4xl p-6 shadow-lg overflow-hidden">
                    {/* Image */}
                    <div className="relative w-full">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={457}
                        height={226}
                        className="w-full rounded-t-2xl"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-[#FEFEFE] rounded-b-2xl md:bg-[url(@/assets/images/card-gradient.svg)] bg-no-repeat bg-right">
                      <p className="text-xs text-neutral-black-300">{article.date}</p>
                      <h3 className="my-4 text-lg font-medium text-gray-900">
                        {article.title}
                      </h3>
                      <div className="p-0 text-sm text-neutral-dark-blue-600 flex items-center gap-1 cursor-pointer">
                        Read More <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination Dots */}
            {/* <div className="mt-6 flex items-center justify-center gap-2 swiper-pagination" /> */}
          </div>
        </div>
      </section>
     </div>

      {/* Filters */}
      <FilterSection
        categories={categories}
        activeCategory={activeCategory}
        handleCategoryClick={handleCategoryClick}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />



      
      {filteredArticles.length == 0 ? (
        <div className="flex justify-center flex-col items-center md:px-[108px] text-center px-md md:p-8 py-10 lg:py-14">
          <Image
            src={require("@/assets/images/folder.svg")}
            alt="Folder"
            width={90}
            height={90}
            className='hidden md:block'
          />
          <Image
            src={require("@/assets/images/folder.svg")}
            alt="Folder"
            width={60}
            height={60}
            className='block md:hidden'
          />
          <h3 className="font-medium text-3xl mt-4 text-neutral-black-600 flex">Sorry, no results were found for your request</h3>
          <p className="text-neutral-black-300 mt-2 mb-4">Please try using different keywords:</p>
          <div className="flex flex-wrap! w-full justify-center items-center">
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
            )) }
          </div>
        </div>
      ) : (
        <div className="mx-auto lg:px-[108px] px-md mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative">
                <Image
                  src={art.image}
                  alt={art.title}
                  width={317}
                  height={226}
                  className='w-full rounded-t-2xl'
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-neutral-black-300">{art.date}</p>
                  <h4 className="my-4 text-sm font-medium text-gray-900">
                    {art.title}
                  </h4>
                </div>
                <div
                  onClick={() => null} 
                  className="p-0 text-sm text-neutral-dark-blue-600 flex items-center gap-1 cursor-pointer"

                >
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* Pagination */}
      <div className="mx-auto px-6 lg:px-12 my-12 justify-center items-center hidden md:flex">
        {pages.slice(0, 10).map((p) => (
          <button
            key={p}
            onClick={() => setCurrentPage(p)}
            className={
              'flex w-6 h-6 rounded-lg text-neutral-black-300 justify-center items-center text-sm' +
              (p === currentPage
                ? 'bg-primary-cool-200'
                : 'bg-transparent')
            }
          >
            {p}
          </button>
        ))}
      </div>

     
      
    </div>
  );
}
