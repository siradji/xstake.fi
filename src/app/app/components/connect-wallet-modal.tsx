import {Dialog, DialogContent, DialogHeader} from "@/components/ui/dialog";

export const ConnectWalletModal: React.FC<{open: boolean, setOpen: any}> = (props) => {
    return (
        <Dialog  open={props.open} onOpenChange={props.setOpen}>
            <DialogContent className="w-[620px] w-full">
                <DialogHeader>
                    <h1>Connect your wallet</h1>
                    <p>Select where you want to receive your XBTC</p>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}