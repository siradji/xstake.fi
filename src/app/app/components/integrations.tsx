import { Button } from "@/app/components/ui/buttons";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from "next/image";
import gradientMd from "@/assets/images/integrated-grad.svg"

export const Integration: React.FC = () => {
    return (
        <div className="relative">
           <div className="absolute hidden lg:hidden md:block -top-[30%]">
                <Image
                src={gradientMd}
                alt="decorative chain"
                width={500}
                height={500}
                className='w-[70%]'
                />
            </div>
            <div className="lg:px-28 md:px-16 px-md lg:pt-6xl md:pt-5xl pt-4xl pb-6xl lg:bg-[url(@/assets/images/intergration-gradient.svg)] bg-no-repeat lg:bg-right">
                <h1 className="lg:text-7xl relative md:text-6xl text-5xl leading-[120%]">Integrated with the Best of DeFi</h1>
                <div className="my-2xl">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={'auto'}
                        className="md:hidden"
                    >
                        {[
                        {
                            title: "Uniswap",
                            desc: "Swap tokens seamlessly, provide liquidity, and earn fees on the leading decentralized trading platform.",
                            img: require('@/assets/images/uniswap.svg'),
                        },
                        {
                            title: "Morpho",
                            desc: "Enhance lending efficiency by connecting borrowers and lenders for better rates on decentralized finance platforms.",
                            img: require('@/assets/images/morpho.svg'),
                        },
                        {
                            title: "Eigenlayer",
                            desc: "Maximize Ethereum security by restaking your assets to support multiple networks and earn additional rewards.",
                            img: require('@/assets/images/eingenlayer.svg'),
                        },
                        ].map((item, idx) => (
                        <SwiperSlide
                            key={idx}
                            style={{ width: '277px' }}
                            className="rounded-4xl shadow-md bg-white border border-primary-neutral-600 p-8 flex flex-col"
                        >
                            <div className="w-[56px] h-[56px] rounded-full bg-no-repeat flex justify-center items-center bg-right border border-primary-neutral-600">
                            <Image width={24} height={24} src={item.img} alt={item.title} priority />
                            </div>
                            <h4 className="text-neutral-black-600 text-3xl mt-6 mb-4">{item.title}</h4>
                            <p className="text-neutral-black-300 text-sm">{item.desc}</p>
                        </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Optional: Flex grid for larger screens */}
                    <div className="hidden md:flex flex-row gap-8">
                    <div className="flex my-2xl flex-row gap-8">
                        <div className="rounded-4xl w-[277px] md:w-fit shadow-md bg-white border border-primary-neutral-600 p-8 flex flex-col">
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
                        <div className="rounded-4xl w-[277px] md:w-fit shadow-md bg-white border border-primary-neutral-600 p-8 flex flex-col">
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
                        <div className="rounded-4xl w-[277px] md:w-fit shadow-md bg-white border border-primary-neutral-600 p-8 flex flex-col">
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