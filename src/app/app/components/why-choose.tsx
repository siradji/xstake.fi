import React from 'react';
import Image from 'next/image';

// Assets
import chainImg from '@/assets/images/chains-dark.svg';
import liquidityIcon from '@/assets/images/monetization_on.svg';
import leverageIcon from '@/assets/images/lock.svg';
import securityIcon from '@/assets/images/security.svg';
import transparencyIcon from '@/assets/images/blur_circular.svg';

const features = [
  {
    icon: liquidityIcon,
    title: 'Liquidity',
    description: 'Stay liquid and flexible while earning native rewards.',
  },
  {
    icon: leverageIcon,
    title: 'Leverage',
    description: 'Deposit, collateralize, and provide liquidity effortlessly.',
  },
  {
    icon: securityIcon,
    title: 'Security',
    description: 'Built on secure, decentralized infrastructure to protect your assets.',
  },
  {
    icon: transparencyIcon,
    title: 'Transparency',
    description: 'Track your native rewards and performance in real-time.',
  },
];

export const WhyChoose: React.FC = () => {
  return (
    <section className="relative  rounded-b-2xl! rounded-t-none! bg-[#0F1227] overflow-hidden py-3xl md:py-24 mb-6xl">
      {/* Floating chain image spanning sections */}
      <div className="absolute hidden lg:block -bottom-40 z-40 w-[543px] h-[543px] pointer-events-none">
        <Image
          src={chainImg}
          alt="decorative chain"
          width={500}
          height={500}
          className='w-1/2'
        />
      </div>

     

      <div className="w-full relative z-40 containe lg:px-28 md:px-16 px-md flex justify-between flex-col lg:flex-row items-start gap-12">
        {/* Heading */}
        <h2 className="text-white font-semibold leading-tight text-4xl md:text-6xl lg:text-7xl lg:w-[528px]">
          Why Choose Us for Bitcoin Staking?
        </h2>

        {/* Feature list */}
        <div className="flex-1 grid gap-6 w-full lg:w-full">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex items-center lg:w-[656px] w-full md:px-4 p-6 lg:p-8 border border-[#F0DED7] rounded-4xl bg-opacity-30 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-5xl h-5xl bg-[url(@/assets/images/icon-grad-lg.svg)] bg-right rounded-full bg-no-repeat bg-transparent flex items-center justify-center mr-4 border border-primary-neutral-600">
                <Image
                  src={icon}
                  alt={title}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
