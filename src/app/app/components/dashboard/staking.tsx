'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Copy, FolderIcon, Loader2 } from 'lucide-react'
import { Skeleton } from './skeleton'
import { Button } from '@/app/components/ui/buttons'

type St = {
    position: string
    positionImg: string
    value: number
    txhash: string
    chain: string
    chainImg: string
    mintStatus: boolean
}

export const StakingTable = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState < St[] > ([])

    useEffect(() => {
        setTimeout(() => {
            setData([
                {
                    position: '2.4',
                    positionImg: '/assets/images/xbtc.svg',
                    value: 104.02,
                    txhash: '0xc1c8...254A',
                    chain: 'Ethereum',
                    chainImg: '/assets/images/eth-icon.svg',
                    mintStatus: true
                },
                {
                    position: '2.4',
                    positionImg: '/assets/images/xbtc.svg',
                    value: 104.02,
                    txhash: '0xc1c8...254A',
                    chain: 'Ethereum',
                    chainImg: '/assets/images/eth-icon.svg',
                    mintStatus: false
                }
            ])
            setLoading(false)
        }, 150)
    }, [])

    const renderSkeletonRow = () => (
        <div className="flex items-start p-4 gap-4 animate-pulse">
            {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="flex-1 h-5 rounded-md" />
            ))} 
        </div>
    )

    const renderRow = (item: St, index: number) => (
        <div key={index} className="flex items-start hover:bg-gray-50 p-4">
            <div className="flex-1 flex items-center gap-1 text-neutral-700">
                <Image src={item.positionImg} alt="token" width={20} height={20} /> {item.position}
            </div>
            <div className="flex-1 text-neutral-700">${item.value.toFixed(2)}</div>
            <div className="flex-1 text-purple-600 hover:underline cursor-pointer flex items-center gap-1">
                {item.txhash} <Copy size={14} />
            </div>
            <div className="flex-1 flex items-center gap-2">
                <Image src={item.chainImg} alt="chain" width={20} height={20} />
                <span className="text-neutral-700">{item.chain}</span>
            </div>
            <div className="flex-1 flex justify-end">
                {item.mintStatus ? (
                    <Button size="sm" variant="primary" onClick={() => console.log('Mint xBTC clicked')}>
                        Mint xBTC
                    </Button>
                ) : (
                    <div className="flex items-center justify-end gap-1 text-body2 text-neutral-600">
                        <Loader2 size={16} className="animate-none" />
                        0/4 confirmations
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="min-w-[800px] p-4 pt-0">
                <div className="flex bg-primary-cool-100 text-neutral-600 text-sm rounded-2xl p-lg">
                    <div className="flex-1 font-medium pl-0">Position</div>
                    <div className="flex-1 font-medium">Value</div>
                    <div className="flex-1 font-medium">Tx hash</div>
                    <div className="flex-1 font-medium">Chain</div>
                    <div className="flex-1 font-medium">&nbsp;</div>
                </div>

                {loading
                    ? Array.from({ length: 2 }).map((_, i) => (
                        <div key={`skeleton-${i}`} className="flex items-start p-4 gap-4 animate-pulse">
                            {[...Array(5)].map((_, j) => (
                                <Skeleton key={`cell-${i}-${j}`} className="flex-1 h-5 rounded-md" />
                            ))}
                        </div>
                    ))
                    : data.length === 0
                        ? <div className="flex flex-col items-center justify-center py-10 text-center text-neutral-600 gap-4">
                        <FolderIcon className="w-10 h-10 text-neutral-400" />
                        <p className="text-body1">No staking positions available</p>
                        <Button onClick={() => console.log('Stake clicked')}>Stake Now</Button>
                      </div>
                        : data.map((item, i) => renderRow(item, i))
                }
            </div>
        </div>
    )
}


const StakingSection = () => {
    return (
        <div className="w-full max-w-[1016px] rounded-3xl bg-white shadow-md " >
            <h2 className="text-h5 leading-h5 font-medium text-neutral-black-600 p-4">
                Staking in Progress
            </h2>
            <StakingTable />
        </div>
    );
}
export default StakingSection;