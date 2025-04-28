import { Button } from "@/app/components/ui/buttons";
import Image from "next/image";
import stackedSm from "@/assets/images/stacked-sm.svg";
import stackedIpad from "@/assets/images/stacked-ipad.svg";

export const CtaSection: React.FC = () => {
    return (
        <div className="bg-transparent rounded-b-4xl relative z-50 w-full bg-[url('/assets/images/cta-vector-2.svg')] bg-no-repeat bg-cover">
            <div style={{ top: "-15%", left: "-55%" }} className="absolute lg:hidden block -bottom-32 z-100  pointer-events-none">
                    <Image
                      src={require("@/assets/images/cta-gradient.svg")}
                      alt="decorative chain"
                      width={756}
                      height={610}
                    />
                  </div>
                  <div style={{ top: "-20%", left: "-10%" }} className="absolute hidden lg:block  z-100  pointer-events-none">
                    <Image
                      src={require("@/assets/images/cta-vector-1.svg")}
                      alt="decorative chain"
                      width={756}
                      height={610}
                    />
                  </div>
                  <div style={{ top: "20%", left: "" }} className="absolute hidden lg:block  z-100  pointer-events-none">
                    <Image
                      src={require("@/assets/images/cta-vector-2.svg")}
                      alt="decorative chain"
                      width={756}
                      height={610}
                    />
                  </div>
            <div className="lg:px-28 md:px-16 px-md -mb-2xl relative z-50">
                <div className="bg-neutral-dark-blue-500 shadow-[0px_4px_10.7px_0px_#0000001A] rounded-4xl lg:p-4xl px-md pt-xl lg:bg-[url('@/assets/images/xstake-stacked.svg')] bg-no-repeat bg-right top-3.5 flex item-center justify-center lg:block! flex-col text-center lg:text-left">
                    
                    <div className="relative z-110">
                    <h1 className="lg:text-6xl text-4xl mt-xl text-primary-neutral-50 leading-[120%]">
                        Ready to Unlock the Full<br /> Potential of Your Bitcoin?
                    </h1>

                    <p className="text-sm text-primary-neutral-600 my-6">
                        Start earning yield today while leveraging your Bitcoin in DeFi with our liquid staking
                    </p>
                    </div>

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

                    <div className="relative mt-6 lg:hidden md:hidden w-full h-64">
                        <Image
                            src={stackedSm}
                            alt="XStake.FI"
                            fill
                            className=""
                        /> 
                    </div>
                    <div className="relative mt-6 md:block lg:hidden hidden w-full h-64">
                        <Image
                            src={stackedIpad}
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
