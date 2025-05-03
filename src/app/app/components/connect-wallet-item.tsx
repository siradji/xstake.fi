"use client"
import React from "react";
import Image from "next/image";

export interface ConnectWalletItemProps {
    name: string
    icon: string
}

export const ConnectWalletItem: React.FC<ConnectWalletItemProps> = (props) => {
    return (
        <div className={"border-[1px] mb-md border-[#DDDDDD] rounded-lg p-xl "}>
            <div className="flex flex-row items-center gap-2">
                <Image src={require(`@/assets/images/wallets/metamask.svg`)} alt={props.name} width={42} height={42} />
                <span className="text-subtitle font-[500px] text-[##2D3239]">{props.name}</span>
            </div>
        </div>
    )
}