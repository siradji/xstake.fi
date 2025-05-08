'use client';
import { Button } from "@/app/components/ui/buttons";
import Image from "next/image";
import DashboardHeader from '../components/dashboard/header';
import NetworkUpdateSection from '../components/dashboard/network-updates';
import RecentTransactions from '../components/dashboard/recent-transactions';
import StakingSection from '../components/dashboard/staking';
import RewardSection from "../components/dashboard/reward";
import RewardsPoints from "../components/dashboard/reward";

const DashboardPage = () => {
  return (
    <main className="px-4 md:px-xl flex overflow-hidden flex-col gap-8 justify-center items-center bg-primary-neutral-300 min-h-screen relative py-[40px] z-5">
      <div className="absolute top-0 left-0 w-1/2 size-full bg-[url('@/assets/images/app-staking-bg-image.svg')] bg-no-repeat bg-contain z-[-1] bg-left-top"></div>
      <DashboardHeader />
      <StakingSection />
      <RecentTransactions />
      <RewardSection />
      <NetworkUpdateSection />
    </main >
  );
};

export default DashboardPage;``