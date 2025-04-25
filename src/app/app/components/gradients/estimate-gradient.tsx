import Image from "next/image";

export const EstimateGradient: React.FC = () => {
    return (
        <div className="absolute hidden lg:block inset-0 z-10 -top-[60%] -left-[15%]">
            <Image
                width={756}
                height={610}
                src={require('@/assets/images/estimate-gradient.svg')}
                alt="Matallic Stone"
                priority
            />
        </div>
    )
}

