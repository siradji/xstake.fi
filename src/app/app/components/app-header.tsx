"use client"
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Menu, X} from "lucide-react";
import {Button} from "@/app/components/ui/buttons";

export const AppHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 py-4 flex items-center justify-between bg-white px-[16px] md:px-[108px]  shadow-sm">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        width={160}
                        height={30}
                        src={require('@/assets/images/xstake-logo.png')}
                        alt="XStake.FI"
                        priority
                    />
                </Link>
            </div>

            <button
                className="md:hidden"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
                {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>

            <nav className="hidden md:flex items-center">
                <ul className="flex flex-row items-center space-x-8 mr-8">
                    <li>
                        <Link
                            href="/app"
                            className="text-gray-600 hover:text-black transition duration-200"
                        >
                            Get XBTC
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/app/dashboard"
                            className="text-gray-600 hover:text-black transition duration-200"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/app/portfolio"
                            className="text-gray-600 hover:text-black transition duration-200"
                        >
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </nav>

            <Button
                onClick={() => window.location.href = '/app'}
                size="md"
                variant="primary"
            >
                Connect Wallet
            </Button>

            {/* Mobile menu dropdown */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden">
                    <nav className="flex flex-col items-center space-y-4">
                        <Link
                            href="/docs"
                            className="text-gray-600 hover:text-black transition duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Docs
                        </Link>
                        <Link
                            href="/blog"
                            className="text-gray-600 hover:text-black transition duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                window.location.href = '/app';
                            }}
                            size="md"
                            variant="primary"
                            className="w-4/5 mt-2"
                        >
                            Launch App
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}