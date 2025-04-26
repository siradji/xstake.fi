import React from "react";
import Image from "next/image"
import { Button } from "@/app/components/ui/buttons";


// Icons (replace with your real paths)
const bitcoinIcon = "@/assets/images/bitcoin.svg";
const xbtcIcon = "@/assets/images/icon-logo.svg";
const defiLogos = [
  "@/assets/images/uniswap.svg",
  "@/assets/images/morpho.svg",
  "@/assets/images/eingenlayer.svg",
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:px-28 md:px-16 px-md">
      <div className="max-w-7xl mx-auto mb-12">
      <h1 className="lg:text-7xl relative md:text-6xl text-5xl leading-[120%]">How It Works</h1>
      </div>

      {/* Steps with connector line */}
      <div className="relative max-w-7xl mx-auto">
        {/* Horizontal line on desktop */}
        <div className="hidden lg:block absolute inset-x-0 top-1/2 h-px bg-primary-neutral-600" />

        <div className="lg:flex lg:flex-row flex-col gap-8">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-br from-[#f3f2ff] to-white rounded-4xl shadow-lg p-8 lg:w-1/3">
           <div className="flex justify-between">
            <div className="bg-white h-5xl w-5xl rounded-full border border-primary-neutral-600 flex items-center justify-center">
              <Image
                width={48}
                height={48}
                src={require('@/assets/images/bitcoin.svg')}
                alt="Bitcoin"
                priority
              />
            </div>
            <span className="h-9 w-[75px] flex items-center justify-center text-base font-semibold text-[#FF9800] border border-[#FF9800] rounded-[360px] px-3 py-1 bg-[#FFF5E6]">
                Step 1
              </span>
           </div>
            <h3 className="mt-6 text-4xl leading-[120%] font-semibold text-neutral-black-600">Stake Your Bitcoin</h3>
            <p className="mt-4 leading-[130%] text-base text-neutral-black-300 ">
              Deposit Bitcoin to mint a liquid ERC20 token that mirrors your Bitcoin balance
            </p>
          </div>

          <div className="relative bg-gradient-to-br my-8 from-[#f3f2ff] to-white rounded-4xl shadow-lg p-8 lg:w-1/3">
           <div className="flex justify-between">
            <div className="bg-white h-5xl w-5xl rounded-full border border-primary-neutral-600 flex items-center justify-center">
              <Image
                width={48}
                height={48}
                src={require('@/assets/images/icon-logo.svg')}
                alt="Bitcoin"
                priority
              />
            </div>
            <span className="h-9 w-[75px] flex items-center justify-center text-base font-semibold text-[#FF9800] border border-[#FF9800] rounded-[360px] px-3 py-1 bg-[#FFF5E6]">
                Step 2
              </span>
           </div>
            <h3 className="mt-6 text-4xl leading-[120%] font-semibold text-neutral-black-600">Earn Native Yield</h3>
            <p className="mt-4 leading-[130%] text-base text-neutral-black-300 ">
              Earn staking rewards automatically, without locking up your BTC
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gradient-to-br from-[#f3f2ff] to-white rounded-4xl shadow-lg p-8 lg:w-1/3">
            <div className="flex justify-between">
              <div className=" flex -space-x-5">
                
                <div
                  className="bg-white h-5xl w-5xl rounded-full border border-primary-neutral-600 flex items-center justify-center shadow-md z-20"
                  style={{ marginRight: -20 }}
                >
                  
                  <Image
                    width={48}
                    height={48}
                    src={require(`@/assets/images/uniswap.svg`)}
                    alt="Uniswap"
                    
                  />
                </div>
                <div
                  className="bg-white h-5xl w-5xl rounded-full border border-primary-neutral-600 flex items-center justify-center shadow-md z-10"
                  style={{ marginLeft: 0 }}
                >

                <Image
                  width={48}
                  height={48}
                  src={require(`@/assets/images/morpho.svg`)}
                  alt="Morpho"
                    
                  />
                </div>
                <div
                  className="bg-white h-5xl w-5xl rounded-full border border-primary-neutral-600 flex items-center justify-center shadow-md z-0"
                  style={{ marginLeft: 0 }}
                >
                  <Image
                    width={48}
                    height={48}
                    src={require(`@/assets/images/eingenlayer.svg`)}
                    alt="Eingen Layer"
                    
                  />
                </div>
                  
              </div>
              <span className="h-9 w-[75px] flex items-center justify-center text-base font-semibold text-[#FF9800] border border-[#FF9800] rounded-[360px] px-3 py-1 bg-[#FFF5E6]">
                Step 3
              </span>
            </div>
           
            <h3 className="mt-6 text-4xl leading-[120%] font-semibold text-neutral-black-600">Leverage in DeFi</h3>
           <div className="flex justify-between">
            <p className="mt-4 leading-[130%] text-base text-neutral-black-300">
                Use your LTS xBTC across multiple DeFi for additional earnings
              </p>
              <button className="mt-4 inline-block bg-transparent border border-gray-800 text-gray-800 text-sm font-medium px-6 py-2 rounded-full">
                Explore
              </button>
           </div>
          </div>
        </div>

        {/* Mobile & Tablet: stacked cards */}
        
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Button
            onClick={() => window.location.href = '/app'}
            size="md"
            variant="primary"
        >
            Get Started Now
        </Button>
      </div>
    </section>
  );
}
