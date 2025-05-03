import {PropsWithChildren} from "react";
import { ArticleFooter } from "../components/layout/articles-footer";
import {Header} from "@/app/components/layout/header";

export default function Layout (props: PropsWithChildren<any>): React.ReactNode {
    return (
        <>
            <Header />
            {props.children}
            <ArticleFooter />
        </>
    )
}