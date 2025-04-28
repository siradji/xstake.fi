import React, { useState } from "react";
import Image from "next/image";

// Pins

// Illustrations
import depositChart  from '@/assets/images/bitcoin.svg';
import xbtcIcons     from '@/assets/images/icon-logo.svg';
import defiIcons     from '@/assets/images/award.svg';

import graph  from '@/assets/images/Graph.svg';
import xbtc     from '@/assets/images/Illustration.svg';
import stacked     from '@/assets/images/Logos.svg';

const steps = [
  {
    id: 0,
    label: 'Deposit Bitcoin',
    description: 'Deposit your Bitcoin securely into xstake to start earning rewards.',
    illustration: <Image src={depositChart} alt="Deposit chart" width={33} height={33} className="object-contain" />,
    cardImage: graph
  },
  {
    id: 1,
    label: 'Get xBTC',
    description: 'Instantly get liquid tokens representing your staked Bitcoin.',
    illustration: <Image src={xbtcIcons} alt="xBTC tokens" width={33} height={33} className="object-contain" />,
    cardImage: xbtc
  },
  {
    id: 2,
    label: 'Use in DeFi',
    description: 'Maximize your yield by using your tokens in the DeFi ecosystem.',
    illustration: <Image src={defiIcons} alt="Defi logos" width={33} height={33} className="object-contain" />,
    cardImage: stacked
  },
];

export const Stepper: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full px-4 md:px-0 mt-10">
      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block relative z-10">
        {/* Labels and Pins */}
        <div className="flex justify-between items-center mb-12">
          {steps.map(step => (
            <button
              key={step.id}
              onClick={() => setActive(step.id)}
              className="flex flex-col items-center focus:outline-none "
            >
              <span className="text-xl transition-colors text-neutral-black-600">{step.label}</span>
              
             
            
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mb-3xl">
            <Image src={require('@/assets/images/Pin.svg')} alt="Pin" width={20} height={20} />
            <Image src={require('@/assets/images/Pin.svg')} alt="Pin" width={20} height={20} />
            <Image src={require('@/assets/images/Pin.svg')} alt="Pin" width={20} height={20} />
        </div>

        {/* Connector Line */}
        <div className="absolute top-[85px] -z-10 left-0 right-8 h-px bg-gray-200 w-full" />

        {/* Content Card */}
        <div
          className={`absolute -bottom-[168px] transition-all duration-300 ease-in-out ${active == 2 ? 'left-[80%]! md:left-[87%]!' : ''}`}
          style={{
            left: `calc((100% - 64px) / 2 * ${active} + 120px)`,
            transform: 'translateX(-50%)',
          }}
        >
            <div className="rounded-2xl"></div>
            <div className={`absolute -top-16 rounded-xl left-0 w-18 h-20 bg-white flex items-center justify-center ${active == 2 ? 'left-[168px]' : ''} ${active == 1 ? 'left-[18px]' : ''}` }>
            <div className="rounded-full w-16 h-16 border border-primary-neutral-600 flex justify-center items-center">
            {steps[active].illustration}
                  </div>
                  </div>
          <div className="w-[239px] bg-white rounded-xl shadow-lg p-3">
            <Image src={steps[active].cardImage} alt="Graph" width={215} height={61} className="w-fit h-[61px]" />
            <p className="text-sm text-neutral-black-600  mt-6">{steps[active].description}</p>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="md:hidden flex flex-col space-y-6">
        {steps.map(step => (
          <div key={step.id} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-start">
            <div className="flex items-center mb-3">
              
                <Image src={require('@/assets/images/Pin.svg')} alt={step.label} width={20} height={20} />
              
              <h3 className="text-lg font-medium text-gray-800">{step.label}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">{step.description}</p>
            {step.illustration}
          </div>
        ))}
      </div>
    </div>
  );
};
