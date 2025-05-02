"use client";

import React, { useState } from 'react';
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
  image: '@/assets/images/blog-image.svg', // placeholder path
  category: "All Posts"
}));

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles =
  activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

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
     <section className="relative overflow-hidden py-16 lg:px-[212px] md:px-16 px-md">
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
          {/* Featured card */}
          <div className="relative w-full lg:w-1/2">
            <div className="bg-primary-cool-50 lg:w-fit w-full rounded-4xl p-6 shadow-lg overflow-hidden">
              <div className="relative w-full">
                <Image
                  src={require("@/assets/images/blog-image.svg")}
                  alt={articles[0].title}
                  width={457}
                  height={226}
                  className='w-full rounded-t-2xl'
                />
              </div>
              <div className="p-6 bg-[#FEFEFE] rounded-b-2xl md:bg-[url(@/assets/images/card-gradient.svg)] bg-no-repeat bg-right">
                <p className="text-xs text-neutral-black-300">{articles[0].date}</p>
                <h3 className="my-4 text-lg font-medium text-gray-900">
                  {articles[0].title}
                </h3>
                <div
                  onClick={() => null} 
                  className="p-0 text-sm text-neutral-dark-blue-600 flex items-center gap-1 cursor-pointer"

                >
                  Read More <ArrowRight size={14} />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2">
                {pages.slice(0, 4).map((p) => (
                  <span
                    key={p}
                    className={
                      'w-8 h-1 rounded-full ' +
                      (p === currentPage ? 'bg-indigo-500' : 'bg-gray-300')
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
     </div>

      {/* Filters */}
      <FilterSection
        categories={categories}
        activeCategory={activeCategory}
        handleCategoryClick={handleCategoryClick}
      />



      {/* Articles grid */}
      <div className="mx-auto lg:px-[212px] md:px-16 px-md mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative">
                <Image
                  src={require("@/assets/images/blog-image.svg")}
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

      {/* Pagination */}
      <div className="container mx-auto px-6 lg:px-12 my-12 justify-center items-center hidden md:flex">
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
