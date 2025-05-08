import { Button } from '@/app/components/ui/buttons';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

type BadgeTier = 'grey' | 'bronze' | 'silver' | 'gold';

interface BadgeCardProps {
    tier: 'grey' | 'bronze' | 'silver' | 'gold' | BadgeTier;
    pointsEarned?: number;
    pointsNeeded?: number;
    yieldBoost: string;
    featureText?: string;
}

const BadgeCard: React.FC<BadgeCardProps> = ({
    tier,
    pointsEarned,
    pointsNeeded,
    yieldBoost,
    featureText
}) => {
    const tierConfig = {
        grey: {
            label: 'Grey Badge',
            border: 'border-[#64656f]',
            badgeBg: 'bg-[#e8e8e8]',
            textColor: 'text-[#64656f]',
            featureColor: 'text-[#64656f]'
        },
        bronze: {
            label: 'Bronze Badge',
            border: 'border-[#ff9800]',
            badgeBg: 'bg-[#FFF5E6]',
            textColor: 'text-[#ff9800]',
            featureColor: 'text-[#ff9800]'
        },
        silver: {
            label: 'Silver Badge',
            border: 'border-[#6147EC]',
            badgeBg: 'bg-[#DEDCF9]',
            textColor: 'text-[#6147EC]',
            featureColor: 'text-[#6147EC]'
        },
        gold: {
            label: 'Gold Badge',
            border: 'border-[#E88A00]',
            badgeBg: 'bg-[#FFDFB0]',
            textColor: 'text-[#E88A00]',
            featureColor: 'text-[#E88A00]'
        }
    };

    const config = tierConfig[tier];

    return (
        <div className={`relative flex p-4 pt-6 w-[212px] shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border-[1px] ${config.border} bg-[#fefefe] shadow-[0px_4px_12px_0px_#E2DDEE]`}>
            <p className="text-neutral-black-300 text-body1 leading-body1">
                {pointsEarned ? `Points earned ${pointsEarned}` : `Points needed ${pointsNeeded}`}
            </p>

            <h5 className="text-subtitle leading-subtitle text-neutral-black-600">
                {yieldBoost} Yield Boost
            </h5>

            {featureText && (
                <p className={`${config.featureColor} text-body1 leading-body1 text-center`}>
                    {featureText}
                </p>
            )}

            <div className={`text-body2 leading-body2 absolute top-[-20px] left-[48px] inline-flex items-center justify-center gap-1 rounded-3xl border-[1px] ${config.border} ${config.badgeBg} ${config.textColor} p-2 z-[10]`}>
                <Image
                    src={require('@/assets/images/xBTC-badge.png')}
                    alt="badge"
                    width={24}
                    height={16}
                />
                {config.label}
            </div>
        </div>
    );
};

const BadgeCardsGrid = () => {
    return (
        <></>
    );
};

export { BadgeCard, BadgeCardsGrid };

const RewardSection = () => {
    const scrollRef = useRef < HTMLDivElement > (null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            setShowLeftArrow(container.scrollLeft > 10);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollAmount = container.offsetWidth * 0.9;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };
    return (
        <div className="max-w-[1016px] flex flex-col gap-4 w-full rounded-3xl bg-white p-4 md:p-6 shadow-md relative">


            <h2 className="relative text-h5 leading-h5 font-medium">Rewards points accumulation</h2>
            {showLeftArrow && (
                <button
                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 size-10 sm:size-12 p-2 rounded-full border border-neutral-dark-blue-600 bg-neutral-black-50 flex items-center justify-center"
                    onClick={() => scroll('left')}
                >
                    <ArrowLeft size={20} />
                </button>
            )}
            <button
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 size-10 sm:size-12 p-2 rounded-full border border-neutral-dark-blue-600 bg-neutral-black-50 flex items-center justify-center"
                onClick={() => scroll('right')}
            >
                <ArrowRight size={20} />
            </button>

            <div className="overflow-hidden relative bg-purple-50 p-4 md:p-6 space-y-6 rounded-3xl bg-[linear-gradient(90deg,#FFFFFF_0%,#E1DCEE_100%)] border-primary-neutral-600 z-[2]">
                <div className="absolute opacity-40 -top-[200px] left-[0px] size-80 bg-[url('@/assets/images/app-staking-bg-image.svg')] bg-no-repeat bg-cover  z-[-1] bg-left-top"></div>


                <div className="flex flex-col md:flex-row items-start sm:items-center justify-between w-full gap-4 relative">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 w-full md:w-auto">
                        <div className='flex justify-between'><div className="flex justify-center items-center gap-2">
                            <Image
                                src={require('@/assets/images/xBTC-badge.png')}
                                alt="points"
                                width={40}
                                height={40}
                                className="rounded-full size-[24px] md:size-[40px]"
                            />
                            <p className="text-body1 leading-body1 md:text-subtitle md:leading-subtitle text-neutral-300">Total Points</p>
                            <h4 className="text-subtitle leading-subtitle md:text-h4 md:leading-h4 font-bold">450</h4>

                        </div>
                            <div className="block md:hidden pt-2">
                                <Button variant="secondary" size='sm' onClick={() => console.log('Redeem clicked')}>Redeem</Button>
                            </div></div>
                        <div className="text-sm rounded-full border w-fit border-neutral-dark-blue-300 px-3 py-2 text-neutral-dark-blue-300 bg-neutral-black-50">
                            Grey Badge - 2% Yield Boost
                        </div>

                        <div className="text-sm text-gray-500">
                            Earn 50 more points for Silver Badge and 5% Yield Boost
                        </div>
                    </div>


                    {/* Button visible only on desktop */}
                    <div className="hidden md:block">
                        <Button variant='secondary'>Redeem</Button>  </div>
                </div>

                <div ref={scrollRef} className="flex gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-4 z-[0]">
                    <BadgeCard
                        tier="grey"
                        pointsEarned={300}
                        yieldBoost="2%"
                    />
                    <BadgeCard
                        tier="bronze"
                        pointsNeeded={300}
                        yieldBoost="5%"
                    />
                    <BadgeCard
                        tier="silver"
                        pointsEarned={1000}
                        yieldBoost="15%"
                        featureText="Early Feature Access"
                    />
                    <BadgeCard
                        tier="gold"
                        pointsNeeded={300}
                        yieldBoost="5%"
                        featureText="Early Feature, Special Event Access"
                    />
                </div></div>
        </div>
    )
}
export default RewardSection;
