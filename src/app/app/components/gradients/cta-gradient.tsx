import Image from "next/image";

export const CtaGradient: React.FC = () => {
    return (
        <div className="relative -mt-16 z-10">
            <Image
                width={120}
                height={22}
                src={require('@/assets/images/grad-cta.svg')}
                alt="XStake.FI"
                priority
            />
        </div>
    )
}

