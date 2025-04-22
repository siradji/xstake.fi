import {PropsWithChildren} from "react";

export const GetBtcCard: React.FC<PropsWithChildren<any>> = (props) => {
    return (
        <div className="bg-white border-[1px] border-[#DDDDDD]  p-lg gap-lg w-[620px] rounded-[1.5rem]">
            {props.children}
        </div>
    )
}

