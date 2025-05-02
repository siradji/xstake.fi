import {AppHeader} from "@/app/app/components/app-header";
import {PropsWithChildren} from "react";
import { AppFooter } from "../app/components/app-footer";
import { ArticleFooter } from "../components/layout/articles-footer";

export default function Layout (props: PropsWithChildren<any>): React.ReactNode {
    return (
        <div>
            <AppHeader />
            {props.children}
            <ArticleFooter />
        </div>
    )
}