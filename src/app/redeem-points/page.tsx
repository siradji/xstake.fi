// app/redeem-demo/page.tsx (or any route)
"use client";

import { useState } from "react";
import { RedeemModal } from "@/app/components/ui/modal"; // Make sure this path is correct
import Image from "next/image"

import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/components/ui/dialog";
import { Button } from "../components/ui/buttons";

export default function RedeemDemoPage() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState("");


  const [edit, setEdit] = useState(false);


  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Button onClick={() => setOpen(true)} className="px-4 py-2 rounded bg-blue-600 text-white">
        Open Redeem Modal
      </Button>
      <Button onClick={() => setSuccess(true)} className="px-4 py-2 rounded bg-blue-600 text-white">
        Open Success Modal
      </Button>

      <RedeemModal open={open} onOpenChange={setOpen}>
        
        <DialogHeader className="flex flex-col items-center justify-center">
          <DialogTitle className="md:text-3xl!  text-2xl! text-neutral-black-600! font-medium!">You are about to redeem your points</DialogTitle>
          <DialogDescription className="text-neutral-black-300!">
            Are you sure you want to proceed?
          </DialogDescription>
        </DialogHeader>
        
        <div className={`w-fit p-px bg-gradient-to-b from-[#EEF1F4] to-[#8D88AA] bg-clip-border rounded-3xl`}>
            <div className="rounded-3xl w-full p-6 md:px-6 px-3 flex flex-col text-center  justify-center items-center bg-white">
            {edit ? (
              <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="flex items-center">
                <input
                type="text"
                value="400"
                onChange={(e) => setValue(e.target.value)}
                className="md:w-[213px] w-[171px] h-[85px] text-3xl font-medium mr-4 text-neutral-black-600 bg-transparent outline-none border border-[#6147EC] rounded-2xl p-6"
                
              />
              <h3 className="font-medium text-3xl text-neutral-black-600 flex mr-4">points</h3>
                </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button size="sm" onClick={() => setOpen(true)} className="w-[75px] h-[40px] text-sm">
                  Update
                </Button>
                <Button size="sm" onClick={() => setEdit(false)} className="w-[75px] h-[40px] text-sm bg-transparent! text-neutral-dark-blue-600! border! border-neutral-dark-blue-600!">
                  Cancel
                </Button>
              </div>
              </div>
            ) : (
              <h3 className="font-medium text-3xl text-neutral-black-600 flex">400 points<Image src={require("@/assets/images/edit.svg")} onClick={() => setEdit(true)} alt="Cube" width={20} height={20} className="ml-2" /></h3>
            )}
            
            <p className="text-neutral-black-300">points to redeem</p>
            </div>
        </div>
        <Button onClick={() => setOpen(true)} className={`${edit ? "bg-[#999999]!" : ""} w-full`}>
            Redeem Now
        </Button>
      </RedeemModal>
      <RedeemModal open={success} onOpenChange={setSuccess}>
        
        <DialogHeader className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-full bg-no-repeat bg-center mb-4">
            <div className="w-fit bg-[url(@/assets/images/icon-gradient-bg.svg)]">
            
              <Image src={require("@/assets/images/success-award.svg")} alt="Award" width={80} height={80} className="" />
            </div>
          </div>
          <DialogTitle className="md:text-3xl!  text-2xl! text-neutral-black-600! font-medium!">Success! You’ve redeemed Grey Badge</DialogTitle>
          <DialogDescription className="text-neutral-black-300!">
          Your points balance has been updated 
          </DialogDescription>
        </DialogHeader>
        
        
        <Button onClick={() => null} className={`w-full`}>
            Go to Dashboard
        </Button>
        <Button onClick={() => null} className={`w-full bg-transparent! text-neutral-dark-blue-600! border! border-neutral-dark-blue-600!`}>
          View staking activity
        </Button>
      </RedeemModal>
    </div>
  );
}
