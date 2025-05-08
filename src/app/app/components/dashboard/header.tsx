import { Button } from "@/app/components/ui/buttons";
import { ArrowRight, Copy } from "lucide-react";
import Image from "next/image";

const DashboardHeader = () => {
  return (
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
  );
}
export default DashboardHeader;