'use client';
import { Button } from "@/app/components/ui/buttons";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const NetworkUpdatePage = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-primary-neutral-300 min-h-screen">
            <div className="px-4 sm:px-8 py-16 mx-auto lg:max-w-[1016px] space-y-8">
                <div className="flex items-start justify-start"><Button size="sm" variant="secondary" onClick={() => window.location.href = '../dashboard/'}> <ArrowLeft size={16} /> Back</Button></div>
                <h2 className="relative text-h5 leading-h5 font-medium">Network Updates</h2>
                <div className="relative flex items-center overflow-x-auto gap-4 pb-2 no-scrollbar flex-wrap">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-end">  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                        <div
                            key={i}
                            className="snap-start shrink-0 lg:max-w-[328px] flex flex-col rounded-2xl border border-neutral-black-50 bg-white shadow-md"
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
                </div>
                <div className="flex justify-between items-center text-body2 leading-body2  text-neutral-black-300">
                    <div className="">Showing 1 to 9 of 11</div>
                    <div className="flex items-center justify-center">
                        <span className="flex items-center justify-center bg-primary-cool-200 rounded-[8px] p-1 size-6">1</span>
                        <span className="flex items-center justify-center p-1 size-6">2</span>
                        <span className="flex items-center justify-center p-1 size-6">3</span>
                        <span className="flex items-center justify-center p-2 size-6">...</span>
                        <span className="flex items-center justify-center p-1 size-6">8</span>
                        <span className="flex items-center justify-center p-1 size-6">9</span>
                        <span className="flex items-center justify-center p-1 size-6">10</span>
                    </div>
                    <div className="gap-2 items-center justify-between hidden sm:flex">
                        <p>Show</p>
                        <button className="flex items-center justify-between gap-1 pl-[10px] pr-[6px] py-1 bg-primary-cool-200 rounded-[8px]">6 <ChevronDown size={16} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NetworkUpdatePage;