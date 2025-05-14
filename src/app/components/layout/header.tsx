"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/buttons";
import { Menu, X } from "lucide-react";
import { useRouter } from 'nextjs-toploader/app';

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        handleScroll(); // Run once on mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-150 py-4 flex items-center justify-between px-[16px] md:px-[108px] transition-all duration-300 ${
                scrolled ? "bg-white shadow-sm" : "bg-transparent shadow-none"
            } ${mobileMenuOpen && !scrolled ? "bg-white!" : ""}`}
        >
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

            {/* Mobile menu button */}
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

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center">
                <ul className="flex flex-row items-center space-x-8 mr-8">
                    <li>
                        <Link
                            href="/docs"
                            className="text-gray-600 hover:text-black transition duration-200"
                        >
                            Docs
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className="text-gray-600 hover:text-black transition duration-200"
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
                <Button
                    onClick={() => router.push('/app')}
                    size="md"
                    variant="primary"
                >
                    Launch App
                </Button>
            </nav>

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
};
