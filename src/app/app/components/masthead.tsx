import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/buttons";
import { Stepper } from "./stepper";
import { StepperSm } from "./stepper-sm";

// Placeholder icons - replace with your own SVGs or Images
const bitcoinIcon = "/icons/bitcoin.svg";
const xbtcIcon = "/icons/xbtc.svg";
const defiIcon = "/icons/defi.svg";
const knotImage = "/images/knot.png"; // Decorative 3D shape

function Card({ children, className }: any) {
  return (
    <div className={`bg-white rounded-2xl md:rounded-4xl overflow-hidden ${className}`}>{children}</div>
  );
}

function StepTabs({ steps, current, onChange }: any) {
  return (
    <div className="hidden md:block w-full relative lg:pl-2 pr-8 py-3 md:px-16 px-md md:mt-9">
      {/* <div className="absolute inset-0 top-[32px] lg:left-[85px] left-[100px] flex items-center">
        <div className="lg:w-[450px] md:w-[90%] h-px bg-gray-300"></div>
      </div> */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-primary-neutral-600" />
      <div className="relative flex justify-between w-full">
        {steps.map((step: any, index: number) => (
          <div className="w-full">
            <button
              key={step.value}
              onClick={() => onChange(step.value)}
              className="flex flex-col items-center z-10 focus:outline-none"
            >
              <span className={`text-xl mb-2 transition-colors text-neutral-black-600`}>{step.label}</span>
              
            </button>
            <div className="flex items-center">
            <Image
                width={30}
                height={30}
                src={require('@/assets/images/Pin.svg')}
                alt="Pin"
                priority
                className={index == 2 ? "ml-auto" : ""}
            />
            <div className="h-px w-full bg-primary-neutral-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Masthead() {
  const [tab, setTab] = useState("deposit");
  const steps = [
    {
      value: "deposit",
      label: "Deposit Bitcoin",
      icon: bitcoinIcon,
      text: "Deposit your Bitcoin securely into xstake to start earning rewards.",
      arrowOffset: "left-8",
    },
    {
      value: "getxbtc",
      label: "Get xBTC",
      icon: xbtcIcon,
      text: "Instantly get liquid tokens representing your staked Bitcoin.",
      arrowOffset: "left-1/2",
    },
    {
      value: "defi",
      label: "Use in Defi",
      icon: defiIcon,
      text: "Maximize your yield by using your tokens in the DeFi ecosystem.",
      arrowOffset: "left-[calc(100%-2rem)]",
    },
  ];

  return (
    <section className="relative  overflow-hidden pb-5xl pt-12 md:py-20">
       <div className="absolute hidden lg:block inset-0 z-10 top-[25%] left-[75%]">
          <Image
              width={756}
              height={610}
              src={require('@/assets/images/masthead-right-grad.svg')}
              alt="Matallic Stone"
              priority
          />
        </div>
        <div className="absolute hidden lg:block inset-0 z-10 top-[10%] -left-[30%]">
          <Image
              width={756}
              height={610}
              src={require('@/assets/images/masthead-right-grad.svg')}
              alt="Matallic Stone"
              priority
              className="w-1/2"
          />
        </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-4 md:px-8 ">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 text-left relative z-20">
            
          <h1 className="leading-[120%] text-6xl lg:text-7xl text-neutral-black-600 mb-4">
            Stake Your Bitcoin,
            <span className="md:flex hidden items-center lg:justify-center">
            <p className="rounded-2xl text-2xl inline-flex text-neutral-black-300 flex bg-linear-to-br from-white to-[#E1DCEE] mr-4 md:py-4 md:px-6 py-2.5 px-2">
                +5k users
                
                <span className="ml-2">
                    <Image
                        width={32}
                        height={32}
                        src={require('@/assets/images/profile-icon.svg')}
                        alt="Profile Icon"
                        priority
                        className=""
                    />
                    </span>
                </p> 
                Unlock DeFi
            </span>
            <p className="rounded-2xl text-2xl md:hidden inline-flex text-neutral-black-300 flex bg-linear-to-br from-white to-[#E1DCEE] mr-4 md:py-4 md:px-6 py-2.5 px-2">
                +5k users
                
                <span className="ml-2">
                    <Image
                        width={32}
                        height={32}
                        src={require('@/assets/images/profile-icon.svg')}
                        alt="Profile Icon"
                        priority
                        className=""
                    />
                    </span>
                </p> 
                <span className="md:hidden block">Unlock DeFi</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-black-300 mb-6">
            Earn yield on your Bitcoin through liquid staking
          </p>
          <Button
            onClick={() =>  null}
            className="flex text-xl font-bold"
            size="md"
            >
            Get xBTC <Image
                width={40}
                height={40}
                src={require('@/assets/images/xstake-icon-light.svg')}
                alt="Xstake"
                priority
                className="ml-4"
            />
            </Button>

          {/* Stats Cards */}
          
        </div>

        {/* Right Column */}
        <div className="w-full hidden md:block lg:w-1/2 relative lg:mb-0 md:mb-[140px]">
          {/* Decorative 3D shape */}
          

          <Stepper />
        </div>
      </div>
    
      <div className="flex flex-row mt-8 md:mt-0 px-4 md:px-0 gap-4 mb-12 items-end relative z-10">
            <Image
              width={263}
              height={287}
              src={require('@/assets/images/Subtract.svg')}
              alt="Profile Icon"
              priority
              className="hidden lg:block"
            />
             <Image
              width={26}
              height={187}
              src={require('@/assets/images/Subtract(2).svg')}
              alt="Profile Icon"
              priority
              className="md:block lg:hidden hidden"
            />
            <Card className="flex-1 px-3 py-3.5 w-[163px] h-[104px] md:p-6 lg:w-[408px] md:w-[280px] lg:h-[265px] flex items-start justify-center flex-col md:h-[182px] bg-gradient-to-br from-white to-[#F0DED7]">
              <p className="lg:text-7xl text-3xl md:text-5xl text-neutral-black-600 mb-2">8%</p>
              <p className="text-neutral-black-300 text-sm md:text-base lg:text-2xl">Get yield on your BTC with competitive rates</p>
            </Card>
            <Card className="pt-3.5 pb-3.5 md:pb-0! w-[163px] h-[104px] md:p-6 flex-1 px-3 md:w-[280px] lg:w-[408px] lg:h-[376px] flex items-start justify-center flex-col md:pt-6! bg-gradient-to-br from-white to-[#E1DCEE] md:h-[253px]">
              <p className="lg:text-7xl text-3xl md:text-5xl text-neutral-black-600 mb-2">2x Points</p>
              <p className="text-neutral-black-300 text-sm md:text-base lg:text-2xl">Earn xPoints every time you mint xBTC</p>
              <Image
                width={312}
                height={189}
                src={require('@/assets/images/card-image.svg')}
                alt="Decor"
                priority
                className="lg:block hidden  ml-auto"
            />
            <Image
                width={214}
                height={129}
                src={require('@/assets/images/card-image-md.svg')}
                alt="Decor"
                priority
                className="lg:w-fit hidden md:block ml-auto lg:hidden"
            />
            </Card>
            <Image
              width={289}
              height={280}
              src={require('@/assets/images/Subtract(1).svg')}
              alt="Profile Icon"
              priority
              className="hidden lg:block"
            />
             <Image
              width={108}
              height={200}
              src={require('@/assets/images/Subtract(3).svg')}
              alt="Profile Icon"
              priority
              className="md:block lg:hidden hidden"
            />
          </div>

          <div className="w-full md:hidden block lg:w-1/2 relative lg:mb-0 md:mb-[140px]">
          {/* Decorative 3D shape */}
          

          <StepperSm />
        </div>
      
      <Image
        width={436}
        height={436}
        src={require('@/assets/images/massthead-knot.svg')}
        alt="Decor"
        priority
        className="hidden lg:block absolute z-20 right-0 lg:top-1/2 w-64 opacity-80"
    />
    <Image
        width={150}
        height={150}
        src={require('@/assets/images/knot-md.svg')}
        alt="Decor"
        priority
        className="hidden lg:hidden md:block absolute z-20 right-0 md:top-[45%] w-[150px] opacity-80"
    />
    </section>
  );
}
