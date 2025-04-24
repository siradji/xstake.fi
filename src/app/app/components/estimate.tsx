import React, { useState } from "react";
import { Button } from "@/app/components/ui/buttons"; // assuming you have this
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { EstimateGradient } from "./gradients/estimate-gradient";

const yieldOptions = ["6%", "7%", "8%", "9%"];

export const StakeCalculator: React.FC = () => {
    const [btc, setBtc] = useState("2");
    const [yieldRate, setYieldRate] = useState("6%");
    const [open, setOpen] = useState(false);
  
    const estimated = (parseFloat(btc) * (1 + parseFloat(yieldRate) / 100)).toFixed(2);
  

  return (
    <div className="lg:px-28 md:px-16 px-md relative ">
        <EstimateGradient />
        <div className="absolute top-[60%] left-[82%] hidden lg:block">
            <Image
                width={211}
                height={211}
                src={require('@/assets/images/Pill.svg')}
                alt="Chart"
                priority
            />
            
        </div>
        <div className="absolute top-[90%] left-[82%] block lg:hidden md:hidden">
            <Image
                width={180}
                height={180}
                src={require('@/assets/images/Hemisphere.svg')}
                alt="Hemisphere"
                priority
            />
            
        </div>
        <h1 className="sm:text-7xl text-5xl leading-[120%] text-center z-20 relative mb-2xl">Estimate Your Bitcoin Staking Yield</h1>
        
        <div className="w-fit mx-auto bg-linear-to-b p-6 from-white to-[#E1DCEE] rounded-2xl shadow-lg overflow-hidden relative z-20">
        {/* Top Inputs */}
        <div className="flex flex-col lg:flex-row md:flex-row gap-4 bg-white lg:py-6 lg:px-8 md:py-6 md:px-8 border border-primary-neutral-600 rounded-2xl">
            {/* BTC Input */}
            <div className="flex-1 px-6 md:px-0 lg:px-0 py-6 md:px-0 lg:px-0">
            <label htmlFor="btc" className="block text-gray-500 text-sm mb-1">
                Bitcoin you’d like to stake
            </label>
            <div className="flex items-center h-12 bg-tarnsparent  rounded-lg px-4">
                <span className="text-yellow-500 text-2xl mr-2">₿</span>
                <input
                id="btc"
                type="number"
                value={btc}
                onChange={e => setBtc(e.target.value)}
                className="w-full bg-transparent outline-none text-lg text-gray-900"
                />
            </div>
            </div>

            {/* Yield Dropdown */}
            <div className="relative flex-1 px-6 md:px-0 lg:px-0 py-6 md:py-0 lg:py-0 border-t border-primary-neutral-600">
            <label className="block text-gray-500 text-sm mb-1">
                Select a yield rate
            </label>
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex items-center justify-between h-12 px-4 bg-tarnsparent  rounded-lg hover:bg-gray-50"
            >
                <span className="text-gray-900">{yieldRate} Annual yield</span>
                <ChevronDown size={18} className="text-gray-500" />
            </button>
            {open && (
                <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                {yieldOptions.map(opt => (
                    <li
                    key={opt}
                    onClick={() => {
                        setYieldRate(opt);
                        setOpen(false);
                    }}
                    className={`px-4 py-3 text-gray-900 text-sm hover:bg-indigo-50 ${
                        opt === yieldRate ? "bg-indigo-50" : ""
                    }`}
                    >
                    {opt} Annual yield
                    </li>
                ))}
                </ul>
            )}
            </div>
        </div>

        {/* Results Card */}
        <div className="bg-white p-6 border border-primary-neutral-600 rounded-2xl my-8">
            <Image
                width={801}
                height={419}
                src={require('@/assets/images/placeholder-chart.svg')}
                alt="Chart"
                priority
            />
            
        </div>

        {/* Footer Button */}
        <div className="">
            <Button
            onClick={() => /* wallet logic */ null}
            className="flex !py-lg w-full items-center justify-center gap-2 bg-gray-900 text-white rounded-full"
            size="lg"
            >
            Connect Wallet <Image
                width={40}
                height={40}
                src={require('@/assets/images/xstake-icon.svg')}
                alt="Xstake"
                priority
                className="ml-4"
            />
            </Button>
        </div>
        </div>
    </div>
  );
};
