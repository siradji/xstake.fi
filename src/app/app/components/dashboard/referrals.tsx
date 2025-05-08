'use client'
import { ArrowDownWideNarrow, ArrowLeft,Copy, FolderIcon,} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/app/components/ui/buttons';
import { Skeleton } from './skeleton';

type Rf = {
    date: string;
    walletAdd: string;
    network: string;
    networkImg: string;
    value: number;

}

const ReferralTable = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState < [Rf] > ([]);

    useEffect(() => {
        setTimeout(() => {
            setData([
                {
                    walletAdd: '0xc1c8...254A',
                    network: 'Ethereum',
                    networkImg: '/assets/images/eth-icon.svg',
                    value: 500,
                    date: '2024-11-12',
                },

                {
                    walletAdd: '0xc1c8...254A',
                    network: 'Ethereum',
                    networkImg: '/assets/images/eth-icon.svg',
                    value: 500,
                    date: '2024-11-12',
                },

                {
                    walletAdd: '0xc1c8...254A',
                    network: 'Ethereum',
                    networkImg: '/assets/images/eth-icon.svg',
                    value: 500,
                    date: '2024-11-12',
                },

                {
                    walletAdd: '0xc1c8...254A',
                    network: 'Ethereum',
                    networkImg: '/assets/images/eth-icon.svg',
                    value: 500,
                    date: '2024-11-12',
                },

                {
                    walletAdd: '0xc1c8...254A',
                    network: 'Ethereum',
                    networkImg: '/assets/images/eth-icon.svg',
                    value: 500,
                    date: '2024-11-12',
                },

                {
                    walletAdd: '0xc1c8...254A',
                    network: 'Ethereum',
                    networkImg: '/assets/images/eth-icon.svg',
                    value: 500,
                    date: '2024-11-12',
                },

            ]);
            setLoading(false);
        }, 150);
    }, []);


    return (

        <div className="overflow-x-auto p-4 pt-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="w-full min-w-[800px]">
                <div className="flex bg-primary-cool-100 text-neutral-600 text-sm rounded-2xl p-lg">
                    <div className="flex-1 font-medium pl-0">Wallet</div>
                    <div className="flex-1 font-medium">Network</div>
                    <div className="flex-1 font-medium">Value</div>
                    <div className="flex-1 font-medium flex gap-1 items-baseline">Date <ArrowDownWideNarrow size={14} /></div>
                </div>
            </div>

            <div className="w-full min-w-[800px]">
                {loading ? (
                    [...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center hover:bg-gray-50 px-4 py-4">
                            {[...Array(5)].map((_, j) => (
                                <div key={j} className="flex-1">
                                    <Skeleton className="h-4 w-3/4 animate-pulse" />
                                </div>
                            ))}
                        </div>
                    ))
                ) : data.length === 0 ? (
                    <div>
                        <div colSpan={6} className="h-48 text-center">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <FolderIcon className="w-10 h-10 text-neutral-400" />
                                <p className="text-body1 text-neutral-600">
                                    No transactions found
                                </p>
                                <Button onClick={() => console.log('New transaction')}>
                                    Create Transaction
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    data.map((rf, i) => (
                        <div key={i} className="flex items-center hover:bg-gray-50 px-4 py-4 text-sm text-neutral-black-300">
                            <div className="flex-1 text-purple-600 hover:underline cursor-pointer flex items-center gap-1">
                                {rf.walletAdd} <Copy size={14} />
                            </div>

                            <div className="flex-1 flex items-center gap-1 text-neutral-700">
                                <Image src={rf.valueImg} alt="network icon" width={20} height={20} /> {rf.value}
                            </div>
                            <div className="flex-1 text-neutral-700">{rf.value}</div>
                            <div className="flex-1 text-neutral-700">{rf.date}</div>

                        </div>
                    ))
                )}
            </div>
        </div>


    );
};



export const ReferralSection = () => {
    return (
        <div className="bg-primary-neutral-300 min-h-screen">
            <div className="px-4 md:px-8 py-16 mx-auto lg:max-w-[1016px] space-y-8">
            <div className="flex items-start justify-start"><Button size="sm" variant="secondary" onClick={() => window.location.href = '../dashboard/'}> <ArrowLeft size={16} /> Back</Button></div>
                <div className="flex p-8 flex-col gap-8 rounded-3xl bg-white shadow-md">
                    <h2 className="relative text-h5 leading-h5 font-medium">Referrals</h2>
                    <div className="p-4 md:p-6 flex w-full justify-between items-center flex-col md:flex-row gap-4 bg-[linear-gradient(90deg,#E1DCEE_0%,#FFFFFF_100%)] rounded-2xl shadow-md">
                        <div className="md:w-[247px] lg:max-w-[452px] flex flex-col gap-1 flex-1">
                            <p className="text-subtitle leading-subtitle font-medium">Your referral code</p>
                            <p className="text-body2 leading-body2 text-neutral-black-300">Share your code to earn 20% of the Lux from each wallet you refer. The recipient will also gain 10% extra Lux.</p>
                        </div>
                        <div className="rounded-[360px] bg-white pl-4 p-2 text-wrap md:pl-6 md:p-4 flex gap-4 lg:gap-6 items-center w-full shadow-sm justify-between flex-1">
                            <div className="md:w-[162px] w-full lg:w-[175px] text-wrap"><p className="flex-1 text-body2 leading-body2 text-neutral-black-600 text-wrap">https://xstake.com/referral/username123</p></div>
                            <div className="hidden md:flex"><Button
                                size="sm"
                                variant="primary"
                                className="gap-2 text-nowrap"
                            >
                                Copy link <Copy size={16} />
                            </Button></div>
                            <div className="md:hidden">
                                <Button
                                    size="sm"
                                    variant="primary"
                                    className="flex gap-2 text-nowrap "
                                >
                                    <Copy size={16} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[1016px] rounded-3xl bg-white shadow-md ">
                    <h2 className="text-h5 leading-h5 font-medium text-neutral-black-600 p-4">
                        Referrals
                    </h2>


                    <ReferralTable/>
                </div>
            </div>

        </div>
    )
}