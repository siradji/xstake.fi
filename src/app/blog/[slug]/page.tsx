"use client"

import { Button } from '../../components/ui/buttons';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from 'react';
import SwiperCore from "swiper"

const articles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function ArticlePage() {
  const swiperRef = useRef<SwiperCore>();
  return (
    <div className="lg:px-[108px] px-md py-8 text-neutral-dark-blue-950">
      {/* Back Button */}
      <button className="flex rounded-[100px] items-center text-sm px-4 py-3 text-neutral-dark-blue-600 border border-neutral-dark-blue-600 mb-4">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back
      </button>

      {/* Hero Image */}
      <div className="rounded-3xl overflow-hidden mb-4">
        <Image src={require("@/assets/images/blog-image.svg")} alt="Hero" width={1016} height={365} className="w-full" />
      </div>

      {/* Date and Title */}
      <p className="text-xl my-8 text-neutral-black-300">2024-10-28</p>
      <h1 className="md:text-5xl text-neutral-black-600 text-3xl font-medium leading-[120%] my-8">
        XBTC now integrated with DeFi Protocol XYZ for enhanced yield.
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* TOC */}
        <aside className="w-full md:w-[317px]">
          <div className="bg-white shadow-md p-4 rounded-xl text-sm">
            <h2 className="font-medium text-xl text-neutral-black-600 mb-4">Table of content</h2>
            <ul className="list-decimal list-inside text-primary-blue-600 text-neutral-black-300">
                <li className='mb-4'><a href="#integration">What Does This Integration Mean?</a></li>
                <li className='mb-4'><a href="#about-protocol">About DeFi Protocol XYZ</a></li>
                <li className='mb-4'><a href="#about-xbtc">About xBTC</a></li>
                <li className=''><a href="#future">Future Prospects</a></li>
            </ul>
          </div>
        </aside>

        {/* Main Article */}
        <article className="w-full space-y-6">
          <section id="integration ">
            <p className='text-neutral-black-300'>
              xBTC holders have a new reason to celebrate as the innovative Bitcoin liquid staking token has officially
              integrated with DeFi Protocol XYZ. This partnership unlocks powerful new opportunities for yield
              generation, providing users with greater flexibility and financial returns within the decentralized finance
              (DeFi) ecosystem.
            </p>
            <h3 className="font-medium mb-4 text-xl mt-6 text-neutral-black-600">What Does This Integration Mean?</h3>
            <p className='text-neutral-black-300'>
              DeFi Protocol XYZ is known for its advanced suite of DeFi tools, offering users opportunities to stake,
              lend, and pool assets for competitive rewards. With xBTC now integrated, users can seamlessly utilize
              their staked Bitcoin in Protocol XYZ’s ecosystem to:
            </p>
            <ul className="text-neutral-black-300 mt-4 list-disc list-inside space-y-1 marker:text-[#6147EC]">
              <li><span className='font-bold mb-4'>Earn Additional Rewards:</span> Deploy xBTC in liquidity pools or staking programs to earn enhanced returns.</li>
              <li><span className='font-bold mb-4'>Access Advanced DeFi Tools:</span> Participate in lending markets, automated yield farming strategies, and other DeFi services supported by XYZ.</li>
              <li><span className='font-bold'>Maximize Portfolio Efficiency:</span> Diversify earnings by combining the base yield from xBTC staking with additional DeFi rewards from Protocol XYZ.</li>
            </ul>
          </section>

          {/* Mid Image */}
          <div className="rounded-4xl overflow-hidden my-4">
            <Image src={require("@/assets/images/cube.svg")} alt="Cube" width={666} height={365} className="w-full" />
          </div>

          <section id="about-xbtc">
            <h3 className="font-medium mb-4 text-xl mt-6 text-neutral-black-600">About xBTC</h3>
            <p className='text-neutral-black-300'>
              xBTC is a liquid staking token designed to bring Bitcoin into the world of DeFi. By staking Bitcoin
              through xBTC, users receive a tokenized representation of their Bitcoin holdings that can be deployed
              across the Ethereum network for additional yield. The platform is committed to decentralization,
              security, and providing cutting-edge financial tools for its users.
            </p>
          </section>
        </article>
      </div>

      {/* See other updates */}
      <div className="relative mt-16">
        <h2 className="text-lg font-semibold mb-4">See other network updates</h2>
          {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-white shadow p-2 rounded-full"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-white shadow p-2 rounded-full"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={16}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1.1 }, // 👈 Shows 1 + partial next
        }}
        className="pl-4 pr-6 md:pl-0 md:pr-0" // 👈 Add left and right padding for proper peeking
      >
        {articles.map((_, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <div className="relative">
                <Image
                  src={require("@/assets/images/blog-image.svg")}
                  alt="Article"
                  width={300}
                  height={150}
                  className="rounded-xl mb-2 w-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-neutral-black-300">2024-10-28</p>
                  <h4 className="my-4 text-sm font-medium text-gray-900">
                    xBTC now integrated with DeFi Protocol XYZ for enhanced yield.
                  </h4>
                </div>
                <div className="p-0 text-sm text-neutral-dark-blue-600 flex items-center gap-1 cursor-pointer">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>    
      </div>
      
    </div>
  );
}
