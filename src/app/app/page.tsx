"use client"

import {GetBtcCard} from "@/app/app/components/get-btc-card";
import Image from "next/image";

const AppPage = () => {
    return (
        <div className="min-h-screen bg-[url('/app-staking-bg-image.svg')] bg-no-repeat bg-center bg-cover">
            <div className="mx-auto max-w-max py-[62px]">
                <GetBtcCard>
                    <div className="flex flex-col">
                        <div className="flex flex-row border-b-[1px] border-[#DDDDDD]">
                            <button
                                className="p-lg gap-sm bg-transparent"
                                onClick={() => undefined}>
                                Stake
                            </button>
                            <button
                                className="p-lg gap-sm bg-transparent"
                                onClick={() => undefined}>
                                Swap
                            </button>
                        </div>
                        <div>
                            {/*<div className="bg-[url('/swap-card-bg-image.svg')] bg-no-repeat bg-center">*/}
                                <div className=" p-md rounded-[360px] border-[1px] border-[#dddddd] bg-gradient-to-r from-[rgba(254,254,254,0.3)] to-[rgba(255,255,255,0.6)]">
                                    <Image

                                        objectFit="contain"
                                        // className="w-[240px] h-[84px] object-contain"
                                        src={require('../../assets/images/sawp-card-bg-image-full.svg')}
                                        alt="XBTC Swap"
                                    />
                                </div>
                            {/*</div>*/}
                        </div>
                    </div>
                </GetBtcCard>
            </div>
        </div>
    )
}

export default AppPage;