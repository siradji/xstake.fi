'use client'
import { ArrowDownWideNarrow, ChevronDown, Copy, ExternalLink, FolderIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/app/components/ui/buttons';
import { Skeleton } from './skeleton';

type Tx = {
    date: string;
    type: string;
    amount: number;
    amountImg: string;
    value: number;
    destChain: string;
    destChainImg: string;
    status: 'Completed' | 'Failed' | 'Pending';
}

export const RecentTransactionsTable = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState < Tx[] > ([]);

    useEffect(() => {
        setTimeout(() => {
            setData([
                {
                    date: '2024-11-12 • 10:40 PM',
                    type: 'Bridge',
                    amount: 2.4,
                    amountImg: '/assets/images/btc.svg',
                    value: 104.809,
                    destChain: 'Ethereum',
                    destChainImg: '/assets/images/eth-icon.svg',
                    status: 'Failed'
                },
                {
                    date: '2024-11-12 • 10:40 PM',
                    type: 'Bridge',
                    amount: 2.4,
                    amountImg: '/assets/images/btc.svg',
                    value: 104.809,
                    destChain: 'Ethereum',
                    destChainImg: '/assets/images/eth-icon.svg',
                    status: 'Pending'
                },
                {
                    date: '2024-11-12 • 10:40 PM',
                    type: 'Bridge',
                    amount: 2.4,
                    amountImg: '/assets/images/btc.svg',
                    value: 104.809,
                    destChain: 'Ethereum',
                    destChainImg: '/assets/images/eth-icon.svg',
                    status: 'Completed'
                },
                {
                    date: '2024-11-12 • 10:40 PM',
                    type: 'Bridge',
                    amount: 2.4,
                    amountImg: '/assets/images/btc.svg',
                    value: 104.809,
                    destChain: 'Ethereum',
                    destChainImg: '/assets/images/eth-icon.svg',
                    status: 'Completed'
                },
                {
                    date: '2024-11-12 • 10:40 PM',
                    type: 'Bridge',
                    amount: 2.4,
                    amountImg: '/assets/images/btc.svg',
                    value: 104.809,
                    destChain: 'Ethereum',
                    destChainImg: '/assets/images/eth-icon.svg',
                    status: 'Completed'
                },
            ]);
            setLoading(false);
        }, 150);
    }, []);

    const statusStyles = (status: string) => {
        switch (status) {
            case 'Completed':
                return 'bg-functional-success-100 text-functional-success-600 border-functional-success-600';
            case 'Failed':
                return 'bg-functional-error-100 text-functional-error-600 border-functional-error-600';
            default:
                return 'bg-functional-warning-100 text-functional-warning-600 border-warning-600';
        }
    };

    return (

        <div className="overflow-x-auto p-4 pt-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="w-full min-w-[900px]">
                <div className="flex bg-primary-cool-100 text-sm text-neutral-600 rounded-2xl p-6 font-medium">
                    <div className="flex-1 min-w-[139px] lg:min-w-[194px] flex gap-1 items-center">
                        Date and Time <ArrowDownWideNarrow size={13} />
                    </div>
                    <div className="flex-1 min-w-[129px] lg:min-w-[175px]">
                        Transaction Type
                    </div>
                    <div className="flex-1 min-w-[79px] lg:min-w-[180px]">
                        Amount
                    </div>
                    <div className="flex-1 min-w-[111px] lg:min-w-[175px]">
                        Destination
                    </div>
                    <div className="flex-1 min-w-[114px] lg:min-w-[175px]">
                        Status
                    </div>
                    <div className="flex-1 w-[62px] max-w-[72px]">
                        &nbsp;
                    </div>
                </div>
            </div>

            <div className="w-full min-w-[900px]">
                {loading ? (
                    [...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center hover:bg-gray-50 px-4 py-4">
                            {[...Array(6)].map((_, j) => (
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
                    data.map((tx, i) => (
                        <div key={i} className="flex items-center hover:bg-gray-50 px-4 py-4 text-sm text-neutral-black-300">
                            <div className="flex-1 min-w-[139px] lg:min-w-[194px]">
                                {tx.date}
                            </div>

                            <div className="flex-1 min-w-[129px] lg:min-w-[175px]">
                                <span className="rounded-full border border-neutral-dark-blue-300 px-3 py-1 text-xs text-neutral-dark-blue-300 bg-neutral-black-50">
                                    {tx.type}
                                </span>
                            </div>

                            <div className="flex-1 min-w-[79px] lg:min-w-[180px]">
                                <div className="flex flex-col items-start gap-1">
                                    <span className="flex items-center gap-1 text-neutral-700">
                                        <Image
                                            width={32}
                                            height={32}
                                            src={tx.amountImg}
                                            alt="amount"
                                            priority
                                        />
                                        {tx.amount}
                                    </span>
                                    <span>${tx.value.toFixed(3)}</span>
                                </div>
                            </div>

                            <div className="flex-1 min-w-[111px] lg:min-w-[175px] flex items-center gap-2">
                                <Image
                                    src={tx.destChainImg}
                                    alt="chain"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-neutral-700">{tx.destChain}</span>
                            </div>

                            <div className="flex-1 min-w-[114px] lg:min-w-[175px]">
                                <span className={`rounded-full px-3 py-1 text-xs font-medium border ${statusStyles(tx.status)}`}>
                                    {tx.status}
                                </span>
                            </div>

                            <div className="flex-1 w-[62px] max-w-[72px] flex justify-end">
                                <button className="rounded-full text-neutral-dark-blue-600 bg-primary-cool-100 p-3 hover:bg-primary-cool-200 transition">
                                    <ExternalLink size={16} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>


    );
};


const RecentTransactionsSection = () => {
    return (
        <div className="w-full max-w-[1016px] rounded-3xl bg-white shadow-md " >
            <div className="flex justify-between items-center p-4">
                <h2 className="text-h5 leading-h5 font-medium text-neutral-800">
                    Recent transactions
                </h2>
                <Button variant="secondary" size="sm" className='w-0 opacity-0 lg:w-fit lg:opacity-100' onClick={() => window.location.href = '/app/dashboard/transactions'}x>View All Transactions</Button>
            </div>
            <RecentTransactionsTable />
            <div className="lg:hidden px-4 pb-4 flex justify-center w-fit mx-auto">
                <Button variant="secondary" size="sm" className="w-full" onClick={() => window.location.href = '/app/dashboard/transactions'}>View All Transactions</Button>
            </div>
        </div>
    );
}
export default RecentTransactionsSection;

export const Transactions = () => {
    return (
        <div className="w-full max-w-[1016px] rounded-3xl bg-white shadow-md " >
            <div className="flex justify-between items-center p-4">
                <h2 className="text-h5 leading-h5 font-medium text-neutral-800">
                    Transaction History
                </h2>
                <Button variant="secondary" size="sm" className='w-0 opacity-0 lg:w-fit lg:opacity-100' onClick={() => window.location.href = '/app/dashboard/transactions'}x>View All Transactions</Button>
            </div>
            <RecentTransactionsTable />
            <div className="p-6 md:p-8 md:pt-0 pt-0 flex justify-between items-center text-body2 leading-body2  text-neutral-black-300">
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
    );
};