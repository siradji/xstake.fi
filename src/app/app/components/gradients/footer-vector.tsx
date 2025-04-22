import Image from "next/image";

export const FooterVector: React.FC = () => {
    return (
        <div className="relative -mb-[150px] z-10">
            <Image
                
                width={200}
                height={200}
                src={require('@/assets/images/metallic-stone.svg')}
                alt="Matallic Stone"
                priority
            />
        </div>
    )
}

