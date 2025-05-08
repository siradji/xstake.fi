import { Button } from '@/app/components/ui/buttons';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const NetworkUpdateSection = () => {
    const scrollRef = useRef < HTMLDivElement > (null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            setShowLeftArrow(container.scrollLeft > 10);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollAmount = container.offsetWidth * 0.9;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };
    return (
        <div className="max-w-[1016px] w-full rounded-3xl relative">
            <h2 className="text-h5 leading-h5 font-medium mb-6">Network Updates</h2>


            {/* Arrows */}
            {showLeftArrow && (
                <button
                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 size-10 sm:size-12 p-2 rounded-full border border-neutral-dark-blue-600 bg-neutral-black-50 flex items-center justify-center"
                    onClick={() => scroll('left')}
                >
                    <ArrowLeft size={20} />
                </button>
            )}
            <button
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 size-10 sm:size-12 p-2 rounded-full border border-neutral-dark-blue-600 bg-neutral-black-50 flex items-center justify-center"
                onClick={() => scroll('right')}
            >
                <ArrowRight size={20} />
            </button>


            {/* Scrollable Updates */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {[1, 2, 3, 4].map((_, i) => (
                    <div
                        key={i}
                        className="snap-start shrink-0 w-[90vw] sm:w-[45vw] md:w-[32%] max-w-[306px] flex flex-col rounded-2xl border border-neutral-black-50 bg-white shadow-md"
                    >
                        <div className="relative w-full h-[226px]">
                            <Image
                                src={require('@/assets/images/Img.jpg')}
                                alt="update image"
                                fill
                                className="object-cover rounded-t-xl"
                                priority
                            />
                        </div>
                        <div className="flex flex-col gap-2 p-4">
                            <p className="text-gray-500 text-sm">2024-10-28</p>
                            <h3 className="font-semibold text-lg">
                                xBTC now integrated with DeFi Protocol XYZ for enhanced yield.
                            </h3>
                            <Link
                                href="#"
                                className="gap-3 inline-flex items-center text-sm text-neutral-dark-blue-600 hover:underline"
                            >
                                Read More <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


            <div className="text-center mt-8">
                <Button variant="secondary" size="md" className="flex items-center gap-2" onClick={() => window.location.href = '/app/dashboard/network'}>
                    See All Updates
                </Button>
            </div>
        </div>
    )
}
export default NetworkUpdateSection;