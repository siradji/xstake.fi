import { Button } from "@/app/components/ui/buttons";
import Image from "next/image";
import stackedSm from "@/assets/images/stacked-sm.svg";

export const CtaSection: React.FC = () => {
    return (
        <div className="relative z-50 w-full bg-[url('/assets/images/cta-vector-2.svg')] bg-no-repeat bg-cover">
            <div className="lg:px-xl px-md -mb-2xl relative z-50">
                <div className="bg-neutral-dark-blue-500 shadow-[0px_4px_10.7px_0px_#0000001A] rounded-xl lg:p-4xl px-md pt-xl lg:bg-[url('@/assets/images/xstake-stacked.svg')] bg-no-repeat bg-right top-3.5 flex item-center justify-center lg:block! flex-col text-center lg:text-left">
                    
                    <h1 className="lg:text-6xl text-4xl mt-xl text-primary-neutral-50 leading-[120%]">
                        Ready to Unlock the Full<br /> Potential of Your Bitcoin?
                    </h1>

                    <p className="text-sm text-primary-neutral-600 my-6">
                        Start earning yield today while leveraging your Bitcoin in DeFi with our liquid staking
                    </p>

                    <div className="lg:flex md:flex gap-6 items-center justify-center lg:justify-start">
                        <Button
                            onClick={() => (window.location.href = "/app")}
                            size="md"
                            variant="tertiary"
                            className="w-full md:w-fit lg:w-fit lg:mb-0 md:mb-0 mb-6"
                        >
                            Launch App
                        </Button>

                        <Button
                            onClick={() => (window.location.href = "/app")}
                            size="md"
                            variant="primary"
                            className="w-full md:w-fit lg:w-fit"
                        >
                            Learn More
                        </Button>
                    </div>

                    <div className="relative mt-6 lg:hidden w-full h-64">
                        <Image
                            src={stackedSm}
                            alt="XStake.FI"
                            fill
                            className=""
                        /> 
                    </div>
                </div>
            </div>
        </div>
    );
};
