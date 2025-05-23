import {AppHeader} from "@/app/app/components/app-header";
import {PropsWithChildren} from "react";
import {AppFooter} from "@/app/app/components/app-footer";

export default function Layout (props: PropsWithChildren<any>): React.ReactNode {
    return (
        <div>
            <AppHeader />
            {props.children}
            <AppFooter />
        </div>
    )
}