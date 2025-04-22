import { Button } from "@/app/components/ui/buttons";
import Image from "next/image";

export const Integration: React.FC = () => {
    return (
        <div>
           
            <div className="md:px-xl pb-6xl bg-[url(@/assets/images/intergration-gradient.svg)] bg-no-repeat bg-right">
                <h1 className="sm:text-7xl text-5xl leading-[120%]">Integrated with the Best of DeFi</h1>
                <div className="flex my-2xl flex-row gap-8">
                <div className="rounded-xl shadow-md bg-white border border-primary-neutral-600 p-8 flex flex-col">
                    <div className="w-[56px] h-[56px] rounded-full bg-no-repeat flex justify-center items-center bg-right border border-primary-neutral-600">
                        <Image
                            width={24}
                            height={24}
                            src={require('@/assets/images/uniswap.svg')}
                            alt="Discord"
                            priority
                        />
                    </div>
                    <h4 className="text-neutral-black-600 text-3xl mt-6 mb-4">Uniswap</h4>
                    <p className="text-neutral-black-300 text-sm">Swap tokens seamlessly, provide liquidity, and earn fees on the leading decentralized trading platform.</p>
                </div>
                <div className="rounded-xl shadow-md bg-white border border-primary-neutral-600 p-8 flex flex-col">
                    <div className="w-[56px] h-[56px] rounded-full bg-no-repeat flex justify-center items-center bg-right border border-primary-neutral-600">
                        <Image
                            width={24}
                            height={24}
                            src={require('@/assets/images/morpho.svg')}
                            alt="Discord"
                            priority
                        />
                    </div>
                    <h4 className="text-neutral-black-600 text-3xl mt-6 mb-4">Morpho</h4>
                    <p className="text-neutral-black-300 text-sm">Enhance lending efficiency by connecting borrowers and lenders for better rates on decentralized finance platforms.</p>
                </div>
                <div className="rounded-xl shadow-md bg-white border border-primary-neutral-600 p-8 flex flex-col">
                    <div className="w-[56px] h-[56px] rounded-full bg-no-repeat flex justify-center items-center bg-right border border-primary-neutral-600">
                        <Image
                            width={24}
                            height={24}
                            src={require('@/assets/images/eingenlayer.svg')}
                            alt="Discord"
                            priority
                        />
                    </div>
                    <h4 className="text-neutral-black-600 text-3xl mt-6 mb-4">Eigenlayer</h4>
                    <p className="text-neutral-black-300 text-sm">Maximize Ethereum security by restaking your assets to support multiple networks and earn additional rewards.</p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
            <Button
                onClick={() => window.location.href = '/app'}
                size="md"
                variant="primary"
            >
                Get Started Now
            </Button>
            </div>
        </div>
        </div>
    )
}