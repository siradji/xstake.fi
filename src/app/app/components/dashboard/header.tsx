import { Button } from "@/app/components/ui/buttons";
import { ArrowRight, Copy } from "lucide-react";
import { EarningsMetricCard } from "./cards/earning-metrics";
import Link from "next/link";

const DashboardHeader = () => {
  return (
    <div className="w-full flex flex-col gap-8 lg:max-w-[1016px]">
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
            <Link href="/app/dashboard/referrals" className="hover:text-black transition duration-200 text-body2 leading-body2 flex items-center justify-center gap-2 text-neutral-dark-blue-600">
              See your referrals <ArrowRight size={16} />
            </Link>
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {/* Balance Card */}
        <EarningsMetricCard
          title="Balance:"
          value="1.3353 xBTC"
          percentage={1}
        />

        {/* Projected Earnings Card */}
        <EarningsMetricCard
          title="Projected Earnings (1 Year):"
          value="5.2% APY"
          percentage={+0}
        />

        {/* Current Yield Card */}
        <EarningsMetricCard
          title="Current Yield:"
          value="1.3533 xBTC"
          percentage={-2}
        />
      </div>
    </div>
  );
}
export default DashboardHeader;