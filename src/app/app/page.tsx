"use client"

import {GetBtcCard} from "@/app/app/components/get-btc-card";
import Image from "next/image";
import {Button} from "@/app/components/ui/buttons";
import FAQAccordion from "@/app/app/components/accordion";

const AppPage = () => {
    return (
        <div className="relative">
            {/* Background images with proper z-index */}
            <div
                className="absolute -top-[450px] left-0 w-1/2 h-full bg-[url('/app-staking-bg-image.svg')] bg-no-repeat bg-contain bg-left z-[-1]"></div>

            <div
                className="absolute top-0 -right-[100px] w-1/2 h-full bg-[url('/app-staking-bg-image-left.svg')] bg-no-repeat bg-contain bg-right z-[-1]"></div>

            {/* Main content with higher z-index */}
            <div className="mx-auto relative z-10 max-w-max py-[62px]">
                <GetBtcCard>
                    <div className="flex flex-col">
                        <div className="flex flex-row border-b-[1px] border-[#DDDDDD]">
                            <button
                                className="p-lg text-subtitle gap-sm bg-transparent border-b-2 border-purple-500 pb-4 px-6"
                                onClick={() => undefined}>
                                Stake
                            </button>
                            <button
                                className="p-lg gap-sm text-subtitle bg-transparent pb-4 px-6"
                                onClick={() => undefined}>
                                Swap
                            </button>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <div
                                className="bg-cover max-w-[300px] max-h-[150] bg-[url('/swap-card-bg-image.svg')] bg-no-repeat bg-center">
                                <div
                                    className=" p-md bg-gradient-to-r from-[rgba(254,254,254,0.3)] to-[rgba(255,255,255,0.6)]">
                                    <Image
                                        width={280}
                                        height={120}
                                        objectFit="cover"
                                        className="w-[280px] h-[120px] object-cover"
                                        src={require('../../assets/images/sawp-card-bg-image-full.svg')}
                                        alt="XBTC Swap"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-center leading-[120%] font-[500] text-h4">
                                Stake BTC. Get XBTC.
                            </div>
                            <p className="text-neutral-black-300 text-center mt-sm text-body1 font-[400]">
                                The first step on your staking journey is to decide where you want to receive your
                                LBTC. Connect the account where you will mint LBTC.
                            </p>
                            <Button onClick={() => undefined} className="mt-md">
                                Connect Wallet
                            </Button>
                        </div>
                    </div>
                </GetBtcCard>
                <FAQAccordion/>
            </div>
        </div>
    )
}

export default AppPage;