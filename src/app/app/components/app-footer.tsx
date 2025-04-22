import Link from "next/link";
import Image from "next/image";

export const AppFooter = () => {
    return (
        <footer
            className="sticky border border-top-[1px] border-[#DDDDDD] top-0 z-50 py-[calc(--spacing(6)+2px)] flex items-center justify-between bg-white md:px-xl  shadow-sm">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        width={120}
                        height={22}
                        src={require('@/assets/images/xstake-logo.png')}
                        alt="XStake.FI"
                        priority
                    />
                </Link>
            </div>
            <nav className="hidden md:flex items-center">
                <ul className="flex flex-row items-center space-x-8 mr-8">
                    <li>
                        <Link
                            href="/app/swap"
                            className="text-gray-600 hover:text-black transition duration-200"
                        >
                            © Xstake 2024. All rights reserved.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/app/dashboard"
                            className="text-gray-600 hover:text-black transition duration-200"
                        >
                            Terms of Use
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/app/portfolio"
                            className="text-gray-600 hover:text-black transition duration-200"
                        >
                            Privacy Notice
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/app/portfolio"
                            className="text-gray-600 hover:text-black transition duration-200"
                        >
                            Docs
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>

    )
}