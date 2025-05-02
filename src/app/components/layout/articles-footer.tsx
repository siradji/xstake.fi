"use client"

import Link from "next/link";
import Image from "next/image";

export const ArticleFooter = () => {
    return (
        <footer
            className="sticky border-t border-[#e1dcee] top-0 z-50 py-6 bg-transparent lg:px-8 md:px-16 px-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="">
                      <Image src={require("@/assets/images/logo-dark.svg")} alt="XSTAKE" width={120} height={20} />
                      
                    </div>
            <nav className="flex flex-col md:flex-row md:justify-between md:items-center">
                <ul className="md:my-0 my-4 md:mr-4">
                    <li>
                        <Link
                            href="/app/swap"
                            className="text-neutral-black-200 text-sm"
                        >
                            © Xstake 2024. All rights reserved.
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-row items-center gap-4">
                    
                    <li className="text-neutral-black-300 text-sm hidden md:block">
                       |
                    </li>
                    <li>
                        <Link
                            href="/app/dashboard"
                            className="text-neutral-black-300 text-sm"
                        >
                            Terms of Use
                        </Link>
                    </li>
                    <li className="text-neutral-black-300 text-sm">
                       |
                    </li>
                    <li>
                        <Link
                            href="/app/portfolio"
                            className="text-neutral-black-300 text-sm"
                        >
                            Privacy Notice
                        </Link>
                    </li>
                    <li className="text-neutral-black-300 text-sm">
                       |
                    </li>
                    <li>
                        <Link
                            href="/app/portfolio"
                            className="text-neutral-black-300 text-sm"
                        >
                            Docs
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </footer>

    )
}
