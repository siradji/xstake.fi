import { Checkbox } from "@/components/ui/checkbox";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {TextInput} from "@/app/components/ui/input";
import {Search} from "lucide-react";
import clsx from "clsx";
import React from "react";
import Wallets from '@/mocks/wallets.json'
import {ConnectWalletItem} from "@/app/app/components/connect-wallet-item";
export const ConnectWalletModal: React.FC<{open: boolean, setOpen: any}> = (props) => {
    return (
        <Dialog  open={props.open} onOpenChange={props.setOpen}>
            <DialogContent className=" border-[1px] border-[#DDDDDD] rounded-lg sm:max-w-[425px] md:min-w-[620px]">
                <DialogHeader className="m-0 pt-lg">
                    <DialogTitle className="text-[#2D3239] font-[500px] text-h4">Connect your wallet</DialogTitle>
                    <DialogDescription className="text-body1  font-[400px] text-[#75797E] mt-2">
                        Select where you want to receive your XBTC
                    </DialogDescription>
                </DialogHeader>
                <div className="bg-[#EFEDFD] mt-lg mb-md py-lg px-xl rounded-md">
                    <div className="flex items-center space-x-2">
                        <Checkbox className="w-4 h-4" id="terms"/>
                        <label
                            htmlFor="terms"
                            className="text-body1 font-[400px] text-[#75797E]"
                        >
                            I certify that I have read and accepted the <span className="text-[#6147EC] font-[500px]">Terms of Service</span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[#2D3239] font-[500px] text-subtitle">Choose Wallet</h3>
                    <div className="mb-2 mt-md">
                        <div className={clsx("relative rounded-xl p-lg text-body1 bg-primary-neutral-300 border-[1px] border-[#DDDDDD]", {

                        })}>
                            <div className="flex flex-row items-center">
                               <Search size={24} className="text-[#A0A3A7] mr-sm"/>
                                <input
                                    type="text"
                                    placeholder="Wallet name"
                                    value=""
                                    // onChange={(e) => setValue(e.target.value)}
                                    // onFocus={() => setFocused(true)}
                                    // onBlur={() => setFocused(false)}
                                    // disabled={state === 'disabled'}
                                    className={` border-none focus:outline-none rounded-md w-full `}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-[300px] overflow-y-auto ">
                        <div>
                            {Wallets.map((wallet, index) => (
                                <ConnectWalletItem key={index} {...wallet} />
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}