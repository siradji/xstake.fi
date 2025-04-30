'use client';
import ethIconSvg from '@/assets/images/eth.svg';
import { Button } from "@/app/components/ui/buttons";
import { ArrowRight, ArrowLeft, Copy, Loader2, ArrowDownWideNarrow, ExternalLink, TrendingDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import xbtc from "@/assets/images/XBTC-icon.svg";
import avatar from '@/assets/images/avatar.svg';
import { useEffect, useRef, useState } from 'react';

const DashboardPage = () => {
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
    <main className="px-4 md:px-xl flex overflow-hidden flex-col gap-8 justify-center items-center bg-primary-neutral-300 min-h-screen relative py-[40px] z-5">
      <div className="absolute top-0 left-0 w-1/2 size-full bg-[url('@/assets/images/app-staking-bg-image.svg')] bg-no-repeat bg-contain z-[-1] bg-left-top"></div>

      <div className="w-full flex flex-col gap-8 lg:max-w-[1016px]">
        {/* Dashboard Header */}
        <div className="w-full flex flex-col md:flex-row items-center mx-auto justify-between gap-4">
          <div className="flex flex-col gap-y-2 md:gap-x-8 w-full sm:min-w-[257px] lg:max-w-[393px]">
            <h1 className="text-neutral-600 text-h4 leading-h4 font-medium">Dashboard</h1>
            <p className="text-neutral-400 text-body1 leading-body1">
              Track your xBTC holdings, earnings and account activity in real-time.
            </p>
          </div>
          <div className="flex w-full lg:max-w-[488px] justify-between items-center p-4 gap-4 bg-[linear-gradient(90deg,#E1DCEE_0%,#FFFFFF_100%)] rounded-lg">
            <div className="flex flex-col gap-1 items-start md:max-w-[400px]">
              <p className="text-body1 leading-body1 font-medium text-neutral-black-600">
                Get additional Lux by inviting your network!
              </p>
              <p className="text-body2 leading-body2 flex items-center justify-center gap-2 text-neutral-dark-blue-600">
                See your referrals <ArrowRight size={16} />
              </p>
            </div>
            <Button
              onClick={() => window.location.href = '/'}
              size="sm"
              variant="primary"
              className="flex gap-2 text-nowrap"
            >
              Copy link <Copy size={16} />
            </Button>
          </div>
        </div>

        {/* Balance and Yield Section */}
        <div className="overflow-hidden w-full flex flex-col gap-6 p-4 rounded-3xl relative bg-[linear-gradient(90deg,#FFFFFF_0%,#E1DCEE_100%)] border-primary-neutral-600 shadow-md z-[2]">
          <div className="absolute -top-[200px] left-[0px] size-80 md:bg-[url('@/assets/images/app-staking-bg-image.svg')] bg-no-repeat bg-cover z-[-1] bg-left-top"></div>
          <div className="-top-20 right-[0px] size-full md:bg-[url('@/assets/images/xstake-outline-vector.svg')] absolute bg-no-repeat bg-contain bg-right-top z-[-1]"></div>

          <div className="w-full flex justify-between items-center flex-col sm:flex-row gap-4">
            <div className="flex gap-4">
              <div>
                <Image
                  width={64}
                  height={64}
                  src={avatar}
                  alt="avatar"
                  priority
                />
              </div>
              <Link href="/" className="flex gap-1 items-center">
                <div className="flex gap-4 justify-center items-center">
                  <h5 className="text-h5 leading-h5 text-neutral-black-600 font-medium">0x1c8...254A</h5>
                  <Copy size={20} className="text-neutral-300" />
                </div>
              </Link>
            </div>
            <div className="flex items-center md:justify-center gap-2 justify-between w-full sm:w-auto">
              <div className="flex items-center justify-center gap-1">
                <Image
                  width={32}
                  height={32}
                  src={xbtc}
                  alt="xBTC"
                  priority
                />
                <p className="text-neutral-600">Total Points</p>
                <h5 className="text-h5 leading-h5 text-neutral-black-600 font-medium">1,200</h5>
              </div>
              <Button onClick={() => window.location.href = '/'} isRounded variant="secondary" size="sm">
                Redeem
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {/* Balance Card */}
            <div className="flex flex-col gap-2 rounded-2xl border border-[#dddddd] p-4 shadow-[0px_4px_12px_0px_#1018281F] bg-white">
              <p className="text-neutral-black-300 lg:text-body1 lg:leading-body1 text-body2 leading-body2">
                Balance:
              </p>
              <div className="flex items-center gap-[10px] sm:flex-col sm:items-start">
                <h5 className="text-subtitle leading-subtitle lg:text-h5 lg:leading-h5 font-medium text-neutral-black-600">1.3353 xBTC</h5>
              </div>
            </div>

            {/* Projected Earnings Card */}
            <div className="flex flex-col gap-2 rounded-2xl border border-[#dddddd] p-4 shadow-[0px_4px_12px_0px_#1018281F] bg-white">
              <p className="text-neutral-black-300 lg:text-body1 lg:leading-body1 text-body2 leading-body2">Projected Earnings (1 Year):</p>
              <div className="flex items-center gap-[10px] sm:flex-col sm:items-start">
                <h5 className="text-subtitle leading-subtitle lg:text-h5 lg:leading-h5 font-medium text-neutral-black-600">1.3353 xBTC</h5>
                <span className="flex items-center gap-1 rounded-full border border-[#F44336] bg-[#FEECEB] p-2 text-[13px] text-[#F44336]">
                  <TrendingDown size={16} /> <span>+2%</span>
                </span>
              </div>
            </div>

            {/* Current Yield Card */}
            <div className="flex flex-col gap-2 rounded-2xl border border-[#dddddd] p-4 shadow-[0px_4px_12px_0px_#1018281F] bg-white">
              <p className="text-neutral-black-300 lg:text-body1 lg:leading-body1 text-body2 leading-body2">Current Yield:</p>
              <div className="flex items-center gap-[10px] sm:flex-col sm:items-start">
                <h5 className="text-subtitle leading-subtitle lg:text-h5 lg:leading-h5 font-medium text-neutral-black-600">0.0003 xBTC</h5>
                <span className="flex items-center gap-1 rounded-full border border-[#F44336] bg-[#FEECEB] p-2 text-[13px] text-[#F44336]">
                  <TrendingDown size={16} /> <span>+2%</span>
                </span>
              </div>
            </div>
          </div>

          {/* Rest of the content remains the same... */}

        </div>
      </div>
      <div className="w-full max-w-[1016px] rounded-3xl bg-white shadow-md ">
        <h2 className="text-h5 leading-h5 font-medium text-neutral-black-600 p-4">
          Staking in Progress
        </h2>


        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="min-w-[800px] p-4 pt-0">
            {/* Table Header */}
            <div className="flex bg-primary-cool-100 text-neutral-600 text-sm rounded-2xl p-lg">
              <div className="flex-1 font-medium pl-0">Position</div>
              <div className="flex-1 font-medium">Value</div>
              <div className="flex-1 font-medium">Tx hash</div>
              <div className="flex-1 font-medium">Chain</div>
              <div className="flex-1 font-medium">&nbsp;</div>
            </div>


            {/* Row 1 - Mintable */}
            <div className="flex items-start hover:bg-gray-50 p-4">
              <div className="flex-1 flex items-center gap-1 text-neutral-700">
                <Image src={xbtc} alt="xBTC icon" width={20} height={20} /> 2.4
              </div>
              <div className="flex-1 text-neutral-700">$104.02</div>
              <div className="flex-1 text-purple-600 hover:underline cursor-pointer flex items-center gap-1">
                0xc1c8...254A <Copy size={14} />
              </div>
              <div className="flex-1 flex items-center gap-2">
                <Image src={ethIconSvg} alt="ETH" width={20} height={20} />
                <span className="text-neutral-700">Ethereum</span>
              </div>
              <div className="flex-1 flex justify-end">
                <Button size="sm" variant="primary" onClick={() => console.log('Mint xBTC clicked')}>Mint xBTC</Button>
              </div>
            </div>


            {/* Row 2 - Pending Confirmation */}
            <div className="flex items-start hover:bg-gray-50 p-4">
              <div className="flex-1 flex items-center gap-1 text-neutral-700">
                <Image src={xbtc} alt="xBTC icon" width={20} height={20} /> 2.4
              </div>
              <div className="flex-1 text-neutral-700">$104.02</div>
              <div className="flex-1 text-purple-600 hover:underline cursor-pointer flex items-center gap-1">
                0xc1c8...254A <Copy size={14} />
              </div>
              <div className="flex-1 flex items-center gap-2">
                <Image src={ethIconSvg} alt="ETH" width={20} height={20} />
                <span className="text-neutral-700">Ethereum</span>
              </div>
              <div className="flex-1 flex items-center justify-end gap-1 text-body2 text-neutral-600">
                <Loader2 size={16} className="animate" />
                0/4 confirmations
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-[1016px] w-full rounded-3xl bg-white shadow-md overflow-hidden ">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-h5 leading-h5 font-medium text-neutral-800">
            Recent transactions
          </h2>
          <Button variant="secondary" size="sm" className='w-0 opacity-0 lg:w-fit lg:opacity-100' onClick={() => console.log('View All Transactions clicked')}>View All Transactions</Button>
        </div>


        {/* Custom Table Head */}
        <div className="overflow-x-auto p-4 pt-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="w-full min-w-[900px]">
            <div className="flex bg-primary-cool-100 text-sm text-neutral-600 rounded-2xl p-6 font-medium">
              <div className="flex-1  min-w-[139px] lg:min-w-[194px] flex gap-1 items-center">Date and Time <ArrowDownWideNarrow size={13} /></div>
              <div className="flex-1 min-w-[129px]  lg:min-w-[175px]">Transaction Type</div>
              <div className="flex-1 min-w-[79px] lg:min-w-[180px]">Amount</div>
              <div className="flex-1 min-w-[111px] lg:min-w-[175px]">Destination</div>
              <div className="flex-1 min-w-[114px] lg:min-w-[175px]">Status</div>
              <div className="flex-1 w-[62px] max-w-[72px]">&nbsp;</div>
            </div>


            {/* Table Body */}
            {[
              { type: "Bridge", status: "Completed", style: "success" },
              { type: "Stake", status: "Failed", style: "error" },
              { type: "Unstake", status: "Failed", style: "warning" },
              { type: "Bridge", status: "Completed", style: "success" },
              { type: "Bridge", status: "Completed", style: "success" },
            ].map((tx, i) => (
              <div key={i} className="flex items-center hover:bg-gray-50 px-4 py-4 text-sm text-neutral-black-300">
                {/* Date */}
                <div className="flex-1 min-w-[139px] lg:min-w-[194px]">2024-11-12 • 10:40 PM</div>


                {/* Type */}
                <div className="flex-1  min-w-[129px] lg:min-w-[175px]">
                  <span className="rounded-full border border-neutral-dark-blue-300 px-3 py-1 text-xs text-neutral-dark-blue-300 bg-neutral-black-50">
                    {tx.type}
                  </span>
                </div>


                {/* Amount */}
                <div className="flex-1 min-w-[79px] lg:min-w-[180px]">
                  <div className="flex flex-col items-start gap-1">
                    <span className="flex items-center gap-1 text-neutral-700">
                      <Image
                        width={32}
                        height={32}
                        src={require("@/assets/images/btc.svg")}
                        alt="avatar"
                        priority
                      />
                      2.4
                    </span>
                    <span>$104.809</span>
                  </div>
                </div>


                {/* Destination */}
                <div className="flex-1 min-w-[111px] lg:min-w-[175px] flex items-center gap-2">
                  <Image src={ethIconSvg} alt="ETH" width={20} height={20} />
                  <span className="text-neutral-700">Ethereum</span>
                </div>


                {/* Status */}
                <div className="flex-1 min-w-[114px] lg:min-w-[175px]">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium border ${tx.style === "success"
                      ? "bg-functional-success-100 text-functional-success-600 border-functional-success-600"
                      : tx.style === "error"
                        ? "bg-functional-error-100 text-functional-error-600 border-functional-error-600"
                        : "bg-functional-warning-100 text-functional-warning-600 border-warning-600"
                      }`}
                  >
                    {tx.status}
                  </span>
                </div>


                <div className="flex-1 w-[62px] max-w-[72px] flex justify-end">
                  <button className="rounded-full text-neutral-dark-blue-600 bg-primary-cool-100 p-3 hover:bg-primary-cool-200 transition">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden px-4 pb-4 flex justify-center w-fit mx-auto">
          <Button variant="secondary" size="sm" className="w-full" onClick={() => console.log('View All Transactions clicked')}>View All Transactions</Button>
        </div>
      </div>

      <div className="max-w-[1016px] flex flex-col gap-4 w-full rounded-3xl bg-white p-4 md:p-6 shadow-md">


        <h2 className="relative text-h5 leading-h5 font-medium">Rewards points accumulation</h2>


        <div className="overflow-hidden relative bg-purple-50 p-4 md:p-6 space-y-6 rounded-3xl bg-[linear-gradient(90deg,#FFFFFF_0%,#E1DCEE_100%)] border-primary-neutral-600 z-[2]">
          <div className="absolute opacity-60 -top-[200px] left-[0px] size-80 bg-[url('@/assets/images/app-staking-bg-image.svg')] bg-no-repeat bg-cover  z-[-1] bg-left-top"></div>


          <div className="flex flex-col md:flex-row items-start sm:items-center justify-between w-full gap-4">
            {/* Left div */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 w-full md:w-auto">
              {/* Badge + Points (side-by-side on mobile) */}
              <div className='flex justify-between'><div className="flex justify-center items-center gap-2">
                <Image
                  src={require('@/assets/images/xBTC-badge.png')}
                  alt="points"
                  width={40}
                  height={40}
                  className="rounded-full size-[24px] md:size-[40px]"
                />
                <p className="text-body1 leading-body1 md:text-subtitle md:leading-subtitle text-neutral-300">Total Points</p>
                <h4 className="text-h4 leading-h4 font-bold">450</h4>
              </div>
                {/* Button visible on tablet & mobile only */}
                <div className="block md:hidden pt-2">
                  <Button variant="secondary" size='sm' onClick={() => console.log('Redeem clicked')}>Redeem</Button>
                </div></div>


              {/* Badge Boost Pill */}
              <div className="text-sm rounded-full border w-fit border-neutral-dark-blue-300 px-3 py-2 text-neutral-dark-blue-300 bg-neutral-black-50">
                Grey Badge - 2% Yield Boost
              </div>


              {/* Extra Points Info (wraps on mobile & tablet) */}
              <div className="text-sm text-gray-500">
                Earn 50 more points for Silver Badge and 5% Yield Boost
              </div>




            </div>


            {/* Button visible only on desktop */}
            <div className="hidden md:block">
              <Button variant='secondary'>Redeem</Button>  </div>
          </div>




          <div className="flex gap-4 h-full w-full">
            <div className="relative flex p-4 pt-6 w-[212px] shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border-[1px] border-[#dddddd] bg-[#fefefe] shadow-[0px_4px_12px_0px_#E2DDEE]">
              <p className="text-neutral-black-300 text-body1 leading-body1">Points earned 300</p>
              <h5 className="text-subtitle leading-subtitle text-neutral-black-600">2% Yield Boost</h5>
              <div className="text-body2 leading-body2  absolute top-[-20px] left-[48px] inline-flex items-center justify-center gap-1 rounded-3xl border-[1px] border-[#64656f] bg-[#e8e8e8] p-2 text-[#64656f]">
                <Image src={require('@/assets/images/xBTC-badge.png')} alt="badge" width={24} height={16} />
                Grey Badge
              </div>
            </div>
            <div className="relative flex p-4 pt-6 w-[212px] shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border-[1px] border-[#ff9800] bg-[#fefefe] shadow-[0px_4px_12px_0px_#E2DDEE]">
              <p className="text-neutral-black-300 text-body1 leading-body1">Points needed 300</p>
              <h5 className="text-subtitle leading-subtitle text-neutral-black-600">5% Yield Boost</h5>
              <div className="text-body2 leading-body2 absolute top-[-20px] left-[50] inline-flex items-center justify-center gap-1 rounded-3xl border-[1px] border-[#FFDFB0] bg-[#FFF5E6] p-2 text-[#ff9800]">
                <Image src={require('@/assets/images/xBTC-badge.png')} alt="badge" width={24} height={16} />
                Bronze Badge
              </div>
            </div>
            <div className="relative flex p-4 pt-6 w-[212px] shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border-[1px] border-[#6147EC] bg-[#fefefe] shadow-[0px_4px_12px_0px_#E2DDEE]">
              <p className="text-neutral-black-300 text-body1 leading-body1">Points earned 1000</p>
              <h5 className="text-subtitle leading-subtitle text-neutral-black-600">15% Yield Boost</h5>
              <p className="text-[#6147EC] text-body1 leading-body1">Early Feature Access</p>
              <div className="text-body2 leading-body2 absolute top-[-20px] left-[50] inline-flex items-center justify-center gap-1 rounded-3xl border-[1px] border-[#6147EC] bg-[#DEDCF9] p-2 text-[#6147EC]">


                <Image src={require('@/assets/images/xBTC-badge.png')} alt="badge" width={24} height={16} />
                Silver Badge
              </div>
            </div>
            <div className="relative flex p-4 pt-6 w-[212px] shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border-[1px] border-[#E88A00] bg-[#fefefe] shadow-[0px_4px_12px_0px_#E2DDEE]">
              <p className="text-neutral-black-300 text-body1 leading-body1">Points needed 300</p>
              <h5 className="text-subtitle leading-subtitle text-neutral-black-600">5% Yield Boost</h5>
              <p className="text-[#E88A00] text-body1 leading-body1 text-center">Early Feature, Special Event Access</p>
              <div className="text-body2 leading-body2 absolute top-[-20px] left-[50] inline-flex items-center justify-center gap-1 rounded-3xl border-[1px] border-[#E88A00] bg-[#FFDFB0] p-2 text-[#E88A00]">
                <Image src={require('@/assets/images/xBTC-badge.png')} alt="badge" width={24} height={24} />
                Gold Badge
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1016px] w-full rounded-3xl relative">
        <h2 className="text-h5 leading-h5 font-medium mb-6">Network Updates</h2>


        {/* Arrows */}
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


        {/* Scrollable Updates */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[90vw] sm:w-[45vw] md:w-[32%] max-w-[306px] flex flex-col rounded-2xl border border-neutral-black-50 bg-white shadow-md"
            >
              <div className="relative w-full h-[226px]">
                <Image
                  src={require('@/assets/images/Img.jpg')}
                  alt="update image"
                  fill
                  className="object-cover rounded-t-xl"
                  priority
                />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <p className="text-gray-500 text-sm">2024-10-28</p>
                <h3 className="font-semibold text-lg">
                  xBTC now integrated with DeFi Protocol XYZ for enhanced yield.
                </h3>
                <a
                  href="#"
                  className="gap-3 inline-flex items-center text-sm text-neutral-dark-blue-600 hover:underline"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-8">
          <Button variant="secondary" size="md" className="flex items-center gap-2">
            See All Updates
          </Button>
        </div>
      </div>
    </main >
  );
};

export default DashboardPage;