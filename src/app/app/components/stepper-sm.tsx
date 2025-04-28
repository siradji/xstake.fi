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

export const StepperSm: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full px-4 md:px-0 mt-10">
      {/* DESKTOP LAYOUT */}
      <div className="block relative z-10">

        {/* Connector Line */}
        <div className="absolute -z-10 left-[32px]  w-px bg-primary-neutral-600 h-[85%]" />

        {/* Content Card */}
        {steps.map((step, index) => (
            <div
            className={`relative mb-4`}
            key={index}
          >
              <div className="rounded-2xl"></div>
              <div className={`  absolute top-0 rounded-l-2xl w-[4.5rem] h-20 bg-white flex items-center pl-3` }>
              <div className="rounded-full w-16 h-16 border border-primary-neutral-600 flex justify-center items-center">
              {step.illustration}
                    </div>
                    </div>
            <div style={{ width: "calc(100% - 72px)", borderTopLeftRadius: "none" }} className="ml-auto md:w-[239px]  bg-white rounded-tl-none! rounded-2xl shadow-lg p-3 flex flex-col justify-between ">
              <p className="text-sm text-neutral-black-600  mb-6">{step.description}</p>
              <Image src={step.cardImage} alt="Graph" width={step.id == 0 ? 215 : 167} height={61} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
