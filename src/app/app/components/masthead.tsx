import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/buttons";
import { Stepper } from "./stepper";

// Placeholder icons - replace with your own SVGs or Images
const bitcoinIcon = "/icons/bitcoin.svg";
const xbtcIcon = "/icons/xbtc.svg";
const defiIcon = "/icons/defi.svg";
const knotImage = "/images/knot.png"; // Decorative 3D shape

function Card({ children, className }: any) {
  return (
    <div className={`bg-white rounded-2xl overflow-hidden ${className}`}>{children}</div>
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
    <section className="relative bg-gradient-to-br from-[#f5f4ff] to-[#fef6f3] overflow-hidden py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-4 md:px-8 ">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 text-left">
            
          <h1 className="text-4xl leading-[120%] md:text-6xl lg:text-7xl text-neutral-black-600 mb-4">
            Stake Your Bitcoin,
            <p className="flex items-center lg:justify-center">
            <p className="rounded-2xl text-2xl inline-flex text-neutral-black-300 flex bg-linear-to-br from-white to-[#E1DCEE] py-4 px-6 w">
                +5k users
                <br />
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
            </p>
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
        <div className="w-full lg:w-1/2 relative">
          {/* Decorative 3D shape */}
          

          <Stepper />
        </div>
      </div>
    
      <div className="flex flex-row gap-4 mb-12 items-end">
            <Card className="p-6 w-[408px] flex items-start justify-center flex-col h-64 bg-gradient-to-br from-white to-[#F0DED7]">
              <p className="text-7xl text-neutral-black-600 mb-2">8%</p>
              <p className="text-neutral-black-300 text-2xl">Get yield on your BTC with competitive rates</p>
            </Card>
            <Card className="px-6 w-[408px] flex items-start justify-center flex-col pt-6 bg-gradient-to-br from-white to-[#E1DCEE]">
              <p className="text-7xl text-neutral-black-600 mb-2">2x Points</p>
              <p className="text-neutral-black-300 text-2xl">Earn xPoints every time you mint xBTC</p>
              <Image
                width={312}
                height={189}
                src={require('@/assets/images/card-image.svg')}
                alt="Decor"
                priority
                className=""
            />
            </Card>
          </div>

      {/* Mobile & Tablet Tab Stack */}
      <div className="md:hidden px-4 md:px-8 pb-12">
        {steps.map((step) => (
          <div key={step.value} className="mb-6">
            <Card>
              <div className="flex items-start p-6">
                <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center mr-4">
                  <img src={step.icon} alt="" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.label}</h3>
                  <p className="text-gray-600 text-sm">{step.text}</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Image
        width={436}
        height={436}
        src={require('@/assets/images/massthead-knot.svg')}
        alt="Decor"
        priority
        className="hidden lg:block absolute right-0 lg:top-1/2 w-64 opacity-80"
    />
    <Image
        width={300}
        height={300}
        src={require('@/assets/images/knot-md.svg')}
        alt="Decor"
        priority
        className="hidden lg:hidden md:block absolute right-0 md:top-[30%] w-64 opacity-80"
    />
    </section>
  );
}
